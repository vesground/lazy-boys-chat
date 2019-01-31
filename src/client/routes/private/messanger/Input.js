import React, { Component } from 'react';
import { View, TextInput, Button } from 'react-native';

import Styles from './Input.style';

export default class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentText: 'Useless Placeholder'
    };
  }

  handleSendButtonPress() {
    console.log('lol');
  }

  render() {
    const { currentText } = this.state;

    return (
      <View style={Styles.typeAreaWrapper}>
        <TextInput
          style={Styles.textInput}
          onChangeText={(text) => this.setState({currentText: text})}
          value={currentText}
        />
      </View>
    );
  }
}
