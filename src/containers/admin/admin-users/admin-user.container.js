import * as React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import AdminUserAll from './admin-user-all.container'
import AdminUserAccept from './admin-user-accept.container'
import AdminUserDecline from './admin-user-decline.container'

import { Searchbox } from '../../../components'
import { Images, Color } from '../../../assets'
import { styles } from './admin-user.style'

const AdminUser = () => {
  const navigation = useNavigation()
  const Tab = createMaterialTopTabNavigator()

  const ViewHeader = () => {
    return(
      <View style={styles.containerHeader}>
        <View
          style={{ flex : 1 }}>
          <Searchbox
            size='medium'
            placeholder={'Temukan instruktur'}
            onFocus={() => console.log('hello')}
            style={styles.searchbox}
          />
        </View>
        <TouchableOpacity
          style={styles.iconFilter}
          onPress={()=> navigation.navigate('AdminInstructor')}>
          <Images.Filter.default
            width={20}
            height={20}
          />
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <View style={styles.containerMain}>
      <ViewHeader />
      <Tab.Navigator
        tabBarOptions={{
          style:{
            backgroundColor: 'transparent',
          },
          inactiveTintColor: Color.white,
          labelStyle: styles.labelStyle,
          activeTintColor: Color.white,
          indicatorStyle: styles.indicatorStyle,
        }}>
        <Tab.Screen
          name='AdminUserAll'
          component={AdminUserAll}
          options={{ title: 'All User' }}
        />
        <Tab.Screen
          name='AdminUserAccept'
          component={AdminUserAccept}
          options={{ title: 'Accept' }}
        />
        <Tab.Screen
          name='AdminUserDecline'
          component={AdminUserDecline}
          options={{ title: 'Decline' }}
        />
      </Tab.Navigator>
    </View>
  )
}

export default AdminUser