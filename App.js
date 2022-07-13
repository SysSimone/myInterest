import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Home from "./src/telas/Home";
import Details from "./src/telas/Details";
import Position from './src/telas/Position';
import FlexBox from './src/telas/FlexBox';
import FlexBox1 from './src/telas/FlexBox1';
import  Imagem from './src/telas/Imagem';
import Scroll from './src/telas/Scroll';
import Flat_List from './src/telas/Flat_List';

//o App.js vai ser usado como a estrutura externa, o esqueleto do app e aqui vou armazenar 
//os navegadores e decidir o que vai ser mostrada para o usuario.

//instanciando a função createStackNavigation na variavel stack

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name= "Home" component={Home}/>
        <Stack.Screen name="Details" component={Details}/>
        <Stack.Screen name="Position" component={Position}/>
        <Stack.Screen name="FlexBox" component={FlexBox}/>
        <Stack.Screen name="FlexBox1" component={FlexBox1}/>
        <Stack.Screen name="Imagem" component={Imagem}/>
        <Stack.Screen name="Scroll" component={Scroll}/>
        <Stack.Screen name="Flat_List" component={Flat_List}/>
        
      </Stack.Navigator>

    </NavigationContainer>
  );
}

export default App;
