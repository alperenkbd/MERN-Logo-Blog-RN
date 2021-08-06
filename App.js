
import React from 'react';
import 'react-native-gesture-handler';

import LogoLogo from './Screens/LogoLogo';
import MainPage from './Screens/MainPage'

import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>

      <Stack.Screen name="splash" component={LogoLogo} />
      <Stack.Screen name="main" component={MainPage} />
      
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

{/*
function sayfa1({navigation}){
    return(
      <View><Text>Alperen</Text>
      <Button
        title="İkinci Sayfaya Git."
        onPress={() => navigation.navigate('sayfa2')}
      /></View>
    );
} 

 function sayfa2(){
  return(
    <View><Text>Kabadayi</Text>
     </View>
  );
} 
*/}
