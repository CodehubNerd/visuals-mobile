import { View, Text, SafeAreaView, TextInput, Image, TouchableOpacity } from 'react-native'
import { SimpleLineIcons, Feather, Ionicons, MaterialIcons } from '@expo/vector-icons';
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import styles from "./Bottomnavigation.style";

const Bottomnavigation = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.bottomNavigation}>
      <TouchableOpacity style={styles.bottomNavItem}>
        <Ionicons name="person-outline" size={24} color="#091120b9" />
        <Text style={styles.bottomNavText}>Profile</Text>
      </TouchableOpacity>
            
      <View style={styles.bottomNavItem}>
        <TouchableOpacity style={styles.addIconContainer} onPress={() => navigation.navigate('Addvisual')}>
          <MaterialIcons name="add" size={32} color="#fff" style={styles.addIcon} />
        </TouchableOpacity>
        <Text style={styles.bottomNavText}></Text>
      </View>
            
      <TouchableOpacity style={styles.bottomNavItem}>
        <Ionicons name="heart-outline" size={24} color="#091120b9" />
        <Text style={styles.bottomNavText}>Likes</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Bottomnavigation;
