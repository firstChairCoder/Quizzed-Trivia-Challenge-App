import "reflect-metadata";

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import {
  Lato_300Light,
  Lato_400Regular,
  Lato_400Regular_Italic,
  Lato_700Bold,
  useFonts
} from "@expo-google-fonts/lato";
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

import store from './src/redux/store';
import { Routes } from './src/navigation/routes';

export default function App() {
  const [loadedFonts] = useFonts({
    LatoLight: Lato_300Light,
    Lato: Lato_400Regular,
    LatoItalic: Lato_400Regular_Italic,
    LatoBold: Lato_700Bold
  });

  if (!loadedFonts) {
    return <ActivityIndicator />;
  }

  return (
    <Provider store={store}>
    <SafeAreaProvider style={{ flex: 1 }}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </SafeAreaProvider>
  </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
