import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const Details = (props) => {
    //console.log(props);
    return (
        <View>
            <Text style={styles.text}> Box Model </Text>
            
        </View>
    );

};
// as propriedades de bordas só funcionam até o momento no android v 0.64 do React native
const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        borderWidth: 5,
        borderColor: "blue",
        alignSelf: "center",

    },
});

export default Details;
