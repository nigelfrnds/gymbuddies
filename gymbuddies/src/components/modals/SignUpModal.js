import React, { Component } from 'react';
import { Modal, View, Text, TextInput } from 'react-native';
import { Card, FormLabel, Button, FormValidationMessage } from 'react-native-elements';

import { LifterLogo } from '../common';
import SignUpForm from '../SignUpForm';

class SignUpModal extends Component {
  state = { email: '', pass: '', c_pass: '', error: '' };

  // check if both passwords match
  validatePassword = (c_pass) => {
    this.setState({ c_pass });

    if(c_pass != this.state.pass) {
      this.setState({ error: 'Passwords Do Not Match' });
    } else {
      this.setState({ error: ''});
    }
  }

  render() {
    const { visible, onCancel, onAccept } = this.props;

    return (
      <Modal
        visible={visible}
        animationType='slide'
        onRequestClose={() => {}}
      >
        <View>
          <LifterLogo />
        </View>
        <View>
          <Card title='Sign Up'>
            <View>
              <SignUpForm
                onAccept={onAccept}
                onCancel={onCancel}
              />
            </View>
          </Card>
        </View>
      </Modal>
    );
  }
}

export default SignUpModal;
