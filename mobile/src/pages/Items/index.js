import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import style from './style';

import itemImg from '../../assets/itemImg.png';

const data = [
    {
        'id': '1',
        'name': 'IBUPROFENO',
        'value': 'R$ 30,00',
        "description": "IBUPROFENO, NOME QUE DERIVA DAS INICIAIS DO ÁCIDO ISOBUTILPROPANOICOFENÓLICO, UTILIZADO PARA O TRATAMENTO DA DOR, FEBRE E INFLAMAÇÃO",
    },
    {
        'id': '2',
        'name': 'PARACETAMOL',
        'value': 'R$ 25,00',
        "description": "TAMBÉM CONHECIDO POR ACETAMINOFENO, É UM FÁRMACO COM PROPRIEDADES ANALGÉSICAS E ANTIPIRÉTICAS UTILIZADO PARA TRATAR A FEBRE E A DOR LEVE E MODERADA",
    },
    {
        'id': '3',
        'name': 'TYLENOL',
        'value': 'R$ 35,00',
        "description": "METAMIZOL OU, COMERCIALMENTE, DIPIRONA, É UM MEDICAMENTO AINDA UTILIZADO PRINCIPALMENTE COMO ANALGÉSICO E ANTIPIRÉTICO",
    },
    {
        'id': '4',
        'name': 'DORFLEX',
        'value': 'R$ 55,00',
        "description": "A ORFENADRINA É UM FÁRMACO ANTICOLINÉRGICO RELAXANTE MUSCULAR, COM BAIXA ATIVIDADE ANTI-HISTAMÍNICA.",
    },
    {
        'id': '5',
        'name': 'SERTRALINA',
        'value': 'R$ 32,00',
        "description": "O CLORIDRATO DE SERTRALINA É UM MEDICAMENTO ANTIDEPRESSIVO DA CLASSE DOS INIBIDORES SELETIVOS DE RECAPTAÇÃO DE SEROTONINA",
    },
]

export default function Items () {
    const navigation = useNavigation();

    function navigateToItemDetail(item) {
        navigation.navigate('ItemDetail', { item });
    }
    return (
        <View style={style.container}>
            <FlatList 
                data={data}
                style={style.itemList}
                showsVerticalScrollIndicator={false}
                keyExtractor={item => String(item.id)}
                renderItem={({ item: item }) => (
                    <View style={style.item}>
                        <TouchableOpacity
                            style={style.detailsButton}
                            onPress={() => navigateToItemDetail(item)}
                        >
                            <View style={style.itemImg}>
                                <Image style ={style.itemImage} source={itemImg}/>
                            </View>
                            <View style={style.itemContent}>
                                <Text style={style.itemText}>{item.name}</Text>
                                <Text style={style.itemText}>{item.value}</Text> 
                            </View>  
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    )
}