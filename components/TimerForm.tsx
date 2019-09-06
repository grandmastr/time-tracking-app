// dependencies
import React from 'react';
import { TextInput, Text, View, StyleSheet } from "react-native";
import PropTypes from 'prop-types';

// components
import TimerButton from './TimerButton';

TimerForm.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  project: PropTypes.string
};

TimerForm.defaultProps = {
  title: "",
  project: ""
};

export default function TimerForm({id, title, project}) {
  const submitText:string = id ? 'Update' : 'Create';
  
  return (
    <View style={styles.formContainer}>
      <View style={styles.attributesContainer}>
        <Text style={styles.textInputTitle}>Title</Text>
        <View style={styles.textInputContainer}>
          <TextInput style={styles.textInput}
                     underlineColorAndroid="transparent"
                     defaultValue={title}
          />
        </View>
      </View>
      <View style={styles.attributesContainer}>
        <Text style={styles.textInputTitle}>Title</Text>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            underlineColorAndroid="transparent"
            defaultValue={project}
          />
        </View>
      </View>
      <View style={styles.buttonGroup}>
        <TimerButton small color="#21BA45" title={submitText}/>
        <TimerButton small color="#DB2828" title="Cancel"/>
      </View>
    </View>
  )
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
