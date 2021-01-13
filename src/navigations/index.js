import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import SplashScreen from 'react-native-splash-screen'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import UserNavigation from './user-navigation'
import AdminNavigation from './admin-navigation'
import PublicNavigation from './public-navigation'
import InstructorNavigation from './instructor-navigation'

const Render = () => {
  const { isLogin, userInfo } = useSelector(state => state.UserReducer)
  console.log(userInfo)
  if (isLogin) {
    return  <InstructorNavigation/>
  } else {
    return <PublicNavigation/>
  }
}

const RootNavigation = () => {
  const Stack = createStackNavigator()
  useEffect(() => {
    SplashScreen.hide()
  })
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name='MainRoutes' component={Render} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default RootNavigation
