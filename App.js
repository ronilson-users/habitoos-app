/** @format */

import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';

import AppNavigation from './src/routes/AppNavigation';

export default function App() {
 return (
  <NavigationContainer>
   <StatusBar style='auto' />
   <AppNavigation />
  </NavigationContainer>
 );
}
