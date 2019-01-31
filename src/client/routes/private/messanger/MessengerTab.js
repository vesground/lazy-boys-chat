import React, { Component } from 'react';
import { Text, View} from 'react-native';

import Messages from './Messages';
import Input from './Input';

import Styles from './Dialog.style';

export default class Chat extends Component {
  render() {
    return (
      <View style={Styles.root}>
        <Messages />
        <Input />
      </View>
    );
  }
}
