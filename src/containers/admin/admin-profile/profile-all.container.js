import moment from 'moment'
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'

import {
  View,
  Text,
  ScrollView,
  ToastAndroid,
  TouchableOpacity,
  ImageBackground,
} from 'react-native'
import { Card, Avatar } from 'react-native-elements'

import { UserAPI } from '../../../api'
import { Response } from '../../../utils'
import { Images } from '../../../assets'
import { styles } from './profile.style'
import { useNavigation } from '@react-navigation/native'

const ProfileAll = ({ route }) => {
  const item = route.params
  const navigation = useNavigation()
  const [userInfo, setUserInfo] = useState({})
  console.log(userInfo)
  const fetchDataUser = async (email) => {
    try {
      const response = await UserAPI.GetUser(email)
      if (response.status === Response.SUCCESS) {
        setUserInfo(response.data.result)
      }
    } catch (err) {
      return err
    }
  }

  useEffect(() => {
    fetchDataUser(item.Created_By)
  }, [])

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
      <Images.ProfileBackground.default
        width='100%'
        style={styles.background}
      />

      <View style={{ ...styles.containerDrawerButton, paddingVertical:15 }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Images.BtnClose.default
            width={16}
            height={16}
          />
        </TouchableOpacity>
      </View>
      <ImageBackground source={Images.AvatarBorder} style={styles.avatarBorder}>
        <Avatar
          source={Images.ImageProfileDefault}
          size='large'
          activeOpacity={0.7}
          containerStyle={styles.avatar}
          onPress={() => ToastAndroid.show('Avatar', ToastAndroid.SHORT)}
        />
      </ImageBackground>
      <View style={styles.containerProfileHeader}>
        <Text style={styles.headerName}>{item.Full_Name}</Text>
        <View style={styles.containerEmailPhone}>
          <Images.Email.default width={18} style={styles.iconEmail} />
          <Text style={styles.headerEmail}>{userInfo.Email}</Text>
        </View>
        <View style={styles.containerEmailPhone}>
          <Images.Phone.default width={18} style={styles.iconPhone} />
          <Text style={styles.headerPhone}>{userInfo.Phone}</Text>
        </View>
      </View>

      <Card containerStyle={styles.containerCard}>
        <Images.ProfilePurple.default width={36} style={styles.iconProfile} />

        <Text style={styles.subHeader}>Nama Lengkap</Text>
        <Text style={styles.dataProfile}>{userInfo.Full_Name}</Text>
        <Card.Divider style={styles.divider} />

        <Text style={styles.subHeader}>Jenis Kelamin</Text>
        <Text style={styles.dataProfile}>{userInfo.Gender}</Text>
        <Card.Divider style={styles.divider} />

        <Text style={styles.subHeader}>Tanggal Lahir</Text>
        <Text style={styles.dataProfile}>{userInfo.Birth && (moment(userInfo.Birth).format('DD MMMM YYYY'))}</Text>
        <Card.Divider style={styles.divider} />

        <Text style={styles.subHeader}>Alamat</Text>
        <Text style={styles.dataProfile}>
          { userInfo.Address + userInfo.City + userInfo.Province}
        </Text>
        <Card.Divider style={styles.divider} />

        <Text style={styles.subHeader}>Profesi</Text>
        <Text style={styles.dataProfile}>{userInfo.Profession}</Text>
        <Card.Divider style={styles.divider} />
      </Card>
    </ScrollView>
  )
}

ProfileAll.propTypes = {
  route: PropTypes.object,
}

export default ProfileAll
