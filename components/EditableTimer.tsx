import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

// components
import TimerForm from './TimerForm';
import Timer from './Timer';

EditableTimer.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  project: PropTypes.string.isRequired,
  elapsed: PropTypes.number,
  isRunning: PropTypes.bool,
  editFormOpen: PropTypes.bool,
  onTimerRemove: PropTypes.func.isRequired
};

EditableTimer.defaulltProps = {
  elapsed: 123455
};

export default function EditableTimer({id, title, project, elapsed, isRunning, onTimerRemove, onFormSubmit}) {
  const [editFormOpen, setEditFormOpen] = useState(false);
  
  const handleSubmit = timer => {
    onFormSubmit(timer);
    
    setEditFormOpen(false);
  };
  
  return (
    <View>
      {editFormOpen
          ? (<TimerForm
              id={id}
              title={title}
              project={project}
              onFormSubmit={timer => handleSubmit(timer)}
              onFormClose={() => setEditFormOpen(false)}
          />)
          : (<Timer
              id={id}
              title={title}
              project={project}
              elapsed={elapsed}
              isRunning={isRunning}
              onEditPress={() => setEditFormOpen(true)}
              onRemovePress={() => onTimerRemove(id)}
          />)
      }
    </View>
  );
};
