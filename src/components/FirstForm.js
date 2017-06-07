import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged2, passwordChanged2, WorkoutUpdate } from '../actions';
import { CardSection, Input } from './common';

class FirstForm extends Component {

  render() {
    return (
      <View>
      <CardSection>
            <Input
                label="E-mail"
                placeholder="email@example.com"
                value={this.props.email}
                onChangeText={value => this.props.emailChanged2({ prop: 'email', value })}
            />
      </CardSection>
      <CardSection>
            <Input
                label="Password"
                placeholder="Password"
                value={this.props.password}
                onChangeText={value => this.props.passwordChanged2({ prop: 'password', value })}
            />
      </CardSection>

  <CardSection>
        <Input
            label="Name"
            placeholder="Name/Nickname"
            value={this.props.name}
            onChangeText={value => this.props.WorkoutUpdate({ prop: 'name', value })}
        />
  </CardSection>
  <CardSection>
  <Input
    label="Phone"
    placeholder="555-555-5555"
    value={this.props.phone}
    onChangeText={value => this.props.WorkoutUpdate({ prop: 'phone', value })}
  />
</CardSection>
<CardSection>
<Input
  label="Address"
  placeholder="123 fake street"
  value={this.props.address}
  onChangeText={value => this.props.WorkoutUpdate({ prop: 'address', value })}
/>
</CardSection>
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  const { email, password, name, phone, shift } = state.FirstForm;

  return { email, password, name, phone, shift };
};

export default connect(mapStateToProps, {
  emailChanged2, passwordChanged2, WorkoutUpdate
})(FirstForm);
