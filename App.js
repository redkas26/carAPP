import React from 'react';
import { StatusBar, StyleSheet} from 'react-native';
import HomeScreen from './components/Home/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signin from './components/Signin/Signin';
import Control from './components/Control/Control';
import Papier from './components/Control-papier/Papier';
import Entretien from './components/PageEntretien/Entretien'
import Securité from './components/PageSecurité/Securité'
import Verification from './components/PageVerification/Verification'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer styles={styles.container} >
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}} />
        <Stack.Screen name="Signin" component={Signin} options={{headerShown:false}} />
        <Stack.Screen name="Control" component={Control} options={{headerShown:false}}/>
        <Stack.Screen name="Papier" component={Papier} options={{headerShown:false}}/>
        <Stack.Screen name="Entretien" component={Entretien} options={{headerShown:false}}/>
        <Stack.Screen name="Securité" component={Securité} options={{headerShown:false}}/>
        <Stack.Screen name="Verification" component={Verification} options={{headerShown:false}}/>
  </Stack.Navigator>
    </NavigationContainer> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F4',
  },
});
