import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import {
  AdminUser,
  AdminDashboard,
} from '../../../containers'

const InstructorPrivateNavigation = () => {
  const Stack = createStackNavigator()
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name='InstructorDashboard' component={AdminDashboard} />
      <Stack.Screen name='InstructorMain' component={AdminUser} />
    </Stack.Navigator>
  )
}

export default InstructorPrivateNavigation