import React, { useState } from 'react';
import { ChevronDown, ShieldCheck } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Preciso trocar de número de telefone ou comprar outro chip?',
      answer:
        'Não! A BeautyFlow conecta diretamente no seu WhatsApp atual (seja WhatsApp normal ou WhatsApp Business) através de QR Code seguro, assim como você conecta no WhatsApp Web do computador.',
    },
    {
      question: 'A minha cliente vai perceber que é uma inteligência artificial?',
      answer:
        'Dificilmente. A BeautyFlow é configurada no nosso onboarding VIP com os seus próprios áudios e textos como referência. Ela usa suas gírias, seus emojis habituais e responde com simpatia e humanidade, sem parecer aqueles menus frios de "Digite 1 para orçamentos".',
    },
    {
      question: 'Como ela marca os horários na minha agenda sem dar conflito?',
      answer:
        'Ela integra em 2 vias com a sua conta do Google Agenda (Google Calendar). Quando uma cliente pede um horário, a BeautyFlow confere os horários vagos em tempo real, considerando tempos de intervalo que você definir (ex: 15 min entre atendimentos). Ao confirmar, ela já insere o evento no seu calendário com o nome e serviço da cliente.',
    },
    {
      question: 'O que acontece após o pagamento de R$ 47,90 no Pix?',
      answer:
        'Você recebe o comprovante instantâneo na tela e uma mensagem no seu WhatsApp. Nossa equipe técnica entra em contato para agendar o seu Onboarding VIP 1-a-1 de 30 minutos, onde nós cadastramos sua tabela de preços, fotos de portfólio, regras de sinal e deixamos a BeautyFlow rodando perfeitamente.',
    },
    {
      question: 'Como funciona o Acesso Antecipado por R$ 47,90?',
      answer:
        'O pagamento de R$ 47,90 é a taxa única para garantir o seu Acesso Antecipado. Você recebe setup individual prioritário com a nossa equipe, consultoria para calibrar o seu tom de voz e acesso completo à BeautyFlow no seu WhatsApp.',
    },
    {
      question: 'Qual é a garantia se eu não gostar?',
      answer:
        'Oferecemos garantia incondicional de 7 dias. Se após o setup ou nos primeiros testes você sentir que a BeautyFlow não é pra você, basta nos mandar uma mensagem no WhatsApp que estornamos 100% dos seus R$ 47,90 via Pix imediatamente. Sem perguntas ou burocracia.',
    },
  ];

  return (
    <section id="faq" className="border-t border-[#F3E7DA] bg-[#FCF9F5] py-20 md:py-24 font-body">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#B77A52]">
            Perguntas Frequentes
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#5A3A29] sm:text-4xl font-heading">
            Tire todas as suas dúvidas.
          </h2>
          <p className="mt-3 text-sm text-[#7C5A46]">
            Transparência total para você dar o próximo passo com tranquilidade.
          </p>
        </div>

        {/* Guarantee Banner */}
        <div className="mt-10 rounded-2xl border border-[#F3E7DA] bg-white p-6 flex flex-col sm:flex-row items-center gap-5 shadow-xs">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#5A3A29] text-[#F3E7DA] shadow-xs">
            <ShieldCheck className="h-6 w-6 text-[#C99A4D]" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-[#5A3A29] font-heading">
              Garantia Blindada de 7 Dias
            </h4>
            <p className="mt-1 text-xs text-[#7C5A46] leading-relaxed">
              O risco é todo nosso. Teste a assistente no seu estúdio. Se não economizar horas de sono e não te ajudar a fechar horários, você recebe 100% do valor de volta no Pix.
            </p>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="mt-10 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="overflow-hidden rounded-xl border border-[#F3E7DA] bg-white transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between p-5 text-left text-sm font-semibold text-[#5A3A29] transition-colors hover:text-[#C96A4A] cursor-pointer"
                >
                  <span className="pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-[#B77A52] transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#5A3A29]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="border-t border-[#F3E7DA] px-5 pt-3 pb-5 text-xs text-[#7C5A46] leading-relaxed animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
