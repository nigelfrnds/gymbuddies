import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';

import Store from './src/store';

import {
  WelcomeScreen, AuthScreen, FindAGymScreen,
  FindAPartnerScreen, ReminderScreen, AccountScreen,
  PartnerReviewScreen, HomeScreen, SettingsScreen,
  AboutScreen,
} from './src/screens';


class App extends React.Component {
  render() {
    const MainNavigator = TabNavigator({
      welcome: { screen: WelcomeScreen },
      auth: { screen: AuthScreen },
      mainFlow: {
        screen: TabNavigator({
          home: { screen: HomeScreen },
          findPartner: { screen: FindAPartnerScreen },
          review: { screen: PartnerReviewScreen },
          account: {
            screen: StackNavigator({
              user: { screen: AccountScreen },
              settings: { screen: SettingsScreen },
              about: { screen: AboutScreen },
            })
          },
        }, {
          tabBarPosition: 'bottom',
        })
      }

    }, {
      lazy: true,
      animationEnabled: false,
    });

    return (
      <Provider store={Store}>
        <MainNavigator />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

Expo.registerRootComponent(App);
