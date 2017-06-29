import React, { Component } from 'react';
import { Modal, View, Text, TextInput } from 'react-native';
import { Card, FormLabel, Button, FormValidationMessage } from 'react-native-elements';


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
          <Card title='Sign Up'>
            <View>
              <FormLabel>Email</FormLabel>
              <TextInput
                value={this.state.email}
                maxLength={40}
                onChangeText={(email) => this.setState({ email })}
              />

              <FormLabel>Password</FormLabel>
              <TextInput
                value={this.state.pass}
                maxLength={40}
                onChangeText={(pass) => this.setState({ pass })}
              />

              <FormLabel>Confirm Password</FormLabel>
              <TextInput
                value={this.state.c_pass}
                maxLength={40}
                onChangeText={this.validatePassword}
              />
              <FormValidationMessage>{this.state.error}</FormValidationMessage>


              <Button
                title='Sign Up'
                backgroundColor='#397af8'
                onPress={onAccept}
              />

              <Button
                title='Cancel'
                backgroundColor='#397af8'
                onPress={onCancel}
              />
            </View>
          </Card>
        </View>
      </Modal>
    );
  }
}

export default SignUpModal;
