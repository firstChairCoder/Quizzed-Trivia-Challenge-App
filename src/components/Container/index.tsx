import {
  View,
  SafeAreaView,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { StatusBarWrapper } from "../StatusBarWrapper";
import { StatusBarCustom } from "../StatusBarCustom";
import { ReText } from "../CustomText";
import { Button } from "../Button";
import ImageError from "../../../assets/images/Error.svg";
import { ITheme } from "../../constants/theme";
import { FC } from "react";

type ContainerProps = {
  theme: ITheme;
  loading?: boolean;
  isScrollList?: boolean;
  empty?: boolean;
  error?: boolean;
};

export const Container: FC<ContainerProps> = ({
  children,
  theme,
  loading = false,
  empty = false,
  error = false,
}) => {
  const navigation = useNavigation();
  if (loading) {
    return (
      <>
        <StatusBarWrapper theme={theme} />
        <View style={[styles(theme).container, styles(theme).loading]}>
          <StatusBarCustom theme={theme} />
          <ActivityIndicator />
        </View>
      </>
    );
  }

  if (error) {
    return (
      <>
        <StatusBarWrapper theme={theme} />
        <View
          style={[
            styles(theme).container,
            styles(theme).loading,
            { paddingHorizontal: 20 },
          ]}
        >
          <StatusBarCustom theme={theme} />
          <ReText.Body style={styles(theme).error} theme={theme} alignCenter>
            Oops, your connection seems off...
          </ReText.Body>
          <ImageError />
          <Button.Link
            style={styles(theme).button}
            theme={theme}
            alignCenter
            onPress={() => navigation.goBack()}
          >
            BACK
          </Button.Link>
        </View>
      </>
    );
  }

  if (empty) {
    return (
      <>
        <StatusBarWrapper theme={theme} />
        <View style={[styles(theme).container, styles(theme).loading]}>
          <StatusBarCustom theme={theme} />
          <ReText.Body style={styles(theme).error} theme={theme} alignCenter>
            No result found.
          </ReText.Body>
          <ImageError />
          <Button.Link
            style={styles(theme).button}
            theme={theme}
            alignCenter
            onPress={() => navigation.goBack()}
          >
            BACK
          </Button.Link>
        </View>
      </>
    );
  }

  return (
    <>
      <StatusBarWrapper theme={theme} />
      <SafeAreaView style={styles(theme).container}>
        <StatusBarCustom theme={theme} />
        <View style={styles(theme).content}>{children}</View>
      </SafeAreaView>
    </>
  );
};

const styles = (theme: ITheme) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.colors.background,
      flex: 1,
    },
    content: {
      flex: 1,
      padding: theme.metrics.base,
    },
    scrollView: {
      backgroundColor: theme.colors.background,
      flex: 1,
      paddingHorizontal: theme.metrics.base,
    },
    loading: {
      justifyContent: "center",
      alignItems: "center",
    },
    button: {
      marginTop: theme.metrics.largest,
    },
    error: { marginBottom: theme.metrics.largest },
  });
