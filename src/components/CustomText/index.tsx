import React from "react";
import { Text, StyleSheet, StyleProp, ViewStyle } from "react-native";

import { ITheme } from "../../constants/theme";

type TextsProps = {
  theme: ITheme;
  alignCenter?: boolean;
  style?: StyleProp<ViewStyle>;
};

const Body: React.FC<TextsProps> = ({
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

const Title: React.FC<TextsProps> = ({
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
      fontFamily: theme.fontFamily.bold,
      color: theme.colors.text,
    },
    textCenter: { textAlign: "center" },
  });

export const ReText = { Body, Title };
