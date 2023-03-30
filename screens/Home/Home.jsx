import { View, Text, SafeAreaView, TextInput, Image, TouchableOpacity } from 'react-native'
import { useNavigation} from '@react-navigation/native';
import React, { useState } from 'react'
import {Bottomnavigation,Sidemenu} from '../../componets'
import { SimpleLineIcons ,Feather  } from '@expo/vector-icons'; 
import styles from "./home.style";


const Home = () => {
  const back = useNavigation();
  const [showMenu, setShowMenu] = useState(false); //add state to control the visibility of the menu

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
      
 {/* show/hide the SideMenu component based on the value of showMenu */}
 {showMenu && <Sidemenu onClose={handleMenuToggle} />}
      {/* rest of the Home screen */}

      <Bottomnavigation />
      
  </SafeAreaView>
  
  )
}

export default Home;