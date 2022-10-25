import React from "react";
import { StatusBar } from "react-native";

import { ITheme } from "../../constants/theme";

type StatusBarCustomProps = {
  theme: ITheme;
};

export const StatusBarCustom: React.FC<StatusBarCustomProps> = ({ theme }) => {
  return (
    <StatusBar
      backgroundColor={theme.colors.background}
      barStyle={"dark-content"}
    />
  );
};
