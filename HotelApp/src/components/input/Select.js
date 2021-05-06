import React from 'react';
import {StyleSheet, TouchableOpacity, View, Dimensions} from 'react-native';
import {Text} from 'react-native-paper';
import {map} from 'lodash';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Select({list = [], setOption, setVisible}) {

    const selectOption = (key, name)=>{
        setOption({
            key,
            name
        });
        setVisible(false);
    }

  return (
    <View style={styles.select}>
      {map(list, option => (
        <TouchableOpacity key={option.key} style={styles.viewItem} onPress={()=>selectOption(option.key, option.data)}>
          <Text style={styles.item}>{option.data}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
    item:{
        textAlign:"center",
    },
    select:{
        alignItems:"center",
        backgroundColor:"#A6A8A6",
        padding:20,
        width:windowWidth*0.9,
        marginLeft:windowWidth*0.05,
        top:-windowHeight*0.1
    },
    viewItem:{
        backgroundColor:"#fff",
        marginBottom:10,
        width:windowWidth*0.6,
        height:windowHeight*0.03,
        borderRadius:40,
    }
});
