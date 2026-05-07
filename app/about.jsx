import { StyleSheet, Text, View, useColorScheme, Image, ScrollView } from 'react-native'
import React from 'react'
import Logo from '../assets/img/goldlogo2.png'
import profil from '../assets/img/profil.jpg'
import { Colors } from '../constants/Colors'
import ThemedView from '../components/ThemedView'

const About = () => {
  
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light //eger ki color scheme tanımlanmazsa light temayı kullanırız 

  return (
    <ThemedView style={styles.container}>


        <ScrollView contentContainerStyle={{ alignItems: 'center', marginBottom: 50 }}>

        <View style={{ alignItems: 'center'}}>
            <Image source={Logo} style={{ width: 150, height: 150, marginTop: 50}} />
            <Text style={styles.title}>Safe Route</Text>
        </View>
    
        <View style={[styles.card, {width: '90%', height: '20%', alignItems: 'center', marginTop: 50}]}>
            <Text style={[styles.title, {fontWeight: 'bold', fontSize: 50, marginBottom: 10, alignItems: 'center'}]}>
                Hakkında
            </Text>
            <Text style={[styles.title, {color: '#c3ba9a',fontWeight: 'bold', fontSize: 20, textAlign: 'center'}]}>
                Güvenli Yolculuklar için yeni nesil navigasyon. Uygulamamız Sizleri en güvenli yoldan varış noktanıza ulaştırır.
            </Text>

        </View>

        <View style={[styles.card, {width: '90%', height: '25%', alignItems: 'center', marginTop: 50}]}>
            <Text style={[styles.title, {fontWeight: 'bold', fontSize: 35, marginBottom: 10, alignItems: 'center'}]}>
                Neden CynoSura?
            </Text>
            <Text style={[styles.title, {color: '#c3ba9a',fontWeight: 'bold', fontSize: 20, textAlign: 'center'}]}>
                Çünkü bizler de sürücüyüz ve güvenli bir yolculuğun ne kadar önemli olduğunu biliyoruz. CynoSura, gerçek zamanlı trafik verileri, hava koşulları ve yol durumunu analiz ederek en güvenli rotayı sunar.
            </Text>

        </View>

        <View style={[styles.card, {height: '10%', marginTop: 50, marginBottom: 80}]}>
            <Text style={[styles.title, {fontWeight: 'bold', fontSize: 25, marginBottom: 10, alignItems: 'center'}]}>
                Developer Team
            </Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10}}>
                <Image source={profil} style={{ width: 45, height: 45, borderRadius: 30, marginBottom: 5 }} />
                <Text style={[styles.title, {color: '#c3ba9a', fontSize: 17}]}>
                Yiğit Celal Bektaş - Junior Developer
            </Text>
            </View>
            </View>

        
      
       
    </ScrollView>
    </ThemedView>

    

  )
}

export default About

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center', // yazıyı ortaya hizala
        flexDirection: 'column',
    },
     title: {
        fontSize: 45,
        fontWeight: 'bold',
        color: '#d8bb6f',
     },
     card: {
        backgroundColor: '#1d2026',
        borderRadius: 20,
        borderColor: '#d8bb6f',
        borderWidth: 1,
        padding: 20,
        margin: 10,
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
     },   
})