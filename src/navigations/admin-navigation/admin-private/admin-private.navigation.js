import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import {
  AdminUser,
  AdminDashboard,
  AdminInstructor,
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
      <Stack.Screen name='AdminInstructor' component={AdminInstructor} />
    </Stack.Navigator>
  )
}

export default InstructorPrivateNavigation