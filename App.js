/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';

import AppStack from './src/routes/AppStack';


const App: () => React$Node = () => {
  return (
    <>
      <AppStack />
      <StatusBar backgroundColor="#8257e5" barStyle="light-content" />
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
