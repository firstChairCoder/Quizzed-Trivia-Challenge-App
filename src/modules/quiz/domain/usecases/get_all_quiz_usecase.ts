// import { InjectContants } from "@src/core/constants";
import { inject, injectable } from "tsyringe";
import { QuizEntity } from "../entities";
import { IQuizRepository } from "../repositories";

export interface IGetAllQuizUseCase {
  call(): Promise<QuizEntity[]>;
}

@injectable()
export class GetAllQuizUseCase implements IGetAllQuizUseCase {

  constructor(
    @inject(InjectContants.IQuizRepository)
    private readonly repository: IQuizRepository
  ) {}

  async call(): Promise<QuizEntity[]> {
    return await this.repository.getAll();
  }

}