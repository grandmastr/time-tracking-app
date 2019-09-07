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

export default function ToggleableTimerForm({isOpen, addTimerEvent}) {
  const [fillForm, setFillForm] = useState(isOpen);
  
  const handleFormClose = () => setFillForm(false);
  const handleFormSubmit = timer => {
    addTimerEvent(timer);
    setFillForm(false);
  };
  
  return (
    <View style={[styles.container, !fillForm && styles.buttonPadding]}>
      {fillForm
        ? <TimerForm onFormClose={handleFormClose} onFormSubmit={handleFormSubmit}/>
        : <TimerButton title="+" color="white" onPress={
          () => setFillForm(!fillForm)
        }/>}
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
