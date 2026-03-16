import React from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import {useCart} from '../context/CartContext';

export default function CheckoutScreen({navigation}) {
  const {cartItems, cartTotal} = useCart();

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Billing Summary</Text>

      <View style={styles.card}>
        <View style={styles.headerRow}>
          <Text style={[styles.headerText, styles.itemCol]}>Item</Text>
          <Text style={[styles.headerText, styles.qtyCol]}>Qty</Text>
          <Text style={[styles.headerText, styles.priceCol]}>Price</Text>
        </View>
        <View style={styles.divider} />

        <FlatList
          data={cartItems}
          keyExtractor={item => item.product.id}
          renderItem={({item}) => (
            <View style={styles.row}>
              <Text style={[styles.rowText, styles.itemCol]} numberOfLines={1}>
                {item.product.name}
              </Text>
              <Text style={[styles.rowText, styles.qtyCol]}>
                {item.quantity}
              </Text>
              <Text style={[styles.rowText, styles.priceCol]}>
                ${(item.product.price * item.quantity).toFixed(2)}
              </Text>
            </View>
          )}
          showsVerticalScrollIndicator={false}
        />

        <View style={styles.divider} />
        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.totalAmount}>${cartTotal.toFixed(2)}</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.placeOrderButton}
        onPress={() => navigation.navigate('OrderSuccess')}
        activeOpacity={0.7}>
        <Text style={styles.placeOrderText}>Place Order</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  heading: {
    fontSize: 22,
    fontWeight: '700',
    color: '#264653',
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.08,
    shadowRadius: 3,
  },
  headerRow: {
    flexDirection: 'row',
    paddingBottom: 8,
  },
  headerText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#888',
    textTransform: 'uppercase',
  },
  itemCol: {
    flex: 2,
  },
  qtyCol: {
    flex: 0.5,
    textAlign: 'center',
  },
  priceCol: {
    flex: 1,
    textAlign: 'right',
  },
  divider: {
    height: 1,
    backgroundColor: '#e9ecef',
    marginVertical: 8,
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 8,
  },
  rowText: {
    fontSize: 15,
    color: '#333',
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 4,
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
  },
  totalAmount: {
    fontSize: 20,
    fontWeight: '700',
    color: '#2a9d8f',
  },
  placeOrderButton: {
    backgroundColor: '#e76f51',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 24,
  },
  placeOrderText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
});
