import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import {
  Login,
  Alquran,
  Register,
  Introduction,
  AlquranDetail,
  ChangePassword,
  PromotionDetail,
} from '../../containers'
import Main from '../main-navigation'

const PublicNavigation = () => {
  const Stack = createStackNavigator()
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name='Main' component={Main} />
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Alquran' component={Alquran} />
      <Stack.Screen name='Register' component={Register} />
      <Stack.Screen name='Introduction' component={Introduction} />
      <Stack.Screen name='AlquranDetail' component={AlquranDetail} />
      <Stack.Screen name='ChangePassword' component={ChangePassword} />
      <Stack.Screen name='PromotionDetail' component={PromotionDetail} />
    </Stack.Navigator>
  )
}

export default PublicNavigation
