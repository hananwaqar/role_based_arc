import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const CartScreen = ({ route }) => {
  const { product } = route.params;
  const [quantity, setQuantity] = useState(1);

  const subtotal = product.price * quantity;

  return (
    <View style={styles.container}>
      <View style={styles.cartItem}>
        <Image source={{ uri: product.image }} style={styles.productImage} />
        <View style={styles.productInfo}>
          <Text style={styles.productName}>{product.name}</Text>
          <View style={styles.quantityControl}>
            <TouchableOpacity onPress={() => setQuantity(Math.max(1, quantity - 1))}>
              <Text>-</Text>
            </TouchableOpacity>
            <Text>{quantity}</Text>
            <TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
              <Text>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.summary}>
        <Text>Unit price: ${product.price}</Text>
        <Text>Subtotal: ${subtotal}</Text>
      </View>

      <TouchableOpacity style={styles.checkoutButton}>
        <Text style={styles.buttonText}>Check Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CartScreen;