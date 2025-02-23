import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const APPOINTMENTS_DATA = [
  {
    id: '1',
    title: 'The Fade Factory',
    category: 'Categories: Hair Cut',
    price: '22.99$',
    status: 'Paid',
    date: '14 Nov 2024',
    time: '10:20 AM - 11:00 AM',
    image: require('../../assets/images/haircut.png'), // You'll need to add this image
  },
  {
    id: '1',
    title: 'The Fade Factory',
    category: 'Categories: Hair Cut',
    price: '22.99$',
    status: 'Paid',
    date: '14 Nov 2024',
    time: '10:20 AM - 11:00 AM',
    image: require('../../assets/images/haircut.png'), // You'll need to add this image
  },
  // Add more appointments as needed
];

const STATS = [
  { label: 'New Appointments', value: '8.8k', change: '+7.4%' },
  { label: 'In Progress', value: '8.3k', change: '+7.4%' },
  { label: 'Completed', value: '8.8k', change: '+7.4%' },
];

export const ManagerHomeScreen = () => {
  const renderAppointmentCard = (item) => (
    <View style={styles.appointmentCard} key={item.id}>
      <Image source={item.image} style={styles.appointmentImage} />
      <View style={styles.appointmentDetails}>
        <Text style={styles.appointmentTitle}>{item.title}</Text>
        <Text style={styles.categoryText}>{item.category}</Text>
        <View style={styles.priceRow}>
          <Text style={styles.priceText}>{item.price}</Text>
          <Text style={styles.statusText}>{item.status}</Text>
        </View>
        <View style={styles.infoRow}>
          <Icon name="calendar-o" size={16} color="#666" />
          <Text style={styles.infoText}>{item.date}</Text>
        </View>
        <View style={styles.infoRow}>
          <Icon name="clock-o" size={16} color="#666" />
          <Text style={styles.infoText}>{item.time}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#E91E63" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="bars" size={24} color="#FFF" />
        </TouchableOpacity>
        <View style={styles.headerTextContainer}>
          <Text style={styles.greeting}>Hello Valentina,</Text>
          <Text style={styles.subGreeting}>Good Afternoon!</Text>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.notificationButton}>
            <View style={styles.notificationDot} />
            <Icon name="bell-o" size={20} color="#FFF" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../../assets/images/profile-pic.png')}
              style={styles.profileImage}
            />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.content}>
        {/* Stats Section */}
        <View style={styles.statsContainer}>
          {STATS.map((stat, index) => (
            <View key={index} style={styles.statItem}>
              <Text style={styles.statValue}>{stat.value}</Text>
              <View style={styles.statLabelContainer}>
                <Text style={styles.statLabel}>{stat.label}</Text>
                <View style={styles.changeBadge}>
                  <Text style={styles.changeText}>{stat.change}</Text>
                </View>
              </View>
            </View>
          ))}
        </View>

        {/* Revenue Section */}
        <View style={styles.revenueCard}>
          <View style={styles.revenueLeft}>
            <View style={styles.revenueIconContainer}>
              <Icon name="camera" size={20} color="#E91E63" />
            </View>
            <View>
              <Text style={styles.revenueAmount}>$1,280</Text>
              <Text style={styles.revenueChange}>↑ 15% last mth</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.detailsButton}>
            <Text style={styles.detailsText}>Details</Text>
            <Icon name="chevron-right" size={12} color="#FFF" />
          </TouchableOpacity>
        </View>

        {/* Recent Appointments */}
        <View style={styles.appointmentsSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recent Appointments</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>
          {APPOINTMENTS_DATA.map(renderAppointmentCard)}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    backgroundColor: '#E91E63',
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTextContainer: {
    flex: 1,
    marginLeft: 16,
  },
  greeting: {
    color: '#FFF',
    fontSize: 14,
  },
  subGreeting: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notificationButton: {
    marginRight: 16,
    position: 'relative',
  },
  notificationDot: {
    position: 'absolute',
    right: -2,
    top: -2,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FFF',
    zIndex: 1,
  },
  profileImage: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  content: {
    flex: 1,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  statItem: {
    flex: 1,
    marginHorizontal: 4,
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  statLabelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
  },
  changeBadge: {
    backgroundColor: 'rgba(233, 30, 99, 0.1)',
    borderRadius: 12,
    paddingHorizontal: 6,
    paddingVertical: 2,
    marginLeft: 4,
  },
  changeText: {
    color: '#E91E63',
    fontSize: 10,
  },
  revenueCard: {
    backgroundColor: '#FFF',
    margin: 16,
    padding: 16,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  revenueLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  revenueIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(233, 30, 99, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  revenueAmount: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  revenueChange: {
    fontSize: 12,
    color: '#666',
  },
  detailsButton: {
    backgroundColor: '#E91E63',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    paddingHorizontal: 12,
    borderRadius: 16,
  },
  detailsText: {
    color: '#FFF',
    marginRight: 4,
    fontSize: 12,
  },
  appointmentsSection: {
    padding: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  seeAllText: {
    color: '#E91E63',
  },
  appointmentCard: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 12,
    flexDirection: 'row',
    marginBottom: 12,
  },
  appointmentImage: {
    width: 80,
    height: 100,
    borderRadius: 8,
  },
  appointmentDetails: {
    flex: 1,
    marginLeft: 12,
  },
  appointmentTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  categoryText: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  priceText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 8,
  },
  statusText: {
    fontSize: 12,
    color: '#4CAF50',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  infoText: {
    fontSize: 12,
    color: '#666',
    marginLeft: 8,
  },
});
