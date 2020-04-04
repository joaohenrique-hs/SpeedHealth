import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import style from './style';

import pharmacyImg from '../../assets/pharmacyImg.png';

import api from '../../services/api';

export default function Pharmacys () {
    const [pharmacy, setPharmacy] = useState([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();

    function navigateToPharmacyDetail(pharmacy) {
        navigation.navigate('PharmacyDetail', { pharmacy });
    }

    async function loadPharmacys() {
        if (loading) {
            return;
        }
        if (total > 0 && pharmacy.length === total) {
            return;
        }

        setLoading(true);

        const response = await api.get('/pharmacy', {
            params: { page }
        });

        setPharmacy([...pharmacy, ...response.data]);
        setTotal(response.headers['x-total-count']);
        setPage(page + 1);
        setLoading(false);
    }

    useEffect(() => {
        loadPharmacys()
    }, [])
    return (
        <View style={style.container}>
            <FlatList 
                data={pharmacy}
                contentContainerStyle={{ paddingBottom: 40}}
                showsVerticalScrollIndicator={false}
                onEndReached={loadPharmacys}
                onEndReachedThreshold={0.3}
                keyExtractor={item => String(item.id)}
                renderItem={({ item: pharmacy }) => (
                    <View style={style.pharmacy}>
                        <TouchableOpacity
                            style={style.detailsButton}
                            onPress={() => {navigateToPharmacyDetail(pharmacy)}}
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