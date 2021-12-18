import * as Yup from 'yup'
import { Form, useFormik } from 'formik'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import React, { useState, useEffect } from 'react'
import NetInfo from '@react-native-community/netinfo'
import { GoogleSignin } from '@react-native-community/google-signin'

import {
  View,
  Image,
  FlatList,
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
  ModalInfo,
  ModalNoConnection
} from '../../../components'

import { Linking } from 'react-native'
import { SIGN_IN } from '../../../action'
import { Config } from '../../../api/config'
import { styles } from './user-register.style'
import { Images } from '../../../assets'

import { UserAPI, CountryCodeAPI } from '../../../api'
import { Response, askPermission } from '../../../utils'

const Register = (props) => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const [checked, setChecked] = useState(false)
  const [countryCode, setCountryCode] = useState([])
  const [modalVisible, setModalVisible] = useState(false)
  const [connectStatus, setconnectStatus] = useState(false)
  const [secureTextEntry, setSecureTextEntry] = useState(true)

  const toggleModal = () => setModalVisible(!modalVisible)
  const togglemodalNoConnection = () => setconnectStatus(!connectStatus)

  const googleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices()
      const userInfo = await GoogleSignin.signIn()
      if (Object.keys(userInfo).length != 0 ) {
        const values = {
          Email : userInfo.user.email,
          Password : userInfo.user.id,
          Full_Name : userInfo.user.name,
        }
        setLoading(true)
        const response = await UserAPI.GoogleSignIn(values)
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
      NetInfo.fetch().then(res => {
        setconnectStatus(!res.isConnected)
      })
      setLoading(false)
      return error
    }
  }

  const fetchDataCountryCode = async () => {
    try {
      const response = await CountryCodeAPI.GetAllCountryCode()
      if (response.status === Response.SUCCESS) {
        setCountryCode(response?.data?.message?.data ?? [])
      } 
    } catch (err) {
      return err
    }
  }

  const FormSubmit = useFormik({
    initialValues: {
      Email: '', 
      Password: '',
      Full_Name: '', 
      Phone: '', 
      Country_Number_Code: '',
      Flag: '',
    },
    validationSchema: Yup.object({
      Full_Name: Yup.string().required('nama harus diisi'),
      Phone: Yup.number().required('nomor telepon harus diisi'),
      Email: Yup.string()
        .email('Masukan email yang valid')
        .required('Email harus diisi'),
      Password: Yup.string()
        .min(8, 'Password minimal 8 karakter')
        .required('Password harus diisi'),
    }),
    onSubmit: async (values, form) => {
      console.log(values.Phone)
      if (checked === true) {
        if (values.Phone.charAt(0) == '0') {
          Alerts(false, 'Format nomor telepon tidak sesuai')
        } else if (values.Country_Number_Code == '') {
          Alerts(false, 'Kode negara belum dipilih')
        } else {
          try {
            setLoading(true)
            data = {
              Email: values.Email, 
              Password: values.Password,
              Full_Name: values.Full_Name, 
              Phone: Number(values.Phone), 
              Country_Number_Code: values.Country_Number_Code,
            }
            const response = await UserAPI.SignUp(data)
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

  const dataCountryCode = props => {
       return (
        <TouchableOpacity 
          style={{marginBottom: 20}} 
          onPress={() => {
             FormSubmit.setFieldValue('Flag', props.flag)
             FormSubmit.setFieldValue('Country_Number_Code', props.code)
             setModalVisible(false)
          }}
          >
          <View style={styles.containerCountry}>
            <Image
                source={{uri : props.flag}}
                style={styles.ImageFlag}
            />
            <Text>{props.country}</Text>
            <Text style={styles.textCountry}>+{props.number_code}</Text>
          </View>
            <View style={styles.divider}/>
        </TouchableOpacity>
      )
    }

  useEffect(() => {
    askPermission()
    GoogleSignin.configure({
      offlineAccess: true,
      // forceCodeForRefreshToken: true,
      // scopes: [`${Config.GOOGLE_SCOPES}`],
      webClientId: `${Config.GOOGLE_CLIENT}`,
    })
    fetchDataCountryCode()
  }, [])

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
              <TouchableOpacity 
                  onPress={toggleModal} 
                  style={styles.inputCountry}
                >
              <View>
                {FormSubmit.values['Flag'] == '' ? 
                <Text style={styles.textCountry}>Kode Negara</Text> 
                : 
                <View style={{flexDirection: 'row'}}>
                <Image
                  source={{uri : FormSubmit.values['Flag']}}
                  style={{width:38, height:22}}  
              />
              </View>}
              </View>
              </TouchableOpacity>
              <TextBox
                form={FormSubmit}
                name='Phone'
                customStyle={styles.phoneTwo}
                placeholder='Nomor Telepon'
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
        <ModalInfo
          isVisible={modalVisible}
          containerStyle={{height:'70%'}}
          backdropPress={() => toggleModal()}
          backButtonPress={() => toggleModal()}
          renderItem={
            <View style={{paddingTop:40}}>
               <FlatList
                  data={countryCode}
                  style={{ width:'100%' }}
                  onEndReachedThreshold={0.1}
                  showsVerticalScrollIndicator ={false}
                  contentContainerStyle={{ paddingBottom: 20 }}
                  keyExtractor={(item, index) =>  index.toString()}
                  renderItem={({ item, index }) => dataCountryCode(item, index)}
                />
            </View>
          }
        />
      </View>
    </>
  )
}

Register.propTypes = {
  navigation : PropTypes.object
}

export default Register
