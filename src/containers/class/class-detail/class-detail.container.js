import React from 'react'
import Video from 'react-native-video'
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
import { ButtonGradient } from '../../../components'

import styles from './class-detail.style'

const Tab = createMaterialTopTabNavigator()

const ClassDetail = () => {
  const route = useRoute()
  const navigation = useNavigation()
  const { isLogin } = useSelector((state) => state.UserReducer)

  let { price, discountedPrice } = route.params ?? {}

  const classData = {
    name: 'Kelas Tahsin',
    quote: 'Belajar Alqur\'an dari dasar dengan metode yang mudah dan menyenangkan.',
    videoLink:
      'https://cdn-cf-east.streamable.com/video/mp4/wh132q.mp4?Expires=1610504280&Signature=BGH7eUCTgDeTXicWLPcMY-b1v1dXNJVlYfa6wvkJNE3RVsgmaLgMD5lnzmG6NAicj64Sgyc7gKmKw6Xzc5O0vqj9nYS5Gm0qyeAUkSRjyMBGT1oeLpbs-1fNBlPZN5lCxulkQszTsrZpMirrOAqqj8z8xC2D0NRlUkNjyOcbdzG8E08jLiVC4zaPfUkvqJ0~vYg-XGxcyIDrH~QCV81JLx-1H3eevDJbM79eTs9rOGXnIXoFahvjlqsPl0z8yXsW9XWEm7wSQjptP9whT98n1pr2K0AXnqKS4h5ccNNqcLNoiUI7bqJbhTyYgDDVdfrgf8F7CLlTa9PKWQ131j4WlA__&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ',
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
      <View style={styles.flexButtonHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Images.ButtonBack.default />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => ToastAndroid.show('Share', ToastAndroid.SHORT)}>
          <Images.Share.default />
        </TouchableOpacity>
      </View>

      <Video
        source={{ uri: classData.videoLink }}
        style={styles.backgroundVideo}
        controls={true}
        paused={true}
        poster={classData.posterLink}
        resizeMode={'cover'}
        posterResizeMode={'cover'}
      />

      <Text style={styles.textDesc}>{classData.quote}</Text>
      <View style={styles.flexRating}>
        <View>{handleRating(classData.rating)}</View>
        <Text style={styles.textRating}>{classData.rating}</Text>
      </View>

      {/* <View style={styles.flexTags}>
        {classData.tags.map((tag, index) => {
          return (
            <Text key={index} style={styles.textTag}>
              {tag}
            </Text>
          )
        })}
      </View> */}

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
          options={{ title: 'Ulasan User' }}
        />
      </Tab.Navigator>

      <View style={styles.containerPrice}>
        <View style={styles.flexColumn}>
          <Text style={styles.discountedPrice}>IDR {FormatRupiah(classData.discountedPrice)}</Text>
          <Text style={styles.price}>IDR {FormatRupiah(classData.price)}</Text>
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
