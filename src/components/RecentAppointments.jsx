import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

export const RecentAppointments = () => {
  const appointments = [
    { id: '1', name: 'John Doe', time: '10:00 AM', service: 'Haircut' },
    { id: '2', name: 'Jane Smith', time: '11:30 AM', service: 'Massage' },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.appointmentItem}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.details}>{item.service} - {item.time}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recent Appointments</Text>
      <FlatList
        data={appointments}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  appointmentItem: {
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
  },
  details: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
}); 