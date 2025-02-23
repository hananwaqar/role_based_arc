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
import { useNavigation } from '@react-navigation/native';

interface BookingDetails {
  date: string;
  timeSlot: string;
  price: number;
  tax: number;
  commission: number;
}

const CheckoutScreen = () => {
  const navigation = useNavigation();
  
  const bookingDetails: BookingDetails = {
    date: '14 Nov 2024',
    timeSlot: '10:20 AM - 11:00 AM',
    price: 20.99,
    tax: 0.99,
    commission: 7.00,
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Check Out</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.salonCard}>
          <Image 
            source={require('../../assets/images/salon-image.png')}
            style={styles.salonImage}
          />
          <View style={styles.salonInfo}>
            <View style={styles.salonHeader}>
              <Text style={styles.salonName}>The Fade Factory</Text>
              <View style={styles.ratingContainer}>
                <Text style={styles.rating}>4.5</Text>
                <Icon name="star" size={16} color="#E84B8A" />
                <Text style={styles.reviews}>(25+)</Text>
              </View>
            </View>
            <View style={styles.locationContainer}>
              <Icon name="map-marker" size={16} color="#E84B8A" />
              <Text style={styles.locationText}>Alice Springs NT 0870, Australia</Text>
            </View>
          </View>
        </View>

        <View style={styles.bookingDetails}>
          <Text style={styles.sectionTitle}>Your Booking</Text>
          <View style={styles.detailRow}>
            <View style={styles.detailItem}>
              <Icon name="calendar" size={20} color="#666" />
              <Text style={styles.detailLabel}>Date</Text>
            </View>
            <Text style={styles.detailValue}>{bookingDetails.date}</Text>
          </View>
          <View style={styles.detailRow}>
            <View style={styles.detailItem}>
              <Icon name="clock-outline" size={20} color="#666" />
              <Text style={styles.detailLabel}>Time Slot</Text>
            </View>
            <Text style={styles.detailValue}>{bookingDetails.timeSlot}</Text>
          </View>
        </View>

        <View style={styles.priceContainer}>
          <Text style={styles.sectionTitle}>Price Details</Text>
          <View style={styles.priceRow}>
            <Text style={styles.priceLabel}>Price</Text>
            <Text style={styles.priceValue}>{bookingDetails.price.toFixed(2)}$</Text>
          </View>
          <View style={styles.priceRow}>
            <Text style={styles.priceLabel}>Tax Included</Text>
            <Text style={styles.priceValue}>{bookingDetails.tax.toFixed(2)}$</Text>
          </View>
          <View style={styles.priceRow}>
            <Text style={styles.priceLabel}>Owner's Commission</Text>
            <Text style={styles.priceValue}>{bookingDetails.commission.toFixed(2)}$</Text>
          </View>
          <View style={[styles.priceRow, styles.totalRow]}>
            <Text style={styles.priceLabel}>Sub Total</Text>
            <Text style={styles.priceValue}>
              {(bookingDetails.price + bookingDetails.tax + bookingDetails.commission).toFixed(2)}$
            </Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Make Payment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.messageButton]}>
          <Text style={styles.buttonText}>Message Salon Owner</Text>
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
  content: {
    flex: 1,
  },
  salonCard: {
    flexDirection: 'row',
    padding: 16,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 12,
    margin: 16,
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
  salonHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  salonName: {
    fontSize: 18,
    fontWeight: '600',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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
    marginTop: 8,
  },
  locationText: {
    color: '#666',
    marginLeft: 4,
    fontSize: 14,
  },
  bookingDetails: {
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 12,
    margin: 16,
    marginTop: 0,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#E84B8A',
    marginBottom: 16,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailLabel: {
    marginLeft: 8,
    fontSize: 16,
    color: '#333',
  },
  detailValue: {
    fontSize: 16,
    color: '#333',
  },
  priceContainer: {
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 12,
    margin: 16,
    marginTop: 0,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  priceLabel: {
    fontSize: 16,
    color: '#333',
  },
  priceValue: {
    fontSize: 16,
    color: '#E84B8A',
    fontWeight: '500',
  },
  totalRow: {
    marginTop: 8,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  buttonContainer: {
    padding: 16,
  },
  button: {
    backgroundColor: '#E84B8A',
    borderRadius: 30,
    padding: 16,
    alignItems: 'center',
    marginBottom: 12,
  },
  messageButton: {
    marginBottom: 0,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default CheckoutScreen; 