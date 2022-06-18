import React from 'react';
import { View, Text, StyleSheet, Button, ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';

//Toda tela é uma função, e por ser uma função nós conseguimos enviar e receber parametros através dessas funções
//nessa tela por exemplo, o StackNavigator esta enviando para a Tela Home e a Tela Detail, parametros, e eu os recebo
//criando um parametro de props, todos argumentos enviados para as telas vão ser armazenados no props.
const linda = '../assets/imagens/EstherL.jpg'

const Home = (props) => {
   
    return (
        
        <View style={styles.container}>
            <StatusBar style={"#ffff"}/>
        <ImageBackground
            source={require(linda)}
            style={styles.imagemFundo}
        >
            <View style={{justifyContent:'center', width:200, height:500}}>
            <Text style={styles.text}>
                Esther Victória!!
            </Text>
            </View>
            
            <View>
            <Button
                title='Box Model'
                style={styles.button}
                onPress={() =>
                    props.navigation.navigate("Details")}
            />
            </View>
            
           
            <Button
                title='Position'
                style={styles.button}
                onPress={() =>
                    props.navigation.navigate("Position")}
            />
           
            <Button
                title='Flex Box'
                style={styles.button}
                onPress={() =>
                    props.navigation.navigate("FlexBox")}
            />
          
            <Button
                title='Flex Box1'
                style={styles.button}
                onPress={() =>
                    props.navigation.navigate("FlexBox1")}
            />
            <Button
                title='ListaCategorias'
                style={styles.button}
                onPress={() =>
                    props.navigation.navigate("ListaCategorias")}
            />
              
        </ImageBackground>
        </View>

    );

};

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:"100%",
    },
    text: {
        fontSize: 30,
        color: 'pink',
        margin: 20,
        alignSelf: "center",
        
    },
    
    imagemFundo:{
        flex:1,
        resizeMode: "cover",
        width:"100%",
       
    },
    button:{
        flex:1,
        width:"80%",
       height:"100%",
       },
});

export default Home;
