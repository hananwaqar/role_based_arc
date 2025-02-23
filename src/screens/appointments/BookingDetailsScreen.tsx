import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import MapView, { Marker } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';

interface BookingDetails {
  salonName: string;
  location: string;
  rating: number;
  reviews: string;
  date: string;
  timeSlot: string;
  price: number;
  tax: number;
  coordinates: {
    latitude: number;
    longitude: number;
  };
}

const BookingDetailsScreen = () => {
  const navigation = useNavigation();
  
  const bookingDetails: BookingDetails = {
    salonName: 'The Fade Factory',
    location: 'Alice Springs NT 0870, Australia',
    rating: 4.5,
    reviews: '25+',
    date: '14 Nov 2024',
    timeSlot: '10:20 AM - 11:00 AM',
    price: 20.99,
    tax: 0.99,
    coordinates: {
      latitude: 37.7694,
      longitude: -122.4862,
    },
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Booking Details</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.salonCard}>
          <Image 
            source={require('../../assets/images/salon-image.png')}
            style={styles.salonImage}
          />
          <View style={styles.salonInfo}>
            <Text style={styles.salonName}>{bookingDetails.salonName}</Text>
            <View style={styles.ratingContainer}>
              <Text style={styles.rating}>{bookingDetails.rating}</Text>
              <Icon name="star" size={16} color="#E84B8A" />
              <Text style={styles.reviews}>({bookingDetails.reviews})</Text>
            </View>
            <View style={styles.locationContainer}>
              <Icon name="map-marker" size={16} color="#E84B8A" />
              <Text style={styles.locationText}>{bookingDetails.location}</Text>
            </View>
          </View>
        </View>

        <View style={styles.bookingSection}>
          <Text style={styles.sectionTitle}>Your Booking</Text>
          <View style={styles.bookingDetails}>
            <View style={styles.detailRow}>
              <Icon name="calendar" size={20} color="#666" />
              <Text style={styles.detailLabel}>Date</Text>
              <Text style={styles.detailValue}>{bookingDetails.date}</Text>
            </View>
            <View style={styles.detailRow}>
              <Icon name="clock-outline" size={20} color="#666" />
              <Text style={styles.detailLabel}>Time Slot</Text>
              <Text style={styles.detailValue}>{bookingDetails.timeSlot}</Text>
            </View>
          </View>
        </View>

        <View style={styles.priceSection}>
          <Text style={styles.sectionTitle}>Price Details</Text>
          <View style={styles.priceDetails}>
            <View style={styles.priceRow}>
              <Text style={styles.priceLabel}>Price</Text>
              <Text style={styles.priceValue}>{bookingDetails.price.toFixed(2)}$</Text>
            </View>
            <View style={styles.priceRow}>
              <Text style={styles.priceLabel}>Tax Included</Text>
              <Text style={styles.priceValue}>{bookingDetails.tax.toFixed(2)}$</Text>
            </View>
            <View style={[styles.priceRow, styles.totalRow]}>
              <Text style={styles.priceLabel}>Sub Total</Text>
              <Text style={styles.priceValue}>
                {(bookingDetails.price + bookingDetails.tax).toFixed(2)}$
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.locationSection}>
          <Text style={styles.sectionTitle}>Location</Text>
          <View style={styles.mapContainer}>
            {/* <MapView
              style={styles.map}
              initialRegion={{
                latitude: bookingDetails.coordinates.latitude,
                longitude: bookingDetails.coordinates.longitude,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
              }}
            >
              <Marker
                coordinate={bookingDetails.coordinates}
                pinColor="#E84B8A"
              />
            </MapView> */}
          </View>
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.completeButton} onPress={() => navigation.navigate('Feedback')}>
        <Text style={styles.completeButtonText}>Mark as Complete</Text>
      </TouchableOpacity>
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
  salonCard: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 12,
    margin: 16,
    marginTop: 0,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  salonImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  salonInfo: {
    flex: 1,
    marginLeft: 12,
  },
  salonName: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  rating: {
    marginRight: 4,
    fontWeight: '500',
  },
  reviews: {
    color: '#666',
    marginLeft: 4,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    color: '#666',
    marginLeft: 4,
    fontSize: 14,
  },
  bookingSection: {
    padding: 16,
    backgroundColor: 'white',
    margin: 16,
    marginTop: 0,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#E84B8A',
    marginBottom: 16,
  },
  bookingDetails: {
    gap: 12,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailLabel: {
    marginLeft: 8,
    width: 80,
    color: '#333',
  },
  detailValue: {
    flex: 1,
    color: '#333',
  },
  priceSection: {
    padding: 16,
    backgroundColor: 'white',
    margin: 16,
    marginTop: 0,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  priceDetails: {
    gap: 12,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  priceLabel: {
    color: '#333',
  },
  priceValue: {
    color: '#E84B8A',
    fontWeight: '500',
  },
  totalRow: {
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    marginTop: 4,
  },
  locationSection: {
    padding: 16,
    backgroundColor: 'white',
    margin: 16,
    marginTop: 0,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  mapContainer: {
    overflow: 'hidden',
    borderRadius: 12,
  },
  map: {
    height: 200,
    width: '100%',
  },
  completeButton: {
    backgroundColor: '#E84B8A',
    margin: 16,
    padding: 16,
    borderRadius: 30,
    alignItems: 'center',
  },
  completeButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default BookingDetailsScreen; 