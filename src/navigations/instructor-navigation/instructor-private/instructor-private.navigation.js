import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import InstructorMain from '../instructor-main'
import {
  InstructorTask,
  InstructorProfile,
  InstructorJob,
  InstructorProfileEdit,
} from '../../../containers'

const InstructorPrivateNavigation = () => {
  const Stack = createStackNavigator()
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name='InstructorMain' component={InstructorMain} />
      <Stack.Screen name='InstructorTask' component={InstructorTask} />
      <Stack.Screen name='InstructorProfile' component={InstructorProfile} />
      <Stack.Screen
        name='InstructorProfileEdit'
        component={InstructorProfileEdit}
      />
      <Stack.Screen name='InstructorJob' component={InstructorJob} />
    </Stack.Navigator>
  )
}

export default InstructorPrivateNavigation
