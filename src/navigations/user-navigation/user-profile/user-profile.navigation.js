import React from 'react'
import CustomDrawer from './user-profile-drawer.navigation'
import { createDrawerNavigator } from '@react-navigation/drawer'

import {
  // Helps,
  AboutUs,
  Profile,
  ContactUs,
  ProfileEdit,
  Consultation,
  PrivacyPolice,
  TermCondition,
} from '../../../containers'

const ProfileNavigation = () => {
  const Drawer = createDrawerNavigator()

  return (
    <Drawer.Navigator
      initialRouteName='Profile'
      drawerPosition='right'
      drawerContent={(props) => <CustomDrawer {...props} />}
      backBehavior='initialRoute'>
      <Drawer.Screen name='Profile' component={Profile} />
      <Drawer.Screen name='Edit Profile' component={ProfileEdit} />
      <Drawer.Screen name='Consultation' component={Consultation} />
      <Drawer.Screen name='AboutUs' component={AboutUs} />
      <Drawer.Screen name='ContactUs' component={ContactUs} />
      {/* <Drawer.Screen name='Help' component={Helps} /> */}
      <Drawer.Screen name='PrivacyPolicy' component={PrivacyPolice} />
      <Drawer.Screen name='TermsandConditions' component={TermCondition} />
    </Drawer.Navigator>
  )
}

export default ProfileNavigation
