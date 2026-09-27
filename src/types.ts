export interface CheckoutFormState {
  fullName: string;
  whatsapp: string;
  cpf: string;
  instagram: string;
}

export interface ProfessionScenario {
  id: 'hair' | 'tattoo' | 'lash';
  label: string;
  role: string;
  avatar: string;
  clientName: string;
  messages: Array<{
    sender: 'client' | 'assistant';
    text: string;
    time: string;
    isUpsell?: boolean;
    isCalendar?: boolean;
  }>;
}

export type CheckoutStep = 'form' | 'pix' | 'success';
