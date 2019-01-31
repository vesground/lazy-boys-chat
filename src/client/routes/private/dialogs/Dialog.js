import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity, View, Image } from 'react-native';

import Styles from './Dialog.style';

export default function DialogsView({ dialogs, onDialogClick }) {
  const { dialogTitle, dialogIconUrl } = dialogs[0];

  return (
    <TouchableOpacity style={Styles.container} onPress={() => onDialogClick(dialogTitle)}>
      <Image style={Styles.icon} source={{ uri: dialogIconUrl }} />
      <View style={Styles.dialogDetails}>
        <View>
          <View style={Styles.dialogDetailsHeader}>
            <Text style={Styles.dialogName}>{dialogTitle}</Text>
            <View style={Styles.newMessagesCounter}><Text style={Styles.newMessages}>10</Text></View>
          </View>
          <Text style={Styles.message}>Hi, cute! What are you doing ??</Text>
        </View>
        <Text style={Styles.time}>1 min</Text>
      </View>
    </TouchableOpacity>
  );
}

DialogsView.propTypes = {
  dialog: PropTypes.array.isRequired,
  onDialogClick: PropTypes.func.isRequired
}
