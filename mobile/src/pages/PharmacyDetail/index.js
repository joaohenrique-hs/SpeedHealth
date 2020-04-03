import React from 'react';
import { AntDesign } from '@expo/vector-icons'
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

import style from './style';

import pharmacyImg from '../../assets/pharmacyImg.png';

export default function pharmacyDetail () {
    const route = useRoute();
    const pharmacy = route.params.pharmacy;
    const navigation = useNavigation();

    function navigateBack () {
        navigation.goBack();
    }

    return (
        <View style={style.container}>
            <View style={style.card}>
                <View>
                    <TouchableOpacity onPress={() => navigateBack()}>
                        <AntDesign name="arrowleft" size={28} color="#40dfac" />
                    </TouchableOpacity>
                </View>
                <View style={style.pharmacyImg}>
                    <Image style ={style.pharmacyImage} source={pharmacyImg}/>
                </View>
                <View style={style.pharmacyContent}>
                    <Text style={style.pharmacyText}>{pharmacy.name}</Text>
                    <Text style={style.pharmacyText}>{pharmacy.description}</Text>
                    <Text style={style.pharmacyText}>{pharmacy.value}</Text>
                </View>  
            </View>
        </View>
    )
}