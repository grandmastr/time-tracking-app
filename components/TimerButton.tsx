import React from 'react';
import PropTypes from 'prop-types';
import {Text, StyleSheet, TouchableOpacity} from "react-native";

TimerButton.propTypes = {
  small: PropTypes.bool,
  color: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func
};

export default function TimerButton({small, color, title, onPress}) {
  return (
    <TouchableOpacity style={[styles.button, {borderColor: color}]} onPress={onPress} activeOpacity={0.5}>
      <Text style={[styles.buttonText, small ? styles.small : styles.large, { color }]}>
        {title}
      </Text>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    minWidth: 100,
    borderWidth: 2,
    borderRadius: 3
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold'
  },
  small: {
    fontSize: 14,
    padding: 5
  },
  large: {
    fontSize: 16,
    padding: 10
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  elapsedTime: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 10
  }
});
