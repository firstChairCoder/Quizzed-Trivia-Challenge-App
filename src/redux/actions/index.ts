import {QuizReducerConstants, QuizEntity} from "../types"

export const quizStatusLoading = () => {
  return {
    type: QuizReducerConstants.QUIZ_START_LOADING,
    payload: {},
  }
}

export const quizLoadFailure = () => {
  return {
    type: QuizReducerConstants.QUIZ_STATUS_FAILURE,
    payload: {},
  }
}

export const quizLoadEmpty = () => {
  return {
    type: QuizReducerConstants.QUIZ_STATUS_EMPTY,
    payload: {},
  }
}

export const quizLoadSuccess = (quizzes: QuizEntity[]) => {
  return {
    type: QuizReducerConstants.QUIZ_STATUS_SUCCESS,
    payload: {quizzes}
  }
}

export const quizAnswerSuccess = (answer: string) => {
  return {
    type: QuizReducerConstants.QUIZ_ANSWER_SUCCESS,
    payload: {answer}
  }
}