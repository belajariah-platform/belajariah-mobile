import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Color } from '../../assets'

import { Home, ClassUser, Transaction } from '../../containers'
import ProfileNavigation from '../profile-navigation'

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
              iconName = 'home'
              break
            case 'Class':
              iconName = 'book'
              break
            case 'Transaction':
              iconName = 'handshake'
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
        style: styles.tabBarStyle,
        activeTintColor: Color.bgColor,
        inactiveTintColor: Color.textLightHint,
      }}>
      <Screen name='Home' component={Home} options={{ headerShown: false }} />
      <Screen name='Class' component={ClassUser} />
      <Screen name='Transaction' component={Transaction} />
      <Screen name='Other' component={ProfileNavigation} />
    </Navigator>
  )
}

export default Main
