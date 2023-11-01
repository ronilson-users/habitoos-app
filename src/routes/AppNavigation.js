/** @format */

import { useState, useEffect } from 'react';

import { AntDesign } from '@expo/vector-icons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createDrawerNavigator } from '@react-navigation/drawer';

import { createStackNavigator } from '@react-navigation/stack';

import HomeIndex from '../screens/Home';

import FeedScreen from '../screens/Feed/FeedScreens';

import DetalhesScreen from '../screens/Feed/DetalhesScreens';

import DashBoardScreens from '../screens/Feed/DashBoardScreens';

import ProfileScreen from '../screens/User/ProfileScreens';

import BarcodeScan from '../screens/Barcode/BarcodeScan';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const AppNavigation = () => {
 return (
  <Stack.Navigator initialRouteName='HomeIndex'>
   <Stack.Screen
    name='HomeIndex'
    component={HomeIndex}
    options={{ headerShown: false }}
   />
   <Stack.Screen
    name='FeedScreen'
    component={FeedScreen}
    options={{
     headerShown: false,
     headerTitle: '',
     headerTitleAlign: 'center'
    }}
   />
   <Stack.Screen
    name='DetalhesScreen'
    component={DetalhesScreen}
    options={{
     headerTitle: 'Detalhes da Nota'
    }}
   />
  </Stack.Navigator>
 );
};

export default AppNavigation;
