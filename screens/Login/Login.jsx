import { View, Text, SafeAreaView, TextInput, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from "./login.style";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => {}}>
          <Image source={require('../../assets/back.png')} style={{ width: 20, height: 20 }} />
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
          <Text style={[styles.button, { textAlign: 'center' }]}>Login</Text>
        </TouchableOpacity>
        <Text style={{marginTop:6}}>Create account</Text>
      </View>
    </SafeAreaView>
  )
}

export default Login
