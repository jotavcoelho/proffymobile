import React from 'react';
import { View, Image, Text } from 'react-native';

import styles from './styles';

import landingImg from '../../assets/images/landing.png';

const Landing = () => {
  return <View style={styles.container}>
    <Image source={landingImg} style={styles.banner} />
    <Text style={styles.title}>
      Welcome, {`\n`}
      <Text style={styles.titleBold}>What do you wish to do?</Text>
    </Text>
  </View> ;
}

export default Landing;