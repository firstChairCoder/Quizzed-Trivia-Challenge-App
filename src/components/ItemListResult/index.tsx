import { View, StyleSheet } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";

import { ReText } from "../CustomText";
import { ITheme } from "../../constants/theme";
import { FC } from "react";

type ItemListResultProps = {
  theme: ITheme;
  isCorrectAnswer: boolean;
  isWrongAnswer: boolean;
  question: string;
};
export const ItemListResult: FC<ItemListResultProps> = ({
  theme,
  isCorrectAnswer,
  isWrongAnswer,
  question,
}) => {
  return (
    <View style={styles(theme).container}>
      {isCorrectAnswer && <Icon name={"plus-square"} color="#FFF" size={24} />}
      {isWrongAnswer && <Icon name={"minus-square"} color="#FFF" size={24} />}
      <ReText.Body style={styles(theme).question} theme={theme}>
        {question}
      </ReText.Body>
    </View>
  );
};

const styles = (theme: ITheme) =>
  StyleSheet.create({
    container: { flexDirection: "row" },
    question: {
      marginBottom: theme.metrics.large,
      marginLeft: theme.metrics.base,
    },
  });
