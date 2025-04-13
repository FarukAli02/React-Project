import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';

const ContactScreen = ({ setScreen }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    console.log('Form Data:', { name, email, message });
    Alert.alert('Submitted', 'Your message has been sent!');
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Us</Text>

      <TextInput
        style={styles.input}
        placeholder="Your Name"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Your Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <TextInput
        style={[styles.input, styles.messageBox]}
        placeholder="Your Message"
        value={message}
        onChangeText={setMessage}
        multiline
      />

      <Button title="Submit" onPress={handleSubmit} color="#6200ee" />

      <View style={styles.navButtons}>
        <TouchableOpacity onPress={() => setScreen('Home')} style={styles.navButton}>
          <Text style={styles.navText}>Go to Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setScreen('Products')} style={styles.navButton}>
          <Text style={styles.navText}>Go to Products</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    flex: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    fontSize: 16,
  },
  messageBox: {
    height: 100,
    textAlignVertical: 'top',
  },
  navButtons: {
  
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  navButton: {
    backgroundColor: '#e0e0e0',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  navText: {
    fontSize: 16,
    color: '#000',
  },
});

export default ContactScreen;
