import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import {map} from 'lodash';
import ListItem from './ListItem';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function List({hotels, navigation}) {

    return (
        <>
            {map(hotels, hotel => (
                <ListItem key={hotel.id} hotel={hotel} navigation={navigation}/>
            ))}
        </>
    )
}


