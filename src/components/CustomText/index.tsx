import {
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
} from "react-native";

import { ITheme } from "../../constants/theme";
import { FC } from "react";

type TextsProps = {
  theme: ITheme;
  alignCenter?: boolean;
  style?: StyleProp<TextStyle>;
};

const Body: FC<TextsProps> = ({
  children,
  theme,
  alignCenter = false,
  style,
}) => (
  <Text
    style={[
      styles(theme).body,
      alignCenter ? styles(theme).textCenter : {},
      style,
    ]}
  >
    {children}
  </Text>
);

const Title: FC<TextsProps> = ({
  children,
  theme,
  alignCenter = false,
  style,
}) => (
  <Text
    style={[
      styles(theme).title,
      alignCenter ? styles(theme).textCenter : {},
      style,
    ]}
  >
    {children}
  </Text>
);

const styles = (theme: ITheme) =>
  StyleSheet.create({
    body: {
      fontSize: theme.fontSize.base,
      color: theme.colors.text,
      fontFamily: theme.fontFamily.regular,
    },
    title: {
      fontSize: theme.fontSize.base,
      fontWeight: "bold",
      fontFamily: theme.fontFamily.light,
      color: theme.colors.text,
    },
    textCenter: { textAlign: "center" },
  });

export const ReText = { Body, Title };
