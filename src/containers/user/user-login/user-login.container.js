import * as Yup from 'yup'
import { useFormik } from 'formik'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Icon, Text } from '@ui-kitten/components'
// import { GoogleSignin, GoogleSigninButton } from '@react-native-community/google-signin'

import {
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native'

import {
  Alerts,
  Topbar,
  Buttons,
  TextBox
} from '../../../components'

import { UserAPI } from '../../../api'
import { Images } from '../../../assets'
import { SIGN_IN } from '../../../action'
import { Response } from '../../../utils'
import { styles } from './user-login.style'

// GoogleSignin.configure({
//   webClientId : '',
//   offlineAccess : true
// })

const Login = (props) => {
  const dispatch = useDispatch()
  // const [googleInfo, setGoogleInfo] = useState({})
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
    onSubmit: async (values) => {
      try {
        const response =   await UserAPI.SignIn(values)
        if (response.status === Response.SUCCESS) {
          if (!response.data.result) {
            Alerts(response.data.result, response.data.message)
          } else {
            await dispatch({
              type: SIGN_IN,
              token : response.data.token,
              user: response.data.data,
            })
          }
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
              onPress={() => {
                FormSubmit.resetForm()
                props.navigation.navigate('CheckEmail')}
              }>
              <Text style={styles.forgotPassword}>Lupa kata sandi ?</Text>
            </TouchableOpacity>

            <Buttons onPress={FormSubmit.handleSubmit} title='Masuk' />
            <View style={styles.nothaveAccount}>
              <Text style={styles.nothaveAccountText}>
                Belum punya akun ?
              </Text>
              <TouchableOpacity
                onPress={() => {
                  FormSubmit.resetForm()
                  props.navigation.navigate('Introduction')
                }}>
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
