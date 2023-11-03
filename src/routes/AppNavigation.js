/** @format */

import { useState, useEffect } from 'react';

import { AntDesign } from '@expo/vector-icons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createDrawerNavigator } from '@react-navigation/drawer';

import { createStackNavigator } from '@react-navigation/stack';

// Responsavél pela navegacao do App
import HomeIndex from '../screens/Home';

// fedd conecta com Details
import FeedScreen from '../screens/Feed/FeedScreens';

// coversa com Feed
import DetalhesScreen from '../screens/Feed/DetalhesScreens';

// Responsavél po mostrar Os Dados 
import DashBoardScreens from '../screens/Feed/DashBoardScreens';

// Mostrar Dados do usuario
import ProfileScreen from '../screens/User/ProfileScreens';

// Tela com Camera para esanear o codigo Qrcode
import BarcodeScan from '../screens/Barcode/BarcodeScan';

import SignInScreen from
'../screens/User/SignInScreen'

import SignUpScreen from
'../screens/User/SignUpScreen'

// Contexto de navegacao
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// navegacao Central do App
const AppNavigation = () => {
 return (
	
	// tem o objetivo de de criar a pilha de navegcao
  <Stack.Navigator initialRouteName='HomeIndex'>
  {/* Responsavél Pela Navegacao Inicial  */}
   <Stack.Screen
    name='HomeIndex'
    component={HomeIndex}
    options={{ headerShown: false }}
   />
   
  {/* Responsavél Pela Navegacao entre
  Feed/details  */}
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
    name='SignIn'
    component={SignInScreen}
    options={{
     headerShown: false,
     headerTitle: '',
  
    }}
   />
   
   <Stack.Screen
    name='SignUp'
    component={SignUpScreen}
    options={{
     headerShown: false,
     headerTitle: '',
  
    }}
   />
   
  {/* Mostra os detalhes de FeedScreen  */}
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
