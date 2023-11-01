/** @format */

import { useState, useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createDrawerNavigator } from '@react-navigation/drawer';

import AsyncStorage from '@react-native-async-storage/async-storage';

import SignIn from '../screens/User/SignInScreen';

import SignUp from '../screens/User/SignUpScreen';

import HomeScreen from '../screens/Home';

import FeedScreen from '../screens/Feed/FeedScreens';

import ProfileScreen from '../screens/User/ProfileScreens';

import BarcodeScan from '../screens/Barcode/BarcodeScan';

const SettingsScreen = () => {
 // Este é o componente de tela para a aba Settings

 return (
  <Drawer.Navigator initialRouteName='Detalhes'>
   <Drawer.Screen
    name='Profile'
    component={ProfileScreen}
   />

   <Drawer.Screen
    name='Home'
    component={HomeScreen}
   />
  </Drawer.Navigator>
 );
};

const AuthStack = createStackNavigator();
const AppTabs = createBottomTabNavigator();

const Drawer = createDrawerNavigator();

const AuthStackScreen = () => (
 <AuthStack.Navigator>
  <AuthStack.Screen
   name='Login'
   component={SignIn}
   options={{ headerShown: false }}
  />

  <AuthStack.Screen
   name='Cadastro'
   component={SignUp}
   options={{ headerShown: false }}
  />

  <AuthStack.Screen
   name='AppTabsScreen'
   component={AppTabsScreen}
   options={{ headerShown: false }}
  />
 </AuthStack.Navigator>
);

const AppTabsScreen = () => (
 <AppTabs.Navigator>
  <AppTabs.Screen
   name='Home'
   component={HomeScreen}
   options={{ headerShown: false }}
  />

  <AppTabs.Screen
   name='Barcode'
   component={BarcodeScan}
   options={{ headerShown: false }}
  />

  <AppTabs.Screen
   name='Feed'
   component={FeedScreen}
   options={{ headerShown: false }}
  />

  <AppTabs.Screen
   name='Settings'
   component={SettingsScreen}
   options={{
    headerShown: false
   }}
  />
 </AppTabs.Navigator>
);

const Navigation = () => {
 const [userToken, setUserToken] = useState('');

 const [isLoggedIn, setIsLoggedIn] =
  useState(false);

 useEffect(() => {
  const retrieveToken = async () => {
   try {
    const token =
     await AsyncStorage.getItem('userToken');
    setUserToken(token);
    if (token) {
     setIsLoggedIn(true); // Altera isLoggedIn para true se houver um token
    }
   } catch (error) {
    console.error(
     'Erro ao recuperar o token do AsyncStorage:',
     error
    );
   }
  };

  retrieveToken();
 }, []);

 return (
  <NavigationContainer>
   {isLoggedIn ? (
    <AppTabsScreen />
   ) : (
    <AuthStackScreen />
   )}
  </NavigationContainer>
 );
};

export default Navigation;
