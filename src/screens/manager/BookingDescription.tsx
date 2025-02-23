import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Switch, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const BookingDescription = () => {
  const [switches, setSwitches] = useState([true, true, true]);

  const dummyData = {
    customer: {
      name: 'Valentina',
      contactNo: '+1 695 325 659',
      image: require('../../assets/images/profile-pic.png'),
    },
    salon: {
      name: 'The Fade Factory',
      rating: 4.5,
      reviews: '25+',
      location: 'Alice Springs NT 0870, Australia',
    },
    services: [
      { id: 1, name: 'Hair Cut', price: 20.99, duration: '40 Minutes', timeSlot: '10:20 AM - 11:00AM' },
      { id: 2, name: 'Hair Cut', price: 20.99, duration: '40 Minutes', timeSlot: '10:20 AM - 11:00AM' },
      { id: 3, name: 'Hair Cut', price: 20.99, duration: '40 Minutes', timeSlot: '10:20 AM - 11:00AM' },
    ],
    booking: {
      date: '14 Nov 2024',
      timeSlot: '10:20 AM - 11:00 AM',
    },
    priceDetails: {
      price: 20.99,
      taxIncluded: 0.99,
      deducted: 7.99,
      subTotal: 22.99,
    },
  };

  const toggleSwitch = (index: number) => {
    const newSwitches = [...switches];
    newSwitches[index] = !newSwitches[index];
    setSwitches(newSwitches);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Text>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Booking Details</Text>
      </View>

      {/* Customer Info Card */}
      <View style={styles.card}>
        <View style={styles.customerInfo}>
          <Image source={dummyData.customer.image} style={styles.profileImage} />
          <View style={styles.customerDetails}>
            <Text style={styles.customerName}>{dummyData.customer.name}</Text>
            <Text style={styles.contactNo}>Contact No: {dummyData.customer.contactNo}</Text>
          </View>
          <TouchableOpacity style={styles.callButton}>
            <Text style={styles.callButtonText}>📞</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Salon Info Card */}
      <View style={styles.card}>
        <Text style={styles.salonName}>{dummyData.salon.name}</Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>{dummyData.salon.rating} ⭐ ({dummyData.salon.reviews})</Text>
        </View>
        <View style={styles.locationContainer}>
          <Text style={styles.location}>📍 {dummyData.salon.location}</Text>
        </View>
      </View>

      {/* Services Card */}
      <View style={styles.card}>
        {dummyData.services.map((service, index) => (
          <View key={service.id} style={styles.serviceItem}>
            <View style={styles.serviceInfo}>
              <Text style={styles.serviceName}>{service.name}</Text>
              <Text style={styles.servicePrice}>{service.price}$ • {service.duration}</Text>
              <Text style={styles.timeSlot}>Time Slot • {service.timeSlot}</Text>
            </View>
            <Switch
              value={switches[index]}
              onValueChange={() => toggleSwitch(index)}
              trackColor={{ false: '#767577', true: '#FF4B93' }}
              thumbColor={switches[index] ? '#fff' : '#f4f3f4'}
            />
          </View>
        ))}
      </View>

      {/* Booking Details Card */}
      <View style={styles.card}>
        <Text style={styles.bookingTitle}>Your Booking</Text>
        <View style={styles.bookingDetails}>
          <View style={styles.bookingRow}>
            <Text style={styles.bookingLabel}>Date</Text>
            <Text style={styles.bookingValue}>{dummyData.booking.date}</Text>
          </View>
          <View style={styles.bookingRow}>
            <Text style={styles.bookingLabel}>Time Slot</Text>
            <Text style={styles.bookingValue}>{dummyData.booking.timeSlot}</Text>
          </View>
        </View>

        <View style={styles.priceSection}>
          <Text style={styles.priceTitle}>Price Details</Text>
          <View style={styles.priceRow}>
            <Text>Price</Text>
            <Text style={styles.priceValue}>{dummyData.priceDetails.price}$</Text>
          </View>
          <View style={styles.priceRow}>
            <Text>Tax Included</Text>
            <Text style={styles.priceValue}>{dummyData.priceDetails.taxIncluded}$</Text>
          </View>
          <View style={styles.priceRow}>
            <Text>Deducted</Text>
            <Text style={styles.priceValue}>{dummyData.priceDetails.deducted}</Text>
          </View>
          <View style={[styles.priceRow, styles.totalRow]}>
            <Text>Sub Total • Paid</Text>
            <Text style={styles.totalPrice}>{dummyData.priceDetails.subTotal}$</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.completeButton}>
        <Text style={styles.completeButtonText}>Complete Appointment</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 16,
  },
  card: {
    backgroundColor: '#fff',
    margin: 16,
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  customerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  customerDetails: {
    flex: 1,
    marginLeft: 12,
  },
  customerName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  contactNo: {
    color: '#666',
  },
  callButton: {
    backgroundColor: '#FF4B93',
    padding: 12,
    borderRadius: 25,
  },
  callButtonText: {
    color: '#fff',
  },
  salonName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  ratingContainer: {
    marginTop: 8,
  },
  rating: {
    color: '#666',
  },
  locationContainer: {
    marginTop: 8,
  },
  location: {
    color: '#666',
  },
  serviceItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  serviceInfo: {
    flex: 1,
  },
  serviceName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  servicePrice: {
    color: '#FF4B93',
    marginTop: 4,
  },
  timeSlot: {
    color: '#FF4B93',
    marginTop: 4,
  },
  bookingTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF4B93',
    marginBottom: 16,
  },
  bookingDetails: {
    marginBottom: 16,
  },
  bookingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  bookingLabel: {
    color: '#666',
  },
  bookingValue: {
    fontWeight: '500',
  },
  priceSection: {
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    paddingTop: 16,
  },
  priceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF4B93',
    marginBottom: 16,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  priceValue: {
    color: '#FF4B93',
  },
  totalRow: {
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    paddingTop: 8,
    marginTop: 8,
  },
  totalPrice: {
    color: '#FF4B93',
    fontWeight: 'bold',
  },
  completeButton: {
    backgroundColor: '#FF4B93',
    margin: 16,
    padding: 16,
    borderRadius: 25,
    alignItems: 'center',
  },
  completeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default BookingDescription;
