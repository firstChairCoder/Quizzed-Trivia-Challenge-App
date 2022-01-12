import React, { Fragment } from "react";
import { View } from "react-native";

import type { AnswerObject } from "../../App";

import Button from "./Button";

interface AnswerProps {
  answers: string[] | undefined;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setAnswer: any;
  checkAnswer: () => void;
  userAnswer: AnswerObject | undefined;
}

const Answer = ({
  answers,
  setAnswer,
  checkAnswer,
  userAnswer,
}: AnswerProps) => {
  // console.log(answers);
  return (
    <View
      style={{
        alignItems: "center",
        paddingTop: 14,
        paddingHorizontal: 24.5,
        marginTop: 30,
      }}
    >
      {answers?.map((answer, key) => (
        <Fragment key={answer}>
          <Button
            {...{ key, answer }}
            correct={userAnswer?.correctAnswer === answer}
            disabled={userAnswer ? true : false}
            onPress={() => {
              setAnswer.current = answer;
              checkAnswer();
            }}
          />
        </Fragment>
      ))}
    </View>
  );
};

export default Answer;
