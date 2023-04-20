import { StyleSheet } from 'react-native'
import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop:40,
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
  export default styles