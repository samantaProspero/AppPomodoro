import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import banner from '../assets/banner.png';

const Welcome = () => {
  const navigation = useNavigation();
  const navigateToTimer = () => {
    navigation.navigate('Timer');
  }
  return (
    <LinearGradient
          colors={['#E7F3FE', '#9ABEE0']}
          style={styles.container}
        >
      <Image source={banner} style={styles.banner}/>
      <Text style={styles.textWelcome}>Staying focused at work isn't easy!</Text>
      <TouchableOpacity style={styles.button} onPress={navigateToTimer} >
        <MaterialIcons name="chevron-right" size={32} color="#FFF" />
      </TouchableOpacity>
      </LinearGradient>
    );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  banner: {
    alignSelf:"flex-end",
  },
  textWelcome: {
    color: '#1C354F',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    maxWidth: 300,
    marginVertical: 80,
  },
  button: {
    width: 72,
    height: 72,
    backgroundColor: '#2E5B9A',
    borderRadius: 36,
    alignItems: 'center',
    justifyContent: 'center'
  },

});

export default Welcome;