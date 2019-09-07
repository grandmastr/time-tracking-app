// Dependencies
import React, { useState } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { v4 as uuid } from 'uuid';

// Components
import EditableTimer from './components/EditableTimer';
import ToggleableTimerForm from './components/ToggleableTimerForm';

// utilities
import { newTimer } from './utils/TimerUtils';

export default function App() {
  const [timers, setTimers] = useState(
    []
  );
  
  return (
    <View style={styles.appContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          Timers
        </Text>
      </View>
      <ScrollView style={styles.timerList}>
        <ToggleableTimerForm
          isOpen={false}
          addTimerEvent={
            timer => setTimers([newTimer(timer), ...timers])
          }/>
        {
          timers.length > 0
            ? timers.map(({id, title, project, elapsed, isRunning}) => (
              <EditableTimer
                key={id}
                project={project}
                id={id}
                title={title}
                isRunning={isRunning}
                elapsed={elapsed}
                onFormSubmit={() => console.log("Super")}
                onTimerRemove={() => console.log("James Olsen")}
              />
            ))
            : (
              <View>
                <Text style={styles.emptyTimer}>
                  You have no timer set at this time <Text style={{ fontSize: 12 }}>(Get it?)</Text>
                </Text>
              </View>
            )
        }
      </ScrollView>
    </View>
  )
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#001119'
  },
  titleContainer: {
    paddingTop: 35,
    paddingBottom: 15,
    marginBottom: 10,
    borderBottomWidth: 3,
    borderBottomColor: '#D6D7DA',
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3
  },
  title: {
    // color: '#000000',
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  timerList: {
    padding: 1
  },
  emptyTimer: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    marginVertical: '50%',
    color: '#ffffff'
  }
});
