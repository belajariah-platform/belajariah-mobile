import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import AdminMain from '../admin-main'
import { AdminProfileAll, AdminProfileEdit, AdminProfileInstructor } from '../../../containers'

const InstructorPrivateNavigation = () => {
  const Stack = createStackNavigator()
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name='Admin' component={AdminMain} />
      <Stack.Screen name='AdminProfileAll' component={AdminProfileAll} />
      <Stack.Screen name='AdminProfileEdit' component={AdminProfileEdit} />
      <Stack.Screen name='AdminProfileInstructor' component={AdminProfileInstructor} />
    </Stack.Navigator>
  )
}

export default InstructorPrivateNavigation