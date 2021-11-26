import * as Yup from 'yup'
import { useFormik } from 'formik'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { Icon, Text } from '@ui-kitten/components'
import React, { useEffect, useState } from 'react'
import NetInfo from '@react-native-community/netinfo'
import { GoogleSignin } from '@react-native-community/google-signin'

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
  Loader,
  Buttons,
  TextBox,
  ModalNoConnection,
} from '../../../components'

import { UserAPI } from '../../../api'
import { Images } from '../../../assets'
import { SIGN_IN } from '../../../action'
import { Config } from '../../../api/config'
import { Response, askPermission } from '../../../utils'

import { styles } from './user-login.style'

const Login = (props) => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const [connectStatus, setconnectStatus] = useState(false)
  const [secureTextEntry, setSecureTextEntry] = useState(true)

  const toggleSecureEntry = () => setSecureTextEntry(!secureTextEntry)
  const togglemodalNoConnection = () => setconnectStatus(!connectStatus)

  const FormSubmit = useFormik({
    initialValues: { Email: '', Password: '' },
    validationSchema: Yup.object({
      Email: Yup.string()
        .email('Masukan email yang valid')
        .required('Email harus diisi'),
      Password: Yup.string()
        .required('Passoword harus diisi'),
    }),
    onSubmit: async (values) => {
      try {
        setLoading(true)
        const response = await UserAPI.SignIn(values)
        if (response.status === Response.SUCCESS) {
          if (!response.data.result) {
            Alerts(response.data.result, response.data.message)
          } else {
            await dispatch({
              type: SIGN_IN,
              token : response.data.token,
              user: response.data.data,
              loginType : 'manual'
            })
          }
        } else {
          NetInfo.fetch().then(res => {
            setconnectStatus(!res.isConnected)
          })
        }
        setLoading(false)
      } catch (err) {
        setLoading(false)
        return err
      }
    },
  })

  useEffect(() => {
    askPermission()
    GoogleSignin.configure({
      offlineAccess: true,
      forceCodeForRefreshToken: true,
      // scopes: [`${Config.GOOGLE_SCOPES}`],
      webClientId: `${Config.GOOGLE_CLIENT}`,
    })
  }, [])

  const googleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices()
      const userInfo = await GoogleSignin.signIn()
      // console.log(userInfo)
      if (Object.keys(userInfo).length != 0 ) {
        const values = {
          Email : userInfo.user.email,
          Password : userInfo.user.id,
          Full_Name : userInfo.user.name,
        }
        setLoading(true)
        const response = await UserAPI.GoogleSignIn(values)
        // console.log(response.data)
        if (response.data.result) {
          await dispatch({
            type: SIGN_IN,
            token : response.data.token,
            user: response.data.data,
            loginType : 'google'
          })
        } else {
          UserAPI.GoogeSignOut()
        }
      }
      setLoading(false)
    } catch (error) {
      // console.log(error)
      NetInfo.fetch().then(res => {
        setconnectStatus(!res.isConnected)
      })
      setLoading(false)
      return error
    }
  }

  const renderIcon = props => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'} />
    </TouchableWithoutFeedback>
  )

  return (
    <>
      <Loader loading={loading}/>
      <Topbar title='Masuk' backIcon={false} />
      <ModalNoConnection
        isVisible={connectStatus}
        retry={() => togglemodalNoConnection()}
        backdropPress={() => togglemodalNoConnection()}
        backButtonPress={() => togglemodalNoConnection()}
      />
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator ={false}>
          <Image source={Images.Login} style={styles.image} resizeMode={'contain'}/>
          <View style={{ marginTop: 30 }}>
            <Text style={styles.text}>Alamat Email</Text>
            <TextBox
              name='Email'
              form={FormSubmit}
              AutoCapital='none'
              placeholder='Alamat Email'
            />
            <Text style={styles.text}>Kata Sandi</Text>
            <TextBox
              name='Password'
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
                onPress={googleSignIn}
              >
                <Image
                  source={Images.Google}
                  style={styles.ImageIconStyle}
                />
                <View>
                  <Text style={styles.TxtGoogleButton}>Sign in with Google</Text>
                </View>
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
