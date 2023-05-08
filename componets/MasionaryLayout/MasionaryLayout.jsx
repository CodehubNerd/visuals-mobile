import { Image,TouchableOpacity ,Text, View} from 'react-native'
import MasonryList from '@react-native-seoul/masonry-list';
import React from 'react'
import { useNavigation } from '@react-navigation/native';

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

const CardItem = ({ data }) => {
  const navigation = useNavigation()
  

  const handleClick = () => {
    navigation.navigate('Detailts', { param: data.id })
  }



  
  return (
      <>
       <TouchableOpacity  style={{
        margin: 1,
        margin: 6,
        borderRadius: 5, 
        position: 'relative',
        overflow: 'hidden',
        height: Math.round(Math.random() * 100 + 200),
      }}
        onPress = {handleClick}
      >
       <Image source ={{uri : data.imageURL}}   style={{
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
        }} />  
       
      </TouchableOpacity>
      <View style={{ marginLeft: 6 }}>
        <View>
          <Image/>
        </View>
        <View>
        <Text >jonh maffy</Text>
        </View>
       
      </View>
      </>
     
  )
  }
export default MasionaryLayout;