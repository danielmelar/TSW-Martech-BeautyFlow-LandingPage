import 'dotenv/config';
import QRCode from 'qrcode';
import { Buffer } from 'node:buffer';
import { randomUUID } from 'node:crypto';
import type { NextHandleFunction } from 'connect';
import type { IncomingMessage, ServerResponse } from 'node:http';

function field(id: string, value: string) {
  const length = Buffer.byteLength(value, 'utf8');
  if (length > 99) throw new Error(`Campo Pix ${id} excede o limite.`);
  return `${id}${String(length).padStart(2, '0')}${value}`;
}

function crc16(payload: string) {
  let crc = 0xffff;
  for (const byte of Buffer.from(payload, 'utf8')) {
    crc ^= byte << 8;
    for (let bit = 0; bit < 8; bit += 1) {
      crc = crc & 0x8000 ? ((crc << 1) ^ 0x1021) & 0xffff : (crc << 1) & 0xffff;
    }
  }
  return crc.toString(16).toUpperCase().padStart(4, '0');
}

export function buildPixPayload(key: string, name: string, city: string, amount: string, txid = '***') {
  if (Buffer.byteLength(name, 'utf8') > 25) throw new Error('PIX_MERCHANT_NAME deve ter até 25 bytes.');
  if (Buffer.byteLength(city, 'utf8') > 15) throw new Error('PIX_MERCHANT_CITY deve ter até 15 bytes.');
  if (!/^[A-Za-z0-9*]{1,25}$/.test(txid)) throw new Error('PIX_TXID deve conter até 25 letras ou números.');

  const merchantAccount = field('00', 'br.gov.bcb.pix') + field('01', key);
  const additionalData = field('05', txid);
  const payload = [
    field('00', '01'),
    field('01', '11'),
    field('26', merchantAccount),
    field('52', '0000'),
    field('53', '986'),
    field('54', amount),
    field('58', 'BR'),
    field('59', name),
    field('60', city),
    field('62', additionalData),
    '6304',
  ].join('');

  return `${payload}${crc16(payload)}`;
}

function requiredSetting(name: string) {
  const value = process.env[name]?.trim();
  if (!value) throw new Error(`Configuração ausente: ${name}`);
  return value;
}

function sendJson(response: ServerResponse, status: number, payload: Record<string, unknown>) {
  response.statusCode = status;
  response.setHeader('Content-Type', 'application/json; charset=utf-8');
  response.end(JSON.stringify(payload));
}

async function readJsonBody(request: IncomingMessage) {
  const chunks: Buffer[] = [];
  let size = 0;
  for await (const chunk of request) {
    const buffer = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk);
    size += buffer.length;
    if (size > 16 * 1024) throw new Error('PAYLOAD_TOO_LARGE');
    chunks.push(buffer);
  }
  return JSON.parse(Buffer.concat(chunks).toString('utf8')) as unknown;
}

async function createInterest(body: unknown) {
  const input = typeof body === 'object' && body !== null ? body as Record<string, unknown> : {};
  const name = String(input.name ?? '').trim().slice(0, 120);
  const phone = String(input.phone ?? '').trim().slice(0, 30);
  const phoneDigits = phone.replace(/\D/g, '');
  const profession = String(input.profession ?? '').trim().slice(0, 80);

  if (!name || phoneDigits.length < 10 || !profession) {
    throw new Error('DADOS_INVÁLIDOS');
  }

  const pixKey = requiredSetting('PIX_KEY');
  const merchantName = requiredSetting('PIX_MERCHANT_NAME');
  const merchantCity = requiredSetting('PIX_MERCHANT_CITY');
  const rawAmount = Number(process.env.PIX_AMOUNT ?? '47.90');
  if (!Number.isFinite(rawAmount) || rawAmount <= 0) {
    throw new Error('PIX_AMOUNT precisa ser um valor maior que zero.');
  }
  const amount = rawAmount.toFixed(2);
  const txid = randomUUID().replace(/-/g, '').slice(0, 25).toUpperCase();

  const pixCopyPaste = buildPixPayload(pixKey, merchantName, merchantCity, amount, txid);
  const qrCodeDataUrl = await QRCode.toDataURL(pixCopyPaste, {
    errorCorrectionLevel: 'M',
    margin: 2,
    width: 280,
  });

  return {
    amount,
    merchantName,
    pixCopyPaste,
    qrCodeDataUrl,
    txid,
    paymentStatus: 'awaiting_manual_confirmation' as const,
  };
}

export const interestHandler: NextHandleFunction = (request, response) => {
  if (request.method !== 'POST') {
    sendJson(response, 405, { error: 'Método não permitido.' });
    return;
  }

  void (async () => {
    try {
      const body = await readJsonBody(request);
      const result = await createInterest(body);
      sendJson(response, 201, result);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Erro ao processar o interesse.';
      if (message === 'PAYLOAD_TOO_LARGE') {
        sendJson(response, 413, { error: 'O formulário enviado é muito grande.' });
      } else if (message === 'DADOS_INVÁLIDOS') {
        sendJson(response, 400, { error: 'Preencha nome, WhatsApp válido e área de atuação.' });
      } else if (message.startsWith('Configuração ausente:') || message.startsWith('PIX_')) {
        console.error(message);
        sendJson(response, 503, { error: 'A lista de espera ainda está sendo configurada. Tente novamente mais tarde.' });
      } else if (error instanceof SyntaxError) {
        sendJson(response, 400, { error: 'Dados inválidos.' });
      } else {
        console.error('Erro ao processar contato da lista de espera:', message);
        sendJson(response, 500, { error: 'Não foi possível processar seu interesse. Tente novamente mais tarde.' });
      }
    }
  })();
};
