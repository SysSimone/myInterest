import React from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions} from 'react-native';



const Scroll = () => {
  return (
    <View >
      <Text> Scroll </Text>
      <ScrollView 
      decelerationRate="normal"
      horizontal
      pagingEnabled={true}
      >
      
        <View style={styles.caixa1}/>
        <View style={styles.caixa2}/>
        <View style={styles.caixa3}/>
        <View style={styles.caixa4}/>
        <View style={styles.caixa5}/>
        <View style={styles.caixa6}/>
      </ScrollView>

    </View>
  );
};

//definição de altura e largura, todos esse views tem a habilade de rolar a lista
const {width, height} = Dimensions.get("window");
const LADO = width;

const styles = StyleSheet.create({
    caixa1:{
      height: LADO,
      width: LADO,
      backgroundColor: "red",
    },
    caixa2:{
      height: LADO,
      width: LADO,
      backgroundColor: "green",
    },
    caixa3:{
      height: LADO,
      width: LADO,
      backgroundColor: "yellow",
    },
    caixa4:{
      height: LADO,
      width: LADO,
      backgroundColor: "black",
    },
    caixa5:{
      height: LADO,
      width: LADO,
      backgroundColor: "blue",
    },
    caixa6:{
      height: LADO,
      width: LADO,
      backgroundColor: "pink",
    },

});

export default Scroll;
