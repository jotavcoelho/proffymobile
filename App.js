/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';

import Landing from './src/pages/Landing';

const App: () => React$Node = () => {
  return (
    <>
      <Landing />
      <StatusBar barStyle="light-content" />
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
