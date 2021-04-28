import React from 'react'
import PropTypes from 'prop-types'

import {
  View,
  Text,
  ScrollView,
  ToastAndroid,
  TouchableOpacity,
} from 'react-native'
import { Card, Avatar } from 'react-native-elements'

import { Images } from '../../../assets'
import { ImageBackground } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { styles } from './profile.style'

const ProfileInstrcutor = ({ route }) => {
  const item = route.params
  const navigation = useNavigation()

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

      <View style={{ ...styles.containerDrawerButton, paddingTop:12 }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Images.BtnClose.default
            width={16}
            height={16}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('AdminProfileEdit')}>
          <Images.IconEdit.default />
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
        <Text style={styles.headerName}>{item.fullname}</Text>
        <View style={styles.containerEmailPhone}>
          <Images.Email.default width={18} style={styles.iconEmail} />
          <Text style={styles.headerEmail}>{item.email}</Text>
        </View>
        <View style={styles.containerEmailPhone}>
          <Images.Phone.default width={18} style={styles.iconPhone} />
          <Text style={styles.headerPhone}>{'082184783116'}</Text>
        </View>
        <View style={styles.containerEmailPhone}>
          {handleRating(4.5)}
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
            {12}
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
            {3}
          </Text>
        </Card>
        {/* <Card containerStyle={styles.cardStatus}>
          <Text style={styles.textStatusOverdue}>Overdue</Text>
          <Images.IconInstructorProfileOverdue.default
            width={28}
            height={28}
            style={styles.iconStatus}
          />
          <Text style={styles.textOverdueCount}>
            {0}
          </Text>
        </Card> */}
      </Card>

      <Card containerStyle={styles.containerCardProfile}>
        <Text style={styles.subHeader}>Nama Lengkap</Text>
        <Text style={styles.dataProfile}>{item.fullname}</Text>
        <Card.Divider style={styles.divider} />

        <Text style={styles.subHeader}>Jenis Kelamin</Text>
        <Text style={styles.dataProfile}>{'Laki-laki'}</Text>
        <Card.Divider style={styles.divider} />

        <Text style={styles.subHeader}>Profesi</Text>
        <Text style={styles.dataProfile}>{'Dosen'}</Text>
        <Card.Divider style={styles.divider} />
      </Card>
    </ScrollView>
  )
}

ProfileInstrcutor.propTypes = {
  route : PropTypes.object
}

export default ProfileInstrcutor
