import React from 'react';
import { View, StyleSheet, Text, StatusBar } from 'react-native';

import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

import Navigation from './src/routes/Navigation';
import AppNavigation from './src/routes/AppNavigation';

export default function App() {
  const isLoggedIn = false;

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {isLoggedIn ? <Navigation /> : <AppNavigation />}
      </NavigationContainer>
    </SafeAreaProvider>
  );
}