import { StyleSheet, View } from "react-native";

import { Container, ReText } from "../../components";
import { BaseTheme, ITheme } from "../../constants/theme";
import { FC, useEffect } from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/routes";

type SplashScreenProps = StackScreenProps<RootStackParamList, 'Splash'>

export const SplashScreen: FC<SplashScreenProps> = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Home");
    }, 3500);
  }, []);

  return (
    <Container theme={BaseTheme}>
      <View style={styles(BaseTheme).container}>
        <ReText.Title
          theme={BaseTheme}
          alignCenter
          style={styles(BaseTheme).logo}
        >
          Trivia{"\n"} Challenge
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
      fontSize: theme.fontSize.extraLargest * 1.5,
      fontFamily: theme.fontFamily.splash,
      color: theme.colors.text,
      textTransform: "uppercase",
      width: "100%",
    },
  });
