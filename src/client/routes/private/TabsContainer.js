import * as React from 'react';
import { View, Text, Animated, TouchableOpacity, StyleSheet } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

import Styles from './TabsContainer.style.js';
import { CustomIcon } from 'client/utils';
import DialogsTab from 'client/routes/private/dialogs/DialogsTab';
import MessengerTab from 'client/routes/private/messager/MessengerTab';

const FirstRoute = () => (
  <DialogsTab dialogs={[{ dialogTitle: 'vesground', dialogIconUrl: 'http://localhost:9000/statics/default_icon.png' }]}
               onDialogClick={(username) => console.log(`Dialog was clicked: ${username}`)} />
);

const SecondRoute = () => (
  <MessengerTab dialogs={[{ dialogTitle: 'vesground', dialogIconUrl: 'http://localhost:9000/statics/default_icon.png' }]}
               onDialogClick={(username) => console.log(`Dialog was clicked: ${username}`)} />
);

export default class TabViewExample extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'dialogs', title: 'lol' },
      { key: 'messanger', title: 'kek' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderTabBar = props => {
    return (
      <View style={Styles.header}>
        <CustomIcon style={Styles.logoutIcon} name='logout_1' size={30} color='#545E67' />
        <View style={Styles.tabIcons}>
          <CustomIcon style={Styles.tabIcon} name='contacts_1' size={30} color='#545E67' />
          <CustomIcon style={Styles.tabIcon} name='messages_1' size={30} color='#545E67' />
        </View>
        <CustomIcon style={Styles.searchIcon} name='search_1' size={30} color='#545E67' />
      </View>
    );
  };

  _renderScene = SceneMap({
    dialogs: FirstRoute,
    messanger: SecondRoute,
  });

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={this._renderScene}
        renderTabBar={this._renderTabBar}
        onIndexChange={this._handleIndexChange}
      />
    );
  }
}
