import React from 'react';
import PropTypes from 'prop-types';
import { View } from "react-native";

// components
import TimerForm from './TimerForm';
import Timer from './Timer';

EditableTimer.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  project: PropTypes.string.isRequired,
  elapsed: PropTypes.string,
  isRunning: PropTypes.bool,
  editFormOpen: PropTypes.bool
};

export default function EditableTimer({id, title, project, elapsed, isRunning, editFormOpen}) {
  return (
    <View>
      {isRunning && (<Timer title={title} project={project} elapsed={elapsed}/>)}
      {editFormOpen && (<TimerForm id={id} title={title} project={project}/>)}
    </View>
  )
};
