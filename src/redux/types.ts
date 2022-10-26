import { types } from "mobx-state-tree";

export interface IQuizReducer extends QuizEntity {
  answered?: boolean;
  currentCount?: Number;
}
export interface IQuizInitialState {
  loading: boolean;
  error: boolean;
  empty: boolean;
  quizzes: IQuizReducer[];
  currentQuiz: IQuizReducer;
  totalCount: Number;
  correctAnswers: Number;
}

interface IActionPayload {
  answer: boolean;
  quizzes: QuizEntity[];
}

export interface IQuizActions {
  payload: IActionPayload;
  type: string;
}

interface IProps {
  category: string;
  question: string;
  correct_answer: boolean;
}

export class QuizEntity {
  category: string;
  question: string;
  correct_answer: boolean;

  constructor({ category, question, correct_answer }: IProps) {
    this.category = category;
    this.question = question;
    this.correct_answer = correct_answer;
  }
}

export enum QuizReducerConstants {
  QUIZ_START_LOADING = 'QUIZ_START_LOADING',
  QUIZ_STATUS_SUCCESS = 'QUIZ_STATUS_SUCCESS',
  QUIZ_STATUS_FAILURE = 'QUIZ_STATUS_FAILURE',
  QUIZ_STATUS_EMPTY = 'QUIZ_STATUS_EMPTY',
  QUIZ_ANSWER_SUCCESS = 'QUIZ_ANSWER_SUCCESS',
}

export type GlobalState = {
  quizReducer: IQuizInitialState
}