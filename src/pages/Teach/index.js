import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import teachBgImage from '../../assets/images/teach-background.png';

import styles from './styles';

function Teach() {
  const { goBack } = useNavigation();

  function handleGoBack() {
    goBack();
  }

  return (
    <View style={styles.container}>
      <ImageBackground 
        source={teachBgImage} 
        style={styles.content}
        resizeMode="contain"
      >
        <Text style={styles.title}>Wanna be a Proffy?</Text>
        <Text style={styles.description}>
          To get started, you gotta sign up as a teacher on our website.
        </Text>
      </ImageBackground>
      
      <RectButton onPress={handleGoBack} style={styles.okButton} >
        <Text style={styles.okButtonText} >Okay</Text>
      </RectButton>

    </View>
  )
}

export default Teach;