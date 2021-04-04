import React, { useEffect, useState } from 'react'
import { Text } from '@ui-kitten/components'
import {
  View,
  ImageBackground,
} from 'react-native'

import { Images } from '../../../assets'
import { styles } from './admin-dashboard.style'
import { ToastAndroid } from 'react-native'
import { BackHandler } from 'react-native'
import { useIsFocused } from '@react-navigation/core'

const AdminDashboard = () => {
  const isFocused = useIsFocused()
  const [exitApp, setExitApp] = useState(0)

  const AdminCard = () => {
    return (
      <View>
        <ImageBackground
          source={Images.WelcomeBackgroundAdmin}
          style={styles.containerBgWelcome}
          imageStyle={{ borderRadius: 15, opacity: 0.8, }}>
          <Text style={styles.TxtTitle}>Selamat Datang</Text>
          <Text style={styles.TxtTitleBottom}>Admin Belajariah !</Text>
          <Text style={styles.TxtDetailWelcome}>Apakah kamu sudah siap untuk memulai aktivitas-mu hari ini ?</Text>
        </ImageBackground>
      </View>
    )
  }

  useEffect(() => {
    const backAction = () => {
      setTimeout(() => {
        setExitApp(0)
      }, 2000)

      if(exitApp == 0) {
        ToastAndroid.showWithGravityAndOffset('Tekan sekali lagi untuk keluar', ToastAndroid.SHORT, ToastAndroid.BOTTOM, 0, 200)
        setExitApp(1)
      }

      if(exitApp == 1) {
        BackHandler.exitApp()
      }
      return true
    }

    if(isFocused) {
      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        backAction
      )
      return () => backHandler.remove()
    }
  }, [exitApp])

  return (
    <View style={styles.containerMain}>
      <ImageBackground
        source={Images.AdminBackground}
        style={styles.containerBackground}>
        <View style={{ flex : 1 }}/>
        <AdminCard />
      </ImageBackground>
    </View>
  )
}

export default AdminDashboard
