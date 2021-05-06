import React from 'react'
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import HotelsScreen from '../../screen/HotelsScreen';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function ListItem({hotel, navigation}) {
    

    const hotelSelected = () =>{
        navigation.navigate("hotel", {
            screen: "hotel",
             hotel ,
          });
    }

    return (
        <TouchableOpacity style={styles.viewItem} onPress={hotelSelected}>
            <Text style={styles.textName}>{hotel.name}</Text>
            <Text style={styles.textDescription}>{hotel.city}</Text>
            <Text style={styles.textDescription}>{hotel.minPrice}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    viewItem:{
        backgroundColor: '#012E03',
        padding:10,
        display:"flex",
        flexDirection:"column",
        alignItems:"center", 
        marginBottom:windowHeight*0.01,
    },
    textName:{
        color:"#fff",
        fontWeight:"bold",
        fontSize:windowWidth*0.04,
    },
    textDescription:{
        color:"#BBBBBB",
    }
})
