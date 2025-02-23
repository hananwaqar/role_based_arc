import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

interface Appointment {
  id: string;
  salonName: string;
  location: string;
  rating: number;
  reviews: string;
  date: string;
  timeSlot: string;
  image: any; // You might want to type this properly based on your image handling
}

const AppointmentsScreen = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState('booked');
  const [searchQuery, setSearchQuery] = useState('');

  const appointments: Appointment[] = [
    {
      id: '1',
      salonName: 'The Fade Factory',
      location: 'Alice Springs NT 0870, Australia',
      rating: 4.5,
      reviews: '25+',
      date: '14 Nov 2024',
      timeSlot: '10:20 AM - 11:00 AM',
      image: require('../../assets/images/salon-image.png'),
    },
    {
        id: '1',
        salonName: 'The Fade Factory',
        location: 'Alice Springs NT 0870, Australia',
        rating: 4.5,
        reviews: '25+',
        date: '14 Nov 2024',
        timeSlot: '10:20 AM - 11:00 AM',
        image: require('../../assets/images/salon-image.png'),
      },
    // Add more appointments as needed
  ];

  const renderAppointmentCard = (appointment: Appointment) => (
    <Pressable key={appointment.id} style={styles.appointmentCard} onPress={() => navigation.navigate('BookingDetail')}>
      <Image source={appointment.image} style={styles.salonImage} />
      <View style={styles.cardContent}>
        <View style={styles.cardHeader}>
          <Text style={styles.salonName}>{appointment.salonName}</Text>
          <TouchableOpacity>
            <Icon name="message-outline" size={24} color="#E84B8A" />
          </TouchableOpacity>
        </View>
        
        <View style={styles.locationContainer}>
          <Icon name="map-marker" size={16} color="#E84B8A" />
          <Text style={styles.locationText}>{appointment.location}</Text>
        </View>
        
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>{appointment.rating}</Text>
          <Icon name="star" size={16} color="#E84B8A" />
          <Text style={styles.reviews}>({appointment.reviews})</Text>
        </View>

        <View style={styles.separator} />

        <View style={styles.appointmentDetails}>
          <View style={styles.detailRow}>
            <Icon name="calendar" size={16} color="#666" />
            <Text style={styles.detailLabel}>Date</Text>
            <Text style={styles.detailValue}>{appointment.date}</Text>
          </View>
          <View style={styles.detailRow}>
            <Icon name="clock-outline" size={16} color="#666" />
            <Text style={styles.detailLabel}>Time Slot</Text>
            <Text style={styles.detailValue}>{appointment.timeSlot}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="menu" size={24} color="#333" />
        </TouchableOpacity>
        <Image
          source={require('../../assets/images/profile-pic.png')}
          style={styles.profilePic}
        />
      </View>

      <Text style={styles.greeting}>Hello Valentina,</Text>
      <Text style={styles.title}>Find your Salon!</Text>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search your salon...."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <TouchableOpacity style={styles.searchButton}>
          <Icon name="magnify" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'booked' && styles.activeTab]}
          onPress={() => setActiveTab('booked')}
        >
          <Text style={[styles.tabText, activeTab === 'booked' && styles.activeTabText]}>
            Booked
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'history' && styles.activeTab]}
          onPress={() => setActiveTab('history')}
        >
          <Text style={[styles.tabText, activeTab === 'history' && styles.activeTabText]}>
            History
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {appointments.map(renderAppointmentCard)}
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
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  greeting: {
    fontSize: 16,
    color: '#666',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    paddingHorizontal: 16,
    marginTop: 4,
  },
  searchContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginTop: 16,
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    height: 48,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 24,
    paddingHorizontal: 16,
    marginRight: 8,
  },
  searchButton: {
    width: 48,
    height: 48,
    backgroundColor: '#E84B8A',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderRadius: 20,
    backgroundColor: '#F5F5F5',
    marginRight: 8,
  },
  activeTab: {
    backgroundColor: '#fff',
  },
  tabText: {
    color: '#666',
    fontSize: 16,
  },
  activeTabText: {
    color: '#000',
    fontWeight: '500',
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  appointmentCard: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  salonImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  cardContent: {
    flex: 1,
    marginLeft: 12,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  salonName: {
    fontSize: 18,
    fontWeight: '600',
    flex: 1,
    marginRight: 8,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  locationText: {
    color: '#666',
    fontSize: 14,
    marginLeft: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  rating: {
    fontWeight: '500',
    marginRight: 4,
  },
  reviews: {
    color: '#666',
    marginLeft: 4,
  },
  separator: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginVertical: 8,
  },
  appointmentDetails: {
    marginTop: 4,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  detailLabel: {
    color: '#666',
    fontSize: 14,
    marginLeft: 8,
    width: 70,
  },
  detailValue: {
    color: '#333',
    fontSize: 14,
    flex: 1,
  },
});

export default AppointmentsScreen; 