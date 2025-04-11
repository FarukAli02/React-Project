import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>My Anime World</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'red',
    padding: 20,
    alignItems: 'center'
  },
  headerText: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold'
  }
});
