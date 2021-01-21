import React from 'react'
import { Profile, ProfileEdit } from '../../../containers'
import CustomDrawer from './user-profile-drawer.navigation'
import { createDrawerNavigator } from '@react-navigation/drawer'

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

      {/*Need New Components*/}
      <Drawer.Screen name='Voice Notes' component={Profile} />
      <Drawer.Screen name='About' component={Profile} />
      <Drawer.Screen name='Contact Us' component={Profile} />
      <Drawer.Screen name='Help' component={Profile} />
      <Drawer.Screen name='Privacy Policy' component={Profile} />
      <Drawer.Screen name='Terms and Conditions' component={Profile} />
    </Drawer.Navigator>
  )
}

export default ProfileNavigation
