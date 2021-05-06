import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Modal} from 'react-native-paper';
import {getHotelByCity, getHotelByPrice, getHotels} from '../api/hotels';
import Select from '../components/input/Select';
import List from '../components/list/List';
import {listCity, listPrice, typeFilter} from '../utils/constants'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function HotelsScreen({navigation}) {

  const [hotels, setHotels] = useState([]);
  const [visible, setVisible] = React.useState(false);
  const [visibleType, setVisibleType] = React.useState(false);
  const [listSelect, setListSelect] = useState([]);
  const [listSelectFilter, setListSelectFilter] = useState([]);
  const [type, setType] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
      if(type.key==1){
        setListSelectFilter(listCity);
        setFilter('Bogota');
      }else if(type.key==2){
        setListSelectFilter(listPrice);
        setFilter('50000');
      }else if(type.key==3){
          setFilter('');
          setType('');
      }
  }, [type]);

  useEffect(async () => {
      if(type.name=='Ciudades' && filter.name!=''){
        setHotels(await getHotelByCity(filter.name));
      }else if(type.name=='Precio' && filter.name!=''){
        setHotels(await getHotelByPrice(filter.name));
      }else{
        const listHotels = await getHotels();
        setHotels(listHotels);
      }
  }, [filter]);



  const showModalFilter = () => {
    setVisibleType(true);
    setListSelect(typeFilter);
  };

  const showModal = () => {
    setVisible(true);
  };

  const hideModal = () => setVisible(false);
  const hideModalType = () => setVisibleType(false);

  useEffect(async () => {
    const listHotels = await getHotels();
    setHotels(listHotels);
    return () => setHotels([]);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}></View>

      <Text style={styles.textLabel}>Seleccione el filtro</Text>
      <TouchableOpacity style={styles.input} onPress={showModalFilter}>
        <Text style={styles.textInput}>{type.name}</Text>
      </TouchableOpacity>

      <Text style={styles.textLabel}>Seleccione el filtro</Text>
      <TouchableOpacity style={styles.input} onPress={showModal}>
        <Text style={styles.textInput}>{filter.name}</Text>
      </TouchableOpacity>
      <Text style={styles.textLabel}>Seleccione el hotel para ver su información</Text>
      <View style={styles.viewList}>
      <ScrollView>
          <List hotels={hotels} navigation={navigation} />
          </ScrollView>
      </View>
     
      <Modal visible={visibleType} onDismiss={hideModalType}>
        <Select list={listSelect} setOption={setType} setVisible={setVisibleType} />
      </Modal>
      <Modal visible={visible} onDismiss={hideModal}>
        <Select list={listSelectFilter} setOption={setFilter} setVisible={setVisible} />
      </Modal>
    </View>
  );
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
  textLabel: {
    textAlign: 'center',
    marginTop: windowHeight * 0.02,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: windowHeight * 0.01,
  },
  input: {
    backgroundColor: '#fff',
    width: windowWidth * 0.6,
    height: windowHeight * 0.04,
    borderRadius: 30,
    justifyContent: 'center',
  },
  textInput: {
    textAlign: 'center',
  },
  viewList:{
      backgroundColor:"#76A678",
      height:windowHeight*0.5,
      width:windowWidth*0.8,
      marginTop:windowHeight*0.03,
  }
});
