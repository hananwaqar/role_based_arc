import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
// import { NavStackParams, Screen } from '@src/navigation/appNavigation.type';

type NewsDetailRouteProp = RouteProp<any>;

export const NewsDetailScreen = () => {
  const route = useRoute<NewsDetailRouteProp>();
  const { id } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>News Detail</Text>
      <Text style={styles.content}>News ID: {id}</Text>
      {/* Add news content here */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
  },
}); 