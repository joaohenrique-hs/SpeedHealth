import React from 'react';
import { AntDesign } from '@expo/vector-icons'
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

import style from './style';

import itemImg from '../../assets/itemImg.png';

export default function ItemDetail () {
    const route = useRoute();
    const item = route.params.item;
    const navigation = useNavigation();

    function navigateBack () {
        navigation.goBack();
    }

    return (
        <View style={style.container}>
            <View style={style.card}>
                <View>
                    <View style={style.header}>
                        <View>
                            <TouchableOpacity onPress={() => navigateBack()}>
                                <AntDesign name="arrowleft" size={28} color="#40dfac" />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={style.itemHeaderText}>{item.name}</Text>
                        </View>
                    </View>
                    <View style={style.hr}></View>
                </View>
                <View style={style.itemContent}>
                    <View style={style.itemImg}>
                        <Image style ={style.itemImage} source={itemImg}/>
                    </View>
                    <Text style={style.itemText}>DESCRIÇÃO:</Text>
                    <Text style={style.itemDescription}>{item.description}</Text>
                    <View style={style.values}>
                        <Text style={style.itemText}>VALOR</Text>
                        <Text style={style.itemText}>{item.value}</Text>
                    </View>
                </View>
                <View style={style.buttons}>
                    <View style={style.buttonBox}>
                        <TouchableOpacity style={style.button}>
                            <Text style={style.buttonText}> CONTATO </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={style.buttonBox}>
                        <TouchableOpacity style={style.button}>
                            <Text style={style.buttonText}> COMPRAR </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}