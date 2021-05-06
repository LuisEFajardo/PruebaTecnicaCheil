import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import HotelStack from './src/navigation/HotelStack';

const App = () => {
  return (
      <>
        <StatusBar barStyle="light-content" />
        <HotelStack />
      </>
  );
};

export default App;
