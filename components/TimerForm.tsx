// dependencies
import React, { useState, useEffect } from 'react';
import { TextInput, Text, View, StyleSheet } from "react-native";
import PropTypes from 'prop-types';

// components
import TimerButton from './TimerButton';

TimerForm.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  project: PropTypes.string,
  onFormSubmit: PropTypes.func.isRequired,
  onFormClose: PropTypes.func.isRequired
};

TimerForm.defaultProps = {
  title: "",
  project: ""
};

export default function TimerForm({id, title, project, onFormSubmit, onFormClose}) {
  const submitText:string = id ? 'Update' : 'Create';
  
  const [timerTitle, setTimerTitle] = useState(title);
  const [timerProject, setTimerProject] = useState(project);
  
  return (
    <View style={styles.formContainer}>
      <View style={styles.attributesContainer}>
        <Text style={styles.textInputTitle}>Title</Text>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            underlineColorAndroid="transparent"
            defaultValue={title}
            value={timerTitle}
            onChangeText={text => setTimerTitle(text)}
          />
        </View>
      </View>
      <View style={styles.attributesContainer}>
        <Text style={styles.textInputTitle}>Project</Text>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            underlineColorAndroid="transparent"
            defaultValue={project}
            value={timerProject}
            onChangeText={text => setTimerProject(text)}
          />
        </View>
      </View>
      <View style={styles.buttonGroup}>
        <TimerButton small color="#21BA45" title={submitText} onPress={
          () => onFormSubmit({id, timerTitle, timerProject})
        }/>
        <TimerButton small color="#DB2828" title="Cancel" onPress={
          () => onFormClose()
        }/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: 'transparent',
    borderColor: '#D6D7DA',
    borderWidth: 2,
    borderRadius: 5,
    padding: 15,
    margin: 15,
    marginBottom: 0
  },
  attributesContainer: {
    marginVertical: 8
  },
  textInputTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5
  },
  textInputContainer: {
    borderWidth: 1,
    borderColor: '#D6D7DA',
    borderRadius: 3,
    paddingLeft: 5,
    paddingRight: 2,
    paddingTop: 1,
    paddingBottom: 1,
    marginBottom: 5
  },
  textInput: {
    height: 30,
    padding: 5,
    fontSize: 12
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
