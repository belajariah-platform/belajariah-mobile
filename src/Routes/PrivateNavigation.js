import React from 'react';
import {YellowBox} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import BottomNavigator from './BottomNavigation';

YellowBox.ignoreWarnings([`Warning: Can't perform a React state`]);

function PrivateNavigation(props) {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="BottomNavigation" component={BottomNavigator} />
    </Stack.Navigator>
  );
}

export default PrivateNavigation;
