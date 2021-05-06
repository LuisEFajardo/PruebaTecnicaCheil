import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HotelsScreen from '../screen/HotelsScreen';
import HotelScreen from '../screen/HotelScreen';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Stack = createStackNavigator();

export default function HotelStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="hotels">
        <Stack.Screen
          name="hotels"
          component={HotelsScreen}
          options={{
            title: 'Hotels App',
            headerStyle: styles.header,
            headerTintColor: '#fff',
            headerTitleStyle: styles.headerTitle,
          }}
        />
        <Stack.Screen
          name="hotel"
          component={HotelScreen}
          options={{
            title: 'Hotel',
            headerStyle: styles.header,
            headerTintColor: '#fff',
            headerTitleStyle: styles.headerTitle,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#012E03',
    height: windowHeight * 0.1,
  },
});
