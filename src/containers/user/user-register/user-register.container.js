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
        values.Phone = Number('62' + values.Phone)
        try {
          setLoading(true)
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
          NetInfo.fetch().then(res => {
            setconnectStatus(!res.isConnected)
          })
          return err
        }
        setLoading(false)
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
              form={FormSubmit}
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
