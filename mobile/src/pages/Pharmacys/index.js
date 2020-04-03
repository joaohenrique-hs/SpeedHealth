import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';

import style from './style';

import pharmacyImg from '../../assets/pharmacyImg.png';

const data = [
    {
        'id': '1',
        'name': 'FARMÁCIA POPULAR',
        'whatsapp': '(49)98425-2003',
        'city': 'DIONÍSIO CERQUEIRA',
        'uf': 'SC'
    },
    {
        'id': '2',
        'name': 'FARMÁCIA POPULAR',
        'whatsapp': '(49)98425-2003',
        'city': 'DIONÍSIO CERQUEIRA',
        'uf': 'SC'
    },
    {
        'id': '3',
        'name': 'FARMÁCIA POPULAR',
        'whatsapp': '(49)98425-2003',
        'city': 'DIONÍSIO CERQUEIRA',
        'uf': 'SC'
    },
    {
        'id': '4',
        'name': 'FARMÁCIA POPULAR',
        'whatsapp': '(49)98425-2003',
        'city': 'DIONÍSIO CERQUEIRA',
        'uf': 'SC'
    },
    {
        'id': '5',
        'name': 'FARMÁCIA POPULAR',
        'whatsapp': '(49)98425-2003',
        'city': 'DIONÍSIO CERQUEIRA',
        'uf': 'SC'
    },
]

export default function Pharmacys () {
    return (
        <View style={style.container}>
            <FlatList 
                data={data}
                style={style.pharmacyList}
                keyExtractor={item => String(item.id)}
                renderItem={({ item: pharmacy }) => (
                    <View style={style.pharmacy}>
                        <TouchableOpacity
                            style={style.detailsButton}
                            onPress={() => {}}
                        >
                            <View style={style.pharmacyImg}>
                                <Image style ={style.pharmacyImage} source={pharmacyImg}/>
                            </View>
                            <View style={style.pharmacyContent}>
                                <View style={style.pharmacyContent1}>
                                    <Text style={style.pharmacyText}>{pharmacy.name}</Text>
                                    <Text style={style.pharmacyText}>{pharmacy.whatsapp}</Text>
                                </View>
                                <View style={style.pharmacyContent2}>
                                    <Text style={style.pharmacyText}>{pharmacy.city}</Text> 
                                    <Text style={style.pharmacyText}>{pharmacy.uf}</Text>
                                </View>
                            </View>  
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    )
}