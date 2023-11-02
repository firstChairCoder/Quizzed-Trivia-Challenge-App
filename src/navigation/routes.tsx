import { createStackNavigator } from "@react-navigation/stack";
import { Home, Question, Result, SplashScreen } from "../screens";
import { FC } from "react";

export type RootStackParamList = {
  Splash: {};
  Home: {};
  Question: {};
  Result: {}
}

const Stack = createStackNavigator<RootStackParamList>();

export const Routes: FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Question" component={Question} />
      <Stack.Screen name="Result" component={Result} />
    </Stack.Navigator>
  );
};
