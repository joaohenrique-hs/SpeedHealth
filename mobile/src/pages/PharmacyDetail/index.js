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
                    <View style={style.header}>
                        <View>
                            <TouchableOpacity onPress={() => navigateBack()}>
                                <AntDesign name="arrowleft" size={28} color="#40dfac" />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={style.pharmacyHeaderText}>{pharmacy.name}</Text>
                        </View>
                    </View>
                    <View style={style.hr}></View>
                </View>
                <View style={style.pharmacyContent}>
                    <View style={style.pharmacyImg}>
                        <Image style ={style.pharmacyImage} source={pharmacyImg}/>
                    </View>
                    <View>
                        <Text style={style.pharmacyText}>{pharmacy.address}</Text>
                        <View style={style.pharmacyDisplay}>
                            <Text style={style.pharmacyText}>{pharmacy.city}</Text>
                            <Text style={style.pharmacyText}>{pharmacy.uf}</Text>
                        </View>
                    </View>
                    <View>
                        <View style={style.pharmacyDisplay}>
                            <Text style={style.pharmacyText}>ESTABELECIMENTO</Text>
                            <Text style={style.pharmacyText}>{}</Text>
                        </View>
                        <View style={style.pharmacyDisplay}>
                            <Text style={style.pharmacyText}>WHATSAPP</Text>
                            <Text style={style.pharmacyText}>{pharmacy.whatsapp}</Text>
                        </View>
                        <View style={style.pharmacyDisplay}>
                            <Text style={style.pharmacyText}>EMAIL</Text>
                            <Text style={style.pharmacyText}>{pharmacy.email}</Text>
                        </View>
                    </View>
                    <Text style={style.pharmacyText}>{pharmacy.description}</Text>
                </View>
                <View style={style.button}>
                    <TouchableOpacity style={style.button}>
                        <Text style={style.buttonText}> ENTRAR EM CONTATO </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}