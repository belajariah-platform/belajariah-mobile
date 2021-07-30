import * as Yup from 'yup'
import PropTypes from 'prop-types'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { Text } from '@ui-kitten/components'
import { View, ScrollView } from 'react-native'
import NetInfo from '@react-native-community/netinfo'

import {
  Alerts,
  Topbar,
  Loader,
  Buttons,
  TextBox,
  ModalNoConnection
} from '../../../components'

import { UserAPI } from '../../../api'
import { styles } from './user-check-email.style'

const ChangePassword = (props) => {
  const [loading, setLoading] = useState(false)
  const [connectStatus, setconnectStatus] = useState(false)
  const togglemodalNoConnection = () => setconnectStatus(!connectStatus)


  const FormSubmit = useFormik({
    initialValues: { Email: '' },
    validationSchema: Yup.object({
      Email: Yup.string()
        .email('Masukan email yang valid')
        .required('Email harus diisi'),
    }),
    onSubmit: async (values, form) => {
      try {
        setLoading(true)
        const response = await UserAPI.CheckEmail(values.Email)
        if (response.data.result.ID != 0) {
          form.resetForm()
          props.navigation.navigate('UserVerifyPassword')
        } else {
          Alerts(false, 'Email tidak ditemukan')
        }
        setLoading(false)
      } catch (err) {
        NetInfo.fetch().then(res => {
          setconnectStatus(!res.isConnected)
        })
        setLoading(false)
        return err
      }
    },
  })

  return (
    <>
      <ModalNoConnection
        isVisible={connectStatus}
        backdropPress={togglemodalNoConnection}
      />
      <Loader loading={loading}/>
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
              name='Email'
              form={FormSubmit}
              AutoCapital='none'
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
