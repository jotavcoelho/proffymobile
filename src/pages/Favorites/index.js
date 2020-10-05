import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

import styles from './styles';

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useFocusEffect(() => {
    AsyncStorage.getItem('favorites').then(response => {
      if(response) {
        const favoritedTeachers = JSON.parse(response);
        setFavorites(favoritedTeachers);
      }
    });
  });

  return (
    <View style={styles.container} >
      <PageHeader title="Favorite Proffys" />  

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{ // this is a better option for applying padding, doing it on the styles file makes it kinda weird visually
          paddingHorizontal: 16,
          paddingBottom: 24
        }}
      >
        {favorites.map((teacher, index) => 
          <TeacherItem 
            key={index}
            teacherData={teacher}
            favorited={true}
          />
        )}
      </ScrollView>
    </View>
  );
}

export default Favorites;
