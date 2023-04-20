import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as MediaLibrary from 'expo-media-library';

const AddVisual = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [galleryImages, setGalleryImages] = useState([]);

  useEffect(() => {
    (async () => {
      const { status } = await MediaLibrary.requestPermissionsAsync();

      if (status === 'granted') {
        const media = await MediaLibrary.getAssetsAsync({ mediaType: 'photo' });
        setGalleryImages(media.assets);
      }
    })();
  }, []);

  const handleImageSelection = (image) => {
    setSelectedImage(image);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleImageSelection(item)}>
      <Image source={{ uri: item.uri }} style={styles.galleryImage} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="ios-close" size={40} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>New Post</Text>
        <TouchableOpacity>
          <Text style={{ color: 'blue' }}>Share</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.imagePickerContainer}>
        {selectedImage ? (
          <Image source={{ uri: selectedImage.uri }} style={styles.selectedImage} />
        ) : (
          <Text style={styles.selectImageText}>No image selected</Text>
        )}
      </View>

      <View style={styles.galleryContainer}>
        <Text style={styles.galleryTitle}>Gallery</Text>
        <FlatList
          data={galleryImages}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  imagePickerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EAEAEA',
  },
  selectedImage: {
    width: '100%',
    height: '100%',
  },
  selectImageText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'gray',
  },
  galleryContainer: {
    flex: 2,
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  galleryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  galleryImage: {
    width: 70,
    height: 70,
    marginRight: 10,
  },
});

export default AddVisual;
