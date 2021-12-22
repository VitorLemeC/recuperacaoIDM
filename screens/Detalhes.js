import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function Detalhes({ navigation }) {

    const [item, setItem] = useState([])

    useEffect(() => {
        let url = "https://viacep.com.br/ws/01001000/json/";

        fetch(url)
        .then(response => { return  response.json();})
        .then(data => { console.log(data);setItem(data) })
    }, [])

    return(
        <View>
           <Text>{item.cep}</Text>
           <Text>{item.logradouro}</Text>
           <Text>{item.complemento}</Text>
           <Text>{item.bairro}</Text>
           <Text>{item.localidade}</Text>
           <Text>{item.uf}</Text>
           <Text>{item.ibge}</Text>
           <Text>{item.gia}</Text>
           <Text>{item.ddd}</Text>
           <Text>{item.siafi}</Text>
    </View>

    );
}