import React from 'react'
import { Text } from '@ui-kitten/components'
import { useNavigation } from '@react-navigation/native'
import {
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native'

import { Images } from '../../../assets'
import { styles } from './admin-dashboard.style'

const AdminDashboard = () => {
  const navigation = useNavigation()

  const AdminCard = () => {
    return (
      <View>
        <ImageBackground
          source={Images.WelcomeBackgroundAdmin}
          style={styles.containerBgWelcome}
          imageStyle={{ borderRadius: 15, opacity: 0.8, }}>
          <TouchableOpacity onPress={()=> navigation.navigate('InstructorMain')}>
            <Text style={styles.TxtTitle}>Selamat Datang</Text>
          </TouchableOpacity>
          <Text style={styles.TxtTitleBottom}>Admin Belajariah !</Text>
          <Text style={styles.TxtDetailWelcome}>Apakah kamu sudah siap untuk memulai aktivitas-mu hari ini ?</Text>
        </ImageBackground>
      </View>
    )
  }

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
