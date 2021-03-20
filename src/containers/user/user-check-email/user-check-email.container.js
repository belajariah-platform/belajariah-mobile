import * as Yup from 'yup'
import PropTypes from 'prop-types'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { Text } from '@ui-kitten/components'
import { View, ScrollView } from 'react-native'

import {
  Alerts,
  Topbar,
  Loader,
  Buttons,
  TextBox,
} from '../../../components'

import { UserAPI } from '../../../api'
import { styles } from './user-check-email.style'

const ChangePassword = (props) => {
  const [loading, setLoading] = useState(false)

  const FormSubmit = useFormik({
    initialValues: { Email: '' },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Masukan email yang valid')
        .required('Email harus diisi'),
    }),
    onSubmit: async (values, form) => {
      setLoading(true)
      try {
        const response = await UserAPI.GetUser(values.Email)
        if (response.data.result.ID == 0) {
          setLoading(false)
          Alerts(false, 'Email tidak ditemukan')
        } else {
          form.resetForm()
          setLoading(false)
          props.navigation.navigate('UserVerify')
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
      <Topbar title='Lupa Kata Sandi' backIcon={true} />
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ marginTop: 30 }}>
            <Text style={styles.content}>
              Silahkan masukan alamat email yang terdaftar di Belajariah dan
              kami akan mengirimkan instruksi untuk mengganti kata sandi kamu.
            </Text>
            <Text style={styles.text}>Alamat Email</Text>
            <TextBox
              form={FormSubmit}
              name='Email'
              placeholder='Alamat Email'
            />
            <Buttons title='Kirim' onPress={FormSubmit.handleSubmit} />
          </View>
        </ScrollView>
      </View>
    </>
  )
}

ChangePassword.propTypes = {
  navigation : PropTypes.object
}

export default ChangePassword
