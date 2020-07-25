import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import PrivateNavigator from './PrivateNavigation';
import PublicNavigator from './PublicNavigation';
import SplashScreen from 'react-native-splash-screen';
import {useSelector, useDispatch} from 'react-redux';

function MainRoutes(props) {
  const {isLogin, token} = useSelector(state => state.userData);
  const dispatch = useDispatch();
  if (isLogin) {
    return <PrivateNavigator />;
  } else {
    return <PublicNavigator />;
  }
}

function MainNavigation(props) {
  const Stack = createStackNavigator();
  React.useEffect(() => {
    SplashScreen.hide();
  });
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="MainRoutes" component={MainRoutes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default MainNavigation;
