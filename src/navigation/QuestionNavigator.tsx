import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import type { QuestionRoutes } from "../components/Navigation";
import { QuestionScreen } from "../screens/QuestionScreen";

export const assets = [];

const QuestionStack = createNativeStackNavigator<QuestionRoutes>();
export const QuestionNavigator = () => (
  <QuestionStack.Navigator screenOptions={{ headerShown: false }}>
    <QuestionStack.Screen name={"MainQuestion"} component={QuestionScreen} />
  </QuestionStack.Navigator>
);
