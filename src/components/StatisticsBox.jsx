import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const StatisticsBox = ({ title, count, type }) => {
  const getBackgroundColor = () => {
    switch(type) {
      case 'new': return '#E3F2FD';
      case 'progress': return '#FFF3E0';
      case 'completed': return '#E8F5E9';
      default: return '#fff';
    }
  };

  return (
    <View style={[styles.box, { backgroundColor: getBackgroundColor() }]}>
      <Text style={styles.count}>{count}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    flex: 1,
    margin: 5,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  count: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  title: {
    fontSize: 12,
    textAlign: 'center',
  },
}); 