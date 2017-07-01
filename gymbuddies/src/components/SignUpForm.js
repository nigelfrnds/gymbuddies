import React, { Component } from 'react';
import { View, TextInput, ScrollView, } from 'react-native';
import { reduxForm } from 'redux-form';
import { FormLabel, Button, } from 'react-native-elements';
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

class SignUpForm extends Component {

  render() {
    const { handleSubmit, onAccept, onCancel } = this.props;
    return (
      <ScrollView>
        <Form>
          <FieldsContainer>
            <Fieldset label='Account Details'>
              <Input name='full_name' label='Full Name:' placeholder='John Doe' />
              <Input name='username' label='Username:' placeholder='johnDoe' />
              <Input name='email' label='Email:' placeholder='john@doe.com' />
              <Input name='confirm_email' label='Confirm Email:' placeholder='john@doe.com' />
              <Input name='password' label='Password:' placeholder='******' secureTextEntry />
              <Input name='confirm_password' label='Confirm Password:' placeholder='******' secureTextEntry />
            </Fieldset>
          </FieldsContainer>
        </Form>
        <View style={styles.buttonContainer}>
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
  return console.log('signing up with',values);
}

const validate = (values) => {
  const errors = {};

  if(!values.full_name) {
    errors.full_name = 'Full Name is required.';
  }

  if(!values.username) {
    errors.username = 'Username is required.';
  } else if( values.username.length > 15) {
    errors.username = 'Must be 15 characters or less.'
  }

  if(!values.email) {
    errors.email = 'Email is required.';
  } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address.'
  }

  if(!values.confirm_email) {
    errors.confirm_email = 'Please confirm your email.'
  } else if(values.email != values.confirm_email) {
    errors.confirm_email = 'Emails do not match.';
  }

  if(!values.password) {
    errors.password = 'Password is required';
  } else if(values.password.length < 5) {
    errors.password = 'Password is too short';
  }

  if(!values.confirm_password) {
    errors.confirm_password = 'Please confirm your password.';
  } else if(values.password != values.confirm_password) {
    errors.confirm_password = 'Passwords do not match.';
  }

  return errors;
}

const styles = {
  buttonContainer: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 5,
    paddingRight: 5
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
  form: 'signUp',
  validate,
})(SignUpForm);
