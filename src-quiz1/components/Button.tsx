import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { elevate } from "react-native-elevate";

const styles = StyleSheet.create({
  container: {
    height: 43,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 14,
    paddingHorizontal: 13,
    borderRadius: 2,
    backgroundColor: "#fff",
  },
  label: {
    fontSize: 16,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    textTransform: "capitalize",
  },
});

interface ButtonProps {
  answer: string;
  key: number;
  onPress: () => void;
  correct: boolean;
  disabled: boolean;
  // label: string
}

const Button = ({ answer, onPress, correct, disabled }: ButtonProps) => {
  // console.log(correct);
  return (
    <RectButton
      {...{ onPress }}
      style={[
        styles.container,
        elevate(5),
        { backgroundColor: !disabled ? "#FFF" : "red" },
      ]}
    >
      <View accessible accessibilityRole={"button"}>
        <Text style={{ ...styles.label, color: correct ? "lime" : "#006996" }}>
          {answer}
        </Text>
      </View>
    </RectButton>
  );
};

export default Button;
