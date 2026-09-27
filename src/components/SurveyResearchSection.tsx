import React from 'react';
import { MessageSquareQuote, Users, Sparkles, CheckCircle2 } from 'lucide-react';

export const SurveyResearchSection: React.FC = () => {
  const surveyQuotes = [
    {
      author: 'Raquel Santana',
      segment: 'Clínica de Estética',
      quote:
        'Sinto que acabo tendo que ser, ao mesmo tempo, a profissional que atende, a gestora, a vendedora e a "blogueira" da empresa. Fazer tudo isso sozinha é muito desgastante e tira o tempo que eu poderia usar para crescer.',
      context: 'Pergunta: O que mais consome seu tempo e energia?',
    },
    {
      author: 'Maria',
      segment: 'Manicure & Nail Designer',
      quote:
        'Correria total. Para responder uma pessoa no WhatsApp, preciso muitas vezes parar de atender outra na mesa por uns momentos. Minha maior aflição é a agenda para não marcar duas clientes no mesmo horário.',
      context: 'Pergunta: Como é o caminho até a cliente fechar o serviço?',
    },
    {
      author: 'Melissa',
      segment: 'Piercing e Tattoo',
      quote:
        'Às vezes respondo rápido e às vezes demoro horas ou dias. Cobrar sinal para garantir o horário e fazer todo o atendimento manual no WhatsApp me deixa sobrecarregada e travada cuidando de muitas áreas sozinha.',
      context: 'Pergunta: O que acontece nos bastidores desde a 1ª mensagem?',
    },
    {
      author: 'Lucas',
      segment: 'Tatuador Especialista',
      quote:
        'Normalmente não sei muito bem como falar de forma estratégica e acabo falando no automático por falta de tempo. Falta conseguir personalizar o atendimento e fechar um orçamento com maior valor.',
      context: 'Pergunta: Qual tarefa você automatizaria hoje com uma "varinha mágica"?',
    },
    {
      author: 'Cassie',
      segment: 'Ateliê & Personalizados',
      quote:
        'O maior obstáculo hoje é o tempo. Faço tudo sozinha: atendo clientes, crio as peças e embalo. Sei que poderia vender bem mais, mas o WhatsApp manual consome as horas em que eu deveria estar produzindo.',
      context: 'Pergunta: Qual o maior obstáculo para conseguir crescer e faturar mais?',
    },
    {
      author: 'Maria José',
      segment: 'Salão de Cabelo (15 anos)',
      quote:
        'A cliente pede o WhatsApp, pergunta e compara o preço e muitas vezes não volta. Queria algo que fosse simples e prático para gerir os clientes sem eu ter que ficar presa no celular.',
      context: 'Pergunta: O que acontece quando um cliente novo chega até você?',
    },
  ];

  return (
    <section id="pesquisa" className="border-t border-[#F3E7DA] bg-[#FCF9F5] py-20 md:py-28 font-body">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#F3E7DA] bg-white px-3.5 py-1 text-xs font-medium text-[#7C5A46] mb-4">
            <Users className="h-3.5 w-3.5 text-[#C96A4A]" />
            <span>Pesquisa de Campo com Profissionais Reais</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-[#5A3A29] sm:text-4xl font-heading">
            O que ouvimos nos bastidores de quem vive na bancada.
          </h2>
          <p className="mt-3 text-base text-[#7C5A46] leading-relaxed">
            Não inventamos essas dores. Entrevistamos manicures, cabeleireiras, esteticistas e tatuadores. O relato é unânime: atender no WhatsApp manualmente enquanto executa o serviço impede o negócio de crescer.
          </p>
        </div>

        {/* 6 Real Research Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {surveyQuotes.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-2xl border border-[#F3E7DA] bg-white p-7 shadow-xs hover:border-[#C96A4A] transition-all"
            >
              <div>
                <div className="flex items-center justify-between text-[#B77A52]">
                  <MessageSquareQuote className="h-6 w-6 stroke-[1.5] text-[#C96A4A]" />
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#B77A52]">
                    Relato Real #{idx + 1}
                  </span>
                </div>

                <p className="mt-4 text-sm text-[#5A3A29] leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="mt-6 border-t border-[#F3E7DA] pt-4">
                <div className="text-xs font-semibold text-[#5A3A29] font-heading">
                  {item.author}
                </div>
                <div className="text-[11px] text-[#C96A4A] font-medium">
                  {item.segment}
                </div>
                <div className="mt-2 text-[10px] text-[#7C5A46] bg-[#FAF5EF] p-2 rounded border border-[#F3E7DA]/60">
                  {item.context}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Co-creation & Product Validation Callout */}
        <div className="mt-14 rounded-2xl border border-[#5A3A29] bg-[#5A3A29] text-[#FCF9F5] p-8 sm:p-10 shadow-lg">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#7C5A46] px-3 py-1 text-xs font-medium text-[#F3E7DA]">
              <Sparkles className="h-3.5 w-3.5 text-[#C99A4D]" />
              Validação Aberta • Construído Junto com os Primeiros Usuários
            </span>
            <h3 className="mt-4 text-2xl font-bold tracking-tight text-[#FCF9F5] sm:text-3xl font-heading">
              A BeautyFlow nasceu diretamente dessa pesquisa.
            </h3>
            <p className="mt-3 text-sm text-[#F3E7DA]/85 leading-relaxed">
              Este é um produto novo. Em vez de criar recursos complexos em sala fechada, estamos abrindo o acesso antecipado para os primeiros profissionais interessados. Ao entrar agora, você garante acompanhamento individualizado para configurar a assistente no seu WhatsApp com a sua tabela de preços e o seu tom de voz.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-6 text-xs text-[#F3E7DA]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#C99A4D]" />
                <span>Onboarding individual 1-a-1</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#C99A4D]" />
                <span>Seus preços e horários calibrados</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#C99A4D]" />
                <span>Contato direto com os criadores</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
