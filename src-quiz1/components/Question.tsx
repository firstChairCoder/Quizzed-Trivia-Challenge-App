import React from "react";
import { View, Text } from "react-native";

interface QuestionProps {
  number: number;
  question: string | undefined;
}

const Question = ({ number, question }: QuestionProps) => {
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 33,
          paddingRight: 10,
        }}
      >
        <Text style={{ fontSize: 16, color: "#006996", marginRight: 10 }}>
          {number}
        </Text>

        <Text style={{ fontSize: 16, textAlign: "left" }}>{question}</Text>
      </View>
    </>
  );
};

export default Question;
