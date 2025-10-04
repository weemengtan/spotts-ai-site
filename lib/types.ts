export interface Step {
  title: string;
  desc: string;
  detail: string;
  source: string;
}

export interface Problem {
  title: string;
  stat: string;
  solution: string;
  outcome: string;
  source: string;
  sourceUrl: string;
}

export interface Outcome {
  company: string;
  metric: string;
  detail: string;
  source: string;
  sourceUrl: string;
}

export interface SourceLinkProps {
  source: string;
  url: string;
  index: string;
}

export interface UIState {
  scrollY: number;
  activeStep: number;
  showSource: string | null;
  showContactModal: boolean;
  setScrollY: (scrollY: number) => void;
  setActiveStep: (step: number) => void;
  setShowSource: (source: string | null) => void;
  setShowContactModal: (show: boolean) => void;
}

export interface ContactFormData {
  name: string;
  email: string;
  mobile: string;
  message?: string;
}