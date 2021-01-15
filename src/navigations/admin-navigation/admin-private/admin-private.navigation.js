import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { AdminUser } from '../../../containers'

const InstructorPrivateNavigation = () => {
  const Stack = createStackNavigator()
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name='InstructorMain' component={AdminUser} />
    </Stack.Navigator>
  )
}

export default InstructorPrivateNavigation