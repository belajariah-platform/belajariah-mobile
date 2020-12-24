import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Color } from '../../assets'

import {
  Home,
  Profile,
  Timeline,
} from '../../containers'

import { styles } from './main.style'

const Main = () => {
  const { Navigator, Screen } = createBottomTabNavigator()
  return (
    <Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName
          switch (route.name) {
          case 'Home':
            iconName = 'book'
            break
          case 'Timeline':
            iconName = 'clock'
            break
          case 'Other':
            iconName = 'ellipsis-h'
            break
          }
          return <Icon name={iconName} size={21} color={color} />
        },
      })}
      tabBarOptions={{
        adaptive: true,
        showLabel: false,
        allowFontScaling: true,
        labelStyle: styles.labelStyle,
        style: styles.tabBarContainer,
        activeTintColor: Color.bgColor,
        inactiveTintColor: Color.textLightHint,
      }}>
      <Screen name='Home' component={Home} options={{ headerShown: false }} />
      <Screen name='Timeline' component={Timeline} />
      <Screen name='Other' component={Profile} />
    </Navigator>
  )
}

export default Main