import React from 'react';
import { MessageSquareText, CalendarCheck, TrendingUp, Sparkles, CheckCircle2 } from 'lucide-react';

export const SolutionSteps: React.FC = () => {
  const steps = [
    {
      number: '01',
      icon: MessageSquareText,
      title: 'Resposta Imediata',
      subtitle: 'Seu tom de voz, 24 horas por dia',
      description:
        'A assistente tira dúvidas sobre preços, procedimentos e regras do seu estúdio em menos de 5 segundos. Ela fala de forma natural, acolhedora e personalizada, com os emojis e vocabulário que você já usa.',
      bulletPoints: [
        'Aprende seus pacotes e valores em 15 minutos',
        'Atende até de madrugada ou no feriado',
        'Nunca deixa cliente no vácuo esperando orçamento',
      ],
    },
    {
      number: '02',
      icon: CalendarCheck,
      title: 'Agendamento Inteligente',
      subtitle: 'Sincronizado direto no seu Google Calendar',
      description:
        'Acabou o papel e o retrabalho. A Aura consulta seus horários livres em tempo real, propõe os melhores encaixes para a cliente e bloqueia o horário na sua agenda assim que ela confirma.',
      bulletPoints: [
        'Zero conflito ou duplicidade de horários',
        'Calcula tempo de intervalo e higienização',
        'Envia lembrete 24h antes para zerar faltas (no-show)',
      ],
    },
    {
      number: '03',
      icon: TrendingUp,
      title: 'Venda Oculta (Upsell)',
      subtitle: 'Sugestões certeiras durante a conversa',
      description:
        'A cliente fechou um procedimento? A Aura sugere o tratamento complementar, a pomada cicatrizante ou o home care ideal de forma sutil e consultiva. O cliente agradece a dica e você fatura mais.',
      bulletPoints: [
        '+20% a +45% de ticket médio por atendimento',
        'Vende sem você parecer "vendedor chato"',
        'Totalmente configurável por tipo de serviço',
      ],
    },
  ];

  return (
    <section id="solucao" className="border-t border-[#F3E7DA] bg-[#FCF9F5] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#B77A52]">
            A solução definitiva
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#5A3A29] sm:text-4xl text-balance font-heading">
            Atendimento perfeito, zero esforço.
          </h2>
          <p className="mt-4 text-base text-[#7C5A46] leading-relaxed font-body">
            Uma secretária executiva digital treinada exclusivamente para o seu negócio de beleza ou arte. Veja os 3 pilares em ação:
          </p>
        </div>

        {/* 3 Step Editorial Grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative flex flex-col justify-between rounded-2xl border border-[#F3E7DA] bg-white p-8 transition-all hover:border-[#C96A4A] hover:shadow-lg"
              >
                <div>
                  {/* Step header: Number + Icon */}
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-extrabold text-[#B77A52]/40 font-mono tracking-tight">
                      {step.number}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F3E7DA] border border-[#B77A52]/20 text-[#5A3A29] shadow-2xs">
                      <Icon className="h-5 w-5 stroke-[1.75]" />
                    </div>
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-[#5A3A29] font-heading">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-[#C96A4A]">
                    {step.subtitle}
                  </p>

                  <p className="mt-4 text-sm text-[#7C5A46] leading-relaxed font-body">
                    {step.description.replace(/Aura/g, 'BeautyFlow')}
                  </p>
                </div>

                {/* Bullets */}
                <div className="mt-8 border-t border-[#F3E7DA] pt-5">
                  <ul className="space-y-2.5">
                    {step.bulletPoints.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5 text-xs text-[#5A3A29] font-body">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-[#C96A4A] mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison Callout: Antes vs Depois */}
        <div className="mt-16 overflow-hidden rounded-2xl border border-[#5A3A29] bg-[#5A3A29] text-[#FCF9F5] p-8 sm:p-10 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#7C5A46] px-3 py-1 text-xs font-medium text-[#F3E7DA]">
                <Sparkles className="h-3.5 w-3.5 text-[#C99A4D]" />
                A transformação na sua rotina
              </span>
              <h3 className="mt-4 text-2xl font-bold tracking-tight text-[#FCF9F5] sm:text-3xl font-heading">
                Trabalhe em paz sabendo que seu WhatsApp está vendendo.
              </h3>
              <p className="mt-3 text-sm text-[#F3E7DA]/80 leading-relaxed font-body">
                Você nunca mais vai precisar interromper um procedimento para olhar o celular com medo de perder cliente. Cada mensagem vira um agendamento com valor maximizado.
              </p>
            </div>

            <div className="space-y-3 rounded-xl bg-[#442B1E] border border-[#7C5A46]/40 p-6 text-xs font-body">
              <div className="flex items-start gap-3 text-rose-200 pb-3 border-b border-[#7C5A46]/30">
                <span className="font-bold text-rose-300">Antes:</span>
                <span>Demora 3h para responder, cliente desiste, agenda confusa no caderno, zero venda de produtos.</span>
              </div>
              <div className="flex items-start gap-3 text-[#F3E7DA] pt-1">
                <span className="font-bold text-[#C99A4D]">Com BeautyFlow:</span>
                <span>Resposta em 3 segundos, agenda preenchida no Google Agenda, +R$ 49 em média por upsell inteligente.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
