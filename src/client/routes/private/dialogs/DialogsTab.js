import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import Dialog from 'client/routes/private/dialogs/Dialog';
import NewDialogCreateButton from 'client/routes/private/dialogs/NewDialogCreateButton';
import Styles from './DialogsTab.style';


export default class DialogsTab extends Component {
  static propTypes = {
    dialogs: PropTypes.array.isRequired,
    onDialogClick: PropTypes.func.isRequired
  }

  handleOn

  render() {
    const { dialogTitle, dialogIconUrl } = dialogs[0];
    const hasUserActiveDialogs = dialogs && dialogs.length > 0;

    return (
      <View style={Styles.container}>
        {hasUserActiveDialogs
          ? dialogs.map((dialog, index) => <Dialog key={index} dialog={dialog} onDialogClick={onDialogClick} />)
          : <NewDialogCreateButton onClick={() => console.log('add new dialog');}/>
        }
      </View>
    );
  }
}
