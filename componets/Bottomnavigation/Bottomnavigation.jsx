import { View, Text, SafeAreaView, TextInput, Image, TouchableOpacity } from 'react-native'
import { SimpleLineIcons, Feather, Ionicons, MaterialIcons } from '@expo/vector-icons';
import React, { Component } from 'react'
import styles from "./Bottomnavigation.style";

export class Bottomnavigation extends Component {
  render() {
    return (
        <View style={styles.bottomNavigation}>
        <TouchableOpacity style={styles.bottomNavItem}>
          <Ionicons name="person-outline" size={24} color="#091120b9" />
          <Text style={styles.bottomNavText}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomNavItem}>
          <MaterialIcons name="add-box" size={24} color="#091120b9" />
          <Text style={styles.bottomNavText}>Add</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomNavItem}>
          <Ionicons name="heart-outline" size={24} color="#091120b9" />
          <Text style={styles.bottomNavText}>Likes</Text>
        </TouchableOpacity>
      </View>
      
    )
  }
}

export default Bottomnavigation