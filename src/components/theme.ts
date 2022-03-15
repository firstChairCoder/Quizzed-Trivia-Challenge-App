import { createText, createBox } from "@shopify/restyle";
import { moderateScale } from "react-native-size-matters";

const theme = {
  colors: {
    white: "#FFFFFF",
    primary: "#2133A0",
    text: "#272829",
    button: "#7C72FF",
    color: "#0C0D34",
    grey: "#BABD98",
    danger: "#FF0055",
    green: "#0BBF29",
    black: "#121212",
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  borderRadii: {
    s: 4,
    m: 10,
    l: 25,
    xl: 75,
  },
  textVariants: {
    title: {
      fontSize: moderateScale(35),
      fontFamily: "Montserrat-Bold",
      color: "white",
    },
    body: {
      fontSize: 16,
      lineHeight: 25,
      fontFamily: "Montserrat-Regular",
      color: "text",
    },
    button: {
      fontSize: 15,
      fontFamily: "Montserrat-Medium",
      color: "text",
    },
  },
  breakpoints: {},
};

export type Theme = typeof theme;
export const Box = createBox<Theme>();
export const Text = createText<Theme>();
export default theme;
