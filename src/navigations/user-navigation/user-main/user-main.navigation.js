import React from 'react'
import { useSelector } from 'react-redux'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Color, Images } from '../../../assets'
import ProfileNavigation from '../user-profile'
import { Home, ClassUser, Transaction } from '../../../containers'

import { styles } from './user-main.style'

const UserMainNavigation = () => {
  const { isLogin } = useSelector((state) => state.UserReducer)
  const { Navigator, Screen } = createBottomTabNavigator()

  return (
    <Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName
          switch (route.name) {
          case 'Home':
            iconName = focused ? Images.BotHome : Images.BotHomeHint
            break
          case 'Kelas':
            iconName = focused ? Images.BotClass : Images.BotClassHint
            break
          case 'Pembayaran':
            iconName = focused ? Images.BotTransact : Images.BotTransactHint
            break
          case 'Profil':
            iconName = focused ? Images.BotProfile : Images.BotProfileHint
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
        name='Home'
        component={Home}
        options={{ headerShown: false }}
      />
      {isLogin && (
        <>
          <Screen
            name='Kelas'
            component={ClassUser}
          />
          <Screen
            name='Pembayaran'
            component={Transaction}
          />
          <Screen
            name='Profil'
            component={ProfileNavigation}
            options={{ tabBarVisible: false }}
          />
        </>
      )}
    </Navigator>
  )
}

export default UserMainNavigation
