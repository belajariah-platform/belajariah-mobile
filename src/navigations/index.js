import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import PublicNavigation from './public.navigation'
import PrivateNavigation from './private-navigation'

const Render = () => {
  const {isLogin, token} = useSelector(state => state.userData);
  const dispatch = useDispatch();
  if (isLogin) {
    return <PrivateNavigation/>
  } else {
    return <PublicNavigation/>
  }
}

const RootNavigation = () => {
  const Stack = createStackNavigator();
  useEffect(() => {
    SplashScreen.hide();
  });
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="MainRoutes" component={Render} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default RootNavigation;
