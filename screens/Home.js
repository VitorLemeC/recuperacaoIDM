import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

export default function Home({ navigation }) {

    const [cep, setCep] = useState([])

    const irParaDetalhes = () => {
        navigation.navigate("Detalhes");
    };

    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder='Busque seu CEP...' />
            <TouchableOpacity style={styles.button} onPress={irParaDetalhes}>
                <Text style={styles.txt}>Detalhes do CEP:</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        marginTop: 200
    },
    button: {
        backgroundColor: "blue",
        padding: 10,
        width: "50%",
        height: 50,
        borderTopEndRadius: 6,
        borderTopStartRadius: 12,
        borderBottomStartRadius: 6,
        borderBottomEndRadius: 12,
        textAlign: "center"
    },
    txt:{
        color:"white",
        fontWeight: "bold"
    },
    input: {
        width: "50%",
        height: 50,
        margin: 15,
        backgroundColor: "#FFF",
        padding: 10,
        borderTopEndRadius: 6,
        borderTopStartRadius: 12,
        borderBottomStartRadius: 6,
        borderBottomEndRadius: 12,

      },
})