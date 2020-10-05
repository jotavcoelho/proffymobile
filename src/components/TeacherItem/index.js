import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import styles from './styles';

function TeacherItem({ teacherData }) {
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
          <RectButton style={[styles.favoriteButton, styles.favorited]}>
            {/* <Image source={heartOutlineIcon} /> */}
            <Image source={unfavoriteIcon} />
          </RectButton>
          
          <RectButton style={styles.contactButton}>
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Get in touch</Text>
          </RectButton>
        </View>
      </View>
    </View>
  )
}

export default TeacherItem;
