import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { DrawerContentScrollView } from '@react-navigation/drawer'

import {
  Text,
  View,
  Image,
} from 'react-native'

import { UserAPI } from '../../../api'
import { Images } from '../../../assets'
import { styles } from './admin-main.style'
import { ModalConfirm } from '../../../components'
import { TouchableOpacity } from 'react-native-gesture-handler'

const AdminDrawer = ({ navigation }, props) => {
  const dispatch = useDispatch()
  const [actived, setActived] = useState(1)
  const [action, setAction] = useState('')
  const [modalVisible, setModalVisible] = useState(false)

  const toggleModal = (e) => {
    setAction(e)
    setModalVisible(!modalVisible)
  }

  return (
    <>
      <ModalConfirm
        action={action}
        isVisible={modalVisible}
        submit={async () => await dispatch(UserAPI.SignOut())}
        backdropPress={() => toggleModal()}
        backButtonPress={() => toggleModal()}
      />
      <DrawerContentScrollView {...props} contentContainerStyle={styles.flexFull}>
        <View style={styles.drawerBackground}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => {
              setActived(1)
              navigation.navigate('AdminDashboard')
            }}
            style={[styles.centered, actived == 1 ?
              { backgroundColor : '#8a43a8' } : null
            ]}>
            <Image source={Images.SidenavDashboard}
              style={styles.imageAdmin}/>
            <Text style={styles.textIcon}>Admin</Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => {
              setActived(2)
              navigation.navigate('AdminUser')
            }}
            style={[styles.centered, actived == 2 ?
              { backgroundColor : '#8a43a8' } : null
            ]}>
            <Images.SidenavUser.default
              width={25}
              height={25}
            />
            <Text style={styles.textIcon}>Konsultasi</Text>
          </TouchableOpacity>

          <View style={styles.flexOne}>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => {
                setActived(3)
                navigation.navigate('AdminInstructor')
              }}
              style={[styles.centered, actived == 3 ?
                { backgroundColor : '#8a43a8' } : null
              ]}>
              <Images.SidenavInstrcutor.default
                width={25}
                height={25}
              />
              <Text style={styles.textIcon}>Ustadz/Ustadzah</Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => {
                setActived(4)
                navigation.navigate('AdminTransaction')
              }}
              style={[styles.centered, actived == 4 ?
                { backgroundColor : '#8a43a8' } : null
              ]}>
              <Images.IconTransactionAdmin.default
                width={25}
                height={25}
              />
              <Text style={styles.textIcon}>Transaksi</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.centeredBottom}
            onPress = {() => toggleModal('logout')}>
            <Images.Logout.default
              width={24}
              height={24}
            />
            <Text style={styles.textIcon}>Keluar</Text>
          </TouchableOpacity>

        </View>
      </DrawerContentScrollView>
    </>
  )
}

AdminDrawer.propTypes = {
  navigation: PropTypes.object,
}

export default AdminDrawer
