import { View, useColorScheme, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '../constants/Colors'

const ThemedView = ({ style, ...props }) => {

  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light //eger ki color scheme tanımlanmazsa light temayı kullanırız

  return (
    <View
      style = {[{backgroundColor: theme.cardBackground}, styles.card, style]}
      {...props}
    />  
  )
}

export default ThemedView

const styles = StyleSheet.create({
    card: {
        borderRadius: 20,
        padding: 20,
        margin: 10,
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
})    