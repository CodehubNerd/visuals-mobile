import { View, Text, SafeAreaView, TextInput, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { client}  from '../../sanity'
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { FontAwesome } from '@expo/vector-icons';
import styles from "./register.style";

const Register = () => {
  const [email, setEmail] = useState('');
  const [username, setusername] = useState('');
  const [password, setPassword] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const navigation = useNavigation();

  const handleImagePicker = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    if (!result.canceled) {
      setProfileImage(result.uri);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => {navigation.navigate("Login")}}>
          <AntDesign name="back" size={24} color="#091120" />
        </TouchableOpacity>
        <View style={{ flex: 1 }} />
        <Text style={styles.guest}></Text>
        <View style={{ width: 20 }} />
      </View>
      <View style={styles.container}>
        <TouchableOpacity style={styles.imagePicker} onPress={handleImagePicker}>
          {profileImage ? (
            <Image source={{ uri: profileImage }} style={styles.profileImage} />
          ) : (
            <View style={styles.profileIcon}>
              <FontAwesome name="user" size={24} color="white" />
            </View>
          )}
          <View style={styles.cameraIcon}>
            <Ionicons name="camera-outline" size={24} color="black" />
          </View>
        </TouchableOpacity>
        <Text style={styles.title}>Create account</Text>
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
          placeholder="Username"
          autoCapitalize="none"
          value={username}
          onChangeText={setusername}
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
          <Text style={[styles.button, { textAlign: 'center' }]}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {navigation.navigate("Login")}}>
          <Text style={{marginTop:6}}>Already have an account</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Register;
