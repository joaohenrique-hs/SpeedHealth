import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';

import style from './style';

import itemImg from '../../assets/itemImg.png';

const data = [
    {
        'id': '1',
        'name': 'IBUPROFENO',
        'value': 'R$120,00'
    },
    {
        'id': '2',
        'name': 'IBUPROFENO',
        'value': 'R$120,00'
    },
    {
        'id': '3',
        'name': 'IBUPROFENO',
        'value': 'R$120,00'
    },
    {
        'id': '4',
        'name': 'IBUPROFENO',
        'value': 'R$120,00'
    },
    {
        'id': '5',
        'name': 'IBUPROFENO',
        'value': 'R$120,00'
    },
]

export default function Items () {
    return (
        <View style={style.container}>
            <FlatList 
                data={data}
                style={style.itemList}
                keyExtractor={item => String(item.id)}
                renderItem={({ item: item }) => (
                    <View style={style.item}>
                        <TouchableOpacity
                            style={style.detailsButton}
                            onPress={() => {}}
                        >
                            <View style={style.itemImg}>
                                <Image style ={style.itemImage} source={itemImg}/>
                            </View>
                            <View style={style.itemContent}>
                                <Text style={style.itemName}>{item.name}</Text>
                                <Text style={style.itemValue}>{item.value}</Text> 
                            </View>  
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    )
}