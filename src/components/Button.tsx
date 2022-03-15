import React from "react";
import { StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useTheme } from "@shopify/restyle";

import type { Theme } from "./theme";
import { Text } from "./theme";

interface ButtonProps {
  variant?: "default" | "primary";
  label?: string;
  onPress?: () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  textTransform?: any;
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 50,
    height: 50,
    width: 245,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
});

const Button = ({ variant, label, onPress, textTransform }: ButtonProps) => {
  const theme = useTheme<Theme>();
  const backgroundColor =
    variant === "primary" ? theme.colors.button : theme.colors.grey;
  const color = variant === "primary" ? theme.colors.white : theme.colors.green;

  return (
    <RectButton
      {...{ onPress }}
      style={{ ...styles.container, backgroundColor }}
    >
      <Text
        style={{
          color,
        }}
        textTransform={textTransform ? textTransform : "lowercase"}
        variant="button"
      >
        {label}
      </Text>
    </RectButton>
  );
};

Button.defaultProps = { variant: "default" };

export default Button;
