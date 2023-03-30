import { StyleSheet } from 'react-native'
import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
    bottomNavigation: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#fff',
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: 60,
      paddingHorizontal: 20,
      borderTopWidth: 1,
      borderTopColor: '#ccc',
    },
    bottomNavItem: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    bottomNavText: {
      fontSize: 12,
      color: '#091120b9',
      marginTop: 4,
    },
    addIconContainer: {
        position: 'absolute',
        bottom: 0,
        zIndex: 1,
        backgroundColor: COLORS.primary,
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
      
      },
      addIcon: {
        padding: 10,
      }
  });
  
export default styles
