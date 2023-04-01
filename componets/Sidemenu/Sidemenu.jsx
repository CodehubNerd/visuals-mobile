import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {  FONT, SIZES } from "../../constants";
import { AntDesign } from '@expo/vector-icons';


const Sidemenu = ({ onClose }) => {
    return (
      <View style={styles.container}>
      <Text >Settings</Text>

       <TouchableOpacity style={styles.menuItem} onPress={onClose}>
  <View style={{ flexDirection: 'row' }}>
    <AntDesign name="setting" size={24} color="#091120b9" />
    <Text style={styles.menuItemText}>Settings</Text>
  </View>
</TouchableOpacity>
<TouchableOpacity style={styles.menuItem} onPress={onClose}>
  <View style={{ flexDirection: 'row' }}>
    <AntDesign name="eyeo" size={24} color="#091120b9" />
    <Text style={styles.menuItemText}>Theme</Text>
  </View>
</TouchableOpacity>
<TouchableOpacity style={styles.menuItem} onPress={onClose}>
  <View style={{ flexDirection: 'row' }}>
    <AntDesign name="staro" size={24} color="#091120b9" />
    <Text style={styles.menuItemText}>Bookmarks</Text>
  </View>
</TouchableOpacity>
<TouchableOpacity style={styles.menuItem} onPress={onClose}>
  <View style={{ flexDirection: 'row' }}>
    <AntDesign name="download" size={24} color="#091120b9" />
    <Text style={styles.menuItemText}>Downloads</Text>
  </View>
</TouchableOpacity>

      </View>
    );
  };
  

  const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        paddingTop:120,
        left: 0,
        right: 0,
        backgroundColor: 'white',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
      },
      menuItemText: {
        fontSize: SIZES.regular,
        marginLeft:10,
        fontFamily: FONT.regular,
        textAlign:'center',
        color: '#091120b9',
      },
      closeIconContainer: {
        position: 'absolute',
        top: 10,
        left: 10,
      },
      menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 20,
        width: "100%",
        borderBottomWidth: 1,
        borderBottomColor: '#b6b1b19f',
      },
      
      option: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginVertical: 8,
      },
      text: {
        marginLeft: 16,
          fontSize: 16,
        
      },
  });

export default Sidemenu;