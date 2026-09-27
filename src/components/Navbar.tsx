import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#F3E7DA] bg-[#FCF9F5]/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:px-8">
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="#" 
          className="text-xl font-bold tracking-tight text-[#5A3A29] transition-opacity hover:opacity-80 font-heading flex items-center gap-1.5"
        >
          <span>BeautyFlow</span>
          <span className="h-1.5 w-1.5 rounded-full bg-[#C96A4A]" />
        </a>

        {/* Zone 2: 4 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#7C5A46]">
          <button 
            onClick={() => scrollToSection('dores')} 
            className="hover:text-[#5A3A29] transition-colors cursor-pointer"
          >
            A Dor
          </button>
          <button 
            onClick={() => scrollToSection('solucao')} 
            className="hover:text-[#5A3A29] transition-colors cursor-pointer"
          >
            Como Funciona
          </button>
          <button 
            onClick={() => scrollToSection('simulador')} 
            className="hover:text-[#5A3A29] transition-colors cursor-pointer"
          >
            Demonstração
          </button>
          <button 
            onClick={() => scrollToSection('pesquisa')} 
            className="hover:text-[#5A3A29] transition-colors cursor-pointer"
          >
            Pesquisa Real
          </button>
          <button 
            onClick={() => scrollToSection('faq')} 
            className="hover:text-[#5A3A29] transition-colors cursor-pointer"
          >
            Dúvidas
          </button>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => scrollToSection('pre-venda')}
            className="group inline-flex items-center gap-2 rounded-full bg-[#5A3A29] px-5 py-2.5 text-xs font-semibold text-[#F3E7DA] shadow-xs transition-all hover:bg-[#C96A4A] hover:text-white active:scale-98 whitespace-nowrap cursor-pointer"
          >
            <span>Garantir Acesso Antecipado</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    </header>
  );
};
