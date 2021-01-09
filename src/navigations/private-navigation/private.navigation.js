import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import {
  Alquran,
  HomeSearch,
  ProfileEdit,
  AlquranDetail,
  PromotionDetail,
} from '../../containers'
import Main from '../main-navigation'

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
      <Stack.Screen name='ProfileEdit' component={ProfileEdit} />
      <Stack.Screen name='AlquranDetail' component={AlquranDetail} />
      <Stack.Screen name='PromotionDetail' component={PromotionDetail} />
    </Stack.Navigator>
  )
}

export default PrivateNavigation