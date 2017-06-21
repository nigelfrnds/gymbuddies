import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, List, ListItem } from 'react-native-elements';

const data = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    gender: 'female',
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    gender: 'male',
  },
];

class PartnerReviewScreen extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View>
        <View>
          <Card title='Local Partners'>
            <List>
              {
                data.map((item, i) => (
                  <ListItem
                    roundAvatar
                    avatar={{ uri: item.avatar_url }}
                    key={i}
                    title={item.name}
                    onPress={() => navigation.navigate('profile', { data: item })}
                  />
                ))
              }
            </List>
          </Card>
        </View>

        <View>
          <Card title='Recent Partners'>
            <List>
              {
                data.map((item, i) => (
                  <ListItem
                    roundAvatar
                    avatar={{ uri: item.avatar_url }}
                    key={i}
                    title={item.name}
                    onPress={() => navigation.navigate('profile', { user: item })}
                  />
                ))
              }
            </List>
          </Card>
        </View>
      </View>
    );
  }
}

export { PartnerReviewScreen };
