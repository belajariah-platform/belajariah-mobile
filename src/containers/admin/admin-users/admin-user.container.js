import React, { useState } from 'react'
import { View, TouchableOpacity } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import AdminUserAll from './admin-user-all.container'
import AdminUserAccept from './admin-user-accept.container'
import AdminUserDecline from './admin-user-decline.container'

import { Searchbox, ModalFilterAdminPageUser } from '../../../components'
import { Images, Color } from '../../../assets'

import { styles } from './admin-user.style'

const AdminUser = () => {
  const Tab = createMaterialTopTabNavigator()
  const [search, setSearch] = useState('')
  const [modalVisible, setModalVisible] = useState(false)
  const toggleModal = () => setModalVisible(!modalVisible)
  return (
    <View style={styles.containerMain}>
      <View style={styles.containerHeader}>
        <View style={styles.flexOne}>
          <Searchbox
            size='medium'
            style={styles.searchbox}
            placeholder='Temukan user'
            onChangeText={(e) => setSearch(e)}
          />
        </View>
        <TouchableOpacity
          onPress = {toggleModal}
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
          {() => <AdminUserAll search={search}/>}
        </Tab.Screen>

        <Tab.Screen
          name='AdminUserAccept'
          options={{ title: 'Diterima' }}>
          {() => <AdminUserAccept search={search}/>}
        </Tab.Screen>

        <Tab.Screen
          name='AdminUserDecline'
          options={{ title: 'Ditolak' }}>
          {() => <AdminUserDecline search={search}/>}
        </Tab.Screen>
      </Tab.Navigator>
      <ModalFilterAdminPageUser
        isVisible={modalVisible}
        backdropPress={() => toggleModal()}
        backButtonPress={() => toggleModal()}
      />
    </View>
  )
}

export default AdminUser