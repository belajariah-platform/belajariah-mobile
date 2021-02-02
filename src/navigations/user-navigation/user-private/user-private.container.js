import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import {
  Alquran,
  ClassExam,
  HomeSearch,
  UserVerify,
  ClassDetail,
  ProfileEdit,
  AlquranDetail,
  ClassLearning,
  ConfirmPassword,
  PromotionDetail,
  InspiratifStory,
  TransactionInfo,
  TransactionUpload,
  TransactionMethod,
  TransactionConfirm,
  InspiratifStoryDetail,
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
      <Stack.Screen name='ClassExam' component={ClassExam} />
      <Stack.Screen name='UserVerify' component={UserVerify} />
      <Stack.Screen name='ClassDetail' component={ClassDetail} />
      <Stack.Screen name='ProfileEdit' component={ProfileEdit} />
      <Stack.Screen name='AlquranDetail' component={AlquranDetail} />
      <Stack.Screen name='PromotionDetail' component={PromotionDetail} />
      <Stack.Screen name='ClassLearning' component={ClassLearning} />
      <Stack.Screen name='ConfirmPassword' component={ConfirmPassword} />
      <Stack.Screen name='TransactionMethod' component={TransactionMethod} />
      <Stack.Screen name='TransactionUpload' component={TransactionUpload} />
      <Stack.Screen name='TransactionInfo' component={TransactionInfo} />
      <Stack.Screen name='TransactionConfirm' component={TransactionConfirm} />
      <Stack.Screen name='InspiratifStory' component={InspiratifStory} />
      <Stack.Screen name='InspiratifStoryDetail' component={InspiratifStoryDetail} />
    </Stack.Navigator>
  )
}

export default UserPrivateNavigation