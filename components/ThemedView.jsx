import { View, useColorScheme } from 'react-native'
import React from 'react'
import { Colors } from '../constants/Colors'

const ThemedView = ({ style, ...props }) => {

  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light //eger ki color scheme tanımlanmazsa light temayı kullanırız

  return (
    <View
      style = {[{backgroundColor: theme.uiBackground}, style]}
      {...props}
    />  
  )
}

export default ThemedView