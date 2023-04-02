import { View, Text, SafeAreaView, TextInput, Image,ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React,{useState} from 'react'
import {Bottomnavigation} from '../../componets'
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import styles from "./detailts.style";

const Detailts = ({ route }) => {
    const [isLoading, setLoading] = useState(true);
    const id = route?.params?.param;
  return (
    //Details screen container
    <SafeAreaView style={[styles.homecontainer, { flex: 1 }]} >
      
    <View style={[styles.header]}>
    <TouchableOpacity >
    <AntDesign name="back" size={24} color="#091120b9" />
    </TouchableOpacity>
              
    <View style={{ flex: 1 }} />
    <Entypo name="dots-three-vertical" size={20} color="#091120b9" />
    <View style={{ width: 20 }} />
    </View>
      
          {isLoading ? <ActivityIndicator size="large" color="#00A6A6" /> :
      
              <Text>data</Text>}

     
      {/*srcoll view of (misonary) images component*/}
     
    <Text>{id}</Text>

    <Bottomnavigation />
      
  </SafeAreaView>
  )
}

export default Detailts;