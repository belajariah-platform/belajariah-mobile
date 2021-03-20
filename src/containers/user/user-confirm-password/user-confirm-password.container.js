import * as Yup from 'yup'
import PropTypes from 'prop-types'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Text, Icon } from '@ui-kitten/components'
import { useNavigation } from '@react-navigation/native'

import {
  View,
  Image,
  Alerts,
  ScrollView,
  TouchableWithoutFeedback
} from 'react-native'

import { UserAPI } from '../../../api'
import { Images } from '../../../assets'
import { Topbar, Loader, Buttons, TextBox } from '../../../components'

import { styles } from './user-confirm-password.style'


const ConfirmPassword = () => {
  const navigation = useNavigation()
  const { isLogin } = useSelector((state) => state.UserReducer)

  const [loading, setLoading] = useState(false)
  const [secureTextEntry, setSecureTextEntry] = useState(true)

  const FormSubmit = useFormik({
    initialValues: { Password: '', Confirm_Password: '' },
    validationSchema: Yup.object({
      Password: Yup.string()
        .min(8, 'Password minimal 8 karakter')
        .required('Password harus diisi'),
      Confirm_Password: Yup.string()
        .oneOf([Yup.ref('Password')], 'Konfirmasi password tidak sama')
        .required('Password harus diisi'),
    }),
    onSubmit: async (values, form) => {
      setLoading(true)
      try {
        const response = await UserAPI.ChangePassword(values)
        if (!response.data.result) {
          setLoading(false)
          Alerts(response.data.result, response.data.message)
        } else {
          form.resetForm()
          setLoading(false)
          navigation.navigate(isLogin ? 'Profile' : 'Login')
        }
      } catch (err) {
        return err
      }
      setLoading(false)
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
              name='Password'
              form={FormSubmit}
              placeholder='Password Baru'
              accessoryRight={renderIcon}
              secureTextEntry={secureTextEntry}
            />
            <Text style={styles.text}>Konfirmasi Password</Text>
            <TextBox
              form={FormSubmit}
              name='Confirm_Password'
              accessoryRight={renderIcon}
              placeholder='Konfirmasi Password'
              secureTextEntry={secureTextEntry}
            />
            <Buttons title='Ubah'
              onPress={FormSubmit.handleSubmit}/>
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