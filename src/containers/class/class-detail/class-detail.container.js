import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation, useRoute } from '@react-navigation/native'
import { ImageBackground, ToastAndroid, View, Text } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import ClassAbout from './class-about.container'
import ClassReview from './class-review.container'
import ClassInstructor from './class-instructor.container'

import { FormatRupiah } from '../../../utils'
import { Color, Images } from '../../../assets'
import { ButtonGradient, VideoPlayer } from '../../../components'

import styles from './class-detail.style'

const Tab = createMaterialTopTabNavigator()

const ClassDetail = () => {
  const route = useRoute()
  const navigation = useNavigation()
  const { isLogin } = useSelector((state) => state.UserReducer)
  const [isFullscreen, setIsFullscreen] = useState(false)

  let { price, discountedPrice } = route.params ?? {}

  const classData = {
    name: 'Kelas Tahsin',
    quote: 'Belajar Alqur\'an dari dasar dengan metode yang mudah dan menyenangkan.',
    videoLink:
      'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
    posterLink: 'https://i.ibb.co/9Hd3kT7/Screenshot-5.jpg',
    rating: 4.5,
    tags: ['Populer'],
    price: price,
    discountedPrice: discountedPrice,
  }

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
      </View>
    )
  }

  return (
    <ImageBackground
      source={Images.DetailClassHeaderBG}
      style={styles.flexFull}
    >
      <View style={isFullscreen? styles.flexButtonHeaderFullscreen : styles.flexButtonHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Images.ButtonBack.default />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => ToastAndroid.show('Share', ToastAndroid.SHORT)}>
          <Images.Share.default />
        </TouchableOpacity>
      </View>

      <VideoPlayer
        iconPlaySize = {20}
        iconSkipSize = {20}
        iconPlaySizeFullscreen = {80}
        iconSkipSizeFullscreen = {48}
        videoStyle={styles.videoStyle}
        videoLink={classData.videoLink}
        posterLink={classData.posterLink}
        style={styles.videoContainerStyle}
        controllerStyle={styles.controllerStyle}
        videoFullscreenStyle={styles.videoFullscreenStyle}
        fullscreenStyle={styles.videoFullscreenContainerStyle}
        onFullScreenPress={() => setIsFullscreen(!isFullscreen)}
        controllerFullscreenStyle={styles.controllerFullscreenStyle}
      />

      <Text style={styles.textDesc}>{classData.quote}</Text>
      <View style={styles.flexRating}>
        <View>{handleRating(classData.rating)}</View>
        <Text style={styles.textRating}>{classData.rating}</Text>
      </View>

      <View style={styles.semiBox}/>

      <Tab.Navigator
        style={styles.tabContainerStyle}
        tabBarOptions={{
          style: styles.tabBarStyle,
          inactiveTintColor: Color.grey,
          labelStyle: styles.labelStyle,
          activeTintColor: Color.purpleText,
          indicatorStyle: styles.indicatorStyle,
        }}>
        <Tab.Screen
          name='ClassAbout'
          component={ClassAbout}
          options={{ title: 'Tentang Kelas' }}
        />
        <Tab.Screen
          name='ClassInstructor'
          component={ClassInstructor}
          options={{ title: 'Instruktur' }}
        />
        <Tab.Screen
          name='ClassReview'
          component={ClassReview}
          options={{ title: 'Ulasan' }}
        />
      </Tab.Navigator>

      <View style={styles.containerPrice}>
        <View style={styles.flexColumn}>
          <Text style={styles.discountedPrice}>Rp {FormatRupiah(classData.discountedPrice)}</Text>
          <Text style={styles.price}>Rp {FormatRupiah(classData.price)}</Text>
        </View>
        <ButtonGradient
          title='BELI KELAS'
          styles={styles.btnBuyClass}
          textStyle={styles.textBuyClass}
          onPress={() => {
            navigation.navigate(!isLogin ? 'Login' : 'TransactionMethod', {
              discountedPrice: classData.discountedPrice
            } )
          }}
        />
      </View>
    </ImageBackground>
  )
}

export default ClassDetail
