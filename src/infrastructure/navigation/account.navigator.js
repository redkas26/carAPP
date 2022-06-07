import React from "react";
import { createNativeStackNavigator} from '@react-navigation/native-stack'

import {HomeScreen} from '../../features/home/screens/home.screen';
import {RegisterScreen} from '../../features/auth/screens/register.screen';
import {AppNavigator} from './app.navigator';

const Stack = createNativeStackNavigator();

export const AccountNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ 
      headerShown: false,
      animation: "slide_from_right"
    }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
      />
      <Stack.Screen
        name="Main"
        component={AppNavigator}
      />
    </Stack.Navigator>
  );
};