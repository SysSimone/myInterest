import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";


const Position = (props) => {
    //console.log(props);
    return (
        <View style={style.container}>
            <View style={style.box1} />
            <View style={style.box2} />
            <View style={style.box3} />
            <View style={style.box4} />
            <View style={style.box5} />
            <View style={style.box6} />
            <View style={style.box7} />
            <View style={style.box8} />            
        </View>
    );
};
const style = StyleSheet.create({
    container: {
        flex: 0.5,
        padding: 200,
        backgroundColor: "yellow",
    },
    box1: {
        width: 400,
        height: 400,
        // padding:50,
        backgroundColor: "red",
        position: "absolute",
    },
    box2: {
        width: 380,
        height: 380,
        // padding: 80,
        backgroundColor: "green",
        position: "absolute",
    },
    box3: {
        width: 360,
        height: 360,
        // padding:50,
        backgroundColor: "blue",
        position: "absolute",
        //quando definimos a position absolute, a view que esta com posição relativa que foi definida primeiro
        //fica posicionado no fundo e as definidos como position absolute ele sobrepoe as outras views 
    },
    box4: {
        width: 320,
        height: 320,
        backgroundColor: "pink",
        position: "absolute",
    },
    box5: {
        width: 280,
        height: 280,
        backgroundColor: "yellow",
        position: "absolute",
    },
    box6: {
        width: 250,
        height: 250,
        backgroundColor: "black",
        position: "absolute",
    },
    box7: {
        width: 200,
        height: 200,
        backgroundColor: "white",
        position: "absolute",
    },
    box8: {
        width: 180,
        height: 180,
        backgroundColor: "grey",
        position: "absolute",
    },
      
      });
export default Position;