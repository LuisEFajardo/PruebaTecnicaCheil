import React from 'react';
import { StyleSheet, View, Dimensions, Text } from 'react-native';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function HotelScreen(props) {
    const hotel=props.route.params.hotel;
 
    return (
        <View style={styles.container}>
        <View style={styles.header}></View>
        <Text style={styles.title}>{hotel.name}</Text>
        <Text style={styles.textLabel}>Ciudad</Text>
        <Text style={styles.text}>{hotel.city}</Text>
        <Text style={styles.textLabel}>Dirección</Text>
        <Text style={styles.text}>{hotel.address}</Text>
        <Text style={styles.textLabel}>Precio minimo de cuarto</Text>
        <Text style={styles.text}>{hotel.minPrice}</Text>
        <Text style={styles.textLabel}>Precio maximo de cuarto</Text>
        <Text style={styles.text}>{hotel.maxPrice}</Text>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: windowWidth,
        height: windowHeight,
        backgroundColor: '#76A678',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      header: {
        backgroundColor: '#012E03',
        height: windowHeight * 0.03,
        borderBottomRightRadius: windowWidth * 0.2,
        borderBottomLeftRadius: windowWidth * 0.2,
      },
      title:{
          color:"#fff",
          fontWeight:'bold',
          fontSize:windowWidth*0.08,
          marginBottom:windowHeight*0.04,
      },
      textLabel:{
          color:"#fff",
          fontSize:windowWidth*0.05,
      },
      text:{
          color:'#767676',
          fontWeight:'bold',
          marginBottom:windowHeight*0.02,
      }
})
