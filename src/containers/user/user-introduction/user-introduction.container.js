import PropTypes from 'prop-types'
import React, { useState } from 'react'
import Swipers from 'react-native-swiper'
import { Button, Text } from '@ui-kitten/components'
import * as Animatable from 'react-native-animatable'

import {
  View,
  Image
} from 'react-native'
import { Images } from '../../../assets'
import { styles } from './user-introduction.style'

const Introduction = (props) => {
  const [animationSignup, setAnimation] = useState(null)
  const [show, setShow] = useState(false)

  const onIndexChanged = (index) => {
    if (index == 3) {
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
        <Text style={{ ...styles.buttonWrapper, color: '#C7BBD9' }}>
          Sebelumnya
        </Text>
      }>
      <IntroPage
        imageType={Images.Intro1}
        titles='Pengajar yang Berkompeten'
        description='Diajarkan oleh ustadz/ustadzah yang berpengalaman serta profesional dibidangnya'
      />
      <IntroPage
        imageType={Images.Intro2}
        titles="Belajar Alqur'an Jadi Lebih Mudah"
        description='Diajarkan oleh ustadz/ustadzah yang berpengalaman serta profesional dibidangnya'
      />
      <IntroPage
        imageType={Images.Intro3}
        titles='Mendapatkan Pembinaan Berkelanjutan'
        description='Memiliki media konsultasi secara langsung dengan ustadz/ustadzah pengajar (personal konsultasi, webinar dan grup chat)'
      />
      <View style={styles.slide}>
        <View style={styles.header}>
          <Image source={Images.Intro4} style={styles.image} />
        </View>
        <View style={styles.footer}>
          <Text style={styles.title1}>Sertifikat Penilaian Hasil Belajarmu</Text>
          <Text style={styles.title2}>
          Mendapatkan sertifikat nilai dan evaluasi hasil belajarmu untuk semua member
          </Text>
          {show ? (
            <Animatable.View
              delay={100}
              useNativeDriver
              animation={animationSignup}>
              <Button
                style={styles.btnSwiper}
                onPress={() => props.navigation.navigate('Register')}>
                <Text style={styles.btnText}>Register</Text>
              </Button>
            </Animatable.View>
          ) : null}
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
  imageType : PropTypes.object,
  description : PropTypes.string,
}

export default Introduction
