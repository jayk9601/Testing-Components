import {SafeAreaView} from 'react-native';
import React from 'react';
import Testing from './src';
import {ThemeProvider} from 'theme-component';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <ThemeProvider>
        <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
          <Testing />
        </SafeAreaView>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
};

export default App;
