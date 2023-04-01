import { View, Text, SafeAreaView, TextInput, Image,ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import MasonryList from '@react-native-seoul/masonry-list';
import React, { useState } from 'react' 
import {Bottomnavigation,Sidemenu,CategoryList} from '../../componets'
import { SimpleLineIcons ,Feather  } from '@expo/vector-icons'; 
import styles from "./home.style";


const Home = () => {
  const back = useNavigation();
  const [showMenu, setShowMenu] = useState(false); //add state to control the visibility of the menu
  const [snaps, setSnaps] = useState(null);

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

  const handleMenuToggle = () => {
    setShowMenu(!showMenu); //toggle the value of showMenu when the user clicks the SimpleLineIcons button
  };

  return (
    
    <SafeAreaView style={[styles.homecontainer, { flex: 1 }]} >
    <View style={styles.header}>
    <TouchableOpacity onPress={handleMenuToggle}>
        <SimpleLineIcons style={{ backgroundColor: '#dee0e4b9', padding: 4, borderRadius: 4 }} name="menu" size={22} color="#091120b9" />
      </TouchableOpacity>
      <View style={{ flex: 1 }} />
      <Image source={{ uri: 'https://res.cloudinary.com/dbb4s7ej0/image/upload/v1666080054/AdminPhotos/20220903_112222_gq40jt.jpg' }} style={styles.image} />
      <View style={{ width: 20 }} />
      </View>
      
    <View style={styles.userSection}>
      <Text style={styles.welcomeText}>Hello, Masiko</Text>
        <Text style={styles.createMemoriesText}>Create your memories</Text>
        
      <View style={styles.searchBoxContainer}>
      <TextInput style={styles.searchBox} placeholder="Looking for?" />
      <TouchableOpacity style={styles.searchButton}>
      <Feather name="search" size={23} color="#fff" />
      </TouchableOpacity>
      </View>
      </View>
     
      <Text style={[styles.mediumTxt,{marginTop:20}]}>categories</Text>
      <CategoryList />

      <ScrollView>
        {snaps ? (
         <> </>) :( <>
          <ActivityIndicator size={30} color={'#00A6A6'}/>
        </>
       )}
    
        
      </ScrollView>

      
 {/* show/hide the SideMenu component based on the value of showMenu */}
 {showMenu && <Sidemenu onClose={handleMenuToggle} />}
      {/* rest of the Home screen */}

      <Bottomnavigation />
      
  </SafeAreaView>
  
  )
}

export default Home;