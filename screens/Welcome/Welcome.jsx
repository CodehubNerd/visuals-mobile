import { View, Text,Image ,SafeAreaView,TouchableOpacity} from 'react-native'
import Reactzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz from 'react'
import { welcomebg } from "../../constants";
import { NavigationContainer, useNavigation} from '@react-navigation/native';
import styles from "./welcome.style";



const Welcome = () => {
  const naviagation = useNavigation();
  return (
    <View style={styles.container}>
      
      <SafeAreaView style ={{ marginTop:20}} >
        <View>
        <Text style={styles.Bigheading}>
       <Text style={{ color: '#00A6A6' }}>Hey!</Text> Welcome</Text>
          <Text style={styles.smallheading}>A platform where every picture tells {'\n'}a story.</Text>
          <View style = {{width:200,height:200 ,paddingTop:60}}>
            <Image  source={{ uri: 'https://res.cloudinary.com/dbb4s7ej0/image/upload/v1679687220/AdminPhotos/undraw_moments_0y20_1_fopiib.png' }} style={{ width: "100%", height: "100%",marginTop:15}} />
          </View>
          <TouchableOpacity onPress={() => {naviagation.navigate("Login")}} style={{ justifyContent: "center", paddingTop: 70, }}>
            
            <View style ={styles.btn}>
              <Text style={styles.smallheadingbtn}>Get Started</Text>
             </View>

          </TouchableOpacity>
       </View>
     
    </SafeAreaView>
    
    </View>
  )
}

export default Welcome;