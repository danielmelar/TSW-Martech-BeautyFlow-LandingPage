import QRCode from 'qrcode';

export interface PixSettings {
  key: string;
  merchantName: string;
  city: string;
  amount: string;
}

export interface PixPayment {
  amount: string;
  merchantName: string;
  pixCopyPaste: string;
  qrCodeDataUrl: string;
  txid: string;
}

function field(id: string, value: string) {
  const length = new TextEncoder().encode(value).length;
  if (length > 99) throw new Error(`Campo Pix ${id} excede o limite.`);
  return `${id}${String(length).padStart(2, '0')}${value}`;
}

function crc16(payload: string) {
  let crc = 0xffff;
  for (const byte of new TextEncoder().encode(payload)) {
    crc ^= byte << 8;
    for (let bit = 0; bit < 8; bit += 1) {
      crc = crc & 0x8000 ? ((crc << 1) ^ 0x1021) & 0xffff : (crc << 1) & 0xffff;
    }
  }
  return crc.toString(16).toUpperCase().padStart(4, '0');
}

function buildPixPayload(key: string, name: string, city: string, amount: string, txid: string) {
  if (new TextEncoder().encode(name).length > 25) throw new Error('O nome do recebedor deve ter até 25 bytes.');
  if (new TextEncoder().encode(city).length > 15) throw new Error('A cidade do recebedor deve ter até 15 bytes.');

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

export async function createPixPayment(settings: PixSettings): Promise<PixPayment> {
  const key = settings.key.trim();
  const merchantName = settings.merchantName.trim();
  const city = settings.city.trim();
  const rawAmount = Number(settings.amount || '47.90');

  if (!key || !merchantName || !city) {
    throw new Error('Os dados Pix do recebedor ainda não estão configurados para este build.');
  }
  if (!Number.isFinite(rawAmount) || rawAmount <= 0) {
    throw new Error('O valor do Pix precisa ser maior que zero.');
  }

  const amount = rawAmount.toFixed(2);
  const randomBytes = crypto.getRandomValues(new Uint8Array(13));
  const txid = Array.from(randomBytes, (byte) => byte.toString(16).padStart(2, '0')).join('').slice(0, 25).toUpperCase();
  const pixCopyPaste = buildPixPayload(key, merchantName, city, amount, txid);
  const qrCodeDataUrl = await QRCode.toDataURL(pixCopyPaste, {
    errorCorrectionLevel: 'M',
    margin: 2,
    width: 280,
  });

  return { amount, merchantName, pixCopyPaste, qrCodeDataUrl, txid };
}
