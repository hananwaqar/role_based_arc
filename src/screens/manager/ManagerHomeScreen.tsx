import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { setAuthenticated } from '@src/store/slices/authSlice';

export const ManagerHomeScreen = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(setAuthenticated(false));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Manager Home Screen</Text>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  logoutButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  logoutText: {
    color: 'white',
    fontSize: 16,
  },
}); 