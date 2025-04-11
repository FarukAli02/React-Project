import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductsScreen from './screens/ProductsScreen';
import ContactScreen from './screens/ContactScreen';

export default function App() {
  const [screen, setScreen] = useState('Home');

  const renderScreen = () => {
    switch (screen) {
      case 'Products':
        return <ProductsScreen setScreen={setScreen} />;
      case 'Contact':
        return <ContactScreen setScreen={setScreen} />;
      default:
        return <HomeScreen setScreen={setScreen} />;
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      {renderScreen()}
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
