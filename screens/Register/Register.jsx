import { View, Text, SafeAreaView, TextInput, Image, TouchableOpacity, Platform } from 'react-native';
import React, { useState } from 'react'
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import styles from "./register.style";
import { client } from '../../sanity';

const Register = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState(null);

  // handle image upload
  const handleImagePicker = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    
    if (!result.canceled) {
      setImage(result.assets[0]);
    }
  };

  const navigation = useNavigation();

  const handleRegister = async () => {
    try {
      const response = await client.create({
        _type: 'user',
        email,
        username,
        password,
        image,
      });
      console.log('User data saved to Sanity:', response);
    } catch (error) {
      console.error('Failed to save user data to Sanity:', error.message);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="back" size={24} color="#091120" />
        </TouchableOpacity>
        <View style={{ flex: 1 }} />
        <Text style={styles.guest}></Text>
        <View style={{ width: 20 }} />
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Create account</Text>
        <TouchableOpacity style={styles.imagePickerButton} onPress={handleImagePicker}>
          {image ? (
            <Image
              source={{ uri: Platform.OS === 'ios' ? image.uri.replace('file://', '') : image.uri }}
              style={styles.imagePickerImage}
            />
          ) : (
            <View style={styles.imagePlaceholder}>
              <View style={styles.imageWrapper}>
                <AntDesign name="camerao" size={48} color="#7a7a7a" style={styles.imagePickerIcon} />
              </View>
            </View>
          )}
        </TouchableOpacity>
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
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          autoCapitalize="none"
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          style={[styles.buttonContainer, { width: '100%' }]}
          onPress={handleRegister}
        >
          <Text style={[styles.button, { textAlign: 'center' }]}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={{ marginTop: 6 }}>Already have an account</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Register;
