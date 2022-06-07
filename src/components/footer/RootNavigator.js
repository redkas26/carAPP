import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import TabNavigator from './index';
import Signin from '../Signin/Signin';
import HomeScreen from '../Home/HomeScreen';

const RootNavigator = () => {
  return (

    <NavigationContainer >
        
      <TabNavigator />
        
        
    </NavigationContainer>
  );
};

export default RootNavigator;