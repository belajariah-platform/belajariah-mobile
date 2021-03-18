import moment from 'moment'
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
  View,
  Text,
  Easing,
  Animated,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native'
import { Card, Avatar } from 'react-native-elements'

import { UserAPI } from '../../api'
import { Images } from '../../assets'
import { Response } from '../../utils'
import { styles } from './profile.style'
import { USER_INFO } from  '../../action'
import { useNavigation } from '@react-navigation/native'
import { ImageView } from '../../components'

const Profile = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const { userInfo } = useSelector((state) => state.UserReducer)
  const [isModalFotoVisible, setModalFotoVisible] = useState(false)
  const toggleModalFoto = () => setModalFotoVisible(!isModalFotoVisible)

  const rotateValue = new Animated.Value(0)
  const doRotation = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0 deg', '-360 deg'],
  })

  const transformStyle = { transform: [{ rotate: doRotation }] }

  const fetchDataUser = async (email) => {
    try {
      const response = await UserAPI.GetUser(email)
      if (response.status === Response.SUCCESS) {
        await dispatch({
          type: USER_INFO,
          user: response.data.result,
        })
      }
    } catch (err) {
      return err
    }
  }
  console.log(userInfo)
  useEffect(() => {
    fetchDataUser(userInfo.Email)
  }, [])

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
      <ImageView
        isVisible={isModalFotoVisible}
        filepath={userInfo.Image_Filename}
        source={Images.ImageProfileDefault}
        setVisible={() => toggleModalFoto()}
        backButtonPress={() => toggleModalFoto()}
      />

      <Images.ProfileBackground.default
        width='100%'
        style={styles.background}
      />

      <View style={styles.containerDrawerButton}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Images.BtnClose.default
            width={16}
            height={16}
          />
        </TouchableOpacity>
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
      <ImageBackground source={Images.AvatarBorder} style={styles.avatarBorder}>
        <Avatar
          size='large'
          activeOpacity={0.7}
          onPress={toggleModalFoto}
          containerStyle={styles.avatar}
          source={userInfo.Image_Filename == '' ?
            Images.ImageProfileDefault : { uri : userInfo.Image_Filename }}
        />
      </ImageBackground>
      <View style={styles.containerProfileHeader}>
        <Text style={styles.headerName}>{userInfo.Full_Name}</Text>
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
        <Text style={styles.dataProfile}>{moment(userInfo.Birth).format('DD MMMM YYYY')}</Text>
        <Card.Divider style={styles.divider} />

        <Text style={styles.subHeader}>Alamat</Text>
        <Text style={styles.dataProfile}>
          {userInfo.City}
        </Text>
        <Card.Divider style={styles.divider} />

        <Text style={styles.subHeader}>Profesi</Text>
        <Text style={styles.dataProfile}>{userInfo.Profession}</Text>
        <Card.Divider style={styles.divider} />
      </Card>
    </ScrollView>
  )
}

Profile.propTypes = {
  navigation: PropTypes.object,
}

export default Profile
