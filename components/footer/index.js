import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../Home/HomeScreen';
import Control from '../Control/Control';
import Signin from '../Signin/Signin';
import { Ionicons } from '@expo/vector-icons'
import CustomTabBar from './CustomTabBar';

const Tab = createBottomTabNavigator();

const screenOptions = (route, color) => {
        let iconName;
      
        switch (route.name) {
          case 'Home':
            iconName = 'home';
            break;
          case 'Browse':
            iconName = 'list';
            break;
          case 'Library':
            iconName = 'person';
            break;
          default:
            break;
        }
      
        return <Ionicons name={iconName} color={color} size={24} />;
      };
      const TabNavigator = () => {
        return (
          <Tab.Navigator
            tabBarOptions={{
            activeTintColor: 'white',
            inactiveTintColor: '#d9d9d9',
            style: {
              borderTopColor: '#66666666',
              backgroundColor: 'transparent',
              elevation: 0,
            },
          }}
            screenOptions={({route}) => ({
              tabBarIcon: ({color}) => screenOptions(route, color),
            })}
            tabBar={(props) => <CustomTabBar {...props} />}
            >
            <Tab.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
            <Tab.Screen name="Browse" component={Control} />
            <Tab.Screen name="Library" component={Signin} />
          </Tab.Navigator>
        );
      };


export default TabNavigator;