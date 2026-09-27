import React, { useState } from 'react';
import { 
  Lock, 
  ShieldCheck, 
  Copy, 
  Check, 
  Sparkles, 
  Calendar, 
  CheckCircle2, 
  QrCode 
} from 'lucide-react';
import type { CheckoutFormState, CheckoutStep } from '../types';

export const CheckoutSection: React.FC = () => {
  const [step, setStep] = useState<CheckoutStep>('form');
  const [formData, setFormData] = useState<CheckoutFormState>({
    fullName: '',
    whatsapp: '',
    cpf: '',
    instagram: '',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof CheckoutFormState, string>>>({});
  const [copied, setCopied] = useState<boolean>(false);
  const [isVerifying, setIsVerifying] = useState<boolean>(false);

  // Simulated EMV Pix code
  const pixCode = `00020126580014br.gov.bcb.pix0136beautyflow-checkout-${Date.now()}520400005303986540547.905802BR5920BEAUTYFLOW TECNOLOGIA6009SAO PAULO62070503***6304E8A2`;

  // Mask helpers
  const handleWhatsappChange = (val: string) => {
    const digits = val.replace(/\D/g, '').slice(0, 11);
    let formatted = digits;
    if (digits.length > 2) {
      formatted = `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    }
    if (digits.length > 7) {
      formatted = `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
    }
    setFormData((prev) => ({ ...prev, whatsapp: formatted }));
    if (errors.whatsapp) setErrors((prev) => ({ ...prev, whatsapp: undefined }));
  };

  const handleCpfChange = (val: string) => {
    const digits = val.replace(/\D/g, '').slice(0, 11);
    let formatted = digits;
    if (digits.length > 3) formatted = `${digits.slice(0, 3)}.${digits.slice(3)}`;
    if (digits.length > 6) formatted = `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6)}`;
    if (digits.length > 9) formatted = `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6, 9)}-${digits.slice(9)}`;
    setFormData((prev) => ({ ...prev, cpf: formatted }));
    if (errors.cpf) setErrors((prev) => ({ ...prev, cpf: undefined }));
  };

  const handleInstagramChange = (val: string) => {
    let clean = val.replace(/\s+/g, '');
    if (!clean.startsWith('@') && clean.length > 0) {
      clean = `@${clean}`;
    }
    setFormData((prev) => ({ ...prev, instagram: clean }));
    if (errors.instagram) setErrors((prev) => ({ ...prev, instagram: undefined }));
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof CheckoutFormState, string>> = {};

    if (!formData.fullName.trim() || formData.fullName.trim().split(' ').length < 2) {
      newErrors.fullName = 'Digite seu nome completo (nome e sobrenome)';
    }

    const cleanWhatsapp = formData.whatsapp.replace(/\D/g, '');
    if (cleanWhatsapp.length < 10) {
      newErrors.whatsapp = 'Insira um WhatsApp válido com DDD';
    }

    const cleanCpf = formData.cpf.replace(/\D/g, '');
    if (cleanCpf.length !== 11) {
      newErrors.cpf = 'Insira um CPF válido com 11 dígitos';
    }

    if (!formData.instagram.trim() || formData.instagram.trim() === '@') {
      newErrors.instagram = 'Informe o Instagram do seu estúdio ou salão';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleGeneratePix = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setStep('pix');
      // Scroll smoothly to checkout
      const el = document.getElementById('pre-venda');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCopyPix = () => {
    navigator.clipboard.writeText(pixCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSimulatePaymentConfirmation = () => {
    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      setStep('success');
    }, 1800);
  };

  return (
    <section id="pre-venda" className="border-t border-[#F3E7DA] bg-[#FCF9F5] py-20 md:py-28">
      <div className="mx-auto max-w-xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#F3E7DA] bg-white px-3.5 py-1 text-xs font-medium text-[#7C5A46] mb-4">
            <Sparkles className="h-3.5 w-3.5 text-[#C99A4D]" />
            <span>Acesso Antecipado</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-[#5A3A29] sm:text-4xl font-heading">
            Garanta seu acesso antes do lançamento oficial.
          </h2>
          <p className="mt-3 text-base text-[#7C5A46] leading-relaxed font-body">
            Reserve sua licença hoje com setup prioritário incluso.
          </p>
        </div>

        {/* Step 1: Clean 1-Column Checkout Form */}
        {step === 'form' && (
          <div className="mt-10 rounded-2xl border border-[#F3E7DA] bg-white p-7 sm:p-9 shadow-lg shadow-[#5A3A29]/5 font-body">
            <form onSubmit={handleGeneratePix} className="space-y-5">
              <div>
                <label className="block text-xs font-semibold text-[#5A3A29] mb-1.5 font-heading">
                  Nome Completo
                </label>
                <input
                  type="text"
                  placeholder="Ex: Júlia Maria Silveira"
                  value={formData.fullName}
                  onChange={(e) => {
                    setFormData({ ...formData, fullName: e.target.value });
                    if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                  }}
                  className={`w-full rounded-xl border bg-[#FAF5EF]/60 px-4 py-3 text-sm text-[#34241B] placeholder:text-[#B77A52]/60 focus:bg-white focus:outline-none transition-colors ${
                    errors.fullName
                      ? 'border-red-400 focus:border-red-500 ring-1 ring-red-400'
                      : 'border-[#F3E7DA] focus:border-[#5A3A29]'
                  }`}
                />
                {errors.fullName && (
                  <p className="mt-1 text-xs text-red-500">{errors.fullName}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#5A3A29] mb-1.5 font-heading">
                  WhatsApp (com DDD)
                </label>
                <input
                  type="tel"
                  placeholder="(11) 98765-4321"
                  value={formData.whatsapp}
                  onChange={(e) => handleWhatsappChange(e.target.value)}
                  className={`w-full rounded-xl border bg-[#FAF5EF]/60 px-4 py-3 text-sm text-[#34241B] placeholder:text-[#B77A52]/60 focus:bg-white focus:outline-none transition-colors ${
                    errors.whatsapp
                      ? 'border-red-400 focus:border-red-500 ring-1 ring-red-400'
                      : 'border-[#F3E7DA] focus:border-[#5A3A29]'
                  }`}
                />
                {errors.whatsapp && (
                  <p className="mt-1 text-xs text-red-500">{errors.whatsapp}</p>
                )}
                <p className="mt-1 text-[11px] text-[#7C5A46]">
                  Número onde sua assistente será instalada e configurada.
                </p>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#5A3A29] mb-1.5 font-heading">
                  CPF (Para emissão da nota fiscal e cadastro)
                </label>
                <input
                  type="text"
                  placeholder="000.000.000-00"
                  value={formData.cpf}
                  onChange={(e) => handleCpfChange(e.target.value)}
                  className={`w-full rounded-xl border bg-[#FAF5EF]/60 px-4 py-3 text-sm text-[#34241B] placeholder:text-[#B77A52]/60 focus:bg-white focus:outline-none transition-colors ${
                    errors.cpf
                      ? 'border-red-400 focus:border-red-500 ring-1 ring-red-400'
                      : 'border-[#F3E7DA] focus:border-[#5A3A29]'
                  }`}
                />
                {errors.cpf && (
                  <p className="mt-1 text-xs text-red-500">{errors.cpf}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#5A3A29] mb-1.5 font-heading">
                  Instagram do Salão/Estúdio
                </label>
                <input
                  type="text"
                  placeholder="@studiojuliasilveira"
                  value={formData.instagram}
                  onChange={(e) => handleInstagramChange(e.target.value)}
                  className={`w-full rounded-xl border bg-[#FAF5EF]/60 px-4 py-3 text-sm text-[#34241B] placeholder:text-[#B77A52]/60 focus:bg-white focus:outline-none transition-colors ${
                    errors.instagram
                      ? 'border-red-400 focus:border-red-500 ring-1 ring-red-400'
                      : 'border-[#F3E7DA] focus:border-[#5A3A29]'
                  }`}
                />
                {errors.instagram && (
                  <p className="mt-1 text-xs text-red-500">{errors.instagram}</p>
                )}
              </div>

              {/* Order Summary Box (Only R$ 47,90 without 'Plano Fundador' or 'desconto') */}
              <div className="mt-6 rounded-xl border border-[#F3E7DA] bg-[#FAF5EF] p-5">
                <div className="flex items-baseline justify-between">
                  <div>
                    <span className="text-xs font-medium text-[#7C5A46] block">
                      Acesso Antecipado:
                    </span>
                    <span className="text-3xl font-extrabold text-[#5A3A29] font-mono">
                      R$ 47,90
                    </span>
                    <span className="text-xs text-[#C96A4A] font-semibold ml-2">
                      (Pagamento Único)
                    </span>
                  </div>
                  <div className="text-right text-[11px] text-[#7C5A46]">
                    <span>Sem taxa oculta</span>
                  </div>
                </div>

                {/* Included perks */}
                <div className="mt-4 pt-3.5 border-t border-[#F3E7DA] space-y-2 text-xs text-[#5A3A29]">
                  <div className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-[#C96A4A] shrink-0" />
                    <span>Setup individual 1-a-1 via Google Meet para ensinar seu tom de voz</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-[#C96A4A] shrink-0" />
                    <span>Integração direta com o seu WhatsApp e Google Calendar</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-[#C96A4A] shrink-0" />
                    <span>Garantia incondicional de 7 dias ou estorno instantâneo no Pix</span>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <button
                type="submit"
                className="group mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#5A3A29] py-4 px-6 text-sm font-semibold text-[#F3E7DA] shadow-md hover:bg-[#C96A4A] hover:text-white transition-all active:scale-98 cursor-pointer"
              >
                <Lock className="h-4 w-4 text-[#C99A4D]" />
                <span>Gerar Pix de Pagamento</span>
              </button>

              <div className="flex items-center justify-center gap-2 text-center text-[11px] text-[#7C5A46]">
                <ShieldCheck className="h-3.5 w-3.5 text-[#C96A4A]" />
                <span>Ambiente 100% Seguro • Processamento Instantâneo via Banco Central</span>
              </div>
            </form>
          </div>
        )}

        {/* Step 2: Pix QR Code & Payment Card */}
        {step === 'pix' && (
          <div className="mt-10 rounded-2xl border border-[#F3E7DA] bg-white p-7 sm:p-9 shadow-xl shadow-[#5A3A29]/5 animate-fadeIn font-body">
            {/* Pix Status Banner */}
            <div className="flex items-center justify-between rounded-xl bg-[#FAF5EF] border border-[#F3E7DA] px-4 py-3 text-xs text-[#5A3A29]">
              <div className="flex items-center gap-2">
                <QrCode className="h-4 w-4 text-[#C96A4A]" />
                <span className="font-medium">Chave Pix gerada com sucesso</span>
              </div>
              <span className="font-mono font-bold text-[#5A3A29] text-sm">
                R$ 47,90
              </span>
            </div>

            <div className="mt-6 text-center">
              <h3 className="text-xl font-bold text-[#5A3A29] font-heading">
                Escaneie o QR Code ou copie o código Pix
              </h3>
              <p className="mt-1 text-xs text-[#7C5A46]">
                Beneficiário: BeautyFlow Tecnologia • Valor: <strong className="text-[#5A3A29] font-mono">R$ 47,90</strong>
              </p>
            </div>

            {/* Stylized Vector QR Code */}
            <div className="mt-6 flex flex-col items-center justify-center">
              <div className="relative rounded-2xl border border-[#F3E7DA] bg-[#FAF5EF]/40 p-4 shadow-sm">
                <svg
                  className="h-52 w-52 text-[#5A3A29]"
                  viewBox="0 0 200 200"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Outer corner top-left */}
                  <rect x="15" y="15" width="50" height="50" rx="6" fill="#5A3A29" />
                  <rect x="23" y="23" width="34" height="34" rx="4" fill="#ffffff" />
                  <rect x="30" y="30" width="20" height="20" rx="3" fill="#5A3A29" />

                  {/* Outer corner top-right */}
                  <rect x="135" y="15" width="50" height="50" rx="6" fill="#5A3A29" />
                  <rect x="143" y="23" width="34" height="34" rx="4" fill="#ffffff" />
                  <rect x="150" y="30" width="20" height="20" rx="3" fill="#5A3A29" />

                  {/* Outer corner bottom-left */}
                  <rect x="15" y="135" width="50" height="50" rx="6" fill="#5A3A29" />
                  <rect x="23" y="143" width="34" height="34" rx="4" fill="#ffffff" />
                  <rect x="30" y="150" width="20" height="20" rx="3" fill="#5A3A29" />

                  {/* High density pattern squares */}
                  <rect x="75" y="20" width="12" height="12" rx="2" fill="#5A3A29" />
                  <rect x="95" y="20" width="12" height="12" rx="2" fill="#5A3A29" />
                  <rect x="115" y="20" width="12" height="12" rx="2" fill="#5A3A29" />
                  
                  <rect x="75" y="40" width="12" height="12" rx="2" fill="#5A3A29" />
                  <rect x="105" y="40" width="18" height="12" rx="2" fill="#5A3A29" />

                  <rect x="20" y="75" width="12" height="12" rx="2" fill="#5A3A29" />
                  <rect x="40" y="75" width="12" height="12" rx="2" fill="#5A3A29" />
                  <rect x="60" y="75" width="18" height="12" rx="2" fill="#5A3A29" />
                  <rect x="85" y="75" width="12" height="12" rx="2" fill="#5A3A29" />
                  <rect x="105" y="75" width="20" height="12" rx="2" fill="#5A3A29" />
                  <rect x="135" y="75" width="12" height="12" rx="2" fill="#5A3A29" />
                  <rect x="155" y="75" width="25" height="12" rx="2" fill="#5A3A29" />

                  <rect x="20" y="95" width="25" height="12" rx="2" fill="#5A3A29" />
                  <rect x="55" y="95" width="12" height="12" rx="2" fill="#5A3A29" />
                  <rect x="75" y="95" width="20" height="12" rx="2" fill="#5A3A29" />
                  <rect x="105" y="95" width="12" height="12" rx="2" fill="#5A3A29" />
                  <rect x="125" y="95" width="25" height="12" rx="2" fill="#5A3A29" />
                  <rect x="160" y="95" width="20" height="12" rx="2" fill="#5A3A29" />

                  <rect x="20" y="115" width="12" height="12" rx="2" fill="#5A3A29" />
                  <rect x="40" y="115" width="20" height="12" rx="2" fill="#5A3A29" />
                  <rect x="70" y="115" width="12" height="12" rx="2" fill="#5A3A29" />
                  <rect x="90" y="115" width="25" height="12" rx="2" fill="#5A3A29" />
                  <rect x="125" y="115" width="12" height="12" rx="2" fill="#5A3A29" />
                  <rect x="145" y="115" width="20" height="12" rx="2" fill="#5A3A29" />

                  {/* Lower middle area */}
                  <rect x="75" y="135" width="12" height="12" rx="2" fill="#5A3A29" />
                  <rect x="95" y="135" width="25" height="12" rx="2" fill="#5A3A29" />
                  <rect x="130" y="135" width="12" height="12" rx="2" fill="#5A3A29" />
                  <rect x="150" y="135" width="30" height="12" rx="2" fill="#5A3A29" />

                  <rect x="75" y="155" width="20" height="12" rx="2" fill="#5A3A29" />
                  <rect x="105" y="155" width="12" height="12" rx="2" fill="#5A3A29" />
                  <rect x="125" y="155" width="25" height="12" rx="2" fill="#5A3A29" />
                  <rect x="160" y="155" width="20" height="12" rx="2" fill="#5A3A29" />

                  <rect x="75" y="175" width="12" height="12" rx="2" fill="#5A3A29" />
                  <rect x="95" y="175" width="18" height="12" rx="2" fill="#5A3A29" />
                  <rect x="120" y="175" width="12" height="12" rx="2" fill="#5A3A29" />
                  <rect x="140" y="175" width="25" height="12" rx="2" fill="#5A3A29" />
                  <rect x="175" y="175" width="10" height="12" rx="2" fill="#5A3A29" />
                </svg>

                {/* Center Badge logo */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="rounded-lg bg-white p-1.5 shadow-md border border-[#F3E7DA]">
                    <div className="flex h-7 w-7 items-center justify-center rounded-md bg-[#5A3A29] text-white font-bold text-xs font-heading">
                      BF
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pix Copy Code Block */}
            <div className="mt-6 space-y-2">
              <label className="block text-xs font-semibold text-[#5A3A29]">
                Código Pix Copia e Cola:
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  readOnly
                  value={pixCode}
                  className="w-full truncate rounded-xl border border-[#F3E7DA] bg-[#FAF5EF] px-3.5 py-3 font-mono text-xs text-[#5A3A29] select-all"
                />
                <button
                  type="button"
                  onClick={handleCopyPix}
                  className={`flex items-center gap-1.5 shrink-0 rounded-xl px-4 py-3 text-xs font-semibold transition-all active:scale-95 cursor-pointer ${
                    copied
                      ? 'bg-[#C96A4A] text-white'
                      : 'bg-[#5A3A29] text-[#F3E7DA] hover:bg-[#C96A4A] hover:text-white'
                  }`}
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4" />
                      <span>Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" />
                      <span>Copiar Pix</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Step-by-step instructions */}
            <div className="mt-6 rounded-xl bg-[#FAF5EF] p-4 border border-[#F3E7DA] text-xs text-[#7C5A46] space-y-2">
              <p className="font-semibold text-[#5A3A29]">Como pagar em 3 passos:</p>
              <ol className="list-decimal list-inside space-y-1 text-[#7C5A46]">
                <li>Abra o aplicativo do seu banco (Nubank, Itaú, Bradesco, etc.)</li>
                <li>Escolha a opção <strong>Pix Copia e Cola</strong> ou <strong>Ler QR Code</strong></li>
                <li>Confirme o valor de <strong>R$ 47,90</strong> e conclua o pagamento</li>
              </ol>
            </div>

            {/* Check/Confirm Button */}
            <div className="mt-6 space-y-3">
              <button
                type="button"
                disabled={isVerifying}
                onClick={handleSimulatePaymentConfirmation}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#C96A4A] py-3.5 px-6 text-sm font-semibold text-white shadow-md hover:bg-[#D9745E] transition-all active:scale-98 disabled:opacity-75 cursor-pointer"
              >
                {isVerifying ? (
                  <>
                    <div className="h-4 w-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                    <span>Identificando pagamento no Banco Central...</span>
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="h-4 w-4" />
                    <span>Já realizei o pagamento via Pix</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => setStep('form')}
                className="w-full text-center text-xs text-[#7C5A46] hover:text-[#5A3A29] transition-colors cursor-pointer"
              >
                Alterar dados do cadastro
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Payment Success / Confirmed Receipt */}
        {step === 'success' && (
          <div className="mt-10 rounded-2xl border border-[#F3E7DA] bg-white p-7 sm:p-9 shadow-xl shadow-[#5A3A29]/5 text-center animate-fadeIn font-body">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#FAF5EF] text-[#C96A4A] border border-[#F3E7DA]">
              <Check className="h-8 w-8 stroke-[2.5]" />
            </div>

            <span className="mt-4 inline-block rounded-full bg-[#FAF5EF] px-3 py-1 text-xs font-semibold text-[#5A3A29] border border-[#F3E7DA]">
              Pagamento Confirmado via Pix
            </span>

            <h3 className="mt-3 text-2xl font-bold text-[#5A3A29] font-heading">
              Parabéns, {formData.fullName.split(' ')[0]}!
            </h3>
            <p className="mt-2 text-sm text-[#7C5A46] leading-relaxed">
              Você garantiu sua licença da <strong>BeautyFlow</strong> com setup prioritário para o perfil <strong>{formData.instagram || '@seu_studio'}</strong>.
            </p>

            {/* Receipt Summary Card */}
            <div className="mt-6 rounded-xl border border-[#F3E7DA] bg-[#FAF5EF] p-5 text-left text-xs space-y-2.5">
              <div className="flex justify-between text-[#7C5A46]">
                <span>Comprovante:</span>
                <span className="font-mono text-[#5A3A29] font-medium">PIX-BEAUTYFLOW-{(Math.random() * 1000000).toFixed(0)}</span>
              </div>
              <div className="flex justify-between text-[#7C5A46]">
                <span>Valor pago:</span>
                <span className="font-mono text-[#5A3A29] font-bold">R$ 47,90</span>
              </div>
              <div className="flex justify-between text-[#7C5A46]">
                <span>WhatsApp cadastrado:</span>
                <span className="font-mono text-[#5A3A29]">{formData.whatsapp}</span>
              </div>
              <div className="flex justify-between text-[#7C5A46]">
                <span>Status da ativação:</span>
                <span className="text-[#C96A4A] font-semibold">Prioridade Fila #01</span>
              </div>
            </div>

            {/* Next Steps */}
            <div className="mt-6 rounded-xl bg-[#5A3A29] text-[#FCF9F5] p-5 text-left text-xs space-y-3">
              <div className="flex items-center gap-2 text-[#C99A4D] font-semibold font-heading">
                <Calendar className="h-4 w-4" />
                <span>Próximo Passo: Agendamento do Setup VIP</span>
              </div>
              <p className="text-[#F3E7DA]/85 text-[11px] leading-relaxed">
                Nossa equipe entrará em contato direto no seu WhatsApp ({formData.whatsapp}) nas próximas 2 horas com o link para a chamada individual onde vamos treinar a BeautyFlow com sua lista de serviços e horários.
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => {
                  setStep('form');
                  setFormData({ fullName: '', whatsapp: '', cpf: '', instagram: '' });
                }}
                className="w-full sm:w-auto rounded-xl border border-[#F3E7DA] bg-[#FAF5EF] px-5 py-3 text-xs font-semibold text-[#5A3A29] hover:bg-white transition-colors cursor-pointer"
              >
                Nova compra / Outro estúdio
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
