import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import React from 'react'
import { Slot,Stack } from 'expo-router'
import { StackScreen } from 'react-native-screens'
import { Colors } from '../constants/Colors'
import { StatusBar } from 'expo-status-bar'

const RootLayout = () => {

  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light //eger ki color scheme tanımlanmazsa light temayı kullanırız

  return (
    <>
     <StatusBar value="auto" />
        <View style={{ flex: 1 }}>
            <Stack screenOptions={{
                headerStyle: {backgroundColor: theme.navBackground},
                headerTitleStyle: {color: theme.title, fontWeight: 'bold'},
            }}>
                <Stack.Screen name="index" options={{ title: 'Home' }} />
                <Stack.Screen name="about" options={{ title: 'About' }} />
                <Stack.Screen name="contact" options={{ title: 'Contact'}} />
            </Stack> 
                <Text>Footer</Text>
        </View>
    </>
  )
}

export default RootLayout

const styles = StyleSheet.create({})