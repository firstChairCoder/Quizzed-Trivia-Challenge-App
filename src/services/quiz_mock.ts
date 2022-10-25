import { AxiosResponse } from "axios";
import { QuizModel } from "../constants";

interface IProps {
  results: QuizModel[];
}
export const getAllMock: AxiosResponse<IProps> = {
  data: {
    results: [
      new QuizModel({
        category: "teste",
        question: "teste",
        correct_answer: true,
      }),
    ],
  },
  status: 200,
  config: {},
  headers: {},
  statusText: "",
};
