import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

interface NotificationItem {
  bookingNo: string;
  description: string;
  timeAgo: string;
  hasAction?: boolean;
}

const NotificationsScreen = () => {
  const navigation = useNavigation();

  const notifications: NotificationItem[] = [
    {
      bookingNo: '#12345678',
      description: 'Donec lectus dui turpis, eu feugiat nisi lacinia eget. Etiam sodales non ante eu commodo.',
      timeAgo: '1 Min Ago',
      hasAction: true,
    },
    // Add more notifications as needed
  ];

  const renderNotificationItem = (item: NotificationItem) => (
    <View style={styles.notificationItem} key={item.bookingNo}>
      <View style={styles.notificationIcon}>
        <Icon name="bell-outline" size={24} color="#E84B8A" />
      </View>
      <View style={styles.notificationContent}>
        <View style={styles.notificationHeader}>
          <Text style={styles.bookingNo}>Booking No {item.bookingNo}</Text>
          <TouchableOpacity>
            <Icon name="information" size={20} color="#666" />
          </TouchableOpacity>
        </View>
        <Text style={styles.description}>{item.description}</Text>
        <View style={styles.notificationFooter}>
          <Text style={styles.timeAgo}>{item.timeAgo}</Text>
          {item.hasAction && (
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionButtonText}>Add Feedback</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notifications</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView style={styles.content}>
        {notifications.map(renderNotificationItem)}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  content: {
    flex: 1,
  },
  notificationItem: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  notificationIcon: {
    marginRight: 12,
  },
  notificationContent: {
    flex: 1,
  },
  notificationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  bookingNo: {
    fontSize: 16,
    fontWeight: '600',
    color: '#E84B8A',
  },
  description: {
    color: '#666',
    marginBottom: 8,
  },
  notificationFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  timeAgo: {
    color: '#666',
    fontSize: 12,
  },
  actionButton: {
    backgroundColor: '#E84B8A',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  actionButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
  },
});

export default NotificationsScreen; 