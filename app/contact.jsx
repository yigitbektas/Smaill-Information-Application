import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Contact = () => {
  return (
    <View style={styles.container}>



        <Text style={styles.title}>Contact Page</Text>
    
        <View style={styles.card}>
            <Link href="/" style={{ color: '#0d63f8', fontWeight: 'bold' }}>
                Back to Contact Page
            </Link>
        </View>
    
    </View>

    

  )
}

export default Contact

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center', // yazıyı ortaya hizala
        justifyContent: 'center', // yazıyı dikey olarak ortaya hizala
        backgroundColor: '#0d63f8'
    },
     title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
     },
     card: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        margin: 10,
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
     },   
})