import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Color, Images } from '../../../assets'
import {
  InstructorTask,
  InstructorProfile,
  InstructorDashboard,
   } from '../../../containers'

import { styles } from './instructor-main.style'

const InstructorMainNavigation = () => {
  const { Navigator, Screen } = createBottomTabNavigator()

  return (
    <Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName
          switch (route.name) {
            case 'Dashboard':
              iconName = focused ? Images.BotHome : Images.BotHomeHint
              break
            case 'Task':
              iconName = focused ? Images.BotClass : Images.BotClassHint
              break
            case 'Profile':
              iconName = focused ? Images.BotTransact : Images.BotTransactHint
              break
          }
          return <iconName.default />
        },
      })}
      tabBarOptions={{
        adaptive: true,
        showLabel: true,
        allowFontScaling: true,
        style: styles.tabBarStyle,
        labelStyle: styles.labelStyle,
        activeTintColor: Color.bgColor,
        inactiveTintColor: Color.textLightHint,
      }}>
      <Screen name='Dashboard' component={InstructorDashboard} options={{ headerShown: false }} />
      <Screen name='Task' component={InstructorTask} />
      <Screen name='Profile' component={InstructorProfile} />
    </Navigator>
  )
}

export default InstructorMainNavigation
