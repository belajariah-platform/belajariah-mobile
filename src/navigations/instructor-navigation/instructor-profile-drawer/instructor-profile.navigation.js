import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import CustomDrawer from './instructor-profile-drawer.navigation'
import {
  AboutUs,
  ContactUs,
  PrivacyPolice,
  TermCondition,
  InstructorProfile,
  InstructorProfileEdit,
} from '../../../containers'

const InstructorProfileNavigation = () => {
  const Drawer = createDrawerNavigator()

  return (
    <Drawer.Navigator
      initialRouteName='Profile'
      drawerPosition='right'
      drawerContent={(props) => <CustomDrawer {...props} />}
      backBehavior='initialRoute'>
      <Drawer.Screen name='Profile' component={InstructorProfile} />
      <Drawer.Screen name='InstructorProfileEdit' component={InstructorProfileEdit}/>
      <Drawer.Screen name='AboutUs' component={AboutUs} />
      <Drawer.Screen name='ContactUs' component={ContactUs} />
      <Drawer.Screen name='PrivacyPolicy' component={PrivacyPolice} />
      <Drawer.Screen name='TermsandConditions' component={TermCondition} />
    </Drawer.Navigator>
  )
}

export default InstructorProfileNavigation
