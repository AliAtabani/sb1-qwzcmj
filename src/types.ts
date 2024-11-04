export type Service = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export type Question = {
  id: string;
  text: string;
  type: 'text' | 'textarea' | 'radio' | 'checkbox' | 'email';
  options?: string[];
  required: boolean;
};

export type Questionnaire = {
  serviceId: string;
  title: string;
  description: string;
  questions: Question[];
};

export type FormData = {
  serviceId: string;
  answers: Record<string, string>;
};