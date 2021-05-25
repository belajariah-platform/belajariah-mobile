import * as React from 'react'
import { useState } from 'react'
import { View } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import AdminTransactionAll from './admin-transaction-all.container'
import AdminTransactionAccept from './admin-transaction-accept.container'
import AdminTransactionDecline from './admin-transaction-decline.container'

import { Color } from '../../../assets'
import { Searchbox, ModalFilterAdminPageUser } from '../../../components'

import { styles } from './admin-transaction.style'

const AdminTransaction = () => {
  const Tab = createMaterialTopTabNavigator()
  const [sort, setSort] = useState('')
  const [search, setSearch] = useState('')
  const [modalVisible, setModalVisible] = useState(false)
  const toggleModal = () => setModalVisible(!modalVisible)

  return (
    <>
      <ModalFilterAdminPageUser
        setSort={setSort}
        isVisible={modalVisible}
        backdropPress={() => toggleModal()}
        backButtonPress={() => toggleModal()}
      />
      <View style={styles.containerMain}>
        <View style={styles.containerHeader}>
          <View
            style={{ flex : 1 }}>
            <Searchbox
              size='medium'
              placeholder={'Temukan user'}
              style={styles.searchbox}
              onChangeText={(e) => setSearch(e)}
              onFocus={() => console.log('hello')}
            />
          </View>
          {/* <TouchableOpacity
            style={styles.iconFilter}
            onPress = {toggleModal}>
            <Images.Filter.default
              width={20}
              height={20}
            />
          </TouchableOpacity> */}
        </View>
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
            options={{ title: 'Semua' }}>
            {() => <AdminTransactionAll search={search} sort={sort}/>}
          </Tab.Screen>
          <Tab.Screen
            name='AdminTransactionAccept'
            options={{ title: 'Diterima' }}>
            {() => <AdminTransactionAccept search={search} sort={sort}/>}
          </Tab.Screen>
          <Tab.Screen
            name='AdminTransactionDecline'
            options={{ title: 'Ditolak' }}>
            {() => <AdminTransactionDecline search={search} sort={sort}/>}
          </Tab.Screen>
        </Tab.Navigator>
      </View>
    </>
  )
}

export default AdminTransaction