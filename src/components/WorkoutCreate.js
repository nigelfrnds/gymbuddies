import React, { Component } from 'react';
import { connect } from 'react-redux';
import { WorkoutUpdate, WorkoutCreate, CreateUser } from '../actions';
import { Card, CardSection, Button } from './common';
import FirstForm from './FirstForm';

class workoutCreate extends Component {
  onButtonPress() {
    const { email, password, name, phone, shift } = this.props;
    this.props.CreateUser({ email, password });
    this.props.WorkoutCreate({ name, phone, shift });
  }

  render() {
    return (
      <Card>
        <FirstForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Create
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { email, password, name, phone, shift } = state.FirstForm;

  return { email, password, name, phone, shift };
};

export default connect(mapStateToProps, {
  WorkoutUpdate, WorkoutCreate, CreateUser
})(workoutCreate);
