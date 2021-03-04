import * as React from 'react'
import { useState } from 'react'
import { View, TouchableOpacity } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import AdminTransactionAll from './admin-transaction-all.container'
import AdminTransactionAccept from './admin-transaction-accept.container'
import AdminTransactionDecline from './admin-transaction-decline.container'

import { Images, Color } from '../../../assets'
import { Searchbox, ModalFilterAdminPageUser } from '../../../components'

import { styles } from './admin-transaction.style'

const AdminTransaction = () => {
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
          style={styles.iconFilter}
          onPress = {toggleModal}>
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
            name='AdminTransactionAll'
            component={AdminTransactionAll}
            options={{ title: 'Semua' }}
          />
          <Tab.Screen
            name='AdminTransactionAccept'
            component={AdminTransactionAccept}
            options={{ title: 'Diterima' }}
          />
          <Tab.Screen
            name='AdminTransactionDecline'
            component={AdminTransactionDecline}
            options={{ title: 'Ditolak' }}
          />
        </Tab.Navigator>
      </View>
    </>
  )
}

export default AdminTransaction