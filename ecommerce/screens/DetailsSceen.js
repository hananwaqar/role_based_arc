import React, { useCallback, useRef } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import CustomBottomSheet from '../components/CustomBottomSheet';
import TDActionSheet from '../components/CustomBottomSheet';

const DetailsScreen = ({ route, navigation }) => {
  const { product } = route.params;
  const bottomSheetRef = useRef(null);

  const handleAddToCart = () => {
    bottomSheetRef.current?.open();
  }

  const CartContent = () => (
    <View style={styles.cartContent}>
      <View style={styles.cartHeader}>
        <Text style={styles.cartTitle}>Cart</Text>
        <TouchableOpacity onPress={() => bottomSheetRef.current?.close()}>
          <Text style={styles.closeButton}>✕</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cartItem}>
        <Image source={{ uri: product.image }} style={styles.cartProductImage} />
        <View style={styles.productDetails}>
          <Text style={styles.productName}>Barber Hairdressing{'\n'}Scissor (silver)</Text>
          <View style={styles.quantityControl}>
            <TouchableOpacity style={styles.quantityButton}>
              <Text>−</Text>
            </TouchableOpacity>
            <Text style={styles.quantityText}>1</Text>
            <TouchableOpacity style={styles.quantityButton}>
              <Text>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.priceSection}>
        <View style={styles.priceRow}>
          <Text style={styles.priceLabel}>Unit price</Text>
          <Text style={styles.priceValue}>$125.00</Text>
        </View>
        <View style={styles.priceRow}>
          <Text style={styles.priceLabel}>Subtotal</Text>
          <Text style={styles.priceValue}>$250.00</Text>
        </View>
      </View>

      <TouchableOpacity 
        style={styles.checkoutButton}
        onPress={() => {
          bottomSheetRef.current?.close();
          navigation.navigate('StoreShipmentAddress', { product });
        }}
      >
        <Text style={styles.checkoutButtonText}>Check Out</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <>

    
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.backButton}>←</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Details</Text>
          <View style={styles.placeholder} />
        </View>

        <Image source={{ uri: product.image }} style={styles.image} />
        
        <Text style={styles.title}>{product.size} inches Size.</Text>
        <Text style={styles.description}>
          {product.description}. Fine Workmanship. For more accurate cutting.
          100% Satisfaction Guaranteed.
        </Text>
        
        <View style={styles.featuresList}>
          <Text style={styles.featureItem}>• {product.size} inches Size.</Text>
          <Text style={styles.featureItem}>• Non-slip Hair Cutting Shears.</Text>
          <Text style={styles.featureItem}>• Fine Workmanship.</Text>
          <Text style={styles.featureItem}>• For more accurate cutting.</Text>
          <Text style={styles.featureItem}>• 100% Satisfaction Guaranteed.</Text>
        </View>

        <TouchableOpacity
          style={styles.addToCartButton}
          onPress={()=>handleAddToCart()}
        >
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>

        
      </View>
      <TDActionSheet
          ref={bottomSheetRef}
          snapPoints={['75%']}
        >
        <CartContent />
      </TDActionSheet>
  </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  backButton: {
    fontSize: 24,
    padding: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '500',
  },
  placeholder: {
    width: 40,
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    marginHorizontal: 16,
    marginTop: 16,
  },
  description: {
    fontSize: 16,
    color: '#666',
    marginHorizontal: 16,
    marginTop: 8,
  },
  featuresList: {
    marginHorizontal: 16,
    marginTop: 16,
  },
  featureItem: {
    fontSize: 16,
    color: '#666',
    marginVertical: 4,
  },
  addToCartButton: {
    backgroundColor: '#E91E63',
    margin: 16,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    // position: 'absolute',
    // bottom: 0,
    // left: 0,
    // right: 0,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  cartContent: {
    flex: 1,
    padding: 16,
  },
  cartHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  cartTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  closeButton: {
    fontSize: 24,
    color: '#000',
  },
  cartItem: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  cartProductImage: {
    width: 80,
    height: 80,
    borderRadius: 4,
    marginRight: 12,
  },
  productDetails: {
    flex: 1,
    justifyContent: 'space-between',
  },
  productName: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
  },
  quantityControl: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 4,
    width: 100,
    justifyContent: 'space-between',
    paddingVertical: 4,
  },
  quantityButton: {
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  quantityText: {
    fontSize: 16,
  },
  priceSection: {
    marginTop: 'auto',
    marginBottom: 16,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  priceLabel: {
    fontSize: 16,
    color: '#666',
  },
  priceValue: {
    fontSize: 16,
    fontWeight: '500',
  },
  checkoutButton: {
    backgroundColor: '#E91E63',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  checkoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default DetailsScreen;