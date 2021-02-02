import * as Yup from 'yup'
import PropTypes from 'prop-types'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { Text, Icon } from '@ui-kitten/components'
import { useNavigation } from '@react-navigation/native'

import {
  View,
  Image,
  ScrollView,
  TouchableWithoutFeedback
} from 'react-native'

import { Images } from '../../../assets'
import { Topbar, Loader, Buttons, TextBox } from '../../../components'

import { styles } from './user-confirm-password.style'


const ConfirmPassword = () => {
  const navigation = useNavigation()
  const [loading, setLoading] = useState(false)
  const [secureTextEntry, setSecureTextEntry] = useState(true)
  const [success] = useState(true)

  const FormSubmit = useFormik({
    initialValues: { password: '', confirm_password: '' },
    validationSchema: Yup.object({
      password: Yup.string()
        .min(8, 'Password minimal 8 karakter')
        .required('Password harus diisi'),
      confirm_password: Yup.string()
        .oneOf([Yup.ref('password')], 'Konfirmasi password tidak sama')
        .required('Password harus diisi'),
    }),
    onSubmit: () => {
      setLoading(true)
      try {
        if (success === true) {
          navigation.navigate('UserVerify')
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
      {loading && <Loader loading={loading} setLoading={setLoading} />}
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
              name='password'
              form={FormSubmit}
              placeholder='Password Baru'
              accessoryRight={renderIcon}
              secureTextEntry={secureTextEntry}
            />
            <Text style={styles.text}>Konfirmasi Password</Text>
            <TextBox
              name='confirm_password'
              form={FormSubmit}
              placeholder='Konfirmasi Password'
              accessoryRight={renderIcon}
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