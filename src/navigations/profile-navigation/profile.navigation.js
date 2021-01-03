import React from 'react'
import Profile from '../../containers/profile'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'

const ProfileNavigation = () => {
  const Drawer = createDrawerNavigator(
    {
      Profile: {
        screen: Profile,
      },
    },
    {
      initialRouteName: 'Profile',
    },
  )

  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator initialRouteName='Profile' drawerPosition='right'>
        <Drawer.Screen name='Profile' component={Profile} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default ProfileNavigation
