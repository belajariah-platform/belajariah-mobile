import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import {
  Alquran,
  HomeSearch,
  ClassDetail,
  ProfileEdit,
  AlquranDetail,
  PromotionDetail,
  TransactionMethod,
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
      <Stack.Screen name='ClassDetail' component={ClassDetail} />
      <Stack.Screen name='ProfileEdit' component={ProfileEdit} />
      <Stack.Screen name='AlquranDetail' component={AlquranDetail} />
      <Stack.Screen name='PromotionDetail' component={PromotionDetail} />
      <Stack.Screen name='TransactionMethod' component={TransactionMethod} />
    </Stack.Navigator>
  )
}

export default PrivateNavigation