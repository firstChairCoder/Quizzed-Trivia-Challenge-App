import { QuizEntity } from "../entities";

export interface IQuizRepository {
  getAll(): Promise<QuizEntity[]>;
}