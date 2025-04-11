import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const HomeScreen = ({ setScreen }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://i.imgur.com/UPrs1EW.jpg' }}
        style={styles.banner}
      />
      <Text style={styles.title}>Welcome to Anime World!</Text>
      <Text style={styles.subtitle}>
        Explore our latest collection of anime merchandise.
      </Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#4CAF50' }]}
          onPress={() => setScreen('Products')}
        >
          <Text style={styles.buttonText}>View Products</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#6200EE' }]}
          onPress={() => setScreen('Contact')}
        >
          <Text style={styles.buttonText}>Contact Us</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: 'black',
    flex: 1,
  },
  banner: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 4,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    marginBottom: 30,
  },
  buttonContainer: {
    width: '100%',
    gap: 15,
  },
  button: {
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
});

export default HomeScreen;
