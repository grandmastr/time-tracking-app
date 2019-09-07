import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

// components
import TimerForm from './TimerForm';
import Timer from './Timer';
import { millisecondsToHuman } from "../utils/TimerUtils";

EditableTimer.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  project: PropTypes.string.isRequired,
  elapsed: PropTypes.number,
  isRunning: PropTypes.bool,
  editFormOpen: PropTypes.bool
};

EditableTimer.defaulltProps = {
  elapsed: 123455
};

export default function EditableTimer({id, title, project, elapsed, isRunning, editFormOpen, onTimerRemove, onFormSubmit}) {
  const elapsedString = millisecondsToHuman(elapsed);
  
  return (
    <View>
      {isRunning
        ? (<Timer title={title} project={project} elapsed={elapsedString}/>)
        : (<TimerForm id={id} title={title} project={project} onFormClose={onTimerRemove} onFormSubmit={onFormSubmit}/>)
      }
    </View>
  );
};
