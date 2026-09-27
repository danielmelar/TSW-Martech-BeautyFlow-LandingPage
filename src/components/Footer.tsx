import React from 'react';
import { ShieldCheck, Lock } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-[#F3E7DA] bg-[#FAF5EF] py-12 text-[#7C5A46] font-body">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#F3E7DA]">
          <div>
            <span className="text-xl font-bold tracking-tight text-[#5A3A29] font-heading flex items-center gap-1.5">
              <span>BeautyFlow</span>
              <span className="h-1.5 w-1.5 rounded-full bg-[#C96A4A]" />
            </span>
            <p className="mt-1 text-xs text-[#7C5A46]">
              A assistente inteligente no WhatsApp para quem ganha a vida com a mão na massa.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-medium text-[#7C5A46]">
            <a href="#dores" className="hover:text-[#5A3A29] transition-colors">
              A Dor
            </a>
            <a href="#solucao" className="hover:text-[#5A3A29] transition-colors">
              Como Funciona
            </a>
            <a href="#simulador" className="hover:text-[#5A3A29] transition-colors">
              Simulador
            </a>
            <a href="#pesquisa" className="hover:text-[#5A3A29] transition-colors">
              Pesquisa Real
            </a>
            <a href="#pre-venda" className="hover:text-[#5A3A29] transition-colors">
              Acesso Antecipado
            </a>
            <a href="#faq" className="hover:text-[#5A3A29] transition-colors">
              Dúvidas
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#B77A52]">
          <p>
            © {new Date().getFullYear()} BeautyFlow Tecnologia Ltda. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Lock className="h-3 w-3 text-[#B77A52]" />
              <span>Transações Criptografadas 256-Bit</span>
            </span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="h-3 w-3 text-[#C96A4A]" />
              <span>Pagamento Instantâneo Pix (BCB)</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
