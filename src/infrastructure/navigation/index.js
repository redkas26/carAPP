import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {AppNavigator} from './app.navigator';
import {AccountNavigator} from './account.navigator';

export const Navigation = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return (
    <NavigationContainer>
      <AccountNavigator />
    </NavigationContainer>
    )
}


