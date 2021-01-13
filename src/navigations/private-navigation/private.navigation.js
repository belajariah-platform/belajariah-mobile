import React from 'react';
import Main from '../main-navigation';
import {createStackNavigator} from '@react-navigation/stack';
import {ProfilEdit, ClassLearning} from '../../containers'

const PrivateNavigation = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="ProfileEdit" component={ProfilEdit} />
      <Stack.Screen name="ClassLearning" component={ClassLearning} />
    </Stack.Navigator>
  );
}

export default PrivateNavigation;
