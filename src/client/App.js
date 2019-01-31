import React, {Component} from 'react';
import { createStackNavigator, createAppContainer, Header } from 'react-navigation';

import PublicScreen from './routes/public/login/Login.js';
import PrivateScreen from './routes/private/TabsContainer';

const AppNavigator = createStackNavigator({
  public: {screen: PublicScreen},
  private: {screen: PrivateScreen}
},
{
  initialRouteName: 'private',
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
 });
const AppContainer = createAppContainer(AppNavigator);

export { AppNavigator };
export default AppContainer
