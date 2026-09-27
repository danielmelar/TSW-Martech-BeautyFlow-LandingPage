/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PainPoints } from './components/PainPoints';
import { SolutionSteps } from './components/SolutionSteps';
import { RoiCalculator } from './components/RoiCalculator';
import { SurveyResearchSection } from './components/SurveyResearchSection';
import { CheckoutSection } from './components/CheckoutSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FCF9F5] text-[#34241B] flex flex-col font-body selection:bg-[#5A3A29] selection:text-white">
      {/* Top Bar following 3-Zone Contract */}
      <Navbar />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* 1. Hero Section (Minimalista e Direta) */}
        <Hero />

        {/* 2. A Dor (Clientes ignorados, Agenda exaustiva, Dinheiro na mesa) */}
        <PainPoints />

        {/* 3. A Solução (Resposta Imediata, Agendamento Inteligente, Venda Oculta) */}
        <SolutionSteps />

        {/* Interactive ROI Calculator */}
        <RoiCalculator />

        {/* Real Customer Research & Validation */}
        <SurveyResearchSection />

        {/* 4. Seção de Oferta e Pré-Venda (Checkout Limpo no fim da página com Pix) */}
        <CheckoutSection />

        {/* FAQ & 7-Day Guarantee */}
        <FaqSection />
      </main>

      {/* Clean Apple-style Footer */}
      <Footer />
    </div>
  );
}
