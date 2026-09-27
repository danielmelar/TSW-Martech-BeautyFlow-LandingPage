import React, { useState } from 'react';
import { Calendar, Sparkles, Check, CheckCheck, RefreshCw, ShoppingBag } from 'lucide-react';
import type { ProfessionScenario } from '../types';

const SCENARIOS: ProfessionScenario[] = [
  {
    id: 'hair',
    label: 'Salão & Mechas',
    role: 'Studio Júlia • Especialista em Loiros',
    avatar: '💇‍♀️',
    clientName: 'Carla Silveira',
    messages: [
      {
        sender: 'client',
        text: 'Oi Júlia! Vi seus loiros no Insta e amei 😍 Quanto tá pra fazer Morena Iluminada? Tem vaga pra essa semana ainda?',
        time: '14:28',
      },
      {
        sender: 'assistant',
        text: 'Oi Carla! Que alegria receber você aqui no Studio! ✨ O nosso protocolo de Morena Iluminada inclui teste de mecha, tonalização personalizada e escova modelada, a partir de R$ 380.',
        time: '14:28',
      },
      {
        sender: 'assistant',
        text: 'Tenho duas opções perfeitas na agenda da Júlia:\n📅 Quinta às 14h30\n📅 Sexta às 10h00\nQual funciona melhor pra você?',
        time: '14:28',
        isCalendar: true,
      },
      {
        sender: 'client',
        text: 'Quinta às 14h30 fica perfeito pra mim! Pode marcar!',
        time: '14:29',
      },
      {
        sender: 'assistant',
        text: 'Maravilha! Agendado para Quinta, 14h30. Já inseri no calendário e reservei sua cadeira.',
        time: '14:29',
        isCalendar: true,
      },
      {
        sender: 'assistant',
        text: '💡 Dica da Júlia: Para clareamentos, nossas clientes sempre adicionam o Tratamento Acidificante K-Pak durante o procedimento para blindar o fio por +R$ 49 (no dia avulso é R$ 85). Quer que eu já deixe reservado junto?',
        time: '14:29',
        isUpsell: true,
      },
      {
        sender: 'client',
        text: 'Nossa, quero sim com certeza! Salva aí!',
        time: '14:30',
      },
    ],
  },
  {
    id: 'tattoo',
    label: 'Tattoo & Fine Line',
    role: 'Gabriel Martins • Fine Line Tattoo',
    avatar: '🖋️',
    clientName: 'Lucas Ramos',
    messages: [
      {
        sender: 'client',
        text: 'Fala Gabriel, blz? Queria orçar uma tattoo de traço fino no antebraço, uns 8cm de uma bússola. Tem horário?',
        time: '16:05',
      },
      {
        sender: 'assistant',
        text: 'E aí Lucas! Tudo certo por aqui! 🔥 Para traço fino autoral de 8cm, o valor fica em R$ 320 com agulha descartável nano e retoque cortesia em até 60 dias.',
        time: '16:05',
      },
      {
        sender: 'assistant',
        text: 'Consigo encaixar você na bancada:\n📅 Sábado agora às 15h00\n📅 Terça que vem às 18h30\nQual dia prefere?',
        time: '16:05',
        isCalendar: true,
      },
      {
        sender: 'client',
        text: 'Sábado às 15h fecha certinho!',
        time: '16:06',
      },
      {
        sender: 'assistant',
        text: 'Perfeito, sábado às 15h travado na agenda do Gabriel! 🎯',
        time: '16:06',
        isCalendar: true,
      },
      {
        sender: 'assistant',
        text: '✨ Kit Cicatrização: o Gabriel desenvolveu uma pomada 100% vegana com D-Pantenol que evita cascas e mantém a linha fininha. Custa só R$ 28. Quer levar junto no dia?',
        time: '16:06',
        isUpsell: true,
      },
      {
        sender: 'client',
        text: 'Pô, inclui aí! Vale a pena cuidar bem.',
        time: '16:07',
      },
    ],
  },
  {
    id: 'lash',
    label: 'Estética & Cílios',
    role: 'Espaço Camila • Lash & Sobrancelhas',
    avatar: '✨',
    clientName: 'Mariana Duarte',
    messages: [
      {
        sender: 'client',
        text: 'Oi Cami! Faz manutenção de volume brasileiro? Meu sábado é uma loucura, teria vaga de manhã?',
        time: '09:12',
      },
      {
        sender: 'assistant',
        text: 'Oi Mari! Tudo bem por aí? Fazemos sim! Nossa manutenção de Volume Brasileiro dura 1h15 e custa R$ 130.',
        time: '09:12',
      },
      {
        sender: 'assistant',
        text: 'Abri uma vaga no sábado às 10h15 especialmente pra você. Te atende bem?',
        time: '09:12',
        isCalendar: true,
      },
      {
        sender: 'client',
        text: 'Nossa, me salvou! Pode confirmar esse horário!',
        time: '09:13',
      },
      {
        sender: 'assistant',
        text: 'Agendamento confirmado para Sábado às 10h15! Já está na planilha e na agenda do estúdio.',
        time: '09:13',
        isCalendar: true,
      },
      {
        sender: 'assistant',
        text: '🛍️ Oportunidade: estamos com a Espuminha de Higienização Home Care que faz a extensão durar até 10 dias a mais por apenas R$ 35. Posso separar a sua?',
        time: '09:13',
        isUpsell: true,
      },
      {
        sender: 'client',
        text: 'Por favor! A minha já tava acabando mesmo!',
        time: '09:14',
      },
    ],
  },
];

export const InteractiveChatPreview: React.FC = () => {
  const [activeScenarioId, setActiveScenarioId] = useState<'hair' | 'tattoo' | 'lash'>('hair');
  const [visibleCount, setVisibleCount] = useState<number>(7);

  const scenario = SCENARIOS.find((s) => s.id === activeScenarioId) || SCENARIOS[0];

  const handleScenarioChange = (id: 'hair' | 'tattoo' | 'lash') => {
    setActiveScenarioId(id);
    setVisibleCount(7);
  };

  const handleReplay = () => {
    setVisibleCount(2);
    const interval = setInterval(() => {
      setVisibleCount((prev) => {
        if (prev >= scenario.messages.length) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 800);
  };

  return (
    <div className="w-full">
      {/* Segmented controls to toggle professions */}
      <div className="mb-6 flex flex-col items-center justify-between gap-3 sm:flex-row">
        <div className="flex items-center gap-1 rounded-full border border-[#F3E7DA] bg-[#F3E7DA]/40 p-1 text-xs">
          {SCENARIOS.map((s) => {
            const isActive = s.id === activeScenarioId;
            return (
              <button
                key={s.id}
                onClick={() => handleScenarioChange(s.id)}
                className={`flex items-center gap-1.5 rounded-full px-4 py-2 font-medium transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#5A3A29] text-white shadow-xs'
                    : 'text-[#7C5A46] hover:text-[#5A3A29]'
                }`}
              >
                <span>{s.avatar}</span>
                <span>{s.label}</span>
              </button>
            );
          })}
        </div>

        <button
          onClick={handleReplay}
          className="inline-flex items-center gap-1.5 text-xs text-[#7C5A46] hover:text-[#5A3A29] transition-colors cursor-pointer"
          title="Ver o fluxo se desenrolar em tempo real"
        >
          <RefreshCw className="h-3.5 w-3.5 text-[#C96A4A]" />
          <span>Simular em tempo real</span>
        </button>
      </div>

      {/* WhatsApp Window Frame */}
      <div className="overflow-hidden rounded-2xl border border-[#F3E7DA] bg-white shadow-xl shadow-[#5A3A29]/5">
        {/* Chat Header */}
        <div className="flex items-center justify-between border-b border-[#F3E7DA] bg-[#FCF9F5] px-5 py-3.5">
          <div className="flex items-center gap-3">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[#5A3A29] text-lg text-white">
              {scenario.avatar}
              <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-white bg-emerald-500" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h4 className="text-sm font-semibold text-[#5A3A29] leading-tight font-heading">
                  {scenario.role}
                </h4>
                <span className="inline-flex items-center rounded-sm bg-[#F3E7DA] px-1.5 py-0.5 text-[10px] font-medium text-[#7C5A46]">
                  BeautyFlow Ativa
                </span>
              </div>
              <p className="text-xs text-[#7C5A46]">
                Online agora • Responde em ~3 seg
              </p>
            </div>
          </div>

          <div className="text-right hidden sm:block">
            <span className="text-[11px] text-[#C96A4A] font-medium flex items-center justify-end gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C96A4A] animate-pulse" />
              Sincronizado c/ Google Agenda
            </span>
            <span className="text-[10px] text-[#B77A52]">
              Taxa de resposta: 100%
            </span>
          </div>
        </div>

        {/* Chat Body */}
        <div className="space-y-3 bg-[#FAF5EF]/70 p-5 min-h-[380px] max-h-[500px] overflow-y-auto font-body">
          {scenario.messages.slice(0, visibleCount).map((msg, index) => {
            const isClient = msg.sender === 'client';
            return (
              <div
                key={index}
                className={`flex flex-col ${isClient ? 'items-start' : 'items-end'}`}
              >
                <div
                  className={`max-w-[85%] sm:max-w-[75%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-2xs transition-all ${
                    isClient
                      ? 'rounded-tl-xs bg-white text-[#34241B] border border-[#F3E7DA]'
                      : 'rounded-tr-xs bg-[#5A3A29] text-[#FCF9F5]'
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.text}</p>

                  {/* Highlights */}
                  {msg.isCalendar && (
                    <div className="mt-2.5 flex items-center gap-1.5 border-t border-[#7C5A46]/40 pt-2 text-[11px] font-medium text-[#C99A4D]">
                      <Calendar className="h-3 w-3 shrink-0" />
                      <span>Checagem de conflitos em tempo real</span>
                    </div>
                  )}

                  {msg.isUpsell && (
                    <div className="mt-2.5 flex items-center gap-1.5 border-t border-[#7C5A46]/40 pt-2 text-[11px] font-medium text-[#F3E7DA]">
                      <ShoppingBag className="h-3 w-3 shrink-0 text-[#C99A4D]" />
                      <span>Upsell contextual ativado (+R$ 49 no ticket médio)</span>
                    </div>
                  )}

                  <div
                    className={`mt-1 flex items-center justify-end gap-1 text-[10px] ${
                      isClient ? 'text-[#B77A52]' : 'text-[#F3E7DA]/70'
                    }`}
                  >
                    <span>{msg.time}</span>
                    {!isClient && (
                      <CheckCheck className="h-3 w-3 text-[#C99A4D] inline" />
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Metrics Indicator */}
        <div className="flex flex-wrap items-center justify-between border-t border-[#F3E7DA] bg-white px-5 py-3 text-xs text-[#7C5A46]">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-[#5A3A29]">Resultado desta conversa:</span>
            <span className="text-[#5A3A29] font-medium bg-[#F3E7DA] px-2.5 py-0.5 rounded border border-[#B77A52]/30">
              Horário fechado + R$ 49 em produto adicional
            </span>
          </div>
          <div className="flex items-center gap-1 text-[#7C5A46] text-[11px]">
            <Sparkles className="h-3 w-3 text-[#C99A4D]" />
            <span>Sem você precisar parar de atender</span>
          </div>
        </div>
      </div>
    </div>
  );
};
