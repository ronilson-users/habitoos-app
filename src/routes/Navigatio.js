import React from 'react';
import { View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/Home';

import SignInScreen from '../screens/User/SignInScreen';



function DetailsScreen() {
  return (
    // Seu código JSX para a tela de detalhes
     <View></View>
  );
}


const Stack = createStackNavigator();

function Navigatio() {
  
  
  return (
<NavigationContainer>
<Stack.Navigator initialRouteName="SignUp">

<Stack.Screen name="Home" component={HomeScreen} />

<Stack.Screen name="SignUp" component={SignInScreen} />

</Stack.Navigator>
</NavigationContainer>
  );
}
export default Navigatio;