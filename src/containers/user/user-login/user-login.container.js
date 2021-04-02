import * as Yup from 'yup'
import { useFormik } from 'formik'
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
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
  statusCodes,
  GoogleSignin,
} from '@react-native-community/google-signin'

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

  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId: '534998452385-ipfkf6enogkk6j3c69dj35qjf2q9n29l.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      // hostedDomain: '', // specifies a hosted domain restriction
      // loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
      forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
      //accountName: '', // [Android] specifies an account name on the device that should be used
      // iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
      //googleServicePlistPath: '', // [iOS] optional, if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
    })
  }, [])

  const renderIcon = props => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'} />
    </TouchableWithoutFeedback>
  )

 const signIn = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    console.log(userInfo)
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      // user cancelled the login flow
    } else if (error.code === statusCodes.IN_PROGRESS) {
      // operation (e.g. sign in) is in progress already
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      // play services not available or outdated
    } else {
      // some other error happened
    }
    console.log(error)
  }
};

  return (
    <>
      <Topbar title='Masuk' backIcon={false} />
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator ={false}>
          <Image source={Images.Login} style={styles.image} resizeMode={'cover'}/>
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
                props.navigation.navigate('ChangePassword')}
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
                onPress={signIn}
              >
                <Image
                  source={Images.Google}
                  style={styles.ImageIconStyle}
                />
                <View>
                  <Text style={styles.TxtGoogleButton}>Sign in with Google</Text>
                </View>
              </TouchableOpacity>
              {/* <TouchableOpacity style={styles.anotherLogin} activeOpacity={0.6}>
                <Image
                  source={Images.Fb}
                  style={{ ...styles.ImageIconStyle, width: 24, height: 24 }}
                />
              </TouchableOpacity> */}
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
