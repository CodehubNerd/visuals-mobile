import { StyleSheet } from 'react-native'

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
      fontSize: 10,
      fontWeight: 'bold',
      marginTop: 5,
    },
  });