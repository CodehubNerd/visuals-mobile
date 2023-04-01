import { View, Text, SafeAreaView, TextInput, Image,ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native'
import MasonryList from '@react-native-seoul/masonry-list';
import { SimpleLineIcons ,Feather  } from '@expo/vector-icons'; 
import React from 'react'

const MasionaryLayout = () => {
    const data = [
        {id:1,name : 'Reading', imageURL : 'https://cdn.pixabay.com/photo/2023/03/25/17/35/girl-7876505_960_720.jpg'},
        {id:2,name : 'Reading', imageURL : 'https://cdn.pixabay.com/photo/2023/03/27/11/17/wild-plant-7880509_960_720.jpg'},
        {id:3,name : 'Reading', imageURL : 'https://cdn.pixabay.com/photo/2017/08/06/20/11/wedding-2595862_960_720.jpg'},
        {id:4,name : 'Reading', imageURL : 'https://cdn.pixabay.com/photo/2014/02/07/11/31/flowers-260894_960_720.jpg'},
        {id:5,name : 'Reading', imageURL : 'https://cdn.pixabay.com/photo/2016/11/21/16/08/tying-hair-1846171_960_720.jpg'},
        {id:6,name : 'Reading', imageURL : 'https://cdn.pixabay.com/photo/2013/07/18/20/26/sea-164989_960_720.jpg'},
        {id:7,name : 'Reading', imageURL : 'https://cdn.pixabay.com/photo/2016/10/07/08/56/close-up-1721060_960_720.jpg'},
        {id:8,name : 'Reading', imageURL : 'https://cdn.pixabay.com/photo/2019/09/24/06/10/insect-4500348_960_720.jpg'},
        {id:9,name : 'Reading', imageURL : 'https://cdn.pixabay.com/photo/2019/12/15/08/14/body-painting-4696539_960_720.jpg'},
      ]
    return (
      

    <ScrollView style={{ padding: 4 }} showsVerticalScrollIndicator={false}>
  {data ? (
    <>
      <MasonryList
        data={data}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => <CardItem data={item} />}
      />
    </>
  ) : (
    <>
      <ActivityIndicator size={30} color={"#00A6A6"} />
    </>
  )}
</ScrollView>


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
export default MasionaryLayout