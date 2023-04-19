import { StyleSheet } from 'react-native'
import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop:50,
    alignItems: 'center',
  
  
  },
  masonryContainer: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },


  circle: {
    width: 35,
    height: 35,
    borderRadius: 60,
    backgroundColor: "#009fe3",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 23,
    fontWeight: "bold",
    color: "#000",
    textTransform: "uppercase",
  },

  masonryImage: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  },
  
  homecontainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  guest: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20
    },
    imageContainer: {
        alignItems: 'center',
        marginVertical: 20,
      },
      image: {
        width: 35,
        height: 35,
        borderRadius:80,
      },
  input: {
    height: 40,
    width: '100%',
    marginVertical: 10,
    borderRadius: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc'
  },
  buttonContainer: {
    backgroundColor:COLORS.primary,

    borderRadius: 5,
    padding: 10,
    marginTop: 20
  },
  button: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff'
  },
  userSection: {
    marginTop:25
  },
  welcomeText: {
    fontSize: SIZES.xxLarge,
    fontFamily: FONT.bold,
    color: COLORS.tertiary,
  },
  mediumTxt: {
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: COLORS.tertiary,
  },
  createMemoriesText: {
    fontSize: SIZES.regular,
    marginTop:8,
    fontFamily: FONT.regular,
    color: COLORS.tertiary,
  },
  searchBoxContainer: {
    flexDirection: 'row',
    marginTop:10,
    alignItems: 'center',
  },
  searchButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginLeft: 10,
  },


  searchBox: {
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 16,
    borderColor: '#ddd',
    borderWidth: 1,
    width: '80%',
    flexGrow: 1,
   
  },
})

export default styles
