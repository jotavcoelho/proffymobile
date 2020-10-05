import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, TextInput } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import api from '../../services/api';
import AsyncStorage from '@react-native-community/async-storage';

import styles from './styles';

function TeacherList() {
  const [teachers, setTeachers] = useState([]);
  const [visibleFilter, setVisibleFilter] = useState(false);
  const [favorites, setFavorites] = useState([]);

  const [subject, setSubject] = useState('');
  const [weekday, setWeekday] = useState('');
  const [time, setTime] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('favorites').then(response => {
      if(response) {
        const favoritedTeachers = JSON.parse(response);
        const favoritedTeachersIds = favoritedTeachers.map(teacher => teacher.id);
        setFavorites(favoritedTeachersIds);
      }
    });
  }, []);

  function showFilters() {
    setVisibleFilter(!visibleFilter);
  }

  async function searchTeachers() {
    const response = await api.get('classes', {
      params: {
        subject,
        weekday,
        time
      }
    });
    setVisibleFilter(false);
    setTeachers(response.data);
  }

  return (
    <View style={styles.container} >
      <PageHeader 
        title="Available Proffys" 
        headerRight={(
          <BorderlessButton onPress={showFilters}>
            <Icon 
              name="filter" 
              size={20} 
              color="#FFF" 
            />
          </BorderlessButton>
        )} 
      >
        { visibleFilter && (
          <View style={styles.searchForm}>
            <Text style={styles.label}>Subject</Text>
            <TextInput 
              style={styles.input}
              placeholder="What's the subject?"
              placeholderTextColor="#c1bccc"
              value={subject}
              onChangeText={text => setSubject(text)}
            />

            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Weekday</Text>
                  <TextInput 
                    style={styles.input}
                    placeholder="Weekday"
                    placeholderTextColor="#c1bccc"
                    value={weekday}
                    onChangeText={text => setWeekday(text)}
                  />
              </View>
              
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Time</Text>
                  <TextInput 
                    style={styles.input}
                    placeholder="Time"
                    placeholderTextColor="#c1bccc"
                    value={time}
                    onChangeText={text => setTime(text)}
                  />
              </View>
            </View>

            <RectButton 
              style={styles.submitButton}
              onPress={searchTeachers}
            >
              <Text style={styles.submitButtonText}>Filter</Text>
            </RectButton>
          </View>
        )}
      </PageHeader>  

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{ // this is a better option for applying padding, doing it on the styles file makes it kinda weird visually
          paddingHorizontal: 16,
          paddingBottom: 24
        }}
      >
        {teachers.map((teacher, index) => 
          <TeacherItem 
            key={index}
            teacherData={teacher}
            favorited={favorites.includes(teacher.id)}
          />
        )}
      </ScrollView>
    </View>
  );
}

export default TeacherList;
