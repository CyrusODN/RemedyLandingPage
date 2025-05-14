export interface Question {
  id: string;
  text: string;
  type: 'scale' | 'yesno';
  options?: number[];
}

export interface Answer {
  questionId: string;
  value: string | number;
}

export interface Questionnaire {
  id: string;
  date: string;
  answers: Answer[];
}