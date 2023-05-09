import { View, Text, SafeAreaView, TextInput, Image, TouchableOpacity, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React, { useContext, useState } from 'react';

import { AntDesign } from '@expo/vector-icons';
import styles from "./login.style";
import { AuthContext } from '../../context/AuthContextProvider';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const navigation = useNavigation();

  const handleLogin = () => {
    login(email, password);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
    
      <View style={styles.header}>
        <TouchableOpacity onPress={() => { navigation.goBack() }}>
          <AntDesign name="back" size={24} color="#091120" />
        </TouchableOpacity>
        <View style={{ flex: 1 }} />
        <TouchableOpacity onPress={() => {  navigation.navigate('Home')}}>
        <Text style={styles.guest}>Guest</Text>
        </TouchableOpacity>
       
        <View style={{ width: 20 }} />
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: 'https://res.cloudinary.com/dbb4s7ej0/image/upload/v1679691211/AdminPhotos/undraw_secure_files_re_6vdh_jnip99.png' }}
            style={styles.image}
          />
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
        <TouchableOpacity style={[styles.buttonContainer, { width: '100%' }]} onPress={handleLogin}>
          <Text style={[styles.button, { textAlign: 'center' }]}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { navigation.navigate("Register") }}>
          <Text style={{ marginTop: 6 }}>Create account</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Login
