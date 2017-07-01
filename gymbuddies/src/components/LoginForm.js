import React, { Component } from 'react';
import { View, TextInput, ScrollView } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import { FormLabel, Button } from 'react-native-elements';
import {
  ActionsContainer,
  FieldsContainer,
  Fieldset,
  Form,
  FormGroup,
  Label,
} from 'react-native-clean-form';
import {
  Input
} from 'react-native-clean-form/redux-form';

class LoginForm extends Component {
  render() {
    const { handleSubmit, onAccept, onCancel } = this.props;

    return (
      <ScrollView>
        <Form>
          <FieldsContainer>
            <Fieldset>
              <Input name='email' label='Email:' placeholder='john@doe.com' />
              <Input name='password' label='Password:' placeholder='******' secureTextEntry />
            </Fieldset>
          </FieldsContainer>
        </Form>

        <View>
          <Button
          title='Sign Up'
          backgroundColor='#397af8'
          onPress={handleSubmit(onSignUp)}
          buttonStyle={styles.buttonStyle}
          />

          <Button
          title='Cancel'
          backgroundColor='#397af8'
          onPress={onCancel}
          buttonStyle={styles.buttonStyle}
          />
        </View>
      </ScrollView>
    );
  }
}

const onSignUp = (values) => {
  console.log('submitting',values);
}

const validate = (values) => {
  const errors = {};

  if(!values.email) {
    errors.email = 'Email is required.';
  } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address.'
  }

  if(!values.password) {
    errors.password = 'Password is required';
  } else if(values.password.length < 5) {
    errors.password = 'Password is too short';
  }

  return errors;
}

const styles = {
  inputContainerStyle: {
    padding: 5,
  },
  inputStyle: {

  },
  buttonStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    elevation: 2,
  },
};

export default reduxForm({
  form: 'login',
  validate,
})(LoginForm);
