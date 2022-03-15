import React from "react";
import { Dimensions } from "react-native";

import { Box, Text } from "./theme";

const { width } = Dimensions.get("window");

interface SlideProps {
  question: string;
}

const Slide = ({ question }: SlideProps) => {
  return (
    <Box {...{ width }} alignItems="center" padding="m">
      <Text variant="title" fontSize={24} marginTop="m">
        Question Number
      </Text>

      <Text variant="body" color="white" marginTop="xl" textAlign="center">
        {question}
      </Text>
    </Box>
  );
};

export default Slide;
