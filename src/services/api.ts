import axios, { AxiosInstance, AxiosResponse } from "axios";

interface IProps {
  mockSimulate: boolean;
}
interface IParams<T> {
  mockAxiosResponse: AxiosResponse<T>;
}
export interface IApiClient {
  getAll<T>({
    mockAxiosResponse,
  }: IParams<T>): Promise<AxiosResponse<T> | Error>;
}

export class ApiClient implements IApiClient {
  api: AxiosInstance;
  mockSimulate: boolean;

  constructor({ mockSimulate = false }: IProps) {
    this.mockSimulate = mockSimulate;
    this.api = axios.create({
      baseURL:
        "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean",
      timeout: 10000
    });
  }

  async getAll<T>({
    mockAxiosResponse,
  }: IParams<T>): Promise<AxiosResponse<T, any>> {
    try {
      return this.mockSimulate ? mockAxiosResponse : await this.api.get<T>("");
    } catch (error) {
      throw error;
    }
  }
}
