import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../screens/User/SignInScreen';
import SignUp from '../screens/User/SignUpScreen';
import HomeIndex from '../screens/Home/';

// fedd conecta com Details
import FeedScreen from '../screens/Feed/FeedScreens';

// coversa com Feed
import DetalhesScreen from '../screens/Feed/DetalhesScreens';


const Stack = createStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='SignIn' component={SignIn} />
      <Stack.Screen name='SignUp' component={SignUp} />
      <Stack.Screen name='HomeIndex' component={HomeIndex} 
      options={{ headerShown: false }}
      />
      
      <Stack.Screen name='FeedScreen' component={FeedScreen} 
      options={{ headerShown: false }}
      />
      
      <Stack.Screen name='DetalhesScreen' component={DetalhesScreen} 
      options={{ headerShown: false }}
      />
      
    </Stack.Navigator>
  );
};

export default AuthNavigation;
