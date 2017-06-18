import React, { Component } from 'react';
import { View, Text, AsyncStorage, TextInput } from 'react-native';
import { FormLabel, FormValidationMessage,
  Card, SocialIcon, Button
} from 'react-native-elements';

class AuthScreen extends Component {
  state = { token: null, email: '' };

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
              <FormLabel>Email</FormLabel>
              <TextInput
                value={this.state.email}
                maxLength={40}
                onChangeText={(email) => this.setState({ email })}
              />

              <FormLabel>Password</FormLabel>
              <TextInput
                value={this.state.email}
                maxLength={40}
                onChangeText={(email) => this.setState({ email })}
              />

              <Button
                title='Sign In'
                backgroundColor='#397af8'
                buttonStyle={styles.loginButtonStyle}
                raised
              />
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
