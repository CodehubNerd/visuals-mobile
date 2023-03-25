import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../constants";


const styles = StyleSheet.create({
    container: {
      flex:1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#f5f5f5",
      position: "relative",
  },
  smallheading:{
    fontSize: SIZES.regular,
    marginTop:8,
    fontFamily: FONT.regular,
    textAlign:'center',
    color: COLORS.tertiary,
  },
  smallheadingbtn:{
    fontSize: SIZES.medium,
    marginTop:8,
    fontFamily: FONT.regular,
    textAlign:'center',
    color: COLORS.secondary,
  },
  Bigheading:{
    fontSize: SIZES.xxLarge,
    marginTop:10,
    fontFamily: FONT.bold,
    color: COLORS.tertiary,
  },
  
  btn:{
    backgroundColor: COLORS.primary,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent:"center",
    width: "100%",
    alignItems: "center",
    shadowColor: "#a3008b",
    shadowOffset: {
      width: 0,
      height: 0,
    },
   
  },
  
    imagestyle: {
      width: "100%",
      height: "100%",
      object:"cover"
  },
    
    areaview: {
      width: "80%",
      height: "80%",
    },
    jobTitleBox: {
      marginTop: SIZES.small,
    },
    jobTitle: {
      fontSize: SIZES.large,
      color: COLORS.primary,
      fontFamily: FONT.bold,
      textAlign: "center",
    },
    companyInfoBox: {
      marginTop: SIZES.small / 2,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    companyName: {
      fontSize: SIZES.medium - 2,
      color: COLORS.primary,
      fontFamily: FONT.medium,
    },
    locationBox: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    locationImage: {
      width: 14,
      height: 14,
      tintColor: COLORS.gray,
    },
    locationName: {
      fontSize: SIZES.medium - 2,
      color: COLORS.gray,
      fontFamily: FONT.regular,
      marginLeft: 2,
    },
  });
  
  export default styles;