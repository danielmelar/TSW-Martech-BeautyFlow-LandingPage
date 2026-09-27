import { useState, type FormEvent, type ReactNode } from 'react';
import {
  ArrowDownRight,
  ArrowRight,
  CalendarCheck2,
  Check,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Copy,
  MessageCircle,
  ShoppingBag,
} from 'lucide-react';
import firstChatScreenshot from '../../WhatsApp Image 2026-09-27 at 12.31.17.jpeg';
import finalChatScreenshot from '../../WhatsApp Image 2026-09-27 at 12.31.18 (1).jpeg';
import middleChatScreenshot from '../../WhatsApp Image 2026-09-27 at 12.31.18.jpeg';

interface PixPaymentDetails {
  amount: string;
  merchantName: string;
  pixCopyPaste: string;
  qrCodeDataUrl: string;
  paymentStatus: 'awaiting_manual_confirmation';
  txid: string;
}

interface InterestLead {
  name: string;
  phone: string;
  profession: string;
}

const conversations = [
  {
    label: '1 · Atendimento',
    image: firstChatScreenshot,
    alt: 'Print original da conversa de atendimento no WhatsApp, etapa inicial.',
    caption: 'Consulta de serviço e valores',
  },
  {
    label: '2 · Horários',
    image: middleChatScreenshot,
    alt: 'Print original da conversa no WhatsApp, etapa de consulta e escolha de horário.',
    caption: 'Consulta de disponibilidade e escolha',
  },
  {
    label: '3 · Confirmação',
    image: finalChatScreenshot,
    alt: 'Print original da conversa no WhatsApp, etapa de confirmação do agendamento.',
    caption: 'Resumo do serviço e horário reservado',
  },
];

const faqs = [
  {
    question: 'Para quem é a BeautyFlow?',
    answer:
      'Para profissionais independentes e pequenos negócios de beleza que atendem pelo WhatsApp, como cabeleireiras, esteticistas, manicures, designers de sobrancelha e tatuadores.',
  },
  {
    question: 'O que a assistente pode fazer?',
    answer:
      'Ela pode responder perguntas frequentes com as informações do seu negócio, ajudar a conduzir um agendamento e sugerir produtos ou serviços complementares durante a conversa.',
  },
  {
    question: 'A BeautyFlow substitui meu atendimento?',
    answer:
      'Não. A ideia é ajudar nas conversas mais recorrentes e deixar você assumir quando a cliente precisar de um atendimento pessoal ou de uma decisão sua.',
  },
  {
    question: 'Quando poderei começar a usar?',
    answer:
      'A BeautyFlow está em fase de pré-lançamento. Os detalhes sobre disponibilidade, configuração e planos serão compartilhados com quem entrar na lista de espera.',
  },
];

function Brand() {
  return (
    <a aria-label="BeautyFlow, início" className="brand-mark" href="#inicio">
      <span className="brand-symbol" aria-hidden="true">b.</span>
      <span>beautyflow</span>
    </a>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return <p className="section-label">{children}</p>;
}

function HeroScreenshotCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const currentPrint = conversations[activeIndex];
  const nextPrint = conversations[(activeIndex + 1) % conversations.length];

  return (
    <div aria-label="Carrossel com prints do atendimento pelo WhatsApp" className="hero-screenshot-carousel">
      <div className="hero-screenshot-fan">
        <a aria-hidden="true" className="hero-fan-print hero-fan-print-back" href={nextPrint.image} rel="noreferrer" tabIndex={-1} target="_blank">
          <img alt="" src={nextPrint.image} />
        </a>
        <a aria-label={`Abrir print: ${currentPrint.caption}`} className="hero-fan-print hero-fan-print-front" href={currentPrint.image} rel="noreferrer" target="_blank">
          <img alt={currentPrint.alt} src={currentPrint.image} />
        </a>
      </div>
      <div className="hero-screenshot-controls">
        <div aria-live="polite" className="hero-screenshot-caption">
          <span>PRINTS DO WHATSAPP</span>
          <strong>{currentPrint.caption}</strong>
        </div>
        <div className="hero-carousel-buttons">
          <button aria-label="Ver print anterior" onClick={() => setActiveIndex((activeIndex - 1 + conversations.length) % conversations.length)} type="button">
            <ChevronLeft size={16} />
          </button>
          <span>{String(activeIndex + 1).padStart(2, '0')} / {String(conversations.length).padStart(2, '0')}</span>
          <button aria-label="Ver próximo print" onClick={() => setActiveIndex((activeIndex + 1) % conversations.length)} type="button">
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero-section" id="inicio">
      <div className="page-container hero-grid">
        <div className="hero-copy">
          <SectionLabel>ATENDIMENTO PARA NEGÓCIOS DE BELEZA</SectionLabel>
          <h1>Você cuida de quem está na sua frente.<br /><span>A BeautyFlow cuida do WhatsApp.</span></h1>
          <p className="hero-description">
            Uma assistente virtual que atende, agenda e também vende seus produtos e serviços pelo WhatsApp — enquanto você trabalha.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#pre-venda">
              Entrar na lista de espera <ArrowRight size={16} />
            </a>
            <a className="text-link" href="#demonstracao">Ver os prints <ArrowDownRight size={15} /></a>
          </div>
          <div className="hero-footnote">
            <span className="footnote-rule" />
            Feita para quem trabalha com as mãos — e não pode estar no celular o tempo todo.
          </div>
        </div>
        <div className="hero-visual">
          <div aria-hidden="true" className="visual-backdrop" />
          <HeroScreenshotCarousel />
        </div>
      </div>
      <div className="page-container audience-strip" id="para-quem">
        <span>PARA QUEM VIVE DE BELEZA</span>
        <div><span>Cabelo</span><i /> <span>Estética</span><i /> <span>Unhas</span><i /> <span>Tatuagem</span><i /> <span>Bem-estar</span></div>
      </div>
    </section>
  );
}

function Benefits() {
  const items = [
    {
      number: '01',
      title: 'Responda sem interromper',
      description: 'Dúvidas sobre serviços, valores e horários recebem atenção mesmo quando você está com uma cliente.',
      icon: MessageCircle,
    },
    {
      number: '02',
      title: 'Deixe a agenda fluir',
      description: 'A conversa avança para a escolha de um horário, sem aquela troca interminável de mensagens.',
      icon: CalendarCheck2,
    },
    {
      number: '03',
      title: 'Transforme conversas em vendas',
      description: 'A BeautyFlow entende o que a cliente procura, recomenda itens do seu catálogo e conduz a conversa até a compra.',
      icon: ShoppingBag,
    },
  ];

  return (
    <section className="benefits-section" id="como-funciona">
      <div className="page-container">
        <div className="section-heading benefits-heading">
          <SectionLabel>MENOS MENSAGENS PENDENTES. MAIS PRESENÇA.</SectionLabel>
          <h2>Seu talento está no atendimento.<br />Não na caixa de entrada.</h2>
          <p>A BeautyFlow dá continuidade às conversas do seu negócio, com a sua forma de atender e as informações que você definir.</p>
        </div>
        <div className="benefit-grid">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <article className="benefit-item" key={item.number}>
                <div className="benefit-meta"><span>{item.number}</span><Icon size={18} strokeWidth={1.5} /></div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ConversationDemo() {
  const [activeIndex, setActiveIndex] = useState(0);
  const conversation = conversations[activeIndex];

  return (
    <section className="demo-section" id="demonstracao">
      <div className="page-container demo-grid">
        <div className="demo-intro">
          <SectionLabel>CONVERSA NO WHATSAPP</SectionLabel>
          <h2>Do primeiro contato à confirmação do horário.</h2>
          <p>Veja os prints da conversa e navegue pelas etapas do atendimento no WhatsApp.</p>
          <div className="scenario-tabs" aria-label="Escolha uma etapa da conversa">
            {conversations.map((item, index) => (
              <button
                aria-pressed={activeIndex === index}
                className={activeIndex === index ? 'scenario-tab active' : 'scenario-tab'}
                key={item.label}
                onClick={() => setActiveIndex(index)}
                type="button"
              >
                {item.label}
              </button>
            ))}
          </div>
          <p className="demo-disclaimer">Capturas de tela da experiência compartilhada pela equipe.</p>
        </div>

        <div className="demo-window">
          <div className="demo-window-header">
            <div className="preview-contact">
              <span className="contact-avatar avatar-small">W</span>
              <span><strong>Atendimento pelo WhatsApp</strong><small>{conversation.caption}</small></span>
            </div>
            <span className="demo-header-tag">PRINT {activeIndex + 1} / 3</span>
          </div>
          <div aria-live="polite" className="demo-screenshot-stage">
            <a aria-label="Abrir o print em tamanho original" className="demo-screenshot-link" href={conversation.image} rel="noreferrer" target="_blank">
              <img alt={conversation.alt} className="demo-screenshot" src={conversation.image} />
            </a>
          </div>
          <div className="demo-window-footer">
            <span><CalendarCheck2 size={14} /> Etapa {activeIndex + 1} de {conversations.length}</span>
            <span>{conversation.caption}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductSalesSection() {
  return (
    <section className="product-sales-section" id="vendas">
      <div className="page-container product-sales-grid">
        <div className="product-sales-copy">
          <SectionLabel>CONSULTORIA E VENDAS NO WHATSAPP</SectionLabel>
          <h2>Ela não só tira dúvidas. Ajuda a cliente a escolher — e comprar.</h2>
          <p>
            Quando alguém pergunta qual creme combina com o próprio cabelo, a BeautyFlow conversa, entende o que essa cliente procura e recomenda um produto ou serviço do seu catálogo. Depois, conduz o próximo passo da venda.
          </p>
          <div className="sales-points">
            <div><span>01</span><p><strong>Entende a necessidade</strong><br />Faz perguntas com base nas informações que você cadastrou.</p></div>
            <div><span>02</span><p><strong>Indica o que você oferece</strong><br />Recomenda produtos, tratamentos ou serviços complementares.</p></div>
            <div><span>03</span><p><strong>Leva a conversa à compra</strong><br />Apresenta o próximo passo para pedir o produto ou agendar o serviço.</p></div>
          </div>
        </div>

        <div aria-label="Exemplo de recomendação automática de produto para cabelo no WhatsApp" className="product-sales-window">
          <div className="product-window-header">
            <div className="preview-contact">
              <span className="contact-avatar avatar-small">B</span>
              <span><strong>BeautyFlow · Studio Bela</strong><small>Conversa de exemplo</small></span>
            </div>
            <span className="demo-header-tag">CONSULTORIA</span>
          </div>
          <div className="product-chat">
            <div className="message message-client">Meu cabelo é cacheado e anda ressecado. Qual creme você recomenda?<small>14:26</small></div>
            <div className="message message-assistant">Posso te ajudar! Você procura mais hidratação, definição ou controle de frizz?<small>14:26</small></div>
            <div className="message message-client">Queria mais hidratação e definição.<small>14:27</small></div>
            <div className="message message-assistant">Pelo que você me contou, essa opção do nosso catálogo pode combinar com o que procura:<small>14:27</small></div>
          </div>
          <div className="recommended-product">
            <div aria-hidden="true" className="product-packaging"><ShoppingBag size={22} strokeWidth={1.35} /></div>
            <div className="recommended-product-copy">
              <span>DO CATÁLOGO DO STUDIO</span>
              <strong>Creme para cachos</strong>
              <small>Uma recomendação feita a partir do que a cliente contou.</small>
            </div>
            <ArrowRight className="product-card-arrow" size={17} />
          </div>
          <div className="product-next-step">
            <span><Check size={13} /> PRÓXIMO PASSO</span>
            <p>“Quer que eu reserve o seu?”</p>
          </div>
          <p className="product-demo-note">Demonstração ilustrativa. Produtos, respostas e encaminhamento de compra são configurados para cada negócio.</p>
        </div>
      </div>
    </section>
  );
}

function RevenueEstimator() {
  const [weeklyMessages, setWeeklyMessages] = useState(20);
  const [serviceValue, setServiceValue] = useState(180);
  const [complementarySaleValue, setComplementarySaleValue] = useState(120);
  const monthlyBookings = Math.round(weeklyMessages * 0.15 * 4.2);
  const monthlyAddOns = Math.round(weeklyMessages * 0.7 * 0.25 * 4.2);
  const monthlyEstimate = monthlyBookings * serviceValue + monthlyAddOns * complementarySaleValue;
  const formatCurrency = (value: number) =>
    value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });

  return (
    <section className="estimator-section" id="simulador">
      <div className="page-container estimator-grid">
        <div className="estimator-intro">
          <SectionLabel>FAÇA UMA SIMULAÇÃO</SectionLabel>
          <h2>Veja o potencial de vender produtos pelo WhatsApp.</h2>
          <p>A BeautyFlow recomenda produtos do seu catálogo — como um creme para o tipo de cabelo da cliente — e serviços complementares, conduzindo a conversa até a compra.</p>
          <p className="estimator-note">Estimativa ilustrativa, não uma promessa de faturamento. O resultado real depende da sua rotina, do catálogo, dos serviços e da procura.</p>
        </div>
        <div className="estimator-controls">
          <label className="range-control">
            <span><span>Conversas novas por semana</span><strong>{weeklyMessages}</strong></span>
            <input aria-label="Conversas novas por semana" max="80" min="5" onChange={(event) => setWeeklyMessages(Number(event.target.value))} type="range" value={weeklyMessages} />
          </label>
          <label className="range-control">
            <span><span>Valor médio do serviço</span><strong>{formatCurrency(serviceValue)}</strong></span>
            <input aria-label="Valor médio do serviço" max="800" min="50" onChange={(event) => setServiceValue(Number(event.target.value))} step="10" type="range" value={serviceValue} />
          </label>
          <label className="range-control">
            <span><span>Valor médio do produto ou serviço vendido</span><strong>{formatCurrency(complementarySaleValue)}</strong></span>
            <small className="range-hint">Ex.: creme, máscara capilar ou tratamento no salão</small>
            <input aria-label="Valor médio do produto ou serviço vendido pela BeautyFlow" max="800" min="20" onChange={(event) => setComplementarySaleValue(Number(event.target.value))} step="10" type="range" value={complementarySaleValue} />
          </label>
          <div aria-live="polite" className="estimator-result">
            <span>CENÁRIO MENSAL · ATENDIMENTOS + VENDAS DA BEAUTYFLOW</span>
            <strong>{formatCurrency(monthlyEstimate)}</strong>
            <p>Com {monthlyBookings} possíveis agendamentos retomados e {monthlyAddOns} vendas de produtos ou serviços recomendados pela BeautyFlow.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    ['01', 'Você compartilha', 'Seus serviços, preços, horários e o jeito que gosta de falar com as clientes.'],
    ['02', 'A BeautyFlow atende e recomenda', 'Responde dúvidas, apresenta produtos ou serviços adequados e ajuda a cliente a avançar.'],
    ['03', 'Você acompanha', 'Entre quando quiser e assuma a conversa sempre que o atendimento pedir seu toque pessoal.'],
  ];

  return (
    <section className="process-section">
      <div className="page-container">
        <div className="process-heading">
          <SectionLabel>SIMPLES DE ENTENDER</SectionLabel>
          <h2>Uma extensão do seu jeito de atender.</h2>
        </div>
        <div className="process-grid">
          {steps.map(([number, title, description]) => (
            <article className="process-step" key={number}>
              <span className="process-number">{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function EarlyAccess() {
  const whatsappNumber = (import.meta.env.VITE_WHATSAPP_NUMBER || '5511933184146').replace(/\D/g, '');
  const [paymentDetails, setPaymentDetails] = useState<PixPaymentDetails | null>(null);
  const [interestLead, setInterestLead] = useState<InterestLead | null>(null);
  const [showPaymentScreen, setShowPaymentScreen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formMessage, setFormMessage] = useState('');
  const [copyMessage, setCopyMessage] = useState('');

  const paymentMessage = interestLead && paymentDetails
    ? `Oi! Acabei de fazer o Pix da lista de espera BeautyFlow.\n\nNome: ${interestLead.name}\nMeu WhatsApp: ${interestLead.phone}\nÁrea: ${interestLead.profession}\nValor: R$ ${Number(paymentDetails.amount).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}\nReferência Pix (TXID): ${paymentDetails.txid}\n\nPodem conferir o pagamento e entrar em contato comigo, por favor?`
    : '';
  const whatsappLink = whatsappNumber && paymentMessage
    ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(paymentMessage)}`
    : undefined;

  const handleInterestSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get('name') ?? '').trim();
    const phone = String(formData.get('phone') ?? '').trim();
    const profession = String(formData.get('profession') ?? '').trim();
    const phoneDigits = phone.replace(/\D/g, '');

    if (phoneDigits.length < 10) {
      setFormMessage('Informe um WhatsApp válido com DDD.');
      return;
    }

    const lead = { name, phone, profession };
    setInterestLead(lead);
    setIsSubmitting(true);
    setShowPaymentScreen(true);
    setFormMessage('Preparando seu QR Code Pix…');
    window.setTimeout(() => {
      document.getElementById('pix-payment')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 50);
    try {
      const response = await fetch('/api/interest', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, profession }),
      });
      const contentType = response.headers.get('content-type') ?? '';
      if (!contentType.toLowerCase().includes('json')) {
        throw new Error('A API Pix não está publicada neste ambiente. Configure a produção para iniciar o servidor Node com `npm start`.');
      }
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error || 'Não foi possível enviar seu interesse.');
      }

      setPaymentDetails(result as PixPaymentDetails);
      setFormMessage('');
    } catch (error) {
      setFormMessage(error instanceof Error ? error.message : 'Não foi possível enviar seu interesse. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyPix = async () => {
    if (!paymentDetails) return;
    try {
      await navigator.clipboard.writeText(paymentDetails.pixCopyPaste);
      setCopyMessage('Código Pix copiado.');
    } catch {
      setCopyMessage('Não foi possível copiar. Selecione o código Pix para copiá-lo.');
    }
  };

  return (
    <section className="early-access-section" id="pre-venda">
      <div className="page-container early-access-inner">
        <div className="early-access-copy">
          <SectionLabel>BEAUTYFLOW · LISTA DE ESPERA</SectionLabel>
          <h2>Seu próximo atendimento pode começar com mais tranquilidade.</h2>
          <p>Deixe seus dados para entrar na lista de espera. Nossa equipe entrará em contato pelo WhatsApp com os próximos passos.</p>
        </div>
        <div className="access-card">
          <div className="access-card-top">
            <span>LISTA DE ESPERA</span>
            <span className="access-price">R$ 47,90 <small>pagamento único</small></span>
          </div>
          <p className="concierge-kicker">UM COMEÇO ACOMPANHADO DE PERTO</p>
          <div className="concierge-list">
            <div className="concierge-item">
              <span>01</span>
              <p><strong>Usuária da primeira turma</strong><small>Faça parte das primeiras profissionais a experimentar a BeautyFlow.</small></p>
            </div>
            <div className="concierge-item">
              <span>02</span>
              <p><strong>Acompanhamento nos primeiros usos</strong><small>Receba apoio da equipe durante a configuração e o começo da sua rotina.</small></p>
            </div>
            <div className="concierge-item">
              <span>03</span>
              <p><strong>Canal direto com a equipe</strong><small>Compartilhe dúvidas e feedback enquanto começa a usar a BeautyFlow.</small></p>
            </div>
          </div>
          {paymentDetails ? (
            <div className="pix-payment" id="pix-payment">
              <div className="pix-success-note"><Check size={15} /> Pix pronto. Depois de pagar, avise a equipe pelo WhatsApp.</div>
              <p className="pix-instructions">Escaneie o QR Code no app do seu banco ou copie o código Pix.</p>
              <img alt="QR Code Pix da lista de espera BeautyFlow" className="pix-qr-image" src={paymentDetails.qrCodeDataUrl} />
              <p className="pix-amount">R$ {Number(paymentDetails.amount).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
              <p className="pix-reference">Referência para conferência: <strong>{paymentDetails.txid}</strong></p>
              <label className="pix-code-label" htmlFor="pix-copy-paste">Pix Copia e Cola</label>
              <textarea className="pix-copy-paste" id="pix-copy-paste" readOnly rows={3} value={paymentDetails.pixCopyPaste} />
              <button className="button button-dark access-button pix-copy-button" onClick={handleCopyPix} type="button">
                <Copy size={14} /> Copiar código Pix
              </button>
              <p aria-live="polite" className="form-message">{copyMessage || 'O pagamento será conferido manualmente.'}</p>
              {whatsappLink ? (
                <a className="button button-dark access-button payment-report-button" href={whatsappLink} rel="noreferrer" target="_blank">
                  Fiz o pagamento · avisar pelo WhatsApp <ArrowRight size={16} />
                </a>
              ) : (
                <>
                  <button className="button button-dark access-button payment-report-button" disabled type="button">
                    Fiz o pagamento · avisar pelo WhatsApp <ArrowRight size={16} />
                  </button>
                  <p className="form-message form-message-error">O WhatsApp da equipe ainda não foi configurado.</p>
                </>
              )}
            </div>
          ) : showPaymentScreen ? (
            <div aria-live="polite" className="pix-payment pix-loading" id="pix-payment">
              {isSubmitting ? <div className="pix-loader" aria-hidden="true" /> : null}
              <p className={isSubmitting ? 'form-message' : 'form-message form-message-error'}>{formMessage}</p>
              {!isSubmitting && (
                <button className="text-link pix-back-button" onClick={() => { setShowPaymentScreen(false); setFormMessage(''); }} type="button">
                  Voltar ao formulário
                </button>
              )}
            </div>
          ) : (
            <form className="interest-form" onSubmit={handleInterestSubmit}>
              <label>
                <span>Seu nome</span>
                <input autoComplete="name" name="name" placeholder="Como podemos te chamar?" required />
              </label>
              <label>
                <span>Seu WhatsApp</span>
                <input autoComplete="tel" inputMode="tel" name="phone" placeholder="(11) 99999-9999" required type="tel" />
              </label>
              <label>
                <span>Área de atuação</span>
                <select defaultValue="" name="profession" required>
                  <option disabled value="">Selecione sua área</option>
                  <option>Cabelo</option>
                  <option>Estética</option>
                  <option>Unhas</option>
                  <option>Tatuagem</option>
                  <option>Outra área da beleza</option>
                </select>
              </label>
              <button className="button button-dark access-button" disabled={isSubmitting} type="submit">
                {isSubmitting ? 'Enviando…' : 'Enviar interesse e ver Pix'} <ArrowRight size={16} />
              </button>
              <p aria-live="polite" className="form-message">{formMessage || 'Depois do Pix, o botão abre o WhatsApp com seus dados e a referência do pagamento.'}</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section className="faq-section" id="duvidas">
      <div className="page-container faq-grid">
        <div className="faq-heading">
          <SectionLabel>PERGUNTAS FREQUENTES</SectionLabel>
          <h2>Antes de começar.</h2>
          <p>O essencial sobre a BeautyFlow, em poucas palavras.</p>
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <details className="faq-item" key={faq.question} open={index === 0}>
              <summary>{faq.question}<ChevronDown size={17} strokeWidth={1.5} /></summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BeautyFlowLandingPage() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="page-container header-inner">
          <Brand />
          <nav aria-label="Navegação principal" className="header-nav">
            <a href="#como-funciona">Como funciona</a>
            <a href="#demonstracao">Demonstração</a>
            <a href="#vendas">Vendas</a>
            <a href="#simulador">Simulador</a>
            <a href="#duvidas">Dúvidas</a>
          </nav>
          <a className="header-cta" href="#pre-venda">Lista de espera <ArrowRight size={14} /></a>
        </div>
      </header>

      <main>
        <Hero />
        <Benefits />
        <ConversationDemo />
        <ProductSalesSection />
        <RevenueEstimator />
        <HowItWorks />
        <EarlyAccess />
        <Faq />
      </main>

      <footer className="site-footer">
        <div className="page-container footer-inner">
          <Brand />
          <p>Mais presença no atendimento. Mais tempo para o seu trabalho.</p>
          <span>© {new Date().getFullYear()} BeautyFlow</span>
        </div>
      </footer>
    </div>
  );
}
