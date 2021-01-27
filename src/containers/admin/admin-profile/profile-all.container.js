import React from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'

import {
  View,
  Text,
  ScrollView,
  ToastAndroid,
  TouchableOpacity,
  ImageBackground,
} from 'react-native'
import { Card, Avatar } from 'react-native-elements'

import { Images } from '../../../assets'
import { styles } from './profile.style'
import { useNavigation } from '@react-navigation/native'

const ProfileAll = ({ route }) => {
  const item = route.params
  const navigation = useNavigation()

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
      <Images.ProfileBackground.default
        width={'100%'}
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
        <Text style={styles.headerName}>{item.username}</Text>
        <View style={styles.containerEmailPhone}>
          <Images.Email.default width={18} style={styles.iconEmail} />
          <Text style={styles.headerEmail}>{'ricowijaya@gmail.com'}</Text>
        </View>
        <View style={styles.containerEmailPhone}>
          <Images.Phone.default width={18} style={styles.iconPhone} />
          <Text style={styles.headerPhone}>{'082184783116'}</Text>
        </View>
      </View>

      <Card containerStyle={styles.containerCard}>
        <Images.ProfilePurple.default width={36} style={styles.iconProfile} />

        <Text style={styles.subHeader}>Nama Lengkap</Text>
        <Text style={styles.dataProfile}>{item.username}</Text>
        <Card.Divider style={styles.divider} />

        <Text style={styles.subHeader}>Jenis Kelamin</Text>
        <Text style={styles.dataProfile}>{'Laki-laki'}</Text>
        <Card.Divider style={styles.divider} />

        <Text style={styles.subHeader}>Tanggal Lahir</Text>
        <Text style={styles.dataProfile}>{moment(item.created_date).format('DD MMMM YYYY')}</Text>
        <Card.Divider style={styles.divider} />

        <Text style={styles.subHeader}>Alamat</Text>
        <Text style={styles.dataProfile}>
          {'Jl.Jalan'}
          {', '}
          {'Palembang'}
          {', '}
          {'Sumatera Selatan'}
        </Text>
        <Card.Divider style={styles.divider} />

        <Text style={styles.subHeader}>Profesi</Text>
        <Text style={styles.dataProfile}>{'Content Creator'}</Text>
        <Card.Divider style={styles.divider} />
      </Card>
    </ScrollView>
  )
}

ProfileAll.propTypes = {
  route: PropTypes.object,
}

export default ProfileAll
