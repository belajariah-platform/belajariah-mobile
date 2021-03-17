import PropTypes from 'prop-types'
import { ImageBackground } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Card, Avatar } from 'react-native-elements'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

import {
  View,
  Text,
  Easing,
  Animated,
  ScrollView,
  TouchableOpacity,
} from 'react-native'

import { MentorAPI } from '../../../api'
import { Response } from '../../../utils'
import { Images } from '../../../assets'
import { USER_INFO } from  '../../../action'
import { styles } from './instructor-profile.style'
import { ImageView } from '../../../components'

const InstructorProfile = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const { userInfo } = useSelector((state) => state.UserReducer)
  const [isModalFotoVisible, setModalFotoVisible] = useState(false)

  const toggleModalFoto = () => setModalFotoVisible(!isModalFotoVisible)

  const rotateValue = new Animated.Value(0)
  const doRotation = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0 deg', '-360 deg'], // degree of rotation
  })

  const transformStyle = { transform: [{ rotate: doRotation }] }

  const fetchDataMentor = async (email) => {
    try {
      const response = await MentorAPI.GetMentor(email)
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


  useEffect(() => {
    fetchDataMentor(userInfo.Email)
  }, [])

  const handleRating = (num) => {
    let rating = []
    const numRound = Math.round(num)
    for (let index = 1; index <= numRound; index++) {
      num - index == 0
        ? rating.push(<Images.Star.default />)
        : num - index < 0
          ? rating.push(<Images.StarHalf.default />)
          : rating.push(<Images.Star.default />)
    }
    return (
      <View style={styles.flexRating}>
        {rating.map((val, index) => {
          return <View key={index}>{val}</View>
        })}
        <Text style={styles.textRating}>{num}</Text>
      </View>
    )
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
      <ImageView
        isVisible={isModalFotoVisible}
        source={Images.ImageProfileDefault}
        setVisible={() => toggleModalFoto()}
        backButtonPress={() => toggleModalFoto()}
      />

      <Images.ProfileBackground.default
        width={'100%'}
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
          activeOpacity={0.7}
          containerStyle={styles.avatar}
          onPress={toggleModalFoto}
          source={Images.ImageProfileDefault}
          avatarStyle={{ borderRadius : 90 / 2 }}
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
        <View style={styles.containerEmailPhone}>
          {userInfo.Rating != 0 &&(handleRating(userInfo.Rating))}
        </View>
      </View>

      <Card
        containerStyle={styles.containerCardStatus}
        wrapperStyle={styles.wrapperCardStatus}>
        <Card containerStyle={styles.cardStatus}>
          <Text style={styles.textStatusComplete}>Selesai</Text>
          <Images.IconInstructorProfileComplete.default
            width={28}
            height={28}
            style={styles.iconStatus}
          />
          <Text style={styles.textCompleteCount}>
            {userInfo.Task_Completed}
          </Text>
        </Card>
        <Card containerStyle={styles.cardStatus}>
          <Text style={styles.textStatusOngoing}>Menunggu</Text>
          <Images.IconInstructorProfileOngoing.default
            width={28}
            height={28}
            style={styles.iconStatus}
          />
          <Text style={styles.textOngoingCount}>
            {userInfo.Task_Inprogress}
          </Text>
        </Card>
      </Card>

      <Card containerStyle={styles.containerCardProfile}>
        <Text style={styles.subHeader}>Nama Lengkap</Text>
        <Text style={styles.dataProfile}>{userInfo.Full_Name}</Text>
        <Card.Divider style={styles.divider} />

        <Text style={styles.subHeader}>Jenis Kelamin</Text>
        <Text style={styles.dataProfile}>{userInfo.Gender}</Text>
        <Card.Divider style={styles.divider} />

        <Text style={styles.subHeader}>Profesi</Text>
        <Text style={styles.dataProfile}>{userInfo.Profession}</Text>
        <Card.Divider style={styles.divider} />
      </Card>
    </ScrollView>
  )
}

InstructorProfile.propTypes = {
  navigation: PropTypes.object,
}

export default InstructorProfile
