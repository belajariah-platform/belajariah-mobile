import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import {
  Alquran,
  HomeSearch,
  ClassDetail,
  ProfileEdit,
  AlquranDetail,
  ClassLearning,
  PromotionDetail,
  TransactionMethod,
} from '../../../containers'
import UserMain from '../user-main'

const UserPrivateNavigation = () => {
  const Stack = createStackNavigator()

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name='UserMain' component={UserMain} />
      <Stack.Screen name='Alquran' component={Alquran} />
      <Stack.Screen name='HomeSearch' component={HomeSearch} />
      <Stack.Screen name='ClassDetail' component={ClassDetail} />
      <Stack.Screen name='ProfileEdit' component={ProfileEdit} />
      <Stack.Screen name='AlquranDetail' component={AlquranDetail} />
      <Stack.Screen name='PromotionDetail' component={PromotionDetail} />
      <Stack.Screen name='ClassLearning' component={ClassLearning} />
      <Stack.Screen name='TransactionMethod' component={TransactionMethod} />
    </Stack.Navigator>
  )
}

export default UserPrivateNavigation