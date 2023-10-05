import {SafeAreaView} from 'react-native';
import React from 'react';
import GooglePay from './src/google-pay';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <GooglePay />
    </SafeAreaView>
  );
};

export default App;
