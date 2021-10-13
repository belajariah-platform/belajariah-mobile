import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import {
  Alquran,
  ClassExam,
  HomeSearch,
  UserVerify,
  ClassTrial,
  ClassDetail,
  ProfileEdit,
  Consultation,
  ClassMeeting,
  AlquranDetail,
  ClassLearning,
  ClassListMentor,
  ConfirmPassword,
  PromotionDetail,
  ClassPreference,
  ClassExamDirect, 
  ClassUserDirect,
  InspiratifStory,
  TransactionInfo,
  UserNotification,
  ClassTrialDirect, 
  TransactionUpload,
  ClassReviewMentor,
  TransactionMethod,
  ClassDetailDirect, 
  UserVerifyPassword,
  ConsultationDetail,
  TransactionConfirm,
  ClassLearningDirect, 
  InspiratifStoryDetail,
  ClassInstructorProfile,
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
      <Stack.Screen name='ClassExam' component={ClassExam} />
      <Stack.Screen name='ClassTrial' component={ClassTrial} />
      <Stack.Screen name='HomeSearch' component={HomeSearch} />
      <Stack.Screen name='UserVerify' component={UserVerify} />
      <Stack.Screen name='ClassMeeting' component={ClassMeeting} />
      <Stack.Screen name='ClassDetail' component={ClassDetail} />
      <Stack.Screen name='ProfileEdit' component={ProfileEdit} />
      <Stack.Screen name='Consultation' component={Consultation} />
      <Stack.Screen name='ClassLearning' component={ClassLearning} />
      <Stack.Screen name='ClassPreference' component={ClassPreference} />
      <Stack.Screen name='AlquranDetail' component={AlquranDetail} />
      <Stack.Screen name='ClassUserDirect' component={ClassUserDirect} />
      <Stack.Screen name='PromotionDetail' component={PromotionDetail} />
      <Stack.Screen name='ClassExamDirect' component={ClassExamDirect} />
      <Stack.Screen name='TransactionInfo' component={TransactionInfo} />
      <Stack.Screen name='InspiratifStory' component={InspiratifStory} />
      <Stack.Screen name='ClassListMentor' component={ClassListMentor} />
      <Stack.Screen name='ConfirmPassword' component={ConfirmPassword} />
      <Stack.Screen name='UserNotification' component={UserNotification} />
      <Stack.Screen name='ClassTrialDirect' component={ClassTrialDirect} />
      <Stack.Screen name='ClassReviewMentor' component={ClassReviewMentor} />
      <Stack.Screen name='ClassDetailDirect' component={ClassDetailDirect} />
      <Stack.Screen name='TransactionMethod' component={TransactionMethod} />
      <Stack.Screen name='TransactionUpload' component={TransactionUpload} />
      <Stack.Screen name='TransactionConfirm' component={TransactionConfirm} />
      <Stack.Screen name='ConsultationDetail' component={ConsultationDetail} />
      <Stack.Screen name='UserVerifyPassword' component={UserVerifyPassword} />
      <Stack.Screen name='ClassLearningDirect, ' component={ClassLearningDirect} />
      <Stack.Screen name='ClassInstructorProfile' component={ClassInstructorProfile} />
      <Stack.Screen name='InspiratifStoryDetail' component={InspiratifStoryDetail} />
    </Stack.Navigator>
  )
}

export default UserPrivateNavigation