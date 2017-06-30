import React, { Component } from 'react';
import { View, Text, AsyncStorage, TextInput } from 'react-native';
import { FormLabel, FormValidationMessage,
  Card, SocialIcon, Button
} from 'react-native-elements';

import AuthComponent from '../components/AuthComponent';
import { LifterLogo } from '../components/common';


class AuthScreen extends Component {
  state = { token: null };

  async componentDidMount() {
    let token = await AsyncStorage.getItem('auth_token');
    if(token) {
      this.setState({ token });
      // navigate to main flow
    } else {
      this.setState({ token: false });
    }
  }

  render() {
    if(!this.state.token) {
      return (
        <View>
          <Card title='Sign Into Lifter'>
            <View>
              <LifterLogo />
            </View>
            <View>
              <AuthComponent />
            </View>

            <SocialIcon
              title='Sign In With Facebook'
              button
              type='facebook'
            />

            <SocialIcon
              title='Sign in With Google'
              button
              type='google-plus-official'
            />
          </Card>
        </View>
      );
    }
  }
}

const styles = {
  loginButtonStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginTop: 20,
    marginBottom: 7,
    elevation: 2,
  }
};

export { AuthScreen };
