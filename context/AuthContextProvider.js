import React, { createContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';
import { client } from '../sanity';

export const AuthContext = createContext();

// Define your context provider
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigation = useNavigation();

  const login = async (email, password) => {
    const query = `*[_type == "users" && email == $email && password == $password][0]{
      username,
      "image": image.asset->url
    }`;
    const params = { email, password };

    try {
      const result = await client.fetch(query, params);

      if (result) {
        setUser(result);
        navigation.navigate('Home');
        return true;
      } else {
        Alert.alert('Invalid credentials', 'Please enter a valid email and password');
        return false;
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'An error occurred while logging in');
      return false;
    }
  };

  const logout = () => {
    setUser(null);
  };

  // Pass the user, login, and logout functions down to the child components
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
