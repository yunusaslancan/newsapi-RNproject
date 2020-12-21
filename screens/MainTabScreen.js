import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from './profile';
import HomeScreen from './home';
import WalletScreen from './wallet';
import SettingsScreen from './settings';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/Ionicons';



const Tab = createMaterialBottomTabNavigator();
const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const WalletStack = createStackNavigator();
const SettingsStack = createStackNavigator();

const MainTabScreen = () =>(
    <Tab.Navigator
    initialRouteName="Feed"
    activeColor="#fcfaff"
    inactiveColor="#fcfaff"
  >
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      
      options={{
        tabBarColor:'#333',
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileStackScreen}
      options={{
        tabBarColor:'#333',
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account-bed-queen-outline" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Journal"
      component={WalletStackScreen}
      options={{
        tabBarColor:'#333',
        tabBarLabel: 'Journal',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="google-earth" color={color} size={26} />
        ),
      }}
    />
     
      <Tab.Screen
      name="Message"
      component={SettingsStackScreen}
      options={{
        tabBarColor:'#333',
        tabBarLabel: 'Message',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="message" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen =({navigation}) => (
    <HomeStack.Navigator ScreenOptions={{
      
    }}>
      <HomeStack.Screen name = "Home" style= "center" component = {HomeScreen} options ={{
        title:'Top Headlines',
        headerStyle:{
          backgroundColor:'#333'
        },
        
        headerTitleAlign:'center',
        headerTintColor: '#fcfaff',
        headerTitleStyle: {
          fontWeight: 'bold', 
        },
        headerLeft:() =>(
          <Icon.Button name="ios-menu" size={25} 
          backgroundColor= "#333" onPress={() => navigation.openDrawer()}></Icon.Button>
        ) 
         }}/>
    </HomeStack.Navigator>
  );
  const ProfileStackScreen =({navigation}) => (
    <ProfileStack.Navigator ScreenOptions={{
      
    }}>
      <HomeStack.Screen name = "Profile" style= "center" component = {ProfileScreen} options ={{
        title:'Profile',
        headerStyle:{
          backgroundColor:'#333'
        },
        headerTitleAlign:'center',
        headerTintColor: '#fcfaff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
         }}/>
         
    </ProfileStack.Navigator>
  );
  
  const WalletStackScreen =({navigation}) => (
    <WalletStack.Navigator ScreenOptions={{
      
    }}>
      <HomeStack.Screen name = "Wallet" style= "center" component = {WalletScreen} options ={{
        title:'Journal',
        headerTitleAlign:'center',
        headerStyle:{
          backgroundColor:'#333'
        },
      
        headerTintColor: '#fcfaff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
         }}/>
    </WalletStack.Navigator>
  );
  const SettingsStackScreen =({navigation}) => (
    <SettingsStack.Navigator ScreenOptions={{
      
    }}>
      <HomeStack.Screen name = "Home" style= "center" component = {SettingsScreen} options ={{
        title:'Message',
        headerStyle:{
          backgroundColor:'#333'
        },
        headerTitleAlign:'center',
        headerTintColor: '#fcfaff',
        headerTitleAlign:"center",
        headerTitleStyle: {
          fontWeight: 'bold',
        },
         }}
        />
    </SettingsStack.Navigator>
  );