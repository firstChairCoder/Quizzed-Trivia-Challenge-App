import { createStackNavigator } from "@react-navigation/stack";
import { Home, Question, Result, SplashScreen } from "../screens";
import { FC } from "react";

const Stack = createStackNavigator();

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
