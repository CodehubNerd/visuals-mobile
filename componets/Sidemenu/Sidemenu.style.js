import { StyleSheet } from 'react-native'
import { COLORS, FONT, SIZES } from "../../constants";


const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '50%',
      height: '100%',
      backgroundColor: '#fff',
      zIndex: 999,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    option: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
    },
    text: {
        fontSize: SIZES.regular,
        fontFamily: FONT.regular,
        textAlign:'center',
        color: COLORS.tertiary,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
      },
      
  });
  
export default styles
