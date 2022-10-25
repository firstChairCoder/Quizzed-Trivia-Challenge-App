import { Dimensions } from "react-native"

const { width, height } = Dimensions.get("window")
export type IColor = {
  background: string;
  backgroundSecondary: string;
  backgroundModal: string;
  elements: string;
  elementsSecondary: string;
  elementsThird: string;
  text: string;
  textSecondary: string;
  textElements: string;
  textElementsSecondary: string;
  textHighlight: string;
  warn: string;
  error: string;
  success: string;
};

export type IFontFamily = {
  regular: string;
  bold: string;
  light: string;
};

export type IFontSize = {
  smallest: number;
  small: number;
  base: number;
  large: number;
  largest: number;
  extraLargest: number;
};

export type IMetrics = {
  smallest: number;
  small: number;
  base: number;
  large: number;
  largest: number;
  inputHeight: string;
  inputWidth: string;
  buttonHeight: number;
  buttonWidth: string;
  buttonHeightSmall: string;
  buttonWidthSmall: string;
  radiusBase: number;
  radiusLarge: number;
  radiusLargest: number;
  radiusRounded: number;
  borderWidth: number;
  screenWidth: number;
  screenHeight: number;
  avatarSize: number;
};

export type ITheme = {
  metrics: IMetrics;
  fontSize: IFontSize;
  colors: IColor;
  fontFamily: IFontFamily;
};

const baseColors = {
  highlight: "#D52817",
  white: "#fff",
  grey: "#c4c4c4",
  greyLight: "#f0f0f0",
  blackLight: "#404040",
  black: "#0D0D0D",
  blackOpacity: "rgba(0,0,0,0.5)",
  yelow: "#d9dc11",
  red: "#e51818",
  green: "#11ff00",
};

export const colors: ITheme = {
  background: baseColors.white,
  backgroundSecondary: baseColors.grey,
  backgroundModal: baseColors.blackOpacity,
  elements: baseColors.black,
  elementsSecuodary: baseColors.blackLight,
  text: baseColors.black,
  textSecondary: baseColors.blackLight,
  textElements: baseColors.white,
  textElementsSecondary: baseColors.grey,
  textHighlight: baseColors.highlight,
  warn: baseColors.yelow,
  error: baseColors.red,
  success: baseColors.green,
  elementsThird: baseColors.greyLight,
};

export const fontFamily: IFontFamily = {
  regular: "Lato",
  bold: "LatoBold",
  light: "LatoLight",
};

export const fontSize: IFontSize = {
  smallest: 12,
  small: 16,
  base: 20,
  large: 24,
  largest: 28,
  extraLargest: 32,
};

export const metrics: IMetrics = {
  smallest: 3,
  small: 4,
  base: 8,
  large: 16,
  largest: 32,
  inputHeight: "30%",
  inputWidth: "40%",
  buttonHeight: 40,
  buttonWidth: "100%",
  buttonHeightSmall: "15%",
  buttonWidthSmall: "20%",
  radiusBase: 8,
  radiusLarge: 20,
  radiusLargest: 50,
  radiusRounded: 50,
  borderWidth: 1,
  screenWidth: width,
  screenHeight: height,
  avatarSize: 70,
};

export const BaseTheme:ITheme = {
  metrics,
  fontSize,
  colors,
  fontFamily,
};