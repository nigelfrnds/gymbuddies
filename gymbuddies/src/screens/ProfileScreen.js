import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, Avatar } from 'react-native-elements';

class ProfileScreen extends Component {
  static navigationOptions = ({ navigation, ScreenProps }) => ({
    headerTitle: `${navigation.state.params.data.name}'s Profile`,
  });

  render() {
    const { navigate, state } = this.props.navigation;
    const { data } = state.params;

    return (
      <View>
        <Card>
          <View>
            <Avatar
              xlarge
              rounded
              source={{ uri: data.avatar_url }}
            />
            <Text>{data.name}</Text>
          </View>
        </Card>
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export { ProfileScreen };
