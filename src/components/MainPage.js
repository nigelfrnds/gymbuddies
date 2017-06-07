import React, { Component } from 'react';
import { Card, CardSection, Button } from './common';

class FindAGym extends Component {

  onButtonPress() {
    console.log('asdf');
  }
  render() {
  return (
    <Card>
    <CardSection>
    <Button onPress={this.onButtonPress.bind(this)}>
    Find A Gym
    </Button>
    </CardSection>

    <CardSection>
    <Button onPress={this.onButtonPress.bind(this)}>
    About us
    </Button>
    </CardSection>

    <CardSection>
        <Button onPress={this.onButtonPress.bind(this)}>
          Reminders
        </Button>
      </CardSection>

      <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Find a Partner
          </Button>
        </CardSection>
    </Card>
  );
}
}

export default FindAGym;
