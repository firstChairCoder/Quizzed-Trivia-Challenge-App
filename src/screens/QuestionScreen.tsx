import React, { Fragment, useRef } from "react";
import { verticalScale } from "react-native-size-matters";
import Constants from "expo-constants";
import { Dimensions, SafeAreaView } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import type Animated from "react-native-reanimated";

import { Box, Text } from "../components/theme";
import Slide from "../components/Slide";
import { questions } from "../util/dummyData";

const { width, height } = Dimensions.get("window");

export const QuestionScreen = () => {
  const scrollRef = useRef<Animated.ScrollView>(null);
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: Constants.statusBarHeight }}>
      <Box flex={1}>
        <Box flex={1} justifyContent={"flex-start"}>
          <Box height={verticalScale(height * 0.3)} backgroundColor={"primary"}>
            <ScrollView
              ref={scrollRef}
              horizontal
              snapToInterval={width}
              decelerationRate="fast"
              scrollEventThrottle={16}
              bounces={false}
            >
              {questions.map(({ question }, index) => (
                <Fragment key={index}>
                  <Slide {...{ question }} />
                </Fragment>
              ))}
            </ScrollView>
          </Box>
        </Box>
      </Box>
    </SafeAreaView>
  );
};
