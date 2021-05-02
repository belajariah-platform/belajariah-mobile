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
    <ImageBackground
      source={Images.DetailClassHeaderBG}
      style={styles.flexFull}
    >
      <View style={isFullscreen? styles.flexButtonHeaderFullscreen : styles.flexButtonHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Images.ButtonBack.default />
        </TouchableOpacity>
      </View>

      <VideoPlayer
        useSmallBar={true}
        iconPlaySize = {20}
        iconSkipSize = {20}
        videoStyle={styles.videoStyle}
        videoLink={'https://www.belajariah.com/video_pembelajaran/TrailerMini.mp4'}
        posterLink={'https://www.belajariah.com/video_pembelajaran/TrailerMini.mp4'}
        style={styles.videoContainerStyle}
        controllerStyle={styles.controllerStyle}
        videoFullscreenStyle={styles.videoFullscreenStyle}
        fullscreenStyle={styles.videoFullscreenContainerStyle}
        onFullScreenPress={() => setIsFullscreen(!isFullscreen)}
        controllerFullscreenStyle={styles.controllerFullscreenStyle}
      />

      <Text style={styles.textDesc}>{classes.Class_Name}</Text>
      <View style={styles.flexRating}>
        <View>{classes.Class_Rating != 0 && handleRating(classes.Class_Rating)}</View>
        <Text style={styles.textRating}>{classes.Class_Rating != 0 && classes.Class_Rating.toFixed(1)}</Text>
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
    </ImageBackground>
  )
}

ClassDetail.propTypes = {
  route: PropTypes.object,
}

export default ClassDetail
