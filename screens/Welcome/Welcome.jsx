import { View, Text,Image ,SafeAreaView,TouchableOpacity} from 'react-native'
import React from 'react'
import { welcomebg } from "../../constants";

import styles from "./welcome.style";



const Welcome = () => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://res.cloudinary.com/dbb4s7ej0/image/upload/v1679492046/AdminPhotos/welcomebg-Recovered_vbazqn.png' }} style={{ width: "100%", height: "100%", resizeMode: "cover" }} />
      
      <SafeAreaView style ={{position:"absolute", zIndex:10,top:0,left:30,bottom:0,alignItems:'center',justifyContent:"center"}} >
        <View>
          <Text style={styles.smallheading}>Where every picture tells a story</Text>
          <Text style={styles.Bigheading}>Visuals hub</Text>

          <TouchableOpacity style={{ justifyContent: "center", paddingTop: 500, left: 70 }}>
            
          <View style={styles.btn}>  
          <Text style={{ color: "#EEE3EE" }}>Get started</Text>
          </View>

          </TouchableOpacity>
       </View>
     
    </SafeAreaView>
    
    </View>
  )
}

export default Welcome;