import * as Yup from 'yup'
import { useFormik } from 'formik'
import PropTypes from 'prop-types'
import React, { useState } from 'react'

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
  Buttons
} from '../../../components'

import { Images } from '../../../assets'
import { styles } from './user-register.style'

const Register = (props) => {
  const [success] = useState(true)
  const [loading, setLoading] = useState(false)
  const [checked, setChecked] = useState(false)
  const [secureTextEntry, setSecureTextEntry] = useState(true)

  const FormSubmit = useFormik({
    initialValues: { name: '', email: '', no_hp: '', password: '' },
    validationSchema: Yup.object({
      name: Yup.string().required('nama harus diisi'),
      no_hp: Yup.string().required('nomor telepon harus diisi'),
      email: Yup.string()
        .email('Masukan email yang valid')
        .required('Email harus diisi'),
      password: Yup.string()
        .min(8, 'password minimal 8 karakter')
        .required('Passoword harus diisi'),
    }),
    onSubmit: (values, form) => {
      if (checked === true) {
        try {
          setLoading(true)
          if (success === true) {
            form.resetForm()
            Alerts('Success', 'Registrasi user berhasil', () =>
              props.navigation.navigate('Login'),
            )
          }
        } catch (err) {
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
      {loading && <Loader loading={loading} setLoading={setLoading} />}
      <Topbar title='Daftar' backIcon={true} />
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator ={false}>
          <Image source={Images.Register} style={styles.image}/>
          <View style={{ marginTop: 30 }}>
            <Text style={styles.text}>Nama Lengkap</Text>
            <TextBox
              form={FormSubmit}
              error
              name='name'
              placeholder='Nama Lengkap'
            />
            <Text style={styles.text}>Alamat Email</Text>
            <TextBox
              form={FormSubmit}
              name='email'
              placeholder='Masukan email'
            />
            <Text style={styles.text}>Nomor Telepon</Text>
            <TextBox
              form={FormSubmit}
              name='no_hp'
              placeholder='Masukan Nomor Telepon'
              keyboardType={'numeric'}
            />
            <Text style={styles.text}>Password</Text>
            <TextBox
              form={FormSubmit}
              name='password'
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
