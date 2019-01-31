import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity } from 'react-native';

import Styles from './AddNewUserButton.style';

export default function AddNewUserButton({ onAddNewUserButtonClick, username }) {
  return (
    <TouchableOpacity style={Styles.newUser} onPress={() => onAddNewUserButtonClick(username)}>
      <Text style={Styles.username}>Add {username}</Text>
    </TouchableOpacity>
  );
}

AddNewUserButton.propTypes = {
  username: PropTypes.string.isRequired,
  onAddNewUserButtonClick: PropTypes.func.isRequired,
}
