import React, { useState } from 'react';
import { Calculator, ArrowRight, DollarSign, Clock, Sparkles } from 'lucide-react';

export const RoiCalculator: React.FC = () => {
  const [weeklyInquiries, setWeeklyInquiries] = useState<number>(20);
  const [ticketAverage, setTicketAverage] = useState<number>(180);
  const [upsellValue, setUpsellValue] = useState<number>(45);

  // Conservative estimations:
  // 15% of clients are currently lost due to slow response (rescued by instant reply)
  // 25% of booked clients accept an upsell suggestion
  const rescuedBookingsPerMonth = Math.round(weeklyInquiries * 0.15 * 4.2);
  const upsellsPerMonth = Math.round(weeklyInquiries * 0.7 * 0.25 * 4.2);

  const additionalRevenueRescued = rescuedBookingsPerMonth * ticketAverage;
  const additionalUpsellRevenue = upsellsPerMonth * upsellValue;
  const totalExtraRevenue = additionalRevenueRescued + additionalUpsellRevenue;

  // Time saved: ~2 hours per day = ~50 hours per month
  const hoursSavedPerMonth = Math.round((weeklyInquiries / 5) * 10);

  return (
    <section id="simulador" className="border-t border-[#F3E7DA] bg-[#FAF5EF]/60 py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#B77A52]">
            Simulador de Retorno
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#5A3A29] sm:text-4xl font-heading">
            Quanto dinheiro está ficando na mesa hoje?
          </h2>
          <p className="mt-4 text-base text-[#7C5A46] font-body">
            Ajuste os números para o seu estúdio e descubra o impacto financeiro de responder na hora e oferecer produtos extras.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center font-body">
          {/* Controls column */}
          <div className="lg:col-span-6 space-y-6 rounded-2xl border border-[#F3E7DA] bg-white p-6 sm:p-8 shadow-xs">
            <div>
              <div className="flex justify-between text-sm font-medium text-[#5A3A29] mb-2">
                <span>Mensagens recebidas por semana:</span>
                <span className="font-bold text-[#5A3A29] font-mono">{weeklyInquiries} clientes</span>
              </div>
              <input
                type="range"
                min="5"
                max="80"
                step="1"
                value={weeklyInquiries}
                onChange={(e) => setWeeklyInquiries(Number(e.target.value))}
                className="w-full accent-[#C96A4A] cursor-pointer h-2 bg-[#F3E7DA] rounded-lg"
              />
              <div className="flex justify-between text-[11px] text-[#B77A52] mt-1">
                <span>5/sem</span>
                <span>40/sem</span>
                <span>80+/sem</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm font-medium text-[#5A3A29] mb-2">
                <span>Valor médio do seu serviço:</span>
                <span className="font-bold text-[#5A3A29] font-mono">R$ {ticketAverage},00</span>
              </div>
              <input
                type="range"
                min="50"
                max="800"
                step="10"
                value={ticketAverage}
                onChange={(e) => setTicketAverage(Number(e.target.value))}
                className="w-full accent-[#C96A4A] cursor-pointer h-2 bg-[#F3E7DA] rounded-lg"
              />
              <div className="flex justify-between text-[11px] text-[#B77A52] mt-1">
                <span>R$ 50 (Cílios/Sobrancelha)</span>
                <span>R$ 350 (Mechas/Tattoo)</span>
                <span>R$ 800+</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm font-medium text-[#5A3A29] mb-2">
                <span>Valor médio de produto extra / upsell:</span>
                <span className="font-bold text-[#5A3A29] font-mono">R$ {upsellValue},00</span>
              </div>
              <input
                type="range"
                min="20"
                max="150"
                step="5"
                value={upsellValue}
                onChange={(e) => setUpsellValue(Number(e.target.value))}
                className="w-full accent-[#C96A4A] cursor-pointer h-2 bg-[#F3E7DA] rounded-lg"
              />
              <div className="flex justify-between text-[11px] text-[#B77A52] mt-1">
                <span>R$ 20 (Pomada/Óleo)</span>
                <span>R$ 60 (Máscara K-Pak)</span>
                <span>R$ 150 (Kit Home Care)</span>
              </div>
            </div>

            <div className="rounded-xl bg-[#FAF5EF] p-4 border border-[#F3E7DA] text-xs text-[#7C5A46] leading-relaxed">
              💡 Estimativa conservadora baseada em apenas 15% de recuperação de clientes que desistiam da espera e 25% de conversão na oferta complementar.
            </div>
          </div>

          {/* Result Card column */}
          <div className="lg:col-span-6 rounded-2xl border border-[#5A3A29] bg-[#5A3A29] text-[#FCF9F5] p-8 sm:p-10 shadow-xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C99A4D]">
              <Sparkles className="h-4 w-4" />
              <span>Receita Adicional Estimada</span>
            </div>

            <div className="mt-4">
              <span className="text-4xl sm:text-5xl font-extrabold text-[#FCF9F5] tracking-tight font-mono font-heading">
                + R$ {totalExtraRevenue.toLocaleString('pt-BR')},00
              </span>
              <span className="block text-sm text-[#F3E7DA]/75 mt-1">
                em dinheiro novo entrando no seu caixa todo mês
              </span>
            </div>

            <div className="mt-8 space-y-3 border-t border-[#7C5A46]/50 pt-6 text-sm">
              <div className="flex items-center justify-between text-[#F3E7DA]/90">
                <span>Agendamentos recuperados (sem vácuo):</span>
                <span className="font-semibold text-white font-mono">+{rescuedBookingsPerMonth} clientes/mês</span>
              </div>
              <div className="flex items-center justify-between text-[#F3E7DA]/90">
                <span>Produtos extras vendidos no piloto:</span>
                <span className="font-semibold text-white font-mono">+{upsellsPerMonth} unidades/mês</span>
              </div>
              <div className="flex items-center justify-between text-[#F3E7DA]/90">
                <span>Tempo livre recuperado para você:</span>
                <span className="font-semibold text-[#C99A4D] font-mono">~{hoursSavedPerMonth}h a menos no celular</span>
              </div>
            </div>

            <div className="mt-8 rounded-xl bg-[#442B1E] border border-[#7C5A46]/40 p-4 flex items-center justify-between">
              <div>
                <p className="text-xs text-[#F3E7DA]/80">Acesso Antecipado via Pix:</p>
                <p className="text-xs text-[#C99A4D] font-medium">Setup prioritário incluso</p>
              </div>
              <a
                href="#pre-venda"
                className="inline-flex items-center gap-2 rounded-full bg-[#F3E7DA] px-5 py-2.5 text-xs font-bold text-[#5A3A29] hover:bg-white transition-all active:scale-95"
              >
                <span>Garantir Retorno</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
