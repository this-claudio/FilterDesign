import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Filter from './src/components/Filter/FilterComponent';
import { FilterElement } from './src/models/FilterModel';

export default function App() {



  return (
    <View style={styles.container}>
      <Filter />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:66
  },
});
