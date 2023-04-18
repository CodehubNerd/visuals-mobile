import { View, Text, SafeAreaView, TextInput, Image, TouchableOpacity, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { client } from '../../sanity';
import { AntDesign } from '@expo/vector-icons';
import styles from "./login.style";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = async () => {
    // Perform authentication with Sanity API
    const query = `*[_type == "users" && email == $email && password == $password][0]`;
    const params = { email, password };
    try {
      const result = await client.fetch(query, params);
      if (result) {
        navigation.navigate('Home');
      } else {
        Alert.alert('Invalid credentials', 'Please enter a valid email and password');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'An error occurred while logging in');
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => { navigation.goBack() }}>
          <AntDesign name="back" size={24} color="#091120" />
        </TouchableOpacity>
        <View style={{ flex: 1 }} />
        <Text style={styles.guest}>Guest</Text>
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
