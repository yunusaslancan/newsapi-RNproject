import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View , ScrollView ,FlatList, ActivityIndicator,Dimensions,Image,TouchableWithoutFeedback,Linking,Share} from 'react-native';
const{width,height} = Dimensions.get('window');
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();
import { TextInput } from 'react-native-gesture-handler';

export default class Home extends React.Component{
    state ={
        news :[],
        loading : true
    }
    fetchnews = () => {
        fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey="yourapikey"')
        .then((res)=>res.json())
        .then((response)=>{
            this.setState({
                news : response.articles,
                loading : false
            })            
        })
    }
    componentDidMount(){
      this.fetchnews()
    }
    sharearticle = async article =>{
        try{
          await Share.share({
              message : 'paylaşmak istermisiniz' + article
          })
        } catch( error ){
            console.log(error)

        }


    }
    render(){
        if(this.state.loading){
            return(
               <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'#333'}}>
                   <ActivityIndicator size="large" color="#fff" />

               </View>
            );
        }
        else{
            return(
                <View style={Styles.container}>
                    <View style={Styles.header}>
                    
                    </View>
                    <View style={Styles.news}>
                        <FlatList
                        data={this.state.news}
                        renderItem={({item})=>{
                          return(
                             <TouchableWithoutFeedback onPress={()=>Linking.openURL(item.url)} >
                               <View style={{width:width-50,height:200,backgroundColor:'#fff',marginBottom:15,borderRadius:15}}>
                                   <View style={Styles.gradient}>
                                     <Image source={{uri : item.urlToImage}} style={{width:350,height:200}}/>
                                     <Text style={{position:'absolute',bottom:0,color:'#fff',fontSize:20,padding:5 }}>{item.title} </Text>
                                     <Text style={{fontSize:16,color:'#fff',position:'absolute',top:0,right:0,padding:5,fontWeight:'bold'}} onPress= {()=>this.sharearticle(item.url)}>Share</Text>
                                   </View>
                               </View>
                             </TouchableWithoutFeedback>
                          );
                        }}

                        />
                    </View>
                </View>

            );

        }
       
    }
}

const Styles = StyleSheet.create({
 container:{
 flex:1,
 backgroundColor: '#333',
 },
 header :{
     padding:10,
     
 },
 news:{
     alignSelf:'center'
 },
 gradient : {
     width:'100%',
     height:'100%',
     backgroundColor:'rgba(0,0,0,5)'
 },
 stretch: {
    width: 50,
    height: 200,
    resizeMode: 'stretch',
  },

});