import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const RevenueBox = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Revenue</Text>
      <Text style={styles.amount}>$1,234.56</Text>
      <Text style={styles.period}>This Month</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    padding: 20,
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  amount: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  period: {
    fontSize: 14,
    color: '#666',
  },
}); 