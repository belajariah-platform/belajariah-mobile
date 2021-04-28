import * as Yup from 'yup'
import { useFormik } from 'formik'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import NetInfo from '@react-native-community/netinfo'

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

const Register = (props) => {
  const [loading, setLoading] = useState(false)
  const [checked, setChecked] = useState(false)
  const [connectStatus, setconnectStatus] = useState(false)
  const [secureTextEntry, setSecureTextEntry] = useState(true)
  const togglemodalNoConnection = () => setconnectStatus(!connectStatus)

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
        const value = ({ ...values, Phone : parseInt(values.Phone) })
        if (values.Phone.toString().charAt(0) == 0) {
          Alerts(false, 'Format nomor tidak sesuai')
        } else {
          try {
            console.log(value)
            setLoading(true)
            const response = await UserAPI.SignUp(value)
            console.log(response)
            if (!response.data.result) {
              Alerts(false, response.data.message)
            } else {
              form.resetForm()
              Alerts(true, 'Pendaftaran berhasil silahkan verifikasi akun kamu', () =>
                props.navigation.navigate('UserVerify'),
              )
            }
            setLoading(false)
          } catch (err) {
            NetInfo.fetch().then(res => {
              setconnectStatus(!res.isConnected)
            })
            setLoading(false)
            return err
          }
        }
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
      <ModalNoConnection
        isVisible={connectStatus}
        retry={() => togglemodalNoConnection()}
        backdropPress={() => togglemodalNoConnection()}
        backButtonPress={() => togglemodalNoConnection()}
      />
      <Loader loading={loading}/>
      <Topbar title='Daftar' backIcon={true} />
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator ={false}>
          <Image source={Images.Register} style={styles.image}/>
          <View style={{ marginTop: 30 }}>
            <Text style={styles.text}>Nama Lengkap</Text>
            <TextBox
              error
              name='Full_Name'
              form={FormSubmit}
              placeholder='Nama Lengkap'
            />
            <Text style={styles.text}>Alamat Email</Text>
            <TextBox
              name='Email'
              form={FormSubmit}
              placeholder='Masukan email'
            />
            <Text style={styles.text}>Nomor Telepon</Text>
            <View style={{ flexDirection : 'row' }}>
              <TextBox
                disabled={true}
                placeholder='+62'
                customStyle={{ width : 70, marginRight : 10 }}
              />
              <TextBox
                name='Phone'
                form={FormSubmit}
                keyboardType={'numeric'}
                customStyle={{ flex : 1 }}
                placeholder='Masukan Nomor Telepon'
              />
            </View>
            <Text style={styles.text}>Password</Text>
            <TextBox
              name='Password'
              form={FormSubmit}
              placeholder='Masukan Password'
              accessoryRight={renderIcon}
              secureTextEntry={secureTextEntry}
            />
            <CheckBox
              status='primary'
              checked={checked}
              style={styles.checkbox}
              onChange={nextChecked => setChecked(nextChecked)}>
              {
                <Text style={styles.textCheckbox}>
                  Saya menyetujui
                  <TouchableWithoutFeedback>
                    <Text style={styles.textCheckBox2}> Kebijakan Pribadi </Text>
                  </TouchableWithoutFeedback>
                  <Text>dan</Text>
                  <TouchableWithoutFeedback>
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
