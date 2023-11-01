import * as React from 'react';
import {
  View,
  Text,
  FlatList
} from 'react-native';

export default function DetalhesScreen( {
  route
}) {
  // Aqui, você pode acessar os parâmetros passados via route.params
  const {
    card
  } = route.params;

  return (
    <View style={ { flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Detalhes da Nota Fiscal</Text>
      <FlatList
      data={card.content}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <View style={ { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5 }}>
  <Text>produto :  {item.nome}</Text>
  <Text> {item.quant} x </Text>
  <Text>{item.preco} = </Text>
  <Text>R$ {item.vTCompras}</Text>
          </View>
      )}
      />
      <Text>Total Geral: R$ {card.content.reduce((total, item) => total + item.vTCompras, 0)}</Text>
    </View>
  );
}