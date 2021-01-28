import React from 'react'
import PropTypes from 'prop-types'
import { Text } from '@ui-kitten/components'
import { Card } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import Clipboard from '@react-native-community/clipboard'
import { View, ScrollView, TouchableOpacity, ToastAndroid, Image } from 'react-native'

import { Images } from '../../../assets'
import styles from './inspiratif-detail.style'

const InspiratifStoryDetail = () => {

  const navigation = useNavigation()
  const classData = {
    Title: 'Jadi Sukses, Belajar dari Sandiaga Uno',
    Time: 'Senin, 12 Januari 20xx 12:20',
    Writer: 'Rico Febriansyah',
    TxtSourceImg: 'Source: Sandiaga Salahuddin Uno./instagram.com/@sandiuno',
    TxtParagrafOne: 'Pastinya sobat belajariah tahu dengan tokoh inspiratif kita satu ini yaitu Sandiaga Uno',
    TxtParagrafTwo: 'Ia merupakan seorang pengusaha sukses dan juga politikus serta calon Presiden Republik Indonesia. yang bergandengan dengan Prabowo Subianto di pemilihan presiden tahun 2019 lalu.',
    TxtParagrafThree: 'Namun dibalik kesuksesannya itu, beliau yang akrab disapa Bang Sandi ini telah mengalami pahit getirnya kehidupan sebelum menjadi pengusaha hebat',
    TxtParagrafFour: 'Di salah satu media, bang Sandi menceritakan pengalamannya yang pernah di PHK oleh perusahaan tempatnya bekerja.',
    TxtParagrafFive: 'Akan tetapi, ada hal menarik yang banyak orang lain tidak ketahui dari beliau yaitu bahwa bang Sandi merupakan sosok yang rutin mengerjakan sholat Dhuha dalam hidupnya bahkan sebisa mungkin beliau tidak meninggalkan sholat Dhuha dalam satu hari loh.',
    TxtParagrafSix: 'Luar biasa bukan, bang Sandi pernah bercerita bahwa salah satu kunci suksesnya di dunia bisnis adalah sholat Dhuha.',
    TxtParagrafSeven: 'Tentunya bang Sandi memotivas kita ya sobat Belajariah untuk sholat Dhuha disamping kesibukan kita bekerja untuk mencari rezeki.',
  }

  const Header = () => {
    return (
      <View style={styles.containerHeader}>
        <View style={styles.flexHeader}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Images.ButtonBack.default style={styles.iconBack} />
          </TouchableOpacity>
          <Text style={styles.textTitleWhite}>Bacaan Inspiratif</Text>
        </View>
        <View style={styles.semiBox} />
      </View>
    )
  }

  const Inspiratif = () => {
    return(
      <View style={styles.containerInspiratif}>
        <View style={styles.containerTopTitle}>
          <View style={{marginRight: 10,}}>
            <Text style={styles.TitleBacaan}>{classData.Title}</Text>
            <Text style={styles.TxtTime}>{classData.Time}</Text>
          </View>
          <View style={{marginRight: 100,}}>
            <Images.IconShareBlack.default/>
          </View>
        </View>
        <View style={styles.containerHeading}>
            <Image source={Images.ImgHeadingBacaanInspiratif} style={styles.ImgHeading}/>
            <Text style={styles.TxtSourceImg}>{classData.TxtSourceImg}</Text>
        </View>
        <View style={styles.containerWriter}>
          <Text style={styles.TxtWriter}>Oleh:</Text>
          <Text style={styles.TxtWriter}>{classData.Writer}</Text>
        </View>
        <View style={styles.ViewParagraf}>
          <Text style={styles.Txtbacaan}>{classData.TxtParagrafOne}</Text>
        </View>
        <View style={styles.ViewParagraf}>
          <Text style={styles.Txtbacaan}>{classData.TxtParagrafTwo}</Text>
        </View>
        <View style={styles.containerImg}>
          <Image source={Images.SandiagaUnoImg} style={styles.ImgBody}/>
        </View>
        <View style={styles.ViewParagraf}>
          <Text style={styles.Txtbacaan}>{classData.TxtParagrafThree}</Text>
        </View>
        <View style={styles.ViewParagraf}>
          <Text style={styles.Txtbacaan}>{classData.TxtParagrafFour}</Text>
        </View>
        <View style={styles.ViewParagraf}>
          <Text style={styles.Txtbacaan}>{classData.TxtParagrafFive}</Text>
        </View>
        <View style={styles.ViewParagraf}>
          <Text style={styles.Txtbacaan}>{classData.TxtParagrafSix}</Text>
        </View>
        <View style={styles.ViewParagraf}>
          <Text style={styles.Txtbacaan}>{classData.TxtParagrafSeven}</Text>
        </View>
      </View>
    )
  }

  return (
    <View style={styles.containerMain}>
      <Header />
      <ScrollView style={styles.containerScrollView} showsVerticalScrollIndicator={false}>
       <Inspiratif />
      </ScrollView>
    </View>
  )
}

export default InspiratifStoryDetail
