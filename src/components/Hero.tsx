import React from 'react';
import { ArrowDown, Check, ShieldCheck, Zap, Sparkles } from 'lucide-react';
import { InteractiveChatPreview } from './InteractiveChatPreview';

export const Hero: React.FC = () => {
  const scrollToCheckout = () => {
    const el = document.getElementById('pre-venda');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#FCF9F5] pt-14 pb-20 md:pt-20 md:pb-28">
      {/* Subtle background glow with warm Sand & Terracotta tint */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div 
          style={{
            clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
          }} 
          className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#F3E7DA] via-[#F3E7DA]/50 to-[#C96A4A]/20 opacity-70 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>

      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Clean category kicker without artificial scarcity */}
        <div className="flex items-center gap-2 text-xs font-medium text-[#7C5A46] mb-6">
          <span className="text-[#C96A4A] font-semibold tracking-wide">BEAUTYFLOW</span>
          <span aria-hidden="true">·</span>
          <span>Assistente Inteligente no WhatsApp</span>
          <span aria-hidden="true">·</span>
          <span>Feito para quem trabalha com a mão na massa</span>
        </div>

        {/* Hero Title */}
        <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight text-[#5A3A29] sm:text-5xl lg:text-6xl text-balance leading-[1.08] font-heading">
          Você ganha dinheiro com a mão na massa. Não perca receita no WhatsApp.
        </h1>

        {/* Subtitle */}
        <p className="mt-6 max-w-2xl text-lg sm:text-xl text-[#7C5A46] font-normal leading-relaxed text-pretty font-body">
          A primeira assistente inteligente para profissionais independentes. Ela responde orçamentos em segundos, organiza sua agenda e vende produtos extras no piloto automático.
        </p>

        {/* CTA Block without payment/guarantee text on home */}
        <div className="mt-8 flex items-center">
          <button
            onClick={scrollToCheckout}
            className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#5A3A29] px-8 py-4 text-sm font-semibold text-[#F3E7DA] shadow-md hover:bg-[#C96A4A] hover:text-white transition-all active:scale-98 cursor-pointer"
          >
            <span>Garantir Acesso Antecipado</span>
            <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          </button>
        </div>

        {/* Trust Badges */}
        <div className="mt-10 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#7C5A46] border-t border-[#F3E7DA] pt-6">
          <div className="flex items-center gap-2">
            <Check className="h-3.5 w-3.5 text-[#C96A4A]" />
            <span>Feito para Cabeleireiras, Tatuadores e Esteticistas</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="h-3.5 w-3.5 text-[#C96A4A]" />
            <span>Sem app difícil: funciona direto no seu WhatsApp</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="h-3.5 w-3.5 text-[#C96A4A]" />
            <span>Setup 1 a 1 personalizado com o seu tom de voz</span>
          </div>
        </div>

        {/* Live Interactive WhatsApp Simulator Anchor */}
        <div className="mt-14 lg:mt-16">
          <div className="mb-4 text-center sm:text-left">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-[#B77A52]">
              Veja a BeautyFlow atendendo em tempo real
            </h2>
            <p className="text-sm text-[#7C5A46]">
              Alterne entre segmentos e veja como a conversa flui sem você tocar no celular:
            </p>
          </div>

          <InteractiveChatPreview />
        </div>
      </div>
    </section>
  );
};
