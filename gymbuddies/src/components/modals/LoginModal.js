import React, { Component } from 'react';
import { Modal, View, Text, TextInput } from 'react-native';
import { Card, FormLabel, Button } from 'react-native-elements';


class LoginModal extends Component {
  state = { email: '', pass: '' };

  render() {
    const { visible, onCancel, onAccept } = this.props;

    return (
      <Modal
        visible={visible}
        animationType='slide'
        onRequestClose={() => {}}
      >
        <View>
          <Card title='Sign With Email'>
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

              <Button
                title='Sign In'
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

export default LoginModal;
