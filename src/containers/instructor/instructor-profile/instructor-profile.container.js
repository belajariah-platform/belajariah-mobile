import React from 'react'
import PropTypes from 'prop-types'

import {
  View,
  Text,
  Easing,
  Animated,
  ScrollView,
  ToastAndroid,
  TouchableOpacity,
} from 'react-native'
import { Card, Avatar } from 'react-native-elements'

import { Images } from '../../../assets'
import { styles } from './instructor-profile.style'
import { useNavigation } from '@react-navigation/native'
import { ImageBackground } from 'react-native'

const InstructorProfile = () => {
  const navigation = useNavigation()

  const userData = {
    name: 'Nama Orang',
    email: 'email@gmail.com',
    phone: '+62-1234-5678',
    rating: 4.5,
    taskCompleteCount: 3,
    taskOngoingCount: 3,
    taskOverdueCount: 0,
    fullName: 'Nama nama nama',
    gender: 'Cwk',
    job: 'Apa aja boleh',
  }

  const rotateValue = new Animated.Value(0)

  const doRotation = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0 deg', '-360 deg'], // degree of rotation
  })

  const transformStyle = { transform: [{ rotate: doRotation }] }

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
          source={Images.ImageProfileDefault}
          onPress={() => ToastAndroid.show('Avatar', ToastAndroid.SHORT)}
          activeOpacity={0.7}
          containerStyle={styles.avatar}
        />
      </ImageBackground>

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
        <View style={styles.containerEmailPhone}>
          {handleRating(userData.rating)}
        </View>
      </View>

      <Card
        containerStyle={styles.containerCardStatus}
        wrapperStyle={styles.wrapperCardStatus}>
        <Card containerStyle={styles.cardStatus}>
          <Text style={styles.textStatusComplete}>Complete</Text>
          <Images.IconInstructorProfileComplete.default
            width={28}
            height={28}
            style={styles.iconStatus}
          />
          <Text style={styles.textCompleteCount}>
            {userData.taskCompleteCount}
          </Text>
        </Card>
        <Card containerStyle={styles.cardStatus}>
          <Text style={styles.textStatusOngoing}>Ongoing</Text>
          <Images.IconInstructorProfileOngoing.default
            width={28}
            height={28}
            style={styles.iconStatus}
          />
          <Text style={styles.textOngoingCount}>
            {userData.taskOngoingCount}
          </Text>
        </Card>
        <Card containerStyle={styles.cardStatus}>
          <Text style={styles.textStatusOverdue}>Overdue</Text>
          <Images.IconInstructorProfileOverdue.default
            width={28}
            height={28}
            style={styles.iconStatus}
          />
          <Text style={styles.textOverdueCount}>
            {userData.taskOverdueCount}
          </Text>
        </Card>
      </Card>

      <Card containerStyle={styles.containerCardProfile}>
        <Text style={styles.subHeader}>Nama Lengkap</Text>
        <Text style={styles.dataProfile}>{userData.fullName}</Text>
        <Card.Divider style={styles.divider} />

        <Text style={styles.subHeader}>Jenis Kelamin</Text>
        <Text style={styles.dataProfile}>{userData.gender}</Text>
        <Card.Divider style={styles.divider} />

        <Text style={styles.subHeader}>Profesi</Text>
        <Text style={styles.dataProfile}>{userData.job}</Text>
        <Card.Divider style={styles.divider} />
      </Card>
    </ScrollView>
  )
}

InstructorProfile.propTypes = {
  navigation: PropTypes.object,
}

export default InstructorProfile
