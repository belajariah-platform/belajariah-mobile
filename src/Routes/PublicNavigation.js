import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../Screen/Auth/Login';
import Register from '../Screen/Auth/Register';
import Swiper from '../Screen/Auth/Swiper';
import ChangePassword from '../Screen/Auth/ChangePassword';
import ConfirmPassword from '../Screen/Auth/ConfirmPassword';

function PublicNavigation(props) {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Swiper" component={Swiper} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="ConfirmPassword" component={ConfirmPassword} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
    </Stack.Navigator>
  );
}

export default PublicNavigation;
