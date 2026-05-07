import { StyleSheet, Text, useColorScheme } from 'react-native'
import React from 'react'
import Logo from '../assets/img/gold_logo.jpg'
import { Colors } from '../constants/Colors'
import { Link } from 'expo-router'
import ThemedView from '../components/ThemedView'
import ThemedCard from '../components/ThemedCard'
import ThemedLogo from '../components/ThemedLogo'


const Home = () => {
  
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light //eger ki color scheme tanımlanmazsa light temayı kullanırız  

  return (
    <ThemedView style={styles.container}>

        <ThemedLogo style = {{width: 200, height: 200, margin: 10}} />

        <Text style={[styles.title, { color: theme.text }]}>The Number One!</Text>
        <Text style={[styles.title, { fontSize: 16, margin: 20, color: theme.text }]}>Welcome to our SafeRoad Application!</Text>

        <ThemedCard style={styles.card}>
            <Text style={{color: theme.cardText, fontWeight: 'bold'}}>Start SafeRoad!!</Text>
        </ThemedCard>

        <ThemedCard style={styles.card}>
            <Link href="/about" style={{ color: theme.cardText, fontWeight: 'bold' }}>Go to About Page</Link>
        </ThemedCard>

        <ThemedCard style={styles.card}>
            <Link href="/contact" style={{ color: theme.cardText, fontWeight: 'bold', }}>Go to Contact Page</Link>
        </ThemedCard>

    </ThemedView>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center', // yazıyı ortaya hizala
        justifyContent: 'center', // yazıyı dikey olarak ortaya hizala
    },
     title: {
        fontSize: 24,
        fontWeight: 'bold',
     }, 
})