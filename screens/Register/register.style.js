import { StyleSheet } from 'react-native'
import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop:50,
    alignItems: 'center',
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
        width: 200,
        height: 200,
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
  }
})

export default styles
