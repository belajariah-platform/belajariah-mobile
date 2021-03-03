import * as Yup from 'yup'
import PropTypes from 'prop-types'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { Text } from '@ui-kitten/components'
import { View, ScrollView } from 'react-native'

import { styles } from './user-change-password.style'
import { Topbar, Loader, Buttons, TextBox } from '../../../components'

const ChangePassword = (props) => {
  const [loading, setLoading] = useState(false)
  const [success] = useState(true)

  const FormSubmit = useFormik({
    initialValues: { email: '' },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Masukan email yang valid')
        .required('Email harus diisi'),
    }),
    onSubmit: () => {
      setLoading(true)
      try {
        if (success === true) {
          props.navigation.navigate('UserVerifyPassword')
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
              name='email'
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
