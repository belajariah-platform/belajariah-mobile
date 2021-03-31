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
    Topbar, 
    Loader, 
    Buttons, 
    TextBox,
 } from '../../../components'
import { styles } from './user-verify.style'

const UserVerifyPassword = () => {
  const navigation = useNavigation()

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
          navigation.navigate('ConfirmPassword')
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
            <TouchableOpacity
              onPress={() => console.log("reset")}>
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