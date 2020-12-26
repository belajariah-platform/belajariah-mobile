import React from 'react'
import Main from '../main-navigation'
import { createStackNavigator } from '@react-navigation/stack'


const PrivateNavigation = () => {
  const Stack = createStackNavigator()

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name='Main' component={Main} />
    </Stack.Navigator>
  )
}

export default PrivateNavigation
