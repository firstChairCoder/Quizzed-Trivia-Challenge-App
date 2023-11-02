import { StatusBar } from "react-native";

import { ITheme } from "../../constants/theme";
import { FC } from "react";

type StatusBarCustomProps = {
  theme: ITheme;
};

export const StatusBarCustom: FC<StatusBarCustomProps> = ({ theme }) => {
  return (
    <StatusBar
      backgroundColor={theme.colors.background}
      barStyle={"light-content"}
    />
  );
};
