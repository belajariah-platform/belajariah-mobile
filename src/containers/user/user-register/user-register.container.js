import * as Yup from 'yup'
import { useFormik } from 'formik'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import React, { useState, useEffect } from 'react'
import NetInfo from '@react-native-community/netinfo'
import { GoogleSignin } from '@react-native-community/google-signin'

import {
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native'

import {
  Icon,
  Text,
  CheckBox
} from '@ui-kitten/components'

import {
  Loader,
  Alerts,
  Topbar,
  TextBox,
  Buttons,
  ModalNoConnection
} from '../../../components'

import { UserAPI } from '../../../api'
import { Images } from '../../../assets'
import { styles } from './user-register.style'
import { Config } from '../../../api/config'
import { Linking } from 'react-native'
import { SIGN_IN } from '../../../action'
import { Response, askPermission } from '../../../utils'

const Register = (props) => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const [checked, setChecked] = useState(false)
  const [connectStatus, setconnectStatus] = useState(false)
  const [secureTextEntry, setSecureTextEntry] = useState(true)
  const togglemodalNoConnection = () => setconnectStatus(!connectStatus)

  useEffect(() => {
    askPermission()
    GoogleSignin.configure({
      offlineAccess: true,
      forceCodeForRefreshToken: true,
      scopes: [`${Config.GOOGLE_SCOPES}`],
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

  const FormSubmit = useFormik({
    initialValues: {
      Email: '', Password: '',
      Full_Name: '', Phone: '' },
    validationSchema: Yup.object({
      Full_Name: Yup.string().required('nama harus diisi'),
      Phone: Yup.string().required('nomor telepon harus diisi'),
      Email: Yup.string()
        .email('Masukan email yang valid')
        .required('Email harus diisi'),
      Password: Yup.string()
        .min(8, 'Password minimal 8 karakter')
        .required('Password harus diisi'),
    }),
    onSubmit: async (values, form) => {
      if (checked === true) {
        if (values.Phone.charAt(0) == '0') {
          Alerts(false, 'Format nomor telepon tidak sesuai')
        } else {
          try {
            setLoading(true)
            values.Phone = Number('62' + values.Phone)
            const response = await UserAPI.SignUp(values)
            if (!response.data.result) {
              setLoading(false)
              Alerts(false, response.data.message)
            } else {
              form.resetForm()
              setLoading(false)
              props.navigation.navigate('UserVerify')
            }
          } catch (err) {
            setLoading(false)
            NetInfo.fetch().then(res => {
              setconnectStatus(!res.isConnected)
            })
            return err
          }
        }
      }
    },
  })

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry)
  }

  const handleOpenWeb = async (type) => {
    let url
    switch(type) {
    case 'termsconditions':
      url = Config.TERMS_CONDITIONS_URL
      break
    case 'privacypolicy':
      url = Config.PRIVACY_POLICY_URL
      break
    default:
      alert('null')
    }

    const supported = await Linking.canOpenURL(url)

    if(supported) {
      await Linking.openURL(url)
    } else {
      alert('Maaf, halaman tidak dapat dibuka')
    }
  }

  const renderIcon = props => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'} />
    </TouchableWithoutFeedback>
  )


  return (
    <>
      {loading && <Loader loading={loading}/>}
      <ModalNoConnection
        isVisible={connectStatus}
        retry={() => togglemodalNoConnection()}
        backdropPress={() => togglemodalNoConnection()}
        backButtonPress={() => togglemodalNoConnection()}
      />
      <Topbar title='Daftar' backIcon={true} />
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator ={false}>
          <Image source={Images.Register} style={styles.image} resizeMode={'contain'}/>
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
                  <Text style={styles.TxtGoogleButton}>Sign up with Google</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View>
              <Text style={styles.anotherText}>Atau</Text>
            </View>
          <View>
            <Text style={styles.text}>Nama Lengkap</Text>
            <TextBox
              error
              name='Full_Name'
              form={FormSubmit}
              placeholder='Nama Lengkap'
            />
            <Text style={styles.text}>Alamat Email</Text>
            <TextBox
              form={FormSubmit}
              AutoCapital='none'
              name='Email'
              placeholder='Masukan email'
            />
            <Text style={styles.text}>Nomor Telepon</Text>
            <View style={{ flexDirection : 'row' }}>
              <TextBox
                disabled
                placeholder='+62'
                customStyle={styles.phoneOne}
                keyboardType={'numeric'}
              />
              <TextBox
                form={FormSubmit}
                name='Phone'
                customStyle={styles.phoneTwo}
                placeholder='Masukan Nomor Telepon'
                keyboardType={'numeric'}
              />
            </View>
            <Text style={styles.text}>Password</Text>
            <TextBox
              form={FormSubmit}
              name='Password'
              placeholder='Masukan Password'
              accessoryRight={renderIcon}
              secureTextEntry={secureTextEntry}
            />
            <CheckBox
              style={styles.checkbox}
              status='primary'
              checked={checked}
              onChange={nextChecked => setChecked(nextChecked)}>
              {
                <Text style={styles.textCheckbox}>
                  Saya menyetujui
                  <TouchableWithoutFeedback onPress={() => handleOpenWeb('privacypolicy')}>
                    <Text style={styles.textCheckBox2}> Kebijakan Pribadi </Text>
                  </TouchableWithoutFeedback>
                  <Text>dan</Text>
                  <TouchableWithoutFeedback onPress={() => handleOpenWeb('termsconditions')}>
                    <Text style={styles.textCheckBox2}> Syarat Ketentuan </Text>
                  </TouchableWithoutFeedback>
                  oleh Tim Belajariah
                </Text>
              }
            </CheckBox>
            <Buttons onPress={FormSubmit.handleSubmit} title='Daftar' />
            <View
              style={styles.footer}>
              <Text style={styles.textBackToLogin}>Sudah punya akun ?</Text>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('Login')}>
                <Text style={styles.backToLogin}> Masuk</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  )
}

Register.propTypes = {
  navigation : PropTypes.object
}

export default Register
