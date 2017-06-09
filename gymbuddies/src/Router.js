import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import Home from './screens/Home';


const Router = TabNavigator(
  {
    Home: {
      screen: Home,
    },
  },
  {
    tabBarPosition: 'bottom',
    tabBarOptions: {

    }
  }
);

export default Router;
