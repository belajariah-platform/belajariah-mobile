import React from 'react'
import moment from 'moment'
import { Text } from '@ui-kitten/components'
import { useNavigation, useRoute } from '@react-navigation/native'
import { View, ScrollView, TouchableOpacity, Image } from 'react-native'

import { Images } from '../../../assets'
import styles from './inspiratif-detail.style'

const InspiratifStoryDetail = () => {
  const route = useRoute()
  const navigation = useNavigation()
  const { params } = route.params ?? {}

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
    const handleSplitString = (value) => {
      const stringSplit = value.split('|')
      return stringSplit.map((val, index) => {
        if (val.includes('<Img>')) {
          return (
            <Image key={index}
              style={styles.ImgBody}
              source={Images.SandiagaUnoImg}/>
          )
        } else {
          return (
            <Text key={index} style={styles.Txtbacaan}>
              {val}.
            </Text>
          )}})
    }
    return  (
      <View style={styles.containerInspiratif}>
        <View style={styles.containerTopTitle}>
          <View>
            <Text style={styles.TitleBacaan}>{params.Title}</Text>
            <Text style={styles.TxtTime}>
              {moment(params.Created_Date).format('dddd, DD MMMM YYYY')}
            </Text>
          </View>
        </View>
        <View>
          <Image
            source={params.Header_Image == '' ?
              Images.ImgDefault2 : params.Header_Image}
            style={styles.ImgHeading}/>
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.TouchText}
          >
            <Text style={styles.TxtSourceImg}>Source : {params.Source}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.ViewParagraf}>
          {handleSplitString(params.Content)}
        </View>
      </View>
    )
  }
  return (
    <View style={styles.containerMain}>
      <Header />
      <ScrollView
        style={styles.containerScrollView}
        showsVerticalScrollIndicator={false}>
        <Inspiratif />
      </ScrollView>
    </View>
  )
}

export default InspiratifStoryDetail