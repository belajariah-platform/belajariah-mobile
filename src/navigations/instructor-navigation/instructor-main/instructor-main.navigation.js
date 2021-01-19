import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Color, Images } from '../../../assets'
import { InstructorTask, InstructorDashboard } from '../../../containers'
import InstructorProfileNavigation from '../instructor-profile-drawer'

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
              iconName = focused
                ? Images.IconInstructorHomePurple
                : Images.IconInstructorHome
              break
            case 'Task':
              iconName = focused
                ? Images.IconInstructorMyTaskPurple
                : Images.IconInstructorMyTask
              break
            case 'Profile':
              iconName = focused
                ? Images.IconInstructorProfilePurple
                : Images.IconInstructorProfile
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
      <Screen
        name='Dashboard'
        component={InstructorDashboard}
        options={{ headerShown: false }}
      />
      <Screen name='Task' component={InstructorTask} />
      <Screen
        name='Profile'
        component={InstructorProfileNavigation}
        options={{ tabBarVisible: false }}
      />
    </Navigator>
  )
}

export default InstructorMainNavigation
