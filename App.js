import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Home from "./src/telas/Home";
import Detail from "./src/telas/Detail";
import Position from './src/telas/Position';
//o App.js vai ser usado como a estrutura externa, o esqueleto do app e aqui vou armazenar 
//os navegadores e decidir o que vai ser mostrada para o usuario.

//instanciando a função createStackNavigation na variavel stack

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name= "Home" component={Home}/>
        <Stack.Screen name="Detail" component={Detail}/>
        <Stack.Screen name="Position" component={Position}/>
      </Stack.Navigator>

    </NavigationContainer>
  );
}

export default App;
