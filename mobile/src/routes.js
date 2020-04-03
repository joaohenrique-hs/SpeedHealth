import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Constants from 'expo-constants';

import Items from '../src/pages/Items';
import Pharmacys from '../src/pages/Pharmacys';
import ItemDetail from '../src/pages/ItemDetail';
import PharmacyDetail from '../src/pages/PharmacyDetail';

const Tab = createMaterialTopTabNavigator();

const AppStack = createStackNavigator();

export default function Routes() {
    return (
            <NavigationContainer>
                <AppStack.Navigator screenOptions={{ headerShown: false }}>
                    <AppStack.Screen name="Feed">
                        {() => (
                            <Tab.Navigator style={{
                                paddingTop: Constants.statusBarHeight,
                                backgroundColor: '#fff'
                            }}>
                                <Tab.Screen name="PRODUTOS" component={Items} />
                                <Tab.Screen name="FARMÁCIAS" component={Pharmacys} />    
                            </Tab.Navigator>
                        )}
                    </AppStack.Screen>
                    <AppStack.Screen name="ItemDetail" component={ItemDetail}/>
                    <AppStack.Screen name="PharmacyDetail" component={PharmacyDetail}/>
                </AppStack.Navigator>
            </NavigationContainer>
    );
}