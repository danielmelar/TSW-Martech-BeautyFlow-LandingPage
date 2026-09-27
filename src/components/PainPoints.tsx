import React from 'react';
import { UserX, Clock, Coins, Flame } from 'lucide-react';

export const PainPoints: React.FC = () => {
  const painPoints = [
    {
      icon: UserX,
      title: 'Interromper procedimentos para responder',
      quote: '"Para responder uma pessoa no WhatsApp, preciso muitas vezes parar de atender outra na mesa."',
      description:
        'A cliente quer saber o valor e a disponibilidade agora. Mas com a mão ocupada, a resposta demora horas. Quando você finalmente responde, ela já fechou com outro estúdio da concorrência.',
      source: 'Relatado por profissionais de Manicure, Cílios e Tattoo',
    },
    {
      icon: Clock,
      title: 'A exaustão de fazer tudo sozinha',
      quote: '"Sinto que tenho que ser a profissional que atende, a gestora, a vendedora e a blogueira ao mesmo tempo."',
      description:
        'Depois de passar 8 a 10 horas atendendo em pé, sua noite é gasta conferindo mensagens, organizando o caderno e torcendo para não cometer o erro de agendar duas clientes no mesmo horário.',
      source: 'Relatado por especialistas em Estética e Cabelo',
    },
    {
      icon: Coins,
      title: 'Atendimento no automático e receita perdida',
      quote: '"Falo no automático por falta de tempo. Falta conseguir personalizar o atendimento e fechar com estratégia."',
      description:
        'Na correria, você só consegue passar o valor seco. Não sobra tempo para explicar o diferencial do serviço, cobrar o sinal para evitar furos ou sugerir o produto de manutenção que aumentaria seu caixa.',
      source: 'Relatado por tatuadores e micropigmentadoras',
    },
  ];

  return (
    <section id="dores" className="border-t border-[#F3E7DA] bg-[#FAF5EF]/60 py-20 md:py-28 font-body">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#B77A52]">
            O que a rotina real nos mostrou
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#5A3A29] sm:text-4xl text-balance font-heading">
            O seu tempo é o seu limite hoje.
          </h2>
          <p className="mt-4 text-base text-[#7C5A46] leading-relaxed">
            Se as suas mãos estão no cabelo, na pele ou na agulha, você não consegue vender. E enquanto você não atende, o WhatsApp vira um gargalo invisível que drena a sua energia e o seu faturamento.
          </p>
        </div>

        {/* 3 Clean Cards with hairline borders */}
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {painPoints.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative flex flex-col justify-between rounded-2xl border border-[#F3E7DA] bg-white p-8 shadow-xs transition-all hover:border-[#C96A4A] hover:shadow-md"
              >
                <div>
                  {/* Subtle top indicator */}
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F3E7DA] text-[#5A3A29] transition-colors group-hover:bg-[#5A3A29] group-hover:text-white">
                    <Icon className="h-5 w-5 stroke-[1.5]" />
                  </div>

                  <h3 className="mt-6 text-lg font-semibold text-[#5A3A29] font-heading">
                    {item.title}
                  </h3>

                  {/* Real verbatim quote */}
                  <div className="mt-3 rounded-lg bg-[#FAF5EF] p-3 border-l-2 border-[#C96A4A]">
                    <p className="text-xs italic text-[#5A3A29] leading-relaxed">
                      {item.quote}
                    </p>
                  </div>

                  <p className="mt-3 text-sm text-[#7C5A46] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Source label */}
                <div className="mt-8 border-t border-[#F3E7DA] pt-4">
                  <span className="text-[11px] font-medium text-[#B77A52] block">
                    {item.source}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Impact Quote */}
        <div className="mt-14 rounded-2xl border border-[#F3E7DA] bg-white p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F3E7DA] text-[#C96A4A]">
              <Flame className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-[#5A3A29] font-heading">
                Você abriu seu negócio para exercer sua arte, não para ser secretária 24h.
              </h4>
              <p className="text-xs text-[#7C5A46] mt-1">
                A BeautyFlow assume a rotina de responder preços, conferir horários na agenda e acolher clientes sem você tocar no celular.
              </p>
            </div>
          </div>

          <a
            href="#pre-venda"
            className="inline-flex shrink-0 items-center text-xs font-semibold text-[#5A3A29] hover:text-[#C96A4A] transition-colors hover:underline underline-offset-4"
          >
            Quero me libertar do WhatsApp &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};
