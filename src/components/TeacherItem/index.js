import React, { useState } from 'react';
import { View, Image, Text, Linking } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../../services/api';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import styles from './styles';

function TeacherItem({ teacherData, favorited }) {
  const [isFavorited, setIsFavorited] = useState(favorited);

  function openWhatsapp(user_id) {
    api.post('/connections', {
      user_id
    });
    Linking.openURL(`whatsapp://send?phone=${teacherData.whatsapp}`)
  }

  async function toggleFavorite() {
    const favorites = await AsyncStorage.getItem('favorited');

    let favoritesArray = [];

    if(favorites)
      favoritesArray = JSON.parse(favorites);

    if (isFavorited) {
      const favoriteIndex = favoritesArray.findIndex(teacher => {
        return teacher.id === teacherData.id;
      });

      favoritesArray.splice(favoriteIndex, 1);
      setIsFavorited(false);
    } else {
      favoritesArray.push(teacherData);

      setIsFavorited(true);
    }
      await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));
  }

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image 
          style={styles.avatar}
          source={{ uri: teacherData.avatar }}
        />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>{teacherData.name}</Text>
          <Text style={styles.subject}>{teacherData.subject}</Text>
        </View>
      </View>

      <Text style={styles.bio}>{teacherData.bio}</Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Price per hour {'   '}
          <Text style={styles.priceValue}>${teacherData.cost}</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton 
            onPress={toggleFavorite}
            style={[
              styles.favoriteButton, 
              isFavorited ? styles.favorited : {},
            ]}
          >
            { isFavorited 
              ? <Image source={unfavoriteIcon} />
              : <Image source={heartOutlineIcon} /> 
            }
          </RectButton>
          
          <RectButton onPress={() => openWhatsapp(teacherData.id)} style={styles.contactButton}>
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Get in touch</Text>
          </RectButton>
        </View>
      </View>
    </View>
  )
}

export default TeacherItem;
