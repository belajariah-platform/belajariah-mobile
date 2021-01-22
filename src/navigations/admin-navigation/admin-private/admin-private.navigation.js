import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import AdminMain from '../admin-main'

const InstructorPrivateNavigation = () => {
  const Stack = createStackNavigator()
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name='Admin' component={AdminMain} />
    </Stack.Navigator>
  )
}

export default InstructorPrivateNavigation