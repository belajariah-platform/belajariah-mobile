import * as Yup from 'yup'
import PropTypes from 'prop-types'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { Text } from '@ui-kitten/components'
import { useNavigation } from '@react-navigation/native'

import {
  View,
  ScrollView,
  TouchableOpacity,
}
  from 'react-native'
import {
  Alerts,
  Topbar,
  Loader,
  Buttons,
  TextBox,
} from '../../../components'

import { UserAPI } from '../../../api'
import { styles } from './user-verify.style'

const UserVerifyPassword = () => {
  const navigation = useNavigation()
  const [loading, setLoading] = useState(false)

  const FormSubmit = useFormik({
    initialValues: { Verified_Code: '' },
    validationSchema: Yup.object({
      Verified_Code: Yup.string()
        .required('Kode verifikasi harus diisi'),
    }),
    onSubmit: async (values, form) => {
      setLoading(true)
      try {
        const response = await UserAPI.VerifyPassword(values)
        if (!response.data.result) {
          setLoading(false)
          Alerts(response.data.result, response.data.message)
        } else {
          form.resetForm()
          setLoading(false)
          navigation.navigate('ConfirmPassword')
        }
      } catch (err) {
        return err
      }
      setLoading(false)
    },
  })

  const resetVerification = async (email) => {
    try {
      const response = await UserAPI.ResetVerification(email)
      if (!response.data.result) {
        //
      }
    } catch (err) {
      return err
    }
  }

  return (
    <>
      {loading && <Loader loading={loading}/>}
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
              form={FormSubmit}
              name='Verified_Code'
              placeholder='Kode Verifikasi'
            />
            <TouchableOpacity
              onPress={() => resetVerification()}>
              <Text style={styles.leftText}>Reset kode verifikasi</Text>
            </TouchableOpacity>
            <Buttons title='Verifikasi'
              onPress={FormSubmit.handleSubmit}/>
          </View>
        </ScrollView>
      </View>
    </>
  )
}


UserVerifyPassword.propTypes = {
  navigation : PropTypes.object
}

export default UserVerifyPassword