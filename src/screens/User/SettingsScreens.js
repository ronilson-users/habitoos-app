/** @format */

import React, {
 useEffect,
 useState
} from 'react';

import { Button, View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { createDrawerNavigator } from '@react-navigation/drawer';

//import { createStackNavigator } from '@react-navigation/stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CadastroScreen from '../screens/User/CadastroScreens';

import LoginScreen from '../screens/User/LoginScreens';

import HomeScreen from '../screens/Home/HomeScreens';

import BarcodeScan from '../screens/Barcode/BarcodeScan';

import SettingsScreen from '../screens/User/SettingsScreens';

import FeedScreen from '../screens/Feed/FeedScreens';

import AsyncStorage from '@react-native-async-storage/async-storage';

function EmptyScreen() {
 return <View />;
}

function Feed({ navigation }) {
 navigation.reset({
  index: 0,
  routes: [{ name: 'Settings' }]
 });

 return (
  <View
   style={{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
   }}>
   <Text>Feed Screen</Text>
   <Button
    title='Go to Root'
    onPress={() => navigation.navigate('Root')}
   />

   <Button
    title='Go to Root, Profile'
    onPress={() =>
     navigation.navigate('Root', {
      screen: 'Profile'
     })
    }
   />
  </View>
 );
}

function Home({ navigation }) {
 return (
  <View
   style={{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
   }}>
   <Text>Home Screen</Text>
   <Button
    title='Go to Feed'
    onPress={() => navigation.navigate('Feed')}
   />
  </View>
 );
}

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function Root() {
 return (
  <Drawer.Navigator initialRouteName='Home'>
   <Drawer.Screen
    name='Home'
    component={HomeScreen}
    options={{ headerShown: false }}
   />

   <Drawer.Screen
    name='Profile'
    component={ProfileScreen}
    options={{ headerShown: false }}
   />

   <Stack.Screen
    name='Settings'
    component={EmptyScreen}
    options={{ headerShown: false }}
   />
  </Drawer.Navigator>
 );
}

function SettingsScreen() {
 return (
  <Stack.Navigator initialRouteName='Login'>
   <Stack.Screen
    name='Login'
    component={LoginScreen}
    options={{ headerShown: false }}
   />

   <Stack.Screen
    name='Root'
    component={Root}
    options={{ headerShown: false }}
   />
  </Stack.Navigator>
 );
}

export default SettingsScreen;
