import { StackActions, useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

import { Button, List, ListResult, Container, ReText } from "../../components";
import { BaseTheme } from "../../constants/theme";
import { GlobalState } from "../../redux/types";
import { FC } from "react";

const useResultController = () => {
  const state = useSelector((state: GlobalState) => state.quizReducer);
  const navigation = useNavigation();
  const goHome = () => navigation.dispatch(StackActions.popToTop());
  return {
    getController: {
      quiz: state,
    },
    handlerController: {
      goHome,
    },
  };
};

export const Result = () => {
  const {
    getController: { quiz },
    handlerController,
  } = useResultController();
  return (
    <Container theme={BaseTheme}>
      <ReText.Title theme={BaseTheme} alignCenter>
        You scored
      </ReText.Title>
      <ReText.Title
        theme={BaseTheme}
        alignCenter
      >{`${quiz.correctAnswers} / ${quiz.totalCount}`}</ReText.Title>
      <ListResult theme={BaseTheme} data={quiz.quizzes} />
      <Button.Link
        theme={BaseTheme}
        alignCenter
        onPress={() => handlerController.goHome()}
      >
        PLAY AGAIN?
      </Button.Link>
    </Container>
  );
};
