// dependencies
import React, { useState } from 'react';
import { View, StyleSheet } from "react-native";
import PropTypes from 'prop-types';

// components
import TimerForm from "./TimerForm";
import TimerButton from "./TimerButton";

ToggleableTimerForm.propTypes = {
  isOpen: PropTypes.bool.isRequired
};

export default function ToggleableTimerForm({isOpen}) {
  const [fillForm, setFillForm] = useState(isOpen);
  
  return (
    <View style={[styles.container, !fillForm && styles.buttonPadding]}>
      {fillForm ? <TimerForm/> : <TimerButton title="+" color="black" onPress={() => setFillForm(!fillForm)}/> }
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10
  },
  buttonPadding: {
    paddingHorizontal: 15
  }
});
