import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import React from 'react'
import { Slot,Stack } from 'expo-router'
import { StackScreen } from 'react-native-screens'
import { Colors } from '../constants/Colors'
import ink from '../assets/img/linkedin.png'
import { StatusBar } from 'expo-status-bar'

const RootLayout = () => {

  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light //eger ki color scheme tanımlanmazsa light temayı kullanırız

  return (
    <>
     <StatusBar value="auto" />
        <View style={{ flex: 1 }}>
            <Stack screenOptions={{
                headerStyle: {backgroundColor: theme.uiBackground},
                headerTitleStyle: {color: theme.title, fontWeight: 'bold'},
                headerTintColor: theme.navBackground,
                headerShadowVisible: false,
                headerTitle: '',
            }}>
                <Stack.Screen name="index"/>
                <Stack.Screen name="about"/>
                <Stack.Screen name="contact"/>
            </Stack>
            <View style={{ backgroundColor: theme.uiBackground, fontSize: 16}}> 
                <Text style ={{ color: theme.text, fontSize: 20, margin: 21}}>
                    SafeRoute © 2026
                </Text>
            </View>
        </View>
    </>
  )
}

export default RootLayout

const styles = StyleSheet.create({})