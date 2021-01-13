import * as Yup from 'yup'
import { useFormik } from 'formik'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Icon, Text } from '@ui-kitten/components'

import {
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native'

import {
  Topbar,
  Buttons,
  TextBox
} from '../../../components'

import { UserAPI } from '../../../api'
import { Images } from '../../../assets'
import { styles } from './user-login.style'

const Login = (props) => {
  const dispatch = useDispatch()
  const [success] = useState(true)
  const [secureTextEntry, setSecureTextEntry] = useState(true)

  const FormSubmit = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Masukan email yang valid')
        .required('Email harus diisi'),
      password: Yup.string()
        .required('Passoword harus diisi'),
    }),
    onSubmit:  (values) => {
      try {
        const response =  dispatch(UserAPI.SignIn(values))
        if (success === true) {
          return response
        }
      } catch (err) {
        return err
      }
    },
  })

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry)
  }

  const renderIcon = props => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'} />
    </TouchableWithoutFeedback>
  )

  return (
    <>
      <Topbar title='Masuk' backIcon={false} />
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator ={false}>
          <Image source={Images.Login} style={styles.image} />
          <View style={{ marginTop: 30 }}>
            <Text style={styles.text}>Alamat Email</Text>
            <TextBox
              name='email'
              form={FormSubmit}
              placeholder='Alamat Email'
            />
            <Text style={styles.text}>Kata Sandi</Text>
            <TextBox
              name='password'
              form={FormSubmit}
              placeholder='Kata Sandi'
              accessoryRight={renderIcon}
              secureTextEntry={secureTextEntry}
            />
            <TouchableOpacity
              onPress={() => props.navigation.navigate('ChangePassword')}>
              <Text style={styles.forgotPassword}>Lupa kata sandi ?</Text>
            </TouchableOpacity>

            <Buttons onPress={FormSubmit.handleSubmit} title='Masuk' />
            <View style={styles.nothaveAccount}>
              <Text style={styles.nothaveAccountText}>
                Belum punya akun ?
              </Text>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('Introduction')}>
                <Text style={styles.backToRegister}> Daftar</Text>
              </TouchableOpacity>
            </View>
            <View>
              <Text style={styles.anotherText}>Atau</Text>
            </View>
            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
              <TouchableOpacity
                style={styles.anotherLogin}
                activeOpacity={0.6}
              >
                <Image
                  source={Images.Google}
                  style={styles.ImageIconStyle}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.anotherLogin} activeOpacity={0.6}>
                <Image
                  source={Images.Fb}
                  style={{ ...styles.ImageIconStyle, width: 24, height: 24 }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  )
}


Login.propTypes = {
  navigation : PropTypes.object
}

export default Login
