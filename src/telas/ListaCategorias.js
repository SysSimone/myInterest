import React, { useEffect, useState } from 'react';
import { View, Button, Text, SafeAreaView } from 'react-native';

const lista = [
    {
        Id: 1,
        name: 'Salad',
        valor1: 'caixa',
        valor2: 'macarrao'
    },

    {
        Id: 2,
        name: "Sushi",
        valor1: 'pires',
        valor2: 'Carne de panela'
    },
    {
        id: 3,
        name: "Lanches",
        valor1: 'focro',
        valor2: 'pé de galinha'
    },

]

export default function ListaCategorias() {

    
    
    //aqui crio um estado, com 2 variaveis desestruturando o useState
    const [listaCategoria, setListaCategoria] = useState('');

    // o useEffect ele recebe 2 parametros, o primeiro uma função e o segundo um array de dependencias
    // a função do priemiro parametro é o codigo que eu quero que execute
    //o segundo paramentro será quando eu quero que esse codigo execute
    //eu passo todas as variaveis que serão alteradas e o useEffect precisa executar de novo
     // USESTATE
                // ELE GERENCIA O ESTADO DO COMPONENTE FUNCIONAL
                // USEEFFECT
                // ELE GERENCIA O CICLO DE VIDA DO COMPONENTE FUNCIONAL

    useEffect(() => {
        console.log(listaCategoria);

    }, []);
    function seListaCategoria() {
        setListaCategoria(lista + 1);
    }

    return (
        <SafeAreaView style={{ flex: 1 }} >
            <View >
                <Text>
               si
                </Text>
                <Button
                    title='useeffect'
                    onPress={() => { seListaCategoria }}
                />

            </View>
        </SafeAreaView>

    )
}
