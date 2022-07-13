import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';



const Flat_List = () => {

  const amigos = [
    { nome: "Lila", key: "1" },
    { nome: "Pirata", key: "2" },
    { nome: "Charlote", key: "3" },
    { nome: "Henry", key: "4" },
    { nome: "Dog", key: "5" },
    { nome: "Cleitin", key: "6" },
    { nome: "Pasquim", key: "7" },
    { nome: "Mel", key: "8" },
    { nome: "Nêssa", key: "9" },
    { nome: "Pasquim", key: "10" },
    { nome: "Mel", key: "11" },
    { nome: "Nêssa", key: "12" }

  ];

  //lista de objetos, cada objeto vai ser um elemento da lista
  //a variavel item = cada elemento da lista
  //keyExtractor recebe uma função que é aplicada para cada item
  //cada elemento tem que ter sua key unica
  //a função rendemItem ela vai analisar cada item da nossa flat list e aplicar essa função q vou definir no remderItem
  return (
    <View style={{ flex: 5, backgroundColor: "green" }} >
      
      <Text>Nomes dos nossos Gatos</Text>
      
      <FlatList
        data={amigos}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.container}>
              <Text>
              {item.nome}
              {index}
              </Text>
            </View>
          );
        }}
        keyExtractor={(elemento) => String(elemento.key)}
       numColumns={4}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    borderWidth: 3,
    borderColor: "black",
    height: 200,
    width:100,
    justifyContent:"center",
    alignItems: "center",

  },
});
export default Flat_List;