interface IProps {
  category: string,
  question: string,
  correct_answer: boolean,
}

export class QuizEntity {
  category: string;
  question: string;
  correct_answer: boolean;

  constructor ({
    category,
    question,
    correct_answer,
  }:IProps) {
    this.category = category;
    this.question = question;
    this.correct_answer = correct_answer;
  }
}