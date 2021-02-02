import * as Yup from 'yup'
import PropTypes from 'prop-types'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Text } from '@ui-kitten/components'
import { View, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { Topbar, Loader, Buttons, TextBox } from '../../../components'
import { styles } from './user-verify.style'

const UserVerify = () => {
  const navigation = useNavigation()
  const { isLogin } = useSelector((state) => state.UserReducer)

  const [loading, setLoading] = useState(false)
  const [success] = useState(true)

  const FormSubmit = useFormik({
    initialValues: { verify_code: '' },
    validationSchema: Yup.object({
      verify_code: Yup.string()
        .required('Kode verifikasi harus diisi'),
    }),
    onSubmit: () => {
      setLoading(true)
      try {
        if (success === true) {
          navigation.navigate(isLogin ? 'Profile' : 'Login')
        }
      } catch (err) {
        return err
      }
      setLoading(false)
    },
  })

  return (
    <>
      {loading && <Loader loading={loading} setLoading={setLoading} />}
      <Topbar title='Verifikasi Akun' backIcon={true} />
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ marginTop: 30 }}>
            <Text style={styles.content}>
            Kode verifikasi akun dikirim lewat email pengguna.
            Masukkan 8 digit kode di bawah untuk dapat melakukan verifikasi.
            </Text>
            <Text style={styles.text}>Masukkan kode verifikasi</Text>
            <TextBox
              name='verify_code'
              form={FormSubmit}
              placeholder='Kode Verifikasi'
            />
            <Buttons title='Verifikasi'
              onPress={FormSubmit.handleSubmit}/>
          </View>
        </ScrollView>
      </View>
    </>
  )
}


UserVerify.propTypes = {
  navigation : PropTypes.object
}

export default UserVerify