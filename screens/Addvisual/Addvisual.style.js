import { StyleSheet } from 'react-native'
import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        width: '100%',
      },
      headerText: {
        fontSize: 20,
        fontWeight: 'bold',
      },
      cancelButton: {
        fontSize: 16,
        color: 'red',
      },
      imageWrapper: {
        marginVertical: 20,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      },
      image: {
        width: '100%',
        height: 200,
      },
      galleryWrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: 5,
      },
      galleryImage: {
        width: '32%',
        height: 100,
        marginBottom: 5,
      },
})
  
  export default styles