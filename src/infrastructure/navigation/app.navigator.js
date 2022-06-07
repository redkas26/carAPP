import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {Ionicons} from '@expo/vector-icons'

import {ControlScreen} from '../../features/control/screens/control.screen';
import {PapierScreen} from '../../features/papier/screens/papier.screen';
import {EntretienScreen} from '../../features/entretien/screens/entretien.screen';
import {SecurityScreen} from '../../features/security/screens/security.screen';
import {VerificationScreen} from '../../features/verification/screens/verification.screen';

const TAB_ICONS = {
  Control: 'md-restaurant',
  Papier: 'md-map',
  Entretien: 'md-settings',
  Security: 'md-map',
  Verification: 'md-settings'
}

const createScreenOptions = ({route}) => {
  const iconName = TAB_ICONS[route.name];
  return {
    tabBarIcon: ({focused, size, color}) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    headerShown: false,
    tabBarActiveTintColor: "tomato",
    tabBarInactiveTintColor: "gray",
  }
}

const Tab = createBottomTabNavigator();

export const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={createScreenOptions}
    >
      <Tab.Screen name="Control" component={ControlScreen}/>
      <Tab.Screen name="Papier" component={PapierScreen} />
      <Tab.Screen name="Entretien" component={EntretienScreen} />
      <Tab.Screen name="Security" component={SecurityScreen}/>
      <Tab.Screen name="Verification" component={VerificationScreen} />
    </Tab.Navigator>     
  )
}
