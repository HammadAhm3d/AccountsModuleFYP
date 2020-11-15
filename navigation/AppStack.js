import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import PantryScreen from '../screens/PantryScreen';
import Naviagtor_M6 from './recipe_nav_m6';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
// const AppStack = () => {
//     return (
//         <Stack.Navigator >
//             <Stack.Screen name="HomeScreen" component={HomeScreen}/>
//         </Stack.Navigator>
//     );
// }

const AppStack = () => {
    return (
        <Drawer.Navigator >
            <Drawer.Screen name="HomeScreen" component={HomeScreen}/>
            <Drawer.Screen name="PantryScreen" component={PantryScreen}/>
            <Drawer.Screen name="Recipes" component={Naviagtor_M6}/>
    
        </Drawer.Navigator>
    );
}

const logout = () => {
    return (
        <FontAwesome icon="sign-out-alt" size={22} color="black" />
    );
}
export default AppStack;