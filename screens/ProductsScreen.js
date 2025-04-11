import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

const ProductsScreen = ({ setScreen }) => {
  const products = [
    {
      id: 1,
      name: 'Anime Hoodie',
      description: 'Soft cotton hoodie with stylish anime design.',
      price: '$29.99',
      image: 'https://img.joomcdn.net/96c8a20470c010e045f7fd79385d4654588262dc_original.jpeg',
    },
    {
      id: 2,
      name: 'Manga Volume 1',
      description: 'Start your collection with this must-read.',
      price: '$9.99',
      image: 'https://gyaanstore.com/cdn/shop/files/145.png?v=1700257248&width=533',
    },
    {
      id: 3,
      name: 'Action Figure',
      description: 'High-quality collectible figure.',
      price: '$19.99',
      image: 'https://i5.walmartimages.com/asr/8b376240-f685-47bb-a6cf-dd832e2d8b74.dee868c8718e318ac3028aa379c2b83f.jpeg',
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Our Products</Text>
      {products.map((product) => (
        <View key={product.id} style={styles.card}>
          <Image source={{ uri: product.image }} style={styles.image} />
          <Text style={styles.cardTitle}>{product.name}</Text>
          <Text style={styles.cardDescription}>{product.description}</Text>
          <Text style={styles.cardPrice}>{product.price}</Text>
        </View>
      ))}

      {/* Navigation Buttons */}
      <View style={styles.navButtons}>
        <TouchableOpacity
          style={[styles.navButton, { backgroundColor: '#6200EE' }]}
          onPress={() => setScreen('Home')}
        >
          <Text style={styles.buttonText}>Back to Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.navButton, { backgroundColor: '#03A9F4' }]}
          onPress={() => setScreen('Contact')}
        >
          <Text style={styles.buttonText}>Contact Us</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'black',
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 24,
    color: 'white',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    width: '100%',
    marginBottom: 20,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 10,
    marginBottom: 14,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222',
  },
  cardDescription: {
    fontSize: 15,
    color: '#666',
    marginVertical: 6,
  },
  cardPrice: {
    fontSize: 16,
    color: '#4CAF50',
    fontWeight: '600',
  },
  navButtons: {
    width: '100%',
    marginTop: 24,
    gap: 12,
  },
  navButton: {
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 2,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});

export default ProductsScreen;
