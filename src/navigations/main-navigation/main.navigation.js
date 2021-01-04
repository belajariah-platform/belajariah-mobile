import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'


import {
  Home,
  ClassUser,
  Transaction,
} from '../../containers'
import ProfileNavigation from '../profile-navigation'
import { Color, Images } from '../../assets'

import { styles } from './main.style'

const Main = () => {
  const { Navigator, Screen } = createBottomTabNavigator()
  return (
    <Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName
          switch (route.name) {
          case 'Home':
            iconName = focused ? Images.BotHome :
              Images.BotHomeHint
            break
          case 'Class':
            iconName = focused ? Images.BotClass :
              Images.BotClassHint
            break
          case 'Transaction':
            iconName = focused ? Images.BotTransact :
              Images.BotTransactHint
            break
          case 'Profile':
            iconName = focused ? Images.BotProfile :
              Images.BotProfileHint
            break
          }
          return <iconName.default/>
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
      <Screen name='Home' component={Home} options={{ headerShown: false }} />
      <Screen name='Class' component={ClassUser} />
      <Screen name='Transaction' component={Transaction} />
      <Screen name='Profile' component={ProfileNavigation} />
    </Navigator>
  )
}

export default Main
