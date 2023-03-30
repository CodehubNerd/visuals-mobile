import { StyleSheet } from 'react-native'
import { COLORS, FONT, SIZES } from "../../constants";


const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: '#fff',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 999,
    },
    closeButton: {
      fontSize: 20,
      fontWeight: 'bold',
      padding: 10,
    },
    menuOptions: {
      flex: 1,
      backgroundColor: '#f0f0f0',
      padding: 20,
    },
    menuOption: {
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    menuOptionText: {
      fontSize: 18,
    },
});
  
export default styles
