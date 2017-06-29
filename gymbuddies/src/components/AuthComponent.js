import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';

import LoginModal from './modals/LoginModal';
import SignUpModal from './modals/SignUpModal';

class AuthComponent extends Component {
  state = { showLoginModal: false, showSignUpModal: false };

  onLoginButtonPress = () => {
    alert('User Signed In');
    this.setState({ showLoginModal: false });
    // redirect
  }

  onSignUpButtonPress = () => {
    alert('User Signed Up');
    this.setState({ showSignUpModal: false });
    // redirect
  }

  onLoginCancelButtonPress = () => {
    this.setState({ showLoginModal: false });
  }

  onSignUpCancelButtonPress = () => {
    this.setState({ showSignUpModal: false });
  }

  render() {
    return (
      <View>
        <Button
          title='Sign Up'
          backgroundColor='#397af8'
          buttonStyle={styles.loginButtonStyle}
          raised
          onPress={() => this.setState({ showSignUpModal: true })}
        />

        <Button
          title='Sign In With Email'
          backgroundColor='#397af8'
          buttonStyle={styles.loginButtonStyle}
          raised
          onPress={() => this.setState({ showLoginModal: true })}
        />

        <LoginModal
          visible={this.state.showLoginModal}
          onCancel={this.onLoginCancelButtonPress}
          onAccept={this.onLoginButtonPress}
        />

        <SignUpModal
          visible={this.state.showSignUpModal}
          onCancel={this.onSignUpCancelButtonPress}
          onAccept={this.onSignUpButtonPress}
        />
      </View>
    );
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

export default AuthComponent;
