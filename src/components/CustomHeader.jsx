import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const CustomHeader = () => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => {/* Handle chat */}}>
        <Icon name="chat" size={24} color="#000" />
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => {/* Handle profile */}}>
        <Icon name="person" size={24} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#fff',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
}); 