import React, {useState} from 'react';
import { View, Text, StyleSheet } from "react-native";
import PropTypes from 'prop-types';

// components
import TimerButton from './TimerButton';

// utilities
import { millisecondsToHuman } from '../utils/TimerUtils';

Timer.propTypes = {
  title: PropTypes.string.isRequired,
  project: PropTypes.string.isRequired,
  elapsed: PropTypes.number.isRequired,
  onEditPress: PropTypes.func.isRequired,
  onRemovePress: PropTypes.func.isRequired
};

Timer.defaultProps = {
  elapsed: "00:00:00"
};

export default function Timer({ id, title, project, elapsed, isRunning, onEditPress, onRemovePress }) {
  const elapsedString = millisecondsToHuman(elapsed);
  const [timerRunning, setTimerRunning] = useState(isRunning);
  
  return(
    <View style={styles.timerContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={{ color: '#ffffff' }}>{project}</Text>
      <Text style={styles.elapsedTime}>{elapsedString}</Text>
      <View style={styles.buttonGroup}>
        <TimerButton color="blue" small title="Edit" onPress={onEditPress}/>
        <TimerButton color="red" small title="Remove" onPress={onRemovePress}/>
      </View>
      
      <TimerButton
        onPress={() => {
          setTimerRunning(!timerRunning)
        }}
        color={timerRunning ? "red" : "green"}
        title={timerRunning ? "Stop" : "Start"}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  timerContainer: {
    backgroundColor: 'transparent',
    borderColor: '#D6D7DA',
    borderWidth: 2,
    padding: 15,
    margin: 15,
    marginBottom: 0
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#ffffff'
  },
  elapsedTime: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 15,
    color: '#ffffff'
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
