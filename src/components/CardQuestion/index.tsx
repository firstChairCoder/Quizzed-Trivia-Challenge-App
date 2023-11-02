import { View, StyleSheet } from "react-native";

import { ReText } from "../CustomText";
import { Card } from "../Card";
import { Button } from "../Button";
import { ITheme } from "../../constants/theme";
import { FC } from "react";

type CardQuestionProps = {
  theme: ITheme;
  label: string;
  onPressTrue: () => void;
  onPressFalse: () => void;
};
export const CardQuestion: FC<CardQuestionProps> = ({
  theme,
  label,
  onPressFalse,
  onPressTrue,
}) => {
  return (
    <Card theme={theme} style={styles(theme).container}>
      <ReText.Body theme={theme} alignCenter>
        {label}
      </ReText.Body>
      <View style={styles(theme).buttonView}>
        <Button.Link
          style={styles(theme).button}
          alignCenter
          theme={theme}
          onPress={onPressTrue}
        >
          TRUE
        </Button.Link>
        <Button.Link
          style={styles(theme).button}
          alignCenter
          theme={theme}
          onPress={onPressFalse}
        >
          FALSE
        </Button.Link>
      </View>
    </Card>
  );
};

const styles = (theme: ITheme) =>
  StyleSheet.create({
    container: {
      padding: theme.metrics.largest,
      marginBottom: theme.metrics.large,
      marginHorizontal: theme.metrics.base,
      paddingVertical: theme.metrics.largest,
    },
    buttonView: {
      flexDirection: "row",
      justifyContent: "space-evenly",
      marginTop: theme.metrics.largest,
    },
    button: { flex: 1 },
  });
