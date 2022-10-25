import React from 'react'
import { View, StyleSheet, StyleProp, ViewStyle  } from 'react-native'

import { ITheme } from "../../constants/theme";

type CardProps = {
  theme: ITheme,
  style?: StyleProp<ViewStyle>,
}

export const Card: React.FC<CardProps> = ({children, theme, style}) => {
  return (
    <View style={[styles(theme).container, style]}>
      {children}
    </View>
  )
}

const styles = (theme:ITheme) => StyleSheet.create({
    container: {
      borderColor: theme.colors.elements,
      borderWidth: theme.metrics.borderWidth,
      backgroundColor: theme.colors.background,
      padding: theme.metrics.large,
    }
  });