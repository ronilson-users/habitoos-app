import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomeScreen({ navigation }) {

  const [userToken, setUserToken] = useState(null);

  useEffect(() => {
    const retrieveToken = async () => {
      try {
        const token = await AsyncStorage.getItem('userToken');
        if (token !== null) {
          setUserToken(token);
        }
      } catch (error) {
        console.error('Erro ao recuperar o token do AsyncStorage:', error);
      }
    };

    retrieveToken();
  }, []);

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('userToken');
      setUserToken(null);

      navigation.navigate('SignIn');

      console.log('Token removido.');
    } catch (error) {
      console.error('Erro ao remover o token:', error);
    }
  };

  return (
    <View style={styles.container}>

      <Text style={styles.text}>

        {userToken
          ? 'O usuário está autenticado! Token: ' + userToken
          : 'O usuário não está autenticado.'}

        {/* Remover  este boatao depois*/}
      </Text>
      {userToken && (

        <TouchableOpacity
          onPress={handleLogout}
          style={styles.button}>

          <Text style={styles.buttonText}>Logout</Text>

        </TouchableOpacity>

      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#273747',
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
    padding: 20,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});