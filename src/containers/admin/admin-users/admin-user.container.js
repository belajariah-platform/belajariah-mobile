import * as React from 'react'
import {useState} from 'react'
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
  const [modalVisible, setModalVisible] = useState(false)
  const toggleModal = () => setModalVisible(!modalVisible)

  const ViewHeader = () => {
    return(
      <View style={styles.containerHeader}>
        <View
          style={{ flex : 1 }}>
          <Searchbox
            size='medium'
            placeholder={'Temukan user'}
            onFocus={() => console.log('hello')}
            style={styles.searchbox}
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
    )
  }

  return (
    <>
    <ModalFilterAdminPageUser
        isVisible={modalVisible}
        backdropPress={() => toggleModal()}
      />
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
          options={{ title: 'Semua' }}
        />
        <Tab.Screen
          name='AdminUserAccept'
          component={AdminUserAccept}
          options={{ title: 'Diterima' }}
        />
        <Tab.Screen
          name='AdminUserDecline'
          component={AdminUserDecline}
          options={{ title: 'Ditolak' }}
        />
      </Tab.Navigator>
    </View>
    </>
  )
}

export default AdminUser