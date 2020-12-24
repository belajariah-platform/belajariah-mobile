import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import {
  Login,
  Register,
  Introduction,
  ChangePassword
} from '../../containers'

const PublicNavigation = () => {
  const Stack = createStackNavigator()
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Register' component={Register} />
      <Stack.Screen name='Introduction' component={Introduction} />
      <Stack.Screen name='ChangePassword' component={ChangePassword} />
    </Stack.Navigator>
  )
}

export default PublicNavigation
