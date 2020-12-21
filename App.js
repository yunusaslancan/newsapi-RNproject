import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/Ionicons';


import { BlurView } from 'expo-blur';
import ProfileScreen from './screens/profile';
import HomeScreen from './screens/home';
import WalletScreen from './screens/wallet';
import SettingsScreen from './screens/settings';
import SideMenu from './screens/SideMenu';
import MainTabScreen from './screens/MainTabScreen';


const Drawer = createDrawerNavigator();


export default function App() {
  
  return (
    
    <NavigationContainer >
      <Drawer.Navigator drawerContent={ props => <SideMenu {...props} /> }>
        <Drawer.Screen name="Menutab" component={MainTabScreen} />
        <Drawer.Screen name="Settings" component={HomeScreen} />
      </Drawer.Navigator>
      
    </NavigationContainer>
  
  );
}