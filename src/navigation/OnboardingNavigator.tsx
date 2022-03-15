import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import type { OnBoardingRoutes } from "../components/Navigation";
import { WelcomeScreen } from "../screens/WelcomeScreen";

export const assets = [];

const OnBoardingStack = createNativeStackNavigator<OnBoardingRoutes>();

export const OnBoardingNavigator = () => (
  <OnBoardingStack.Navigator screenOptions={{ headerShown: false }}>
    <OnBoardingStack.Screen name="Welcome" component={WelcomeScreen} />
  </OnBoardingStack.Navigator>
);
