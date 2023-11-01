import {
  useState,
  useEffect,
} from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../screens/User/SignInScreen';

import SignUp from '../screens/User/SignUpScreen';

const AuthStack = createStackNavigator();

const AuthNavigation = () => {


  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}/>

      <AuthStack.Screen name="SignUp"
        component={SignUp}
        options={{ headerShown: false }}/>

    </AuthStack.Navigator>


  )
}

export default AuthNavigation;