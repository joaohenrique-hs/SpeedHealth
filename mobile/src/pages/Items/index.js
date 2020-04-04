import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import style from './style';

import api from '../../services/api';

import itemImg from '../../assets/itemImg.png';

export default function Items () {
    const [item, setItem] = useState([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();

    function navigateToItemDetail(item) {
        navigation.navigate('ItemDetail', item);
    }

    async function loadItems() {
        if (loading) {
            return;
        }
        if (total > 0 && item.length === total) {
            return;
        }

        setLoading(true);

        const response = await api.get('/', {
            params: { page }
        });

        setItem([...item, ...response.data]);
        setTotal(response.headers['x-total-count']);
        setPage(page + 1);
        setLoading(false);
    }

    useEffect(() => {
        loadItems()
    }, [])

    return (
        <View style={style.container}>
            <FlatList 
                data={item}
                contentContainerStyle={{ paddingBottom: 40}}
                showsVerticalScrollIndicator={false}
                onEndReached={loadItems}
                onEndReachedThreshold={0.3}
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
                                <Text style={style.itemText}>{item.title}</Text>
                                <Text style={style.itemText}>{Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(item.price)}</Text>
                            </View>  
                        </TouchableOpacity>
                    </View>
                )}
            />
            
            <View style={style.final}/>
        </View>
    )
}