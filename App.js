import { StatusBar } from 'expo-status-bar';
import { GoogleOAuthProvider } from '@react-oauth/google';

import { Welcome ,Home} from './screens';
import { useFonts } from "expo-font";


import { NavigationContainer, useNavigation} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
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
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Welcome" component={Welcome}/>
        <Stack.Screen name="Home" component={Home}/>
      </Stack.Navigator>
    </NavigationContainer>


    
    /*IOS
705366730311-ot2guoro995jl29siqgq87l1l8b7v01u.apps.googleusercontent.com*/

  );
}


