import React from 'react';
import { View, Text, Image } from 'react-native';



const Imagem = () => {
  return (
    <View >
        <Text> Image </Text>
        <Image 
        blurRadius={1}
        style={{
          width:400, 
          height:700,
        borderWidth:3,
        justifyContent:"center",
        }}
        resizeMode="repeat"
        source={require("../../src/assets/imagens/EstherB.jpg")}
        />
    </View>
  );
}

export default Imagem;
