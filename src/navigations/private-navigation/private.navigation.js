import React from 'react'
import Main from '../main-navigation'
import { createStackNavigator } from '@react-navigation/stack'

import {
  Alquran,
  HomeSearch,
  PromoDetail,
  ProfileEdit,
} from '../../containers'


const PrivateNavigation = () => {
  const Stack = createStackNavigator()

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name='Main' component={Main} />
      <Stack.Screen name='Alquran' component={Alquran} />
      <Stack.Screen name='HomeSearch' component={HomeSearch} />
      <Stack.Screen name='PromoDetail' component={PromoDetail} />
      <Stack.Screen name='ProfileEdit' component={ProfileEdit} />
    </Stack.Navigator>
  )
}

export default PrivateNavigation
