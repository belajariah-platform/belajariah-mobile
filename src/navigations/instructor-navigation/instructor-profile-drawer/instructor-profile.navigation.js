import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'

import { InstructorProfile, InstructorProfileEdit } from '../../../containers'
import CustomDrawer from './instructor-profile-drawer.navigation'

const InstructorProfileNavigation = () => {
  const Drawer = createDrawerNavigator()

  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator
        initialRouteName='Profile'
        drawerPosition='right'
        drawerContent={(props) => <CustomDrawer {...props} />}
        backBehavior='initialRoute'>
        <Drawer.Screen name='Profile' component={InstructorProfile} />
        <Drawer.Screen
          name='InstructorProfileEdit'
          component={InstructorProfileEdit}
        />

        {/*Need New Components*/}
        <Drawer.Screen name='Voice Notes' component={InstructorProfile} />
        <Drawer.Screen name='About' component={InstructorProfile} />
        <Drawer.Screen name='Contact Us' component={InstructorProfile} />
        <Drawer.Screen name='Help' component={InstructorProfile} />
        <Drawer.Screen name='Privacy Policy' component={InstructorProfile} />
        <Drawer.Screen
          name='Terms and Conditions'
          component={InstructorProfile}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default InstructorProfileNavigation
