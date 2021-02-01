import * as Yup from 'yup'
import PropTypes from 'prop-types'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { Text } from '@ui-kitten/components'
import { View, ScrollView, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { styles } from './user-confirm-password.style'
import { Topbar, Loader, Buttons, TextBox } from '../../../components'
import {Images} from '../../../assets'
 

const ConfirmPassword = () => {
  const navigation = useNavigation()

  return (
    <>
      <Topbar title='Setel Ulang Kata Sandi' backIcon={true} />
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ marginTop: 30 }}>
            <Image source={Images.ImgLupaPassword} style={styles.image} />
            <Text style={styles.content}>
              Silahkan masukan kata sandi baru anda
            </Text>
            <Text style={styles.text}>Password Baru</Text>
            <TextBox
              placeholder='Password Baru'
            />
            <Text style={styles.text}>Konfirmasi Password</Text>
            <TextBox
              placeholder='Konfirmasi Password'
            />
            <Buttons title='Ubah' onPress={() => navigation.navigate('UserVerify')}/>
          </View>
        </ScrollView>
      </View>
    </>
  )
}

ConfirmPassword.propTypes = {
  navigation : PropTypes.object
}

export default ConfirmPassword