import React, { Component } from 'react';
import { Modal, View, Text, TextInput, Image } from 'react-native';
import { Card, FormLabel, Button } from 'react-native-elements';

import { LifterLogo } from '../common';
import LoginForm from '../LoginForm';


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
        <LifterLogo />
        </View>
        
        <View>
          <Card title='Sign With Email'>
            <View>
              <LoginForm
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



export default LoginModal;
