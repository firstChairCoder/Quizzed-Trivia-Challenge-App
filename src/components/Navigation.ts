import type { ParamListBase, RouteProp } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

export interface NativeStackNavigationProps<
  ParamList extends ParamListBase,
  RouteName extends keyof ParamList = string
> {
  navigation: NativeStackNavigationProp<ParamList, RouteName>;
  route: RouteProp<ParamList, RouteName>;
}

export type OnBoardingRoutes = {
  Welcome: undefined;
};

export type QuestionRoutes = {
  MainQuestion: undefined;
  Quiz: undefined;
};
