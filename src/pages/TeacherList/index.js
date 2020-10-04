import React from 'react';
import { View, ScrollView, Text, TextInput } from 'react-native';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

import styles from './styles';

function TeacherList() {
  return (
    <View style={styles.container} >
      <PageHeader title="Available Proffys">
        <View style={styles.searchForm}>
          <Text style={styles.label}>Subject</Text>
          <TextInput 
            style={styles.input}
            placeholder="What's the subject?"
            placeholderTextColor="#c1bccc"
          />

          <View style={styles.inputGroup}>
            <View style={styles.inputBlock}>
              <Text style={styles.label}>Weekday</Text>
                <TextInput 
                  style={styles.input}
                  placeholder="Weekday"
                  placeholderTextColor="#c1bccc"
                />
            </View>
            
            <View style={styles.inputBlock}>
              <Text style={styles.label}>Time</Text>
                <TextInput 
                  style={styles.input}
                  placeholder="Time"
                  placeholderTextColor="#c1bccc"
                />
            </View>
          </View>
        </View>
      </PageHeader>  

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

export default TeacherList;
