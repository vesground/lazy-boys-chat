import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity } from 'react-native';

import Styles from './NewDialogCreateButton.style';

export default function NewDialogCreateButton(props) {
  return (
    <TouchableOpacity style={Styles.container} onPress={() => this.navigation.navigate('')}>
      <Text style={Styles.username}>Create new dialog</Text>
    </TouchableOpacity>
  );
}
