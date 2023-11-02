import {
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from "react-native";

import { ReText } from "../CustomText";
import { ITheme } from "../../constants/theme";
import { FC } from "react";

type ButtonProps = {
  theme: ITheme;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  alignCenter?: boolean;
};

const Link: FC<ButtonProps> = ({
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
      // activeOpacity={(pressed) => (pressed ? 0.7 : 1)}
      activeOpacity={0.65}
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
      borderRadius: 12,
      borderWidth: 1,
      borderColor: "white",
      marginVertical: 8,
    },
    center: {
      alignItems: "center",
      justifyContent: "center",
    },
  });

export const Button = { Link };
