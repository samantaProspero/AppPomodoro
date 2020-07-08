import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Welcome from './pages/Welcome';
import Timer from './pages/Timer';

// import { Container } from './styles';

const Routes = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen name="Welcome" component={Welcome} />
      <AppStack.Screen name="Timer" component={Timer} />
    </AppStack.Navigator>
  );
}

export default Routes;