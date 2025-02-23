import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// This would typically come from your API or data store
const salonData = [
  {
    id: '1',
    name: 'The Fade Factory',
    rating: 4.5,
    reviews: '25+',
    distance: '0.7 KM',
    openTime: '12:00 AM',
    closeTime: '8:00 PM',
    image: require('../../assets/images/salon-image.png'),
  },
  // ... more salon data
];

const UserHomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const renderSalonCard = ({ item }) => (
    <View style={styles.cardWrapper}>
      <View style={styles.cardContainer}>
        <Image source={item.image} style={styles.salonImage} />
        <TouchableOpacity style={styles.favoriteButton}>
          <Icon name="heart-outline" size={24} color="#E84B8A" />
        </TouchableOpacity>
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingText}>{item.rating}</Text>
          <Icon name="star" size={16} color="#FFD700" />
          <Text style={styles.reviewCount}>{item.reviews}</Text>
        </View>
        <View style={styles.cardContent}>
          <Text style={styles.openingHours}>
            Open: {item.openTime} - {item.closeTime}
          </Text>
          <Text style={styles.salonName}>{item.name}</Text>
          <View style={styles.distanceContainer}>
            <Icon name="map-marker" size={16} color="#E84B8A" />
            <Text style={styles.distanceText}>{item.distance}</Text>
          </View>
          <TouchableOpacity style={styles.bookButton}>
            <Text style={styles.bookButtonText}>Book Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
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

      {/* <FlatList
        data={salonData}
        renderItem={renderSalonCard}
        keyExtractor={(item) => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.listContainer}
      /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  greeting: {
    fontSize: 16,
    color: '#666',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    height: 50,
    backgroundColor: '#F5F5F5',
    borderRadius: 25,
    paddingHorizontal: 20,
    marginRight: 10,
  },
  searchButton: {
    width: 50,
    height: 50,
    backgroundColor: '#E84B8A',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    justifyContent: 'space-between',
  },
  listContainer: {
    paddingBottom: 20,
  },
  cardWrapper: {
    width: '48%', // Slightly less than 50% to allow for spacing
    marginBottom: 20,
  },
  cardContainer: {
    backgroundColor: 'white',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  salonImage: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  favoriteButton: {
    position: 'absolute',
    right: 10,
    top: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 8,
  },
  ratingContainer: {
    position: 'absolute',
    left: 10,
    top: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 5,
  },
  ratingText: {
    fontWeight: 'bold',
    marginRight: 4,
  },
  reviewCount: {
    marginLeft: 4,
    color: '#666',
  },
  cardContent: {
    padding: 10,
  },
  openingHours: {
    color: '#E84B8A',
    fontSize: 11,
    marginBottom: 5,
  },
  salonName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  distanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  distanceText: {
    marginLeft: 5,
    color: '#666',
  },
  bookButton: {
    backgroundColor: '#E84B8A',
    borderRadius: 25,
    padding: 10,
    alignItems: 'center',
  },
  bookButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default UserHomeScreen; 