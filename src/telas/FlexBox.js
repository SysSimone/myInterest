import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

//A flexBox é basicamente uma caixa que contém um texto

const FlexBox = () => {
    return (
        <View style={styles.view}>
            <Text style={styles.caixa1}> Caixa 1 </Text>
            <Text style={styles.caixa2}> Caixa 2 </Text>
            <Text style={styles.caixa3}> Caixa 3 </Text>

        </View>
    );
};


const styles = StyleSheet.create({
    view: {
        borderWidth: 10,
        borderColor: "chartreuse",
        flex: 1, // equivalente a 100% ocupa todo o espaço vazio
    },
    caixa1: {
        fontSize: 30,
        borderWidth: 5,
        borderColor: "red",
        //alignSelf: "center",
        flex: 0.2, // equivalente a 20% do espaço vazio

    },
    caixa2: {
        fontSize: 30,
        borderWidth: 5,
        borderColor: "green",
        // alignSelf: "center",
        flex: 0.3, // equivalente a 30% do espaço vazio

    }, // até aqui 50% do espaço vazio foi ocupado
    caixa3: {
        fontSize: 30,
        borderWidth: 5,
        borderColor: "deeppink",
        //alignSelf: "center",
        flex: 0.5, // equivalente a 50% do espaço vazio, ou seja o espaço disponível
        // o flex se orienta no flex directio que o valor padrão o valor coluna, a 
        //direção que o espaço vai ser ocupado é verticalmente.

    },
});


export default FlexBox;