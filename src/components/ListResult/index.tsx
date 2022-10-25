import React from "react";
import { StyleSheet } from "react-native";

import { ITheme } from "../../constants/theme";
import { List } from "../List";
import { ItemListResult } from "../ItemListResult";
import { IQuizReducer } from "../../redux/types";

type ListResultProps<ItemT = IQuizReducer> = {
  theme: ITheme;
  data: Array<ItemT>;
};
export const ListResult: React.FC<ListResultProps> = ({ theme, data }) => {
  return (
    <List
      style={styles.container}
      theme={theme}
      data={data}
      item={({ item }) => (
        <ItemListResult
          theme={theme}
          isCorrectAnswer={item.correct_answer == item.answered}
          isWrongAnswer={item.correct_answer != item.answered}
          question={item.question}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});
