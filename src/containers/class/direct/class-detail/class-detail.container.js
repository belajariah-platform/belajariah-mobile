import PropTypes from 'prop-types'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { ImageBackground, View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import ClassAboutDirect from './class-about.container'
import ClassReviewDirect from './class-review.container'

import { Color, Images } from '../../../../assets'
import { Buttons } from '../../../../components'

import styles from './class-detail.style'

const Tab = createMaterialTopTabNavigator()

const ClassDetailDirect = (props) => {
  const navigation = useNavigation()
  const { classes, packages } = props.route.params

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
      <ImageBackground resizeMode={'stretch'} source={Images.HeaderClassDirect} style={styles.HeaderClass}>
        <View style={styles.flexHeader}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Images.ButtonBack.default style={styles.iconBack} />
          </TouchableOpacity>
          <Text style={styles.textTitleWhite}>Kelas Dirosa</Text>
        </View>
      </ImageBackground>
      <View style={styles.semiBox}/>

      <Tab.Navigator
        style={styles.tabContainerStyle}
        tabBarOptions={{
          style: styles.tabBarStyle,
          inactiveTintColor: Color.white,
          labelStyle: styles.labelStyle,
          activeTintColor: Color.white,
          indicatorStyle: styles.indicatorStyle,
        }}>

        <Tab.Screen
          name='ClassAbout'
          options={{ title: 'Tentang Kelas' }}>
          {() => <ClassAboutDirect params={classes} packages={packages}/>}
        </Tab.Screen>

        <Tab.Screen
          name='ClassReview'
          options={{ title: 'Ulasan' }}>
          {() => <ClassReviewDirect params={classes}/>}
        </Tab.Screen>

      </Tab.Navigator>
      
      <View style={styles.ViewButton}>
        <Buttons title='Temukan Guru Ngaji' 
          style={styles.StyleBtn} 
          textStyle={styles.StyleTxtBtn}
          icon={<Images.IconSearchWhite.default/>}
          onPress={() => {
            navigation.navigate('ClassListMentor',
              { classes : classes, packages : packages } )
          }}
        />
      </View>
    </View>
  )
}

ClassDetailDirect.propTypes = {
  route: PropTypes.object,
}

export default ClassDetailDirect
