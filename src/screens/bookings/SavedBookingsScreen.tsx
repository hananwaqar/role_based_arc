import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

interface SavedBooking {
  id: string;
  salonName: string;
  location: string;
  rating: number;
  reviews: string;
  date: string;
  timeSlot: string;
  image: any;
}

const SavedBookingsScreen = () => {
  const navigation = useNavigation();

  const savedBookings: SavedBooking[] = [
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
    // Duplicate the same booking for demo purposes
    {
      id: '2',
      salonName: 'The Fade Factory',
      location: 'Alice Springs NT 0870, Australia',
      rating: 4.5,
      reviews: '25+',
      date: '14 Nov 2024',
      timeSlot: '10:20 AM - 11:00 AM',
      image: require('../../assets/images/salon-image.png'),
    },
    {
      id: '3',
      salonName: 'The Fade Factory',
      location: 'Alice Springs NT 0870, Australia',
      rating: 4.5,
      reviews: '25+',
      date: '14 Nov 2024',
      timeSlot: '10:20 AM - 11:00 AM',
      image: require('../../assets/images/salon-image.png'),
    },
    {
      id: '4',
      salonName: 'The Fade Factory',
      location: 'Alice Springs NT 0870, Australia',
      rating: 4.5,
      reviews: '25+',
      date: '14 Nov 2024',
      timeSlot: '10:20 AM - 11:00 AM',
      image: require('../../assets/images/salon-image.png'),
    },
  ];

  const renderBookingCard = ({ item }: { item: SavedBooking }) => (
    <View style={styles.bookingCard}>
      <Image source={item.image} style={styles.salonImage} />
      <View style={styles.bookingInfo}>
        <View style={styles.bookingHeader}>
          <Text style={styles.salonName}>{item.salonName}</Text>
          <TouchableOpacity>
            <Icon name="dots-vertical" size={24} color="#E84B8A" />
          </TouchableOpacity>
        </View>
        
        <View style={styles.locationContainer}>
          <Icon name="map-marker" size={16} color="#E84B8A" />
          <Text style={styles.locationText}>{item.location}</Text>
        </View>

        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>{item.rating}</Text>
          <Icon name="star" size={16} color="#E84B8A" />
          <Text style={styles.reviews}>({item.reviews})</Text>
        </View>

        <View style={styles.separator} />

        <View style={styles.bookingDetails}>
          <View style={styles.detailRow}>
            <Icon name="calendar" size={16} color="#666" />
            <Text style={styles.detailLabel}>Date</Text>
            <Text style={styles.detailValue}>{item.date}</Text>
          </View>
          <View style={styles.detailRow}>
            <Icon name="clock-outline" size={16} color="#666" />
            <Text style={styles.detailLabel}>Time Slot</Text>
            <Text style={styles.detailValue}>{item.timeSlot}</Text>
          </View>
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
        <Text style={styles.headerTitle}>Saved Bookings</Text>
        <View style={{ width: 24 }} />
      </View>

      <FlatList
        data={savedBookings}
        renderItem={renderBookingCard}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />

      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tabItem}>
          <Icon name="home" size={24} color="#666" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Icon name="message-outline" size={24} color="#666" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Icon name="heart" size={24} color="#E84B8A" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Icon name="account" size={24} color="#666" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Icon name="cog" size={24} color="#666" />
        </TouchableOpacity>
      </View>
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
  listContainer: {
    padding: 16,
  },
  bookingCard: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  salonImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  bookingInfo: {
    flex: 1,
    marginLeft: 12,
  },
  bookingHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  salonName: {
    fontSize: 16,
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
  bookingDetails: {
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
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    paddingVertical: 10,
    backgroundColor: 'white',
  },
  tabItem: {
    padding: 10,
  },
});

export default SavedBookingsScreen; 