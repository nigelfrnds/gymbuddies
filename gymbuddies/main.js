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
  AboutScreen, ProfileScreen, WorkoutPlanScreen,
} from './src/screens';


class App extends React.Component {
  render() {
    const MainNavigator = TabNavigator({
      welcome: { screen: WelcomeScreen },
      auth: { screen: AuthScreen },
      mainFlow: {
        screen: TabNavigator({
          home: {
            screen: StackNavigator({
              home: { screen: HomeScreen },
              editWorkout: { screen: WorkoutPlanScreen },
              reminders: { screen: ReminderScreen },
            })
          },
          findPartner: { screen: FindAPartnerScreen },
          review: {
            screen: StackNavigator({
              review: { screen: PartnerReviewScreen },
              profile: { screen: ProfileScreen },
            })
          },
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
