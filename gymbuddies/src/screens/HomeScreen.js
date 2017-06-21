import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, Button } from 'react-native-elements';

class HomeScreen extends Component {
  render() {
    return (
      <View>
        <Card title='LIFTER'>
          <View>
            <Text>Add Logo Here</Text>
          </View>

          <View>
            <Button
              title='Edit Workout Schedule'
              large
              backgroundColor='#397af8'
              onPress={() => this.props.navigation.navigate('editWorkout')}
            />
            <Button
              title='Reminders'
              large
              backgroundColor='#397af8'
              onPress={() => this.props.navigation.navigate('reminders')}
            />
          </View>

        </Card>
      </View>
    );
  }
}

export { HomeScreen };
