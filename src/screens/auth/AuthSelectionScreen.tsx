import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';
import { useNavigation } from '@react-navigation/native';

const AuthSelectionScreen = () => {
  const navigation = useNavigation();
  const [selectedId, setSelectedId] = useState('customer');

  const radioButtons = [
    {
      id: 'customer',
      label: 'Create Account As a\nCustomer',
      value: 'customer',
      labelStyle: styles.radioLabel,
      size: 25,
      color: '#E84B8A',
      borderColor: '#E84B8A',
    },
    {
      id: 'owner',
      label: 'Create Account As a\nSalon Owner',
      value: 'owner',
      labelStyle: styles.radioLabel,
      size: 25,
      color: '#E84B8A',
      borderColor: '#E84B8A',
    },
  ];

  return (
    <View style={styles.container}>
      <Image 
        source={require('../../assets/images/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <View style={styles.radioContainer}>
        <RadioGroup
          radioButtons={radioButtons}
          onPress={setSelectedId}
          selectedId={selectedId}
          containerStyle={styles.radioGroup}
        />
      </View>
      <TouchableOpacity 
        style={styles.signInButton}
        onPress={() => navigation.navigate('SignIn')}
      >
        <Text style={styles.signInText}>Sign in</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.signUpButton}
        onPress={() => navigation.navigate('SignUp')}
      >
        <Text style={styles.signUpText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    alignItems: 'center',
  },
  logo: {
    width: '80%',
    height: 200,
    marginTop: 50,
    marginBottom: 30,
  },
  radioContainer: {
    width: '100%',
    marginBottom: 30,
  },
  radioGroup: {
    alignItems: 'flex-start',
  },
  radioLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    marginLeft: 10,
  },
  signInButton: {
    backgroundColor: '#E84B8A',
    width: '100%',
    padding: 15,
    borderRadius: 30,
    marginBottom: 15,
  },
  signUpButton: {
    backgroundColor: 'white',
    width: '100%',
    padding: 15,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#E84B8A',
  },
  signInText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
  signUpText: {
    color: '#E84B8A',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default AuthSelectionScreen;
