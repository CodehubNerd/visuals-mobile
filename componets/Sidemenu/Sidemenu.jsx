import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import styles from "./Sidemenu.style";

const Sidemenu = ({ onClose }) => {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={onClose}>
          <Text style={styles.closeButton}>X</Text>
        </TouchableOpacity>
        <View style={styles.menuOptions}>
          <TouchableOpacity style={styles.menuOption}>
            <Text style={styles.menuOptionText}>Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuOption}>
            <Text style={styles.menuOptionText}>Theme</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuOption}>
            <Text style={styles.menuOptionText}>Bookmarks</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuOption}>
            <Text style={styles.menuOptionText}>Downloads</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  

export default Sidemenu;