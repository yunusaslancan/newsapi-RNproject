import React, {Component} from 'react';
import {View,StyleSheet,Dimensions,} from 'react-native';

import {Avatar,Title,Caption,Paragraph,Drawer,Text,TouchableRipple,Switch} from 'react-native-paper';
import {DrawerContentScrollView,DrawerItem} from '@react-navigation/drawer';

import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const vw = Dimensions.get('window').width/100;
const vh = Dimensions.get('window').height/100;

const SideMenu = (props) => {

    const [cDarkTheme, setcDarkTheme] = React.useState(false);

    const toggleTheme = () => {
        setcDarkTheme(!cDarkTheme);
    }
    return (
        <View style={{flex:1}}> 
            <DrawerContentScrollView {...props}> 
                <View style={styles.userInfoSection}>
                    <View style={{flexDirection:'row',marginTop: 15}}>
                     
                        <View style={{marginLeft:15, flexDirection:'column'}}>
                        <Avatar.Image 
                            source={require('../assets/images.png')}
                            size={95}
                        />
                            <Title style={styles.title}>isim</Title>
                            <Caption style={styles.caption}>soyisim</Caption>
                        </View>
                    </View>
                    <View style={styles.row}>
                        
                        
                    </View>
                </View>
                {/* Drawer Section */}
                <Drawer.Section title="NELER OLUYOR?"> 
                    <View>
                        
                    </View>
                </Drawer.Section>
                <Drawer.Section>
                    <DrawerItem 
                        icon = { ()=> ( <Icon name="home-outline" style={{fontSize:2.8*vh,color:'grey'}} />  ) } 
                        label="Profil"
                        onPress={ ()=>{props.navigation.navigate('Profie')} }
                    />

                    <DrawerItem 
                        icon = { ()=> ( <Icon name="account-outline" style={{fontSize:2.8*vh,color:'grey'}} />  ) } 
                        label="Konu Başlıkları"
                        onPress={ ()=>{props.navigation.navigate('Konu Başlıkları')} }
                    />
                     <DrawerItem 
                        icon = { ()=> ( <Icon name="wallet-outline" style={{fontSize:2.8*vh,color:'grey'}} />  ) } 
                        label="Yer İşaretleri"
                        onPress={ ()=>{props.navigation.navigate('Yer İşaretleri')} }
                    />
                     <DrawerItem 
                        icon = { ()=> ( <Icon name="settings-outline" style={{fontSize:2.8*vh,color:'grey'}} />  ) } 
                        label="Anlık Gündem"
                        onPress={ ()=>{props.navigation.navigate('Anlık Gündem')} }
                    />
                     <DrawerItem 
                        icon = { ()=> ( <Icon name="account-check-outline" style={{fontSize:2.8*vh,color:'grey'}} />  ) } 
                        label="Ayarlar ve Gizlilik"
                        onPress={ ()=>{props.navigation.navigate('Ayarlar ve Gizlilik')} }
                    />
                </Drawer.Section>

                <Drawer.Section title="Choose Preferences">
                    <TouchableRipple onPress={() => {toggleTheme()}}>
                        <View style={styles.preference}>
                            <Text>Dark Theme</Text>
                            <View pointerEvents="none">
                                <Switch value={cDarkTheme}/>
                            </View>
                        </View>
                    </TouchableRipple>
                </Drawer.Section>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon = { ()=>( <Icon name="exit-to-app"  style={{fontSize:2.8*vh,color:'grey'}} /> ) }
                    label="Sign Out"
                    onPress={() => {signOut()}}
                />
            </Drawer.Section>
        </View>
    )
}

export default SideMenu;

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 3*vh,
    },
    title: {
      fontSize: 2*vh,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 2*vh,
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft:1*vh
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 1.5*vh,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 1*vw,
    },
    drawerSection: {
      marginTop: 1.5*vh,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });