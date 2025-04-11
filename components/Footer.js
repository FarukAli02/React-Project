import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>© 2025 MAW</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: 'red',
    padding: 15,
    alignItems: 'center'
  },
  footerText: {
    color: '#fff'
  }
});
