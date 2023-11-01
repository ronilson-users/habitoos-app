/** @format */

import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../Home/Home';
import Profile from '../Home/Profile';
import Settings from '../Home/Settings';
import Analitics from '../Home/Analitics';

function Demo() {
 return (
  <View
   style={{
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center'
   }}>
   <Text>This is top text.</Text>
   <Text>This is bottom text.</Text>
  </View>
 );
}
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function Limpar() {
 return (
  <NavigationContainer>
   <Stack.Navigator
    initialRouteName='Home'
    screenOptions={{ headerShown: false }}>
    <Stack.Screen name='HomeScreen'>
     {() => (
      <Tab.Navigator
       initialRouteName='Analitics'
       tabBar={() => null}
       screenOptions={{ headerShown: false }}>
       <Tab.Screen
        name='Analitics'
        component={Demo}
       />
       <Tab.Screen
        name='Profile'
        component={Demo}
       />
      </Tab.Navigator>
     )}
    </Stack.Screen>

    <Stack.Screen
     name='Settings'
     component={Demo}
    />
   </Stack.Navigator>
  </NavigationContainer>
 );
}
