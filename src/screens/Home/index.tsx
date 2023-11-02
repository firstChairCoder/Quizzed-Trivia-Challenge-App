import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Button, Container, ReText } from "../../components";
import { BaseTheme, ITheme } from "../../constants/theme";
import { navigationConstants } from "../../constants";

const useHomeController = () => {
  const navigation = useNavigation();
  const navigateToQuestion = () =>
    navigation.navigate(navigationConstants.QUESTION as never);

  return {
    handleController: {
      navigateToQuestion,
    },
  };
};

export const Home = () => {
  const { handleController } = useHomeController();
  return (
    <Container theme={BaseTheme}>
      <View style={styles(BaseTheme).container}>
        <ReText.Title
          theme={BaseTheme}
          alignCenter
        >{`Welcome to the\nTrivia Challenge`}</ReText.Title>
        <ReText.Body
          theme={BaseTheme}
          alignCenter
        >{`You will be presented\nwith 10 True or False\nquestions.`}</ReText.Body>
        <ReText.Body
          theme={BaseTheme}
          alignCenter
        >{`Can you score 100%?`}</ReText.Body>
        <Button.Link
          theme={BaseTheme}
          onPress={handleController.navigateToQuestion}
          alignCenter
        >
          BEGIN
        </Button.Link>
      </View>
    </Container>
  );
};

const styles = (theme: ITheme) =>
  StyleSheet.create({
    container: {
      justifyContent: "space-between",
      padding: theme.metrics.base,
      height: "100%",
    },
  });
