import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from "react-native";

import { ReText } from "../CustomText";
import { ITheme } from "../../constants/theme";

type ButtonProps = {
  theme: ITheme;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  alignCenter?: boolean;
};

const Link: React.FC<ButtonProps> = ({
  children,
  theme,
  style,
  alignCenter,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles(theme).link,
        alignCenter ? styles(theme).center : {},
        style,
      ]}
    >
      <ReText.Body theme={theme}>{children}</ReText.Body>
    </TouchableOpacity>
  );
};

const styles = (theme: ITheme) =>
  StyleSheet.create({
    link: {
      height: theme.metrics.buttonHeight,
      width: theme.metrics.buttonWidth,
    },
    center: {
      alignItems: "center",
      justifyContent: "center",
    },
  });

export const Button = { Link };
