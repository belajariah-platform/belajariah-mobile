import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import SplashScreen from 'react-native-splash-screen'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import UserNavigation from './user-navigation'
import AdminNavigation from './admin-navigation'
import PublicNavigation from './public-navigation'
import InstructorNavigation from './instructor-navigation'
import { flatMap } from 'lodash'

const Render = () => {
  const { isLogin, userInfo } = useSelector(state => state.UserReducer)
  if (isLogin) {
    console.log(userInfo.Role, isLogin)
    switch (userInfo.Role) {
    case 'Admin':
      return  <AdminNavigation/>
    case 'User':
      return  <UserNavigation/>
    case 'Mentor':
      return  <InstructorNavigation/>
    default :
      return <PublicNavigation/>
    }
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
    <NavigationContainer linking={linking}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name='MainRoutes' component={Render} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const config = {
  screens: {
    MainRoutes : {
      screens: {
        InspiratifStoryDetail: {
          path : 'storydetail/:storyIndex',
          parse : {
            storyIndex : (storyIndex) => `${storyIndex}`
          }
        },
        Register: 'regis',
        UserVerify: 'verif',
        PromotionDetail: {
          path : 'promo/:promo_code',
          parse : {
            promo_code : (promo_code) => `${promo_code}`
          }
        },
        TransactionUpload : 'upload',
      }
    }
  }
}

const linking = {
  prefixes: ["belajariah://app"],
  config,
}

export default RootNavigation
