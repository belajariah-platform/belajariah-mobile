import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import {
  Login,
  Alquran,
  Register,
  CheckEmail,
  UserVerify,
  Introduction,
  ConfirmPassword,
  UserVerifyPassword,
} from '../../containers'

const PublicNavigation = () => {
  const Stack = createStackNavigator()
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Alquran' component={Alquran} />
      <Stack.Screen name='Register' component={Register} />
      <Stack.Screen name='UserVerify' component={UserVerify}/>
      <Stack.Screen name='CheckEmail' component={CheckEmail} />
      <Stack.Screen name='Introduction' component={Introduction} />
      <Stack.Screen name='ConfirmPassword' component={ConfirmPassword} />
      <Stack.Screen name='UserVerifyPassword' component={UserVerifyPassword} />
    </Stack.Navigator>
  )
}

export default PublicNavigation
