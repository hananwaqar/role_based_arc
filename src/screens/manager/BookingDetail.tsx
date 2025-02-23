import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const BookingDetail = ({navigation}) => {
  const [activeTab, setActiveTab] = useState('booked');

  const bookingData = {
    booked: [
      {
        id: '1',
        shopName: 'The Fade Factory',
        category: 'Hair Cut',
        price: '22.99',
        status: 'Paid',
        date: '14 Nov 2024',
        timeSlot: '10:20 AM - 11:00 AM',
      },
      {
        id: '2',
        shopName: 'The Fade Factory',
        category: 'Hair Cut',
        price: '22.99',
        status: 'Paid',
        date: '14 Nov 2024',
        timeSlot: '10:20 AM - 11:00 AM',
      },
    ],
    history: [
      {
        id: '3',
        shopName: 'The Fade Factory',
        category: 'Hair Cut',
        price: '22.99',
        status: 'Paid',
        commission: '7.00',
        date: '14 Nov 2024',
        timeSlot: 'Completed Successfully',
      },
      {
        id: '4',
        shopName: 'The Fade Factory',
        category: 'Hair Cut',
        price: '22.99',
        status: 'Refund',
        date: '14 Nov 2024',
        timeSlot: 'Cancelled',
      },
    ],
  };

  const renderHeader = () => (
    <View style={styles.header}>
      <Text style={styles.greeting}>Hello Valentina,</Text>
      <Text style={styles.title}>Good Afternoon!</Text>
    </View>
  );

  const renderTabs = () => (
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
  );

  const renderBookingCard = ({ 
    status, 
    date, 
    timeSlot, 
    price, 
    commission 
  }) => (
    <Pressable style={styles.card} onPress={() => navigation.navigate('BookingDescription')}>
      <View style={styles.cardHeader}>
        <Image 
          source={require('../../assets/images/haircut.png')} 
          style={styles.shopImage} 
        />
        <View style={styles.shopInfo}>
          <Text style={styles.shopName}>The Fade Factory</Text>
          <Text style={styles.category}>Categories - Hair Cut</Text>
        </View>
      </View>
      
      <View style={styles.priceContainer}>
        <Text style={styles.price}>{price}$</Text>
        <Text style={[
          styles.status,
          { color: status === 'Paid' ? '#FF4B93' : status === 'Refund' ? '#FF0000' : '#4CAF50' }
        ]}>
          {status}
        </Text>
        {commission && (
          <Text style={styles.commission}>{commission}$ Commission Pending</Text>
        )}
      </View>

      <View style={styles.bookingDetails}>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Date</Text>
          <Text style={styles.detailValue}>{date}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Time Slot</Text>
          <Text style={[
            styles.detailValue,
            status === 'Completed Successfully' && styles.completedStatus,
            status === 'Cancelled' && styles.cancelledStatus
          ]}>
            {timeSlot}
          </Text>
        </View>
      </View>
    </Pressable>
  );

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      {renderTabs()}
      <ScrollView style={styles.content}>
        {bookingData[activeTab].map((booking) => 
          renderBookingCard(booking)
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
    backgroundColor: '#FF4B93',
  },
  greeting: {
    color: '#fff',
    fontSize: 16,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 4,
  },
  tabContainer: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#fff',
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: '#F5F5F5',
    marginHorizontal: 4,
  },
  activeTab: {
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  tabText: {
    color: '#999',
    fontSize: 16,
    fontWeight: '500',
  },
  activeTabText: {
    color: '#000',
  },
  content: {
    flex: 1,
  },
  card: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  shopImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  shopInfo: {
    marginLeft: 12,
    flex: 1,
  },
  shopName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  category: {
    color: '#666',
    marginTop: 4,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  status: {
    marginLeft: 8,
    fontSize: 16,
  },
  commission: {
    marginLeft: 'auto',
    color: '#FF4B93',
    fontSize: 12,
  },
  bookingDetails: {
    marginTop: 12,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  detailLabel: {
    color: '#666',
  },
  detailValue: {
    fontWeight: '500',
  },
  completedStatus: {
    color: '#4CAF50',
  },
  cancelledStatus: {
    color: '#FF0000',
  },
});

export default BookingDetail;
