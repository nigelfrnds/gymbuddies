import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, List, ListItem } from 'react-native-elements';

const options = [
  {
    title: 'Profile',
    icon: 'account-circle',
    route:'settings',
  },
  {
    title: 'Settings',
    icon: 'settings',
    route: 'settings',
  },
  {
    title: 'About',
    icon: 'info',
    route: 'about',
  },
];

class AccountScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Account',

  });

  render() {
    return (
      <View>
        <Card>
          <List>
            {
              options.map((item, i) => (
                <ListItem
                  key={i}
                  title={item.title}
                  leftIcon={{ name: item.icon }}
                  onPress={() => this.props.navigation.navigate(item.route)}
                />
              ))
            }
          </List>
        </Card>
      </View>
    );
  }
}

export { AccountScreen };
