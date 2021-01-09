import React from 'react'

import { ScrollView, View } from 'react-native'
import { Text } from '@ui-kitten/components'
import Images from '../../assets/images'
import { styles } from './profile-main.style'
import { TouchableOpacity } from 'react-native'
import { Avatar } from 'react-native-elements'
import { Card } from 'react-native-elements'
import { Animated, Easing, ToastAndroid } from 'react-native'

const Profile = ({ navigation }) => {
  const userData = {
    name: 'Nama Orang',
    email: 'email@gmail.com',
    phone: '+62-1234-5678',
    fullName: 'Nama nama nama',
    gender: 'Cwk',
    birthday: '29 Februari 2021',
    address: 'Jl. Jalan',
    city: 'Palembang',
    province: 'Sumatera Selatan',
    job: 'Apa aja boleh',
  }

  const rotateValue = new Animated.Value(0)

  const doRotation = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0 deg', '-360 deg'], // degree of rotation
  })

  const transformStyle = { transform: [{ rotate: doRotation }] }

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
      <Images.ProfileBackground.default width={'100%'} style={styles.background} />

      <View style={styles.containerDrawerButton}>
        <TouchableOpacity
          style={styles.btnDrawer}
          onPressIn={() => {
            Animated.timing(rotateValue, {
              toValue: 1,
              duration: 1000,
              easing: Easing.linear,
              useNativeDriver: true,
            }).start()
          }}
          onPressOut={() => {
            Animated.timing(rotateValue, {
              toValue: 0,
              duration: 1000,
              easing: Easing.linear,
              useNativeDriver: true,
            }).start()
            navigation.openDrawer()
          }}>
          <Animated.View style={transformStyle}>
            <Images.Setting.default width={22} />
          </Animated.View>
        </TouchableOpacity>
      </View>

      <Avatar
        size='large'
        title='B'
        onPress={() => ToastAndroid.show('Avatar', ToastAndroid.SHORT)}
        activeOpacity={0.7}
        containerStyle={styles.avatar}
      />

      <View style={styles.containerProfileHeader}>
        <Text style={styles.headerName}>{userData.name}</Text>
        <View style={styles.containerEmailPhone}>
          <Images.Email.default width={18} style={styles.iconEmail} />
          <Text style={styles.headerEmail}>{userData.email}</Text>
        </View>
        <View style={styles.containerEmailPhone}>
          <Images.Phone.default width={18} style={styles.iconPhone} />
          <Text style={styles.headerPhone}>{userData.phone}</Text>
        </View>
      </View>

      <Card containerStyle={styles.containerCard}>
        <Images.ProfilePurple.default width={36} style={styles.iconProfile} />

        <Text style={styles.subHeader}>Nama Lengkap</Text>
        <Text style={styles.dataProfile}>{userData.fullName}</Text>
        <Card.Divider style={styles.divider} />

        <Text style={styles.subHeader}>Jenis Kelamin</Text>
        <Text style={styles.dataProfile}>{userData.gender}</Text>
        <Card.Divider style={styles.divider} />

        <Text style={styles.subHeader}>Tanggal Lahir</Text>
        <Text style={styles.dataProfile}>{userData.birthday}</Text>
        <Card.Divider style={styles.divider} />

        <Text style={styles.subHeader}>Alamat</Text>
        <Text style={styles.dataProfile}>
          {userData.address}
          {', '}
          {userData.city}
          {', '}
          {userData.province}
        </Text>
        <Card.Divider style={styles.divider} />

        <Text style={styles.subHeader}>Profesi</Text>
        <Text style={styles.dataProfile}>{userData.job}</Text>
        <Card.Divider style={styles.divider} />
      </Card>
    </ScrollView>
  )
}

export default Profile
