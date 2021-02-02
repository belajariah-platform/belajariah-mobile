import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import {
  Login,
  Alquran,
  Register,
  UserVerify,
  ClassDetail,
  Introduction,
  AlquranDetail,
  ChangePassword,
  ConfirmPassword,
  PromotionDetail,
  InspiratifStory,
  InspiratifStoryDetail,
} from '../../containers'
import Main from '..//user-navigation/user-main'

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
      <Stack.Screen name='UserVerify' component={UserVerify} />
      <Stack.Screen name='ClassDetail' component={ClassDetail} />
      <Stack.Screen name='Introduction' component={Introduction} />
      <Stack.Screen name='AlquranDetail' component={AlquranDetail} />
      <Stack.Screen name='ChangePassword' component={ChangePassword} />
      <Stack.Screen name='PromotionDetail' component={PromotionDetail} />
      <Stack.Screen name='ConfirmPassword' component={ConfirmPassword} />
      <Stack.Screen name='InspiratifStory' component={InspiratifStory} />
      <Stack.Screen name='InspiratifStoryDetail' component={InspiratifStoryDetail} />
    </Stack.Navigator>
  )
}

export default PublicNavigation
