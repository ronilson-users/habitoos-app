import React from 'react';
import { View, StyleSheet, Text, StatusBar } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets
} from 'react-native-safe-area-context';

import { NavigationContainer } from '@react-navigation/native';

import AppNavigation from './src/routes/AppNavigation';


import AuthNavigation from './src/routes/AuthNavigation';

export default function App() {
  return (
    <NavigationContainer>
      <AuthNavigation />
    </NavigationContainer>
  );
}
