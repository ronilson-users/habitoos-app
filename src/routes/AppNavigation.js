/** @format */

import { useState, useEffect } from 'react';

import { AntDesign } from '@expo/vector-icons';

import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from '../screens/Home';

import FeedScreen from '../screens/Feed/FeedScreens';

import DashBoardScreens from '../screens/Feed/DashBoardScreens';

import ProfileScreen from '../screens/User/ProfileScreens';

import BarcodeScan from '../screens/Barcode/BarcodeScan';

const SettingsScreen = () => {
 // Este é o componte de tela para a aba Settings

 return (
  <Drawer.Navigator initialRouteName='DashBoard'>
   <Drawer.Screen
    name='DashBoard'
    component={DashBoardScreens}
   />

   <Drawer.Screen
    name='Profile'
    component={ProfileScreen}
   />
  </Drawer.Navigator>
 );
};

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const AppNavigation = () => {
 return (
  <Tab.Navigator initialRouteName='Home'>
   <Tab.Screen
    name='Home'
    component={HomeScreen}
    options={{ headerShown: false }}
   />

   <Tab.Screen
    name='Barcode'
    component={BarcodeScan}
    options={{ headerShown: false }}
   />

   <Tab.Screen
    name='Feed'
    component={FeedScreen}
    options={{ headerShown: false }}
   />

   <Tab.Screen
    name='Settings'
    component={SettingsScreen}
    options={{ headerShown: false }}
   />
  </Tab.Navigator>
 );
};

export default AppNavigation;
