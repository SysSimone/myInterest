import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

//Toda tela é uma função, e por ser uma função nós conseguimos enviar e receber parametros através dessas funções
//nessa tela por exemplo, o StackNavigator esta enviando para a Tela Home e a Tela Detail, parametros, e eu os recebo
//criando um parametro de props, todos argumentos enviados para as telas vão ser armazenados no props.

const Home = (props) => {
    //console.log(props);
    return (
        <View style={styles.view}>
            <Text style={styles.text}>
                 Box Model
                  </Text>
            <Button
            title='Box Model' 
            onPress={() => 
                props.navigation.navigate("Details")} 
            />
            <Button 
            title='Position'
            onPress={() => 
                props.navigation.navigate("Position")}
            />
              <Button 
            title='Flex Box'
            onPress={() => 
                props.navigation.navigate("FlexBox")}
            />
            <Button 
            title='Flex Box1'
            onPress={() => 
                props.navigation.navigate("FlexBox1")}
            />
        </View>
    );

};

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        margin: 20,
        alignSelf: "center",
    },
    button: {
        flex: 1,
    }
});

export default Home;
