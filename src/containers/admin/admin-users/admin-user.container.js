import React from 'react'
import {  useFormik } from 'formik'
import { View, TouchableOpacity } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import AdminUserAll from './admin-user-all.container'
import AdminUserAccept from './admin-user-accept.container'
import AdminUserDecline from './admin-user-decline.container'

import { Searchbox } from '../../../components'
import { Images, Color } from '../../../assets'

import { styles } from './admin-user.style'

const AdminUser = () => {
  const Tab = createMaterialTopTabNavigator()
  const Search = useFormik({ initialValues: { search: '' } })

  return (
    <View style={styles.containerMain}>
      <View style={styles.containerHeader}>
        <View style={styles.flexOne}>
          <Searchbox
            size='medium'
            name='search'
            form={Search}
            style={styles.searchbox}
            placeholder='Temukan user'
          />
        </View>
        <TouchableOpacity
          style={styles.iconFilter}>
          <Images.Filter.default
            width={20}
            height={20}
          />
        </TouchableOpacity>
      </View>

      <Tab.Navigator
        tabBarOptions={{
          style:styles.bgColor,
          activeTintColor: Color.white,
          labelStyle: styles.labelStyle,
          inactiveTintColor: Color.white,
          indicatorStyle: styles.indicatorStyle,
        }}>
        <Tab.Screen
          name='AdminUserAll'
          options={{ title: 'Semua' }}>
          {() => <AdminUserAll search={Search.values['search']}/>}
        </Tab.Screen>

        <Tab.Screen
          name='AdminUserAccept'
          options={{ title: 'Diterima' }}>
          {() => <AdminUserAccept search={Search.values['search']}/>}
        </Tab.Screen>

        <Tab.Screen
          name='AdminUserDecline'
          options={{ title: 'Ditolak' }}>
          {() => <AdminUserDecline search={Search.values['search']}/>}
        </Tab.Screen>
      </Tab.Navigator>
    </View>
  )
}

export default AdminUser