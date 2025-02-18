import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import { CustomHeader } from '@src/components/CustomHeader';
import { StatisticsBox } from '@src/components/StatisticsBox';
import { RevenueBox } from '@src/components/RevenueBox';
import { RecentAppointments } from '@src/components/RecentAppointments';

export const HomeScreen = () => {
  const userName = "John"; // Replace with actual user name from your state/context

  return (
    <ScrollView style={styles.container}>
      <CustomHeader />
      
      <View style={styles.welcomeSection}>
        <Text style={styles.welcomeText}>Hello, {userName}</Text>
      </View>

      <View style={styles.statisticsContainer}>
        <StatisticsBox 
          title="New"
          count={5}
          type="new"
        />
        <StatisticsBox 
          title="In Progress"
          count={3}
          type="progress"
        />
        <StatisticsBox 
          title="Completed"
          count={12}
          type="completed"
        />
      </View>

      <RevenueBox />
      <RecentAppointments />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  welcomeSection: {
    padding: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  statisticsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
});

