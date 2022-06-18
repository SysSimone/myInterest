import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Details = (props) => {
    
    return (

        <View >
            <View style={styles.box1}>
                <Text style={styles.text}> Box Model </Text>
            </View>
            <View style={styles.box2}
            >
                <Text style={styles.text}> Box Model </Text>
            </View>
            <View style={styles.box3}>
                <Text style={styles.text}> Box Model </Text>
            </View>
        </View>

    );

};

const styles = StyleSheet.create({
    box1: {
        width: 300,
        height: 50,
        borderStyle: 'dashed',
        borderWidth: 0.5,
        borderRadius: 10,
        margin: 20,
    },
    box2: {
        width: 300,
        height: 50,
        borderStyle: 'dashed',
        borderWidth: 0.5,
        borderRadius: 10,
        margin: 20,
    },
    box3: {
        width: 300,
        height: 50,
        borderStyle: 'dashed',
        borderWidth: 0.5,
        borderRadius: 10,
        margin: 20,
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
        alignItems:"center"
      },

    // container: {
    //     width:300,
    //     backgroundColor:"red",
    //     height:50,
    //     borderStyle: 'dashed', //existem 3 tipos de borda: sólido, pontilhado e tracejado
    //     borderWidth: 1, //as propriedades borderStyle e borderWidth mostram o componente view com bordas tracejadas
    //     borderRadius: 10,
    //     margin: 20,
    //     justifyContent:"center",
    // },
});

export default Details;
