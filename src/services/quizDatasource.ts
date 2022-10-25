import { inject, injectable } from "tsyringe";
import { AxiosResponse } from "axios";

import { QuizModel, IQuizDatasource, InjectContants, IQuizRepository } from "../constants";
import { IApiClient } from "./api";
import { getAllMock } from "./quiz_mock";

interface IProps {
  results: QuizModel[];
}

@injectable()
export class QuizDatasource implements IQuizDatasource {
  constructor(
    @inject(InjectContants.IApiClient)
    private readonly apiClient: IApiClient
  ) {}

  async getAllQuiz(): Promise<QuizModel[]> {
    const response = (await this.apiClient.getAll<IProps>({
      mockAxiosResponse: getAllMock,
    })) as AxiosResponse<IProps>;
    const parsedResponse = response.data.results.map((body) =>
      QuizModel.fromApi(body)
    );
    return parsedResponse;
  }
}

@injectable()
export class QuizRepository implements IQuizRepository {
  constructor(
    @inject(InjectContants.IQuizDatasource)
    private readonly datasource: IQuizDatasource
  ) {}
  async getAll(): Promise<QuizEntity[]> {
    const result = await this.datasource.getAllQuiz() as QuizModel[];
    const parsedResult = result.map(quiz => QuizModel.toEntity(quiz));
    return parsedResult;
  }

}