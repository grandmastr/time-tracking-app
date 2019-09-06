import React from 'react';
import { View, Text, StyleSheet } from "react-native";

// components
import TimerButton from './TimerButton';

// utils
import { millisecondsToHuman } from '../utils/TimerUtils';

export default function Timer({ title, project, elapsed }) {
  const elapsedString:string = millisecondsToHuman(elapsed);
  
  return(
    <View style={styles.timerContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text>{project}</Text>
      <Text style={styles.elapsedTime}>{elapsedString}</Text>
      <View style={styles.buttonGroup}>
        <TimerButton color="blue" small title="Edit"/>
        <TimerButton color="red" small title="Remove"/>
      </View>
      <TimerButton color="#21BA45" title="Start"/>
    </View>
  )
}

const styles = StyleSheet.create({
  timerContainer: {
    backgroundColor: 'white',
    borderColor: '#D6D7DA',
    borderWidth: 2,
    padding: 15,
    margin: 15,
    marginBottom: 0
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  elapsedTime: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 15
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
