import React from 'react';
import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import AppProvider from './hooks';

import Routes from './routes';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AppProvider>
          <Routes />
        </AppProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
