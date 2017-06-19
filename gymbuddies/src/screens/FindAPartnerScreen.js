import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, Icon } from 'react-native-elements';

class FindAPartnerScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    tabBarLabel: 'Search',
  });

  render() {
    return (
      <View>
        <Text>FindAPartnerScreen</Text>
        <Button
          title='Find A Partner'
          large
          backgroundColor='#397af8'
          onPress={() => this.props.navigation.navigate('review')}
        />
      </View>
    );
  }
}

export { FindAPartnerScreen };
