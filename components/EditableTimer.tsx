import React from 'react';
import { Button, Text, View, StyleSheet } from "react-native";

// components
import TimerForm from './TimerForm';
import Timer from './Timer';

export default function EditableTimer({id, title, project, elapsed, isRunning, editFormOpen}) {
  return (
    <View>
      {isRunning && (<Timer elapsed={elapsed}/>)}
      {editFormOpen && (<TimerForm id={id} title={title} project={project}/>)}
    </View>
  )
};
