import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CartProvider} from './src/context/CartContext';
import ProductListScreen from './src/screens/ProductListScreen';
import CartScreen from './src/screens/CartScreen';
import CheckoutScreen from './src/screens/CheckoutScreen';
import OrderSuccessScreen from './src/screens/OrderSuccessScreen';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <CartProvider>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />
        <Stack.Navigator
          initialRouteName="ProductList"
          screenOptions={{
            headerStyle: {backgroundColor: '#264653'},
            headerTintColor: '#fff',
            headerTitleStyle: {fontWeight: '700'},
          }}>
          <Stack.Screen
            name="ProductList"
            component={ProductListScreen}
            options={{title: 'Shop'}}
          />
          <Stack.Screen
            name="Cart"
            component={CartScreen}
            options={{title: 'My Cart'}}
          />
          <Stack.Screen
            name="Checkout"
            component={CheckoutScreen}
            options={{title: 'Checkout'}}
          />
          <Stack.Screen
            name="OrderSuccess"
            component={OrderSuccessScreen}
            options={{title: 'Order Confirmed', headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}

export default App;
