import React from 'react'
import {SafeAreaView, StyleSheet} from 'react-native'

import { ITheme } from "../../constants/theme";

type StatusBarWrapperProps = {
  theme: ITheme;
}

export const StatusBarWrapper: React.FC<StatusBarWrapperProps> = ({theme}) => {
  return (
    <SafeAreaView style={styles(theme).container} />
  )
}

const styles = (theme: ITheme) => StyleSheet.create({
    container: {
      flex: 0,
      backgroundColor: theme.colors.background
    }
  });