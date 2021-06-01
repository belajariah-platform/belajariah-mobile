import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { ImageBackground, View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import ClassAbout from './class-about.container'
import ClassReview from './class-review.container'
import ClassInstructor from './class-instructor.container'

import { FormatRupiah } from '../../../utils'
import { Color, Images } from '../../../assets'
import { ButtonGradient, VideoPlayer } from '../../../components'

import styles from './class-detail.style'

const Tab = createMaterialTopTabNavigator()

const ClassDetail = (props) => {
  const navigation = useNavigation()
  const { classes, packages } = props.route.params
  const [isFullscreen, setIsFullscreen] = useState(false)

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
    <View
      // source={Images.DetailClassHeaderBG}
      style={styles.flexFull}
    >

      <VideoPlayer
        iconPlaySize = {40}
        iconSkipSize = {40}
        showBackButton = {true}
        videoStyle={styles.videoStyle}
        videoLink={'https://www.belajariah.com/video_pembelajaran/Belajar%20Al-Qur\'an%20dari%20dasar%20dengan%20MUDAH%20dan%20MENYENANGKAN%20!%20Di%20Belajariah%20!.mp4'}
        posterLink={'https://belajariah-dev.sgp1.digitaloceanspaces.com/Master-Image/cover%20thriller%20apps.png'}
        style={styles.videoContainerStyle}
        controllerStyle={styles.controllerStyle}
        videoFullscreenStyle={styles.videoFullscreenStyle}
        fullscreenStyle={styles.videoFullscreenContainerStyle}
        onFullScreenPress={() => setIsFullscreen(!isFullscreen)}
        controllerFullscreenStyle={styles.controllerFullscreenStyle}
      />

      <View style={styles.semiBox}/>

      <Tab.Navigator
        style={styles.tabContainerStyle}
        tabBarOptions={{
          style: styles.tabBarStyle,
          inactiveTintColor: Color.purpleExHint,
          labelStyle: styles.labelStyle,
          activeTintColor: Color.white,
          indicatorStyle: styles.indicatorStyle,
        }}>

        <Tab.Screen
          name='ClassAbout'
          options={{ title: 'Tentang Kelas' }}>
          {() => <ClassAbout params={classes}/>}
        </Tab.Screen>

        <Tab.Screen
          name='ClassInstructor'
          options={{ title: 'Instruktur' }}>
          {() => <ClassInstructor params={classes}/>}
        </Tab.Screen>

        <Tab.Screen
          name='ClassReview'
          options={{ title: 'Ulasan' }}>
          {() => <ClassReview params={classes}/>}
        </Tab.Screen>

      </Tab.Navigator>

      <View style={styles.containerPrice}>
        <View style={styles.flexColumn}>
          <Text style={styles.discountedPrice}>
            Rp {FormatRupiah(packages.Price_Discount)}
          </Text>
          <Text style={styles.price}>
            Rp {FormatRupiah(packages.Price_Package)}
          </Text>
        </View>
        <ButtonGradient
          title='BELI KELAS'
          styles={styles.btnBuyClass}
          textStyle={styles.textBuyClass}
          onPress={() => {
            navigation.navigate('TransactionMethod',
              { classes : classes, packages : packages } )
          }}
        />
      </View>
    </View>
  )
}

ClassDetail.propTypes = {
  route: PropTypes.object,
}

export default ClassDetail
