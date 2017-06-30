import React from 'react';
import { View, Image } from 'react-native';

const LOGO = require('../../../assets/icons/lifter.png');

const LifterLogo = () => {
  return (
    <View style={styles.containerStyle}>
      <Image
        source={LOGO}
        style={styles.logoStyle}
      />
    </View>
  );
};

const styles = {
  logoStyle: {
    height: 100,
    width: 300,
    borderWidth: 5,
  },
  containerStyle: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
};

export { LifterLogo };
