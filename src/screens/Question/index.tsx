import React from "react";
import { View } from "react-native"
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { container } from "tsyringe"

import { CardQuestion, CircleProgress, Container, ReText } from "../../components";
import { BaseTheme } from "../../constants/theme";
import { GlobalState } from "../../redux/types";
import {
  quizStatusLoading,
  quizLoadEmpty,
  quizLoadSuccess,
  quizLoadFailure,
  quizAnswerSuccess
} from "../../redux/actions";
import {
  InjectContants,
  navigationConstants,
  IGetAllQuizUseCase,
  GetAllQuizUseCase,
} from "../../constants";
import { ApiClient } from "../../services/api"
import { QuizDatasource, QuizRepository } from "../../services/quizDatasource";

export const quizDependences = () => {
  container.register(InjectContants.IApiClient,{useValue: new ApiClient({mockSimulate: false})});
  container.register(InjectContants.IQuizDatasource,{useClass: QuizDatasource});
  container.register(InjectContants.IQuizRepository,{useClass: QuizRepository});
  container.register(InjectContants.GetAllQuizUseCase,{useClass: GetAllQuizUseCase});
}

quizDependences()
const useQuestionController = () => {
  const state = useSelector((state: GlobalState) => state.quizReducer);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const getAllQuiz = container.resolve<IGetAllQuizUseCase>(
    InjectContants.GetAllQuizUseCase
  );

  React.useEffect(() => {
    const load = async () => {
      dispatch(quizStatusLoading());
      try {
        const response = await getAllQuiz.call();
        if (response.length == 0) dispatch(quizLoadEmpty());
        else dispatch(quizLoadSuccess(response));
      } catch (error) {
        dispatch(quizLoadFailure());
      }
    };
    load();
  }, []);
  const answerQuestion = (answer: string) => {
    dispatch(quizStatusLoading());
    dispatch(quizAnswerSuccess(answer));
    // Vefify if it is last question and navigate to results
    if (state.currentQuiz.currentCount == state.totalCount) {
      navigation.navigate(navigationConstants.RESULT as never);
    }
  };
  return {
    getController: {
      loading: state.loading,
      quiz: state.currentQuiz,
      totalCount: state.totalCount,
      empty: state.empty,
      error: state.error,
    },
    handlerController: {
      answerQuestion,
    },
  };
};

export const Question: React.FC = () => {
  const {
    getController: { quiz, loading, totalCount, empty, error },
    handlerController,
  } = useQuestionController();
  return (
    <Container theme={BaseTheme} loading={loading} empty={empty} error={error}>
      <ReText.Title theme={BaseTheme} alignCenter>
        {quiz.category}
      </ReText.Title>
      <View style={{ marginTop: 24, height: 96, width: 96, borderRadius: 48, borderColor: "white", justifyContent: "center", alignItems: "center", alignSelf
    : 'center', borderWidth: 2}}>
        <CircleProgress percentage={quiz.currentCount} color={"pink"} max={totalCount}  />
      </View>
      
      <View style={{ flex: 1, justifyContent: "center" }}>
        <CardQuestion
          theme={BaseTheme}
          label={quiz.question}
          onPressTrue={() => handlerController.answerQuestion("True")}
          onPressFalse={() => handlerController.answerQuestion("False")}
        />
        
      </View>
      <View style={{ width: "100%", height: 8, backgroundColor: "white", borderRadius: 16}} />
    </Container>
  );
};
