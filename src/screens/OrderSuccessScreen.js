import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useCart} from '../context/CartContext';

export default function OrderSuccessScreen({navigation}) {
  const {clearCart} = useCart();

  const handleContinueShopping = () => {
    clearCart();
    navigation.popToTop();
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconCircle}>
        <Text style={styles.checkmark}>✓</Text>
      </View>
      <Text style={styles.title}>Order Placed!</Text>
      <Text style={styles.message}>
        Your order has been placed successfully.
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={handleContinueShopping}
        activeOpacity={0.7}>
        <Text style={styles.buttonText}>Continue Shopping</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  iconCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#2a9d8f',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  checkmark: {
    fontSize: 40,
    color: '#fff',
    fontWeight: '700',
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#264653',
    marginBottom: 8,
  },
  message: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 32,
  },
  button: {
    backgroundColor: '#264653',
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
});
