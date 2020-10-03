import React from 'react';
import { View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';

import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import TeachIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';

const Landing = () => {
  const { navigate } = useNavigation();

  function handleNavigateToTeachPage() {
    navigate('Teach');
  }

  return <View style={styles.container}>
    <Image source={landingImg} style={styles.banner} />
    <Text style={styles.title}>
      Welcome, {`\n`}
      <Text style={styles.titleBold}>What do you wish to do?</Text>
    </Text>

    <View style={styles.buttonsContainer}>
      <RectButton 
        style={[styles.button, styles.primaryButton]}
      >
        <Image source={studyIcon} />

        <Text style={styles.buttonText}>Study</Text>
      </RectButton>
      
      <RectButton 
        onPress={handleNavigateToTeachPage} 
        style={[styles.button, styles.secondaryButton]}
      >
        <Image source={TeachIcon} />

        <Text style={styles.buttonText}>Teach</Text>
      </RectButton>
    </View>

    <Text style={styles.totalConnections}>
      Total of 727 connections made {' '}
      <Image source={heartIcon} />
    </Text>
  </View> ;
}

export default Landing;