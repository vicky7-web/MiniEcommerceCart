import React from 'react';
import {View, FlatList, TouchableOpacity, Text, StyleSheet} from 'react-native';
import products from '../data/products';
import ProductCard from '../components/ProductCard';
import {useCart} from '../context/CartContext';

export default function ProductListScreen({navigation}) {
  const {itemCount} = useCart();

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={item => item.id}
        renderItem={({item}) => <ProductCard product={item} />}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
      <TouchableOpacity
        style={styles.cartButton}
        onPress={() => navigation.navigate('Cart')}
        activeOpacity={0.7}>
        <Text style={styles.cartButtonText}>
          Go to Cart{itemCount > 0 ? ` (${itemCount})` : ''}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  list: {
    paddingVertical: 8,
    paddingBottom: 80,
  },
  cartButton: {
    position: 'absolute',
    bottom: 20,
    left: 16,
    right: 16,
    backgroundColor: '#264653',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  cartButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
});
