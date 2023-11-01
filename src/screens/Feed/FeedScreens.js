import React, {
  useState
} from 'react';
import {
  View,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput
} from 'react-native';
import {
  useNavigation
} from '@react-navigation/native';
import data from './data.json';

export default function FeedScreen({navigation}) {
 // const navigation = useNavigation();
  const handleCardClick = (card) => {
    navigation.navigate('DetalhesScreen', {
     
   card 
    });
  };
  
 

  const [searchText,
    setSearchText] = useState('');

  const handleSearchTextChange = (text) => {
    setSearchText(text);
    // Adicione lógica para buscar cupons fiscais com base em 'text' aqui
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../../assets/image/images.jpeg')} style={styles.profileImage} />
        <View style={styles.profileInfo}>
          <Text style={styles.userName}>Olá, {data.userName}</Text>

        </View>
      </View>

      <TextInput
      style={styles.addCupon}
      placeholder="Pesquisar"
      onChangeText={handleSearchTextChange}
      value={searchText}
      />

      <ScrollView style={styles.cardContainer}>
        {data.creditarNfiscal.map((card, index) => {
        if (card.title.toLowerCase().includes(searchText.toLowerCase())) {
          return (
            <TouchableOpacity key={index} onPress={() => handleCardClick(card)}>
                <View style={styles.card}>
                  <Text style={styles.cardTitle}>{card.title}</Text>
                  <Text>Total: R$ {card.content[0].vTCompras}</Text>
                  <Text>Pontos Ganhos: {card.content[0].ganhos[0].ganhosProdut}</Text>
                </View>
              </TouchableOpacity>
          );
        } else {
          // Não exibir as notas fiscais que não correspondem à pesquisa
          return null;
        }
      })}
      </ScrollView>
    </View>
  );
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F2F2F2',
    },
    header: {
      flexDirection: 'row',
      borderBottomLeftRadius: 35,
      borderBottomRightRadius: 35,
      overflow: 'hidden',
      backgroundColor: '#FEA501',
      padding: 5,
      paddingTop: 50,
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    addCupon: {
      padding: 10,
      borderRadius: 20,
      fontWeight: 'bold',
      backgroundColor: '#89BB00',
      color: '#fff',
      marginLeft: 200,
      marginBottom: 10,
    },
    profileInfo: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    profileImage: {
      width: 50,
      height: 50,
      borderRadius: 25,
      margin: 10,
    },
    userName: {
      fontSize: 14,
      fontWeight: 'bold',
      color: '#fff',
      marginLeft: 10,
    },
    cardContainer: {
      flex: 1,
      marginTop: 10,
    },
    card: {
      margin: 10,
      width: 350,
      borderRadius: 5,
      borderColor: 'gray',
      padding: 10,
      backgroundColor: '#fcfcfc',
    },
    cardTitle: {
      fontSize: 16,
      fontWeight: 'bold',
    },
  });