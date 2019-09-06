// Dependencies
import React from 'react';
import { View, ScrollView, Text, StyleSheet } from "react-native";

// Components
import EditableTimer from './components/EditableTimer';
import ToggleableTimerForm from './components/ToggleableTimerForm';

export default function App() {
  
  return (
    <View style={styles.appContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          Timers
        </Text>
      </View>
      <ScrollView style={styles.timerList}>
        <ToggleableTimerForm isOpen={false}/>
        <EditableTimer
          id={1}
          title={"Bake squash"}
          project={"Kitchen Chores"}
          elapsed={"3890985"}
          editFormOpen
        />
      </ScrollView>
    </View>
  )
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
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
    color: '#000000',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  timerList: {
    padding: 1
  }
});
