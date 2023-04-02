import { View, Text, SafeAreaView, TextInput, Image,ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native'
import MasonryList from '@react-native-seoul/masonry-list';
import { SimpleLineIcons ,Feather  } from '@expo/vector-icons'; 
import React from 'react'

const MasionaryLayout = ({data}) => {
  
    return (
   
      <MasonryList
        data={data}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => <CardItem data={item} />}
      />
    
  )
}

const CardItem = ({data}) => {
    return (
      <TouchableOpacity  style={{
        margin: 1,
        margin: 6,
        borderRadius: 5, 
        position: 'relative',
        overflow: 'hidden',
        height: Math.round(Math.random() * 100 + 200),
      }}
      >
       <Image source ={{uri : data.imageURL}}   style={{
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
    }}  />  
    </TouchableOpacity>
  )
  }
export default MasionaryLayout;