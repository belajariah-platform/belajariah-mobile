import React from 'react'
import AdminDrawer from './admin-main-drawer.navigation'
import { createDrawerNavigator } from '@react-navigation/drawer'

import {
  AdminUser,
  AdminDashboard,
  AdminInstructor,
} from '../../../containers'

const ProfileNavigation = () => {
  const Drawer = createDrawerNavigator()

  return (
    <Drawer.Navigator
      drawerPosition='left'
      drawerType='permanent'
      initialRouteName='Admin'
      drawerStyle={{ width : 60 }}
      drawerContent={(props) => <AdminDrawer {...props} />}
      backBehavior='initialRoute'>
      <Drawer.Screen name='AdminDashboard' component={AdminDashboard} />
      <Drawer.Screen name='AdminUser' component={AdminUser} />
      <Drawer.Screen name='AdminInstructor' component={AdminInstructor} />
    </Drawer.Navigator>
  )
}

export default ProfileNavigation
