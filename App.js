import { StatusBar } from 'expo-status-bar';
import { AuthProvider } from './context/AuthContextProvider';


import { Welcome, Home, Login,Register,Detailts } from './screens';
import { useFonts } from "expo-font";


import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import "react-native-url-polyfill/auto";
const params = new URLSearchParams('?foo=bar&baz=qux');
params.set('foo', 'baz');
console.log(params.toString()); 

const Stack = createNativeStackNavigator();

export default function App() {


  const [fontsLoaded] = useFonts({
    DMBold: require("./assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("./assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("./assets/fonts/DMSans-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }



  return (
    
    <NavigationContainer>
      <StatusBar translucent={true} />
      <AuthProvider>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Welcome" component={Welcome}/>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Detailts" component={Detailts} />
      </Stack.Navigator>
      </AuthProvider>
    </NavigationContainer>

  );
}


