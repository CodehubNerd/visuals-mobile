import React from 'react';
import { StyleSheet, View, Image, FlatList, Text } from 'react-native';
import Categories from "./Categories.style";
import { COLORS, FONT, SIZES } from "../../constants";
import { categories } from '../../utils/data';



const CategoryList = () => {
  const renderItem = ({ item }) => (
    <View style={styles.container}>
      <View style={[styles.circle, { backgroundColor: item.color, marginTop: 20 }]}>
        <Image source={{ uri: item.image }} style={styles.image} />
      </View>
      <Text style={styles.text}>{item.name}</Text>
    </View>
  );

  return (
    <FlatList
      data={categories}
      renderItem={renderItem}
      keyExtractor={(item) => item.name}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#dfdfdf', // Updated border color
    flexDirection: 'column',
  },
  image: {
    width: '100%', // Updated to take full width of the circle
    height: '100%', // Updated to take full height of the circle
    borderRadius: 50 / 2,
  },
  text: {
    color: '#83829A',
    fontSize: SIZES.medium,
    fontFamily: FONT.bold,
    fontWeight: 'bold',
    marginTop: 5,
  },
});

export default CategoryList;
