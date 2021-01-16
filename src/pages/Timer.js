import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { useNavigation } from '@react-navigation/native';

function formatSeconds(seconds) {
  if (seconds < 60) {
    return `${seconds} seg`;
  }

  return `${Math.floor(seconds / 60)} min`;
}

const Timer = () => {
  const timerRef = useRef();
  const [timerEnabled, setTimerEnabled] = useState(false);
  const [secondsEllapsed, setSecondsEllapsed] = useState(0)

  const navigation = useNavigation();
  const startTimer = () => {
    if(timerEnabled){
      clearInterval(timerRef.current)
      setTimerEnabled(false);
    } else {
      timerRef.current = setInterval(() => {
     setSecondsEllapsed(state => state + 1);
     setTimerEnabled(true);
   }, 1000);
    }
  }
  const navigateToWelcome = () => {
    navigation.navigate('Welcome');
  }
  return (
    <LinearGradient
          colors={['#E7F3FE', '#9ABEE0']}
          style={styles.container}
        >
       <Text style={styles.textTimer}>Timer</Text>
      <AnimatedCircularProgress
          size={300}
          width={30}
          fill={(secondsEllapsed * 100)/1500}
          tintColor="#2E5B9A"
          backgroundColor="#FFF">
          {() => (
          <Text style={styles.progress}>{formatSeconds(secondsEllapsed)}</Text>
        )}
      </AnimatedCircularProgress>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button} onPress={startTimer}>
          <MaterialIcons name={timerEnabled ? 'pause' : 'play-arrow'} size={32} color="#FFF" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={navigateToWelcome} >
          <MaterialIcons name="chevron-left" size={32} color="#FFF" />
        </TouchableOpacity>
      </View>
    </LinearGradient>
    );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textTimer: {
    color: '#1C354F',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    maxWidth: 300,
    marginVertical: 80,
  },
  buttons: {
    flexDirection: 'row',
  },
  button: {
    width: 72,
    height: 72,
    backgroundColor: '#2E5B9A',
    borderRadius: 36,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 80,
    marginHorizontal: 15,
  },
  progress: {
    color: '#1C354F',
    fontSize: 60,
    fontWeight: 'bold',
    textAlign: 'center',
  },

});

export default Timer;