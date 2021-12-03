import PropTypes from 'prop-types'
import React, { useState } from 'react'
import Swipers from 'react-native-swiper'
import * as Animatable from 'react-native-animatable'

import {
  Text,
  View,
  Image
} from 'react-native'

import { Buttons } from '../../../components'
import { Images, Color } from '../../../assets'

import { styles } from './user-introduction.style'

const Introduction = (props) => {
  const [show, setShow] = useState(true)
  const [animationSignup, setAnimation] = useState(null)

  const onIndexChanged = (index) => {
    if (index == 2) {
      setAnimation('flipInX')
      setShow(true)
    } else {
      setAnimation(null)
      setShow(false)
    }
  }

  return (
    <Swipers
      loop={false}
      showsButtons={true}
      dot={<View style={styles.dot} />}
      buttonWrapperStyle={styles.wrapper}
      activeDot={<View style={styles.activeDot} />}
      onIndexChanged={index => onIndexChanged(index)}
      nextButton={<Text style={styles.buttonWrapper}>Selanjutnya</Text>}
      prevButton={
        <Text style={{ ...styles.buttonWrapper, color: Color.purpleHint }}>
          Sebelumnya
        </Text>
      }>
      {/* <IntroPage
        imageType={Images.Intro1}
        titles='Pengajar yang Berkompeten'
        description='Diajarkan oleh ustadz/ustadzah yang berpengalaman serta profesional dibidangnya'
      /> */}
      <IntroPage
        imageType={Images.Intro2}
        titles="Pengajar Berkompeten"
        description='Anda akan diajarkan oleh Ustadz/Ustadzah yang berpengalaman dan berkompeten'
      />
      <IntroPage
        imageType={Images.Intro3}
        titles='Tersedia berbagai pilihan kelas Al-Qur’an'
        description='Anda akan di ajar oleh Ustadz/Ustadzah di berbagai kelas Al-Qur’an seperti kelas Iqra’, Dirosa, Tahsin, Tilawah dan Tahfidz'
      />
      <View style={styles.slide}>
        <View style={styles.header}>
          <Image source={Images.Intro4} style={styles.image} />
        </View>
        <View style={styles.footer}>
          <Text style={styles.title1}>Bonus Materi keislaman</Text>
          <Text style={styles.title2}>
          Selain belajar Al-Qur’an ustadz/ustadzah akan memberikan materi seputar keislaman lainnya disela-sela belajar
          </Text>
          <View>
            {show ? (
              <Animatable.View
                delay={100}
                useNativeDriver
                animation={animationSignup}>
                <Buttons
                  title='Daftar'
                  style={styles.btnSwiper}
                  onPress={() => props.navigation.navigate('Register')} />
              </Animatable.View>
            ) : null}
          </View>
        </View>
      </View>
    </Swipers>
  )
}

const IntroPage = (props) => {
  return (
    <View style={styles.slide}>
      <View style={styles.header}>
        <Image source={props.imageType} style={styles.image} />
      </View>
      <View style={styles.footer}>
        <Text style={styles.title1}>{props.titles}</Text>
        <Text style={styles.title2}>{props.description}</Text>

      </View>
    </View>
  )
}

Introduction.propTypes = {
  navigation : PropTypes.object
}

IntroPage.propTypes = {
  titles : PropTypes.string,
  imageType : PropTypes.number,
  description : PropTypes.string,
}

export default Introduction
