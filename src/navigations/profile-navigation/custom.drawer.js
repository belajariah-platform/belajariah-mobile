import React from 'react'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import { View } from 'react-native'
import Images from '../../assets/images'
import { ImageBackground } from 'react-native'
import { useDispatch } from 'react-redux'

import { UserAPI } from '../../api'
import { ToastAndroid } from 'react-native'
import { styles } from './profile.style'
import { TouchableOpacity } from 'react-native'
import { Text } from '@ui-kitten/components'

const CustomDrawer = ({ navigation }, props) => {
  const dispatch = useDispatch()

  return (
    <DrawerContentScrollView {...props}>
      <ImageBackground source={Images.ProfileDrawerBackgroundPNG} style={styles.drawerBackground}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack()
          }}>
          <Images.BtnClose.default width={16} style={styles.btnClose} />
        </TouchableOpacity>

        <DrawerItem
          label='Edit Profil'
          onPress={() => {
            navigation.navigate('Edit Profile')
          }}
          labelStyle={styles.label}
        />

        <DrawerItem
          label='Lihat Pesan Suara'
          onPress={() => {
            ToastAndroid.show('Lihat Pesan Suara', ToastAndroid.SHORT)
          }}
          labelStyle={styles.label}
        />

        <DrawerItem
          label='Tentang Belajariah'
          onPress={() => {
            ToastAndroid.show('Tentang Belajariah', ToastAndroid.SHORT)
          }}
          labelStyle={styles.label}
        />

        <DrawerItem
          label='Hubungi Kami'
          onPress={() => {
            ToastAndroid.show('Hubungi Kami', ToastAndroid.SHORT)
          }}
          labelStyle={styles.label}
        />

        <DrawerItem
          label='Bantuan'
          onPress={() => {
            ToastAndroid.show('Bantuan', ToastAndroid.SHORT)
          }}
          labelStyle={styles.label}
        />

        <DrawerItem
          label='Kebijakan Privasi'
          onPress={() => {
            ToastAndroid.show('Kebijakan Privasi', ToastAndroid.SHORT)
          }}
          labelStyle={styles.label}
        />

        <DrawerItem
          label='Syarat & Ketentuan'
          onPress={() => {
            ToastAndroid.show('Syarat & Ketentuan', ToastAndroid.SHORT)
          }}
          labelStyle={styles.label}
        />

        <DrawerItem
          label='Logout'
          onPress={async () => await dispatch(UserAPI.SignOut())}
          labelStyle={styles.label}
          icon={() => <Images.Logout.default width={24} height={24} style={styles.iconLogout} />}
        />

        <View style={styles.versionContainer}>
          <Images.LogoBelajariahProfile.default width={24} height={24} />
          <Text style={styles.version}>Version: v1.0-21</Text>
        </View>
      </ImageBackground>
    </DrawerContentScrollView>
  )
}

export default CustomDrawer
