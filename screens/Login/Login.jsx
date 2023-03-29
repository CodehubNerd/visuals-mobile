import { View, Text, SafeAreaView, TextInput, Image, TouchableOpacity } from 'react-native'
import { useNavigation} from '@react-navigation/native';
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import styles from "./login.style";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const naviagation = useNavigation();
  const back = useNavigation();
  const login = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => {back.navigate("Welcome")}}>
        <AntDesign name="back" size={24} color="#091120" />
        </TouchableOpacity>
        <View style={{ flex: 1 }} />
        <Text style={styles.guest}>Guest</Text>
        <View style={{ width: 20 }} />
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <View style={styles.imageContainer}>
        <Image source={{ uri: 'https://res.cloudinary.com/dbb4s7ej0/image/upload/v1679691211/AdminPhotos/undraw_secure_files_re_6vdh_jnip99.png' }} style={styles.image} />
       </View>

        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          autoCapitalize="none"
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={[styles.buttonContainer, { width: '100%' }]} onPress={() => {}}>
          <Text style={[styles.button, { textAlign: 'center' }]}  onPress={() => {login.navigate("Home")}} >Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {naviagation.navigate("Register")}}>
        <Text style={{marginTop:6}}>Create account</Text>
        </TouchableOpacity>
      
      </View>
    </SafeAreaView>
  )
}

export default Login
