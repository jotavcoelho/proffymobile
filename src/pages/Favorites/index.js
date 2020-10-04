import React from 'react';
import { View, ScrollView } from 'react-native';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

import styles from './styles';

function Favorites() {
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
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </ScrollView>
    </View>
  );
}

export default Favorites;
