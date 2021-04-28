import PropTypes from 'prop-types'
import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer'

import {
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native'

import { UserAPI } from '../../../api'
import { Images } from '../../../assets'
import { ModalConfirm} from '../../../components'
import { styles } from './instructor-profile.style'

const CustomDrawer = ({ navigation }, props) => {
  const dispatch = useDispatch()
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
      <ImageBackground
        source={Images.ProfileDrawerBackgroundPNG}
        style={styles.drawerBackground}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack()
          }}>
          <Images.BtnClose.default width={16} style={styles.btnClose} />
        </TouchableOpacity>

        <DrawerItem
          label='Edit Profil'
          onPress={() => {
            navigation.navigate('InstructorProfileEdit')
          }}
          labelStyle={styles.label}
        />

        <DrawerItem
          label='Tentang Belajariah'
          onPress={() => {
            navigation.navigate('AboutUs')
          }}
          labelStyle={styles.label}
        />

        <DrawerItem
          label='Hubungi Kami'
          onPress={() => {
            navigation.navigate('ContactUs')
          }}
          labelStyle={styles.label}
        />

        <DrawerItem
          label='Kebijakan Privasi'
          onPress={() => {
            navigation.navigate('PrivacyPolicy')
          }}
          labelStyle={styles.label}
        />

        <DrawerItem
          label='Syarat & Ketentuan'
          onPress={() => {
            navigation.navigate('TermsandConditions')
          }}
          labelStyle={styles.label}
        />

        <DrawerItem
          label='Keluar'
          onPress = {() => toggleModal('logout')}
          labelStyle={styles.label}
          icon={() => (
            <Images.Logout.default
              width={24}
              height={24}
              style={styles.iconLogout}
            />
          )}
        />

        <View style={styles.versionContainer}>
          <Images.LogoBelajariahProfile.default width={24} height={24} />
          <Text style={styles.version}>Version: v1.0-21</Text>
        </View>
      </ImageBackground>
    </DrawerContentScrollView>
    </>
  )
}

CustomDrawer.propTypes = {
  navigation: PropTypes.object,
}

export default CustomDrawer
