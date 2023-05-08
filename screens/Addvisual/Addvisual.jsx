import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Ionicons, Feather, EvilIcons } from '@expo/vector-icons';

import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from 'expo-media-library';



const categories = [
  { name: 'Category 1', value: 'category1' },
  { name: 'Category 2', value: 'category2' },
  { name: 'Category 3', value: 'category3' },
  { name: 'Category 4', value: 'category4' },
];

const AddVisual = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [galleryImages, setGalleryImages] = useState([]);
  const [description, setDescription] = useState('');
  
  const [selectedCategory, setSelectedCategory] = useState(categories[0].value);

  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
  };

  useEffect(() => {
    (async () => {
      const { status } = await MediaLibrary.requestPermissionsAsync();

      if (status === 'granted') {
        const media = await MediaLibrary.getAssetsAsync({ mediaType: 'photo' });
        setGalleryImages(media.assets);
      }
    })();
  }, []);

  const handleImageSelection = async () => {
    let result = await ImagePicker.launchImageLibraryAsync();

    if (!result.canceled) {
      setSelectedImage(result.uri);
    }
  };

  const handleCameraSelection = async () => {
    let result = await ImagePicker.launchCameraAsync();

    if (!result.canceled) {
      setSelectedImage(result.uri);
    }
  };

  const handleSave = () => {
    console.log('Image URI:', selectedImage);
    console.log('Description:', description);
    // Add logic to save the image and description to the database
  };





  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <TouchableOpacity onPress={() => setSelectedImage(null)}>
          <EvilIcons name="close-o" size={30} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>New visual</Text>
        <TouchableOpacity onPress={handleSave}>
          <Feather name="send" size={24} color="black" />
        </TouchableOpacity>
      </View>
      

      <View style={styles.imagePickerContainer}>
        {selectedImage ? (
          <Image source={{ uri: selectedImage }} style={styles.selectedImage} />
        ) : (
          <TouchableOpacity style={styles.selectImageButton} onPress={handleImageSelection}>
            <Feather name="image" size={30} color="gray" />
            <Text style={styles.selectImageText}>Choose an image from gallery</Text>
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.cameraContainer}>
        <TouchableOpacity style={styles.cameraButton} onPress={handleCameraSelection}>
          <Ionicons name="camera-outline" size={35} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.descriptionContainer}>
        <TextInput
          style={styles.descriptionInput}
          placeholder="Title"
          onChangeText={(text) => setDescription(text)}
          value={description}
          multiline
          numberOfLines={1}
        />
        <TextInput
          style={styles.descriptionInput}
          placeholder="Write a description..."
          onChangeText={(text) => setDescription(text)}
          value={description}
          multiline
          numberOfLines={4}
        />
      </View>

        <Text style={styles.galleryTitle}>Categories</Text>
        
  <Picker
  style={{ width: '100%' }}
  selectedValue={selectedCategory}
  onValueChange={handleCategoryChange}
   >
  {categories.map((category) => (
    <Picker.Item
      key={category.value}
      label={category.name}
      value={category.value}
    />
  ))}
    </Picker>
        


    </View>
  );
};
export default AddVisual;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  categoryItem: {
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    padding: 10,
    marginRight: 10,
  },
  categoryText: {
    color: '#666',
    fontWeight: 'bold',
  },
  
  categoryContainer: {
    backgroundColor: '#ddd',
    padding: 10,
    borderRadius: 10,
    marginRight: 10,
  },
  categoryText: {
    fontSize: 16,
  },
  selectedCategory: {
    backgroundColor: '#4CAF50',
  },

  selectedCategoryText: {
    color: '#fff',
  },
  
  imagePickerContainer: {
    flex: 1,
    resizeMode: 'contain',
    backgroundImage: 'url("https://res.cloudinary.com/dbb4s7ej0/image/upload/v1682159771/OIP_4_npttu8.jpg")',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EAEAEA',
  },
  selectImageButton: {
    alignItems: 'center',
  },
  selectImageText: {
    fontSize: 18,
    color: 'gray',
    marginTop: 10,
  },
  selectedImage: {
    width: '100%',
   
    height: '100%',
  },
  cameraContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  cameraButton: {
    backgroundColor: '#00A6A6',
    borderRadius: 50,
    padding: 10,
  },
  descriptionContainer: {
    backgroundColor: '#EAEAEA',
    padding: 10,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  descriptionInput: {
    fontSize: 18,
  },


  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 30,
    marginBottom: 30,
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
    paddingHorizontal: 20,
    fontWeight: 'bold',

    marginBottom: 10,
  },
  galleryImage: {
    width: 70,
    height: 70,
    marginRight: 10,
  },
  imageInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
  },
  descriptionInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    height: 100,
    textAlignVertical: 'top',
  },
  cameraButton: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  cameraButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  addButton: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
  },
  addButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingTop: 50,
    paddingBottom: 10,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  imagePickerContainer: {
    width: '100%',
    height: 300,
    backgroundColor: '#f2f2f2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  selectImageButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  selectImageText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  cameraContainer: {
    marginTop: 20,
    backgroundColor: '#00A6A6',
    padding: 10,
    borderRadius: 50,
  },
  cameraButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
  },
  descriptionContainer: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  descriptionInput: {
    fontSize: 16,
    minHeight: 50,
  },
  galleryContainer: {
    width: '100%',
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: '#fff',
  },
  galleryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  galleryImage: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  categoryContainer: {
    width: '100%',
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: '#fff',
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  categoryItem: {
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderRadius: 20,
    marginRight: 10,
    marginBottom: 10,
  },
  categoryItemText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
