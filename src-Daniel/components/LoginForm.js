import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';


class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

onPasswordChange(text) {
  this.props.passwordChanged(text);
}
onButtonPress() {
  const { email, password } = this.props;
  this.props.loginUser({ email, password });
}
onCreatePress() {
  Actions.info();
}
renderButton() {
   if (this.props.loading) {
     return <Spinner size="large" />;
   }

   return (
     <Button onPress={this.onButtonPress.bind(this)}>
       Login
     </Button>
   );
}
  render() {
    return (
      <Card>
      <CardSection>
      <Input
      label="Email"
      placeholder="email@gmail.com"
      onChangeText={this.onEmailChange.bind(this)}
      value={this.props.email}
      />
      </CardSection>

      <CardSection>
      <Input
      secureTextEntry
      label="Password"
      placeholder="Password"
      onChangeText={this.onPasswordChange.bind(this)}
      value={this.props.password}
      />
      </CardSection>
      <Text style={styles.errorTextStyle}>
      {this.props.error}
      </Text>
      <CardSection>
       {this.renderButton()}
      </CardSection>
      <CardSection>
      <Button onPress={this.onCreatePress.bind(this)}>
       Create Account
      </Button>
      </CardSection>
      </Card>
    );
  }
}
const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

const mapStateToProps = ({ auth }) =>{
  const { email, password, error, loading } = auth;
  return { email, password, error, loading };
};
export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser
})(LoginForm);