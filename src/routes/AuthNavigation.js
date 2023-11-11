import React, { useEffect } from 'react';

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../screens/User/SignInScreen';
import SignUp from '../screens/User/SignUpScreen';
import HomeIndex from '../screens/Home/';
import FeedScreen from '../screens/Feed/FeedScreens';
import DetalhesScreen from '../screens/Feed/DetalhesScreens';

const Stack = createStackNavigator();

const AuthNavigation = () => {
  

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='SignIn'
          component={SignIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='SignUp'
          component={SignUp}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name='HomeIndex'
          component={HomeIndex}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='FeedScreen'
          component={FeedScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name='DetalhesScreen'
          component={DetalhesScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthNavigation;
