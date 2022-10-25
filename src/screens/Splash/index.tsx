import React from "react";
import { StyleSheet, View } from "react-native";

import { Container, ReText } from "../../components";
import { BaseTheme, ITheme } from "../../constants/theme";

export const SplashScreen: React.FC = ({ navigation }) => {
  React.useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Home");
    }, 3500);
  }, []);

  return (
    <Container theme={BaseTheme}>
      <View style={styles(BaseTheme).container}>
        <ReText.Title theme={BaseTheme} alignCenter style={styles(BaseTheme).logo}>
          Trivia{'\n'} Challenge
        </ReText.Title>
      </View>
    </Container>
  );
};

const styles = (theme: ITheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.colors.background,
    },
    logo: {
		fontWeight: "normal",
      fontSize: theme.fontSize.extraLargest * 1.5,
      fontFamily: theme.fontFamily.splash,
      color: theme.colors.text,
	  textTransform: "uppercase",
	  width: "100%"
    },
  });
