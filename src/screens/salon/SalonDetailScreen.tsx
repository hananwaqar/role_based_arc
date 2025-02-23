import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Switch,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

interface Service {
  id: string;
  name: string;
  price: string;
  duration: string;
}

const services: Service[] = [
  { id: '1', name: 'Hair Cut', price: '20.99$', duration: '40 Minutes' },
  { id: '2', name: 'Hair Cut', price: '20.99$', duration: '40 Minutes' },
  { id: '3', name: 'Hair Cut', price: '20.99$', duration: '40 Minutes' },
  { id: '4', name: 'Hair Cut', price: '20.99$', duration: '40 Minutes' },
];

const SalonDetailScreen = () => {
  const navigation = useNavigation();
  const [selectedServices, setSelectedServices] = useState<{ [key: string]: boolean }>(
    services.reduce((acc, service) => ({ ...acc, [service.id]: false }), {})
  );

  const toggleService = (serviceId: string) => {
    setSelectedServices(prev => ({
      ...prev,
      [serviceId]: !prev[serviceId]
    }));
  };

  const renderServiceItem = (service: Service) => (
    <View key={service.id} style={styles.serviceItem}>
      <View style={styles.serviceInfo}>
        <Text style={styles.serviceName}>{service.name}</Text>
        <View style={styles.serviceDetails}>
          <Text style={styles.servicePrice}>{service.price}</Text>
          <Text style={styles.serviceDot}> • </Text>
          <Text style={styles.serviceDuration}>{service.duration}</Text>
        </View>
      </View>
      <Switch
        value={selectedServices[service.id]}
        onValueChange={() => toggleService(service.id)}
        trackColor={{ false: '#D1D1D1', true: '#E84B8A' }}
        thumbColor={'#FFFFFF'}
        ios_backgroundColor="#D1D1D1"
      />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Details</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          source={require('../../assets/images/salon-image.png')}
          style={styles.salonImage}
        />

        <View style={styles.salonInfoContainer}>
          <View style={styles.salonNameContainer}>
            <Text style={styles.salonName}>The Fade Factory</Text>
            <View style={styles.ratingContainer}>
              <Text style={styles.rating}>4.5</Text>
              <Icon name="star" size={16} color="#E84B8A" />
              <Text style={styles.reviews}>(25+)</Text>
            </View>
          </View>

          <View style={styles.locationContainer}>
            <Icon name="map-marker" size={20} color="#E84B8A" />
            <Text style={styles.location}>Alice Springs NT 0870, Australia</Text>
          </View>
        </View>

        <View style={styles.servicesContainer}>
          {services.map(renderServiceItem)}
        </View>
      </ScrollView>

      <TouchableOpacity 
        onPress={() => navigation.navigate('Appointment')}
        style={[
          styles.continueButton,
          !Object.values(selectedServices).some(value => value) && styles.continueButtonDisabled
        ]}
        disabled={!Object.values(selectedServices).some(value => value)}
      >
        <Text style={styles.continueButtonText}>Continue</Text>
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
    padding: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  salonImage: {
    width: '90%',
    height: 200,
    alignSelf: 'center',
    borderRadius: 15,
  },
  salonInfoContainer: {
    padding: 20,
  },
  salonNameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  salonName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: 16,
    fontWeight: '600',
    marginRight: 4,
  },
  reviews: {
    color: '#666',
    marginLeft: 4,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  location: {
    marginLeft: 8,
    color: '#666',
    fontSize: 14,
  },
  servicesContainer: {
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 15,
  },
  serviceItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  serviceInfo: {
    flex: 1,
  },
  serviceName: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  serviceDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  servicePrice: {
    color: '#E84B8A',
    fontWeight: '600',
  },
  serviceDot: {
    color: '#666',
    marginHorizontal: 4,
  },
  serviceDuration: {
    color: '#666',
  },
  continueButton: {
    backgroundColor: '#E84B8A',
    margin: 20,
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
  },
  continueButtonDisabled: {
    backgroundColor: '#E0E0E0',
  },
  continueButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default SalonDetailScreen; 