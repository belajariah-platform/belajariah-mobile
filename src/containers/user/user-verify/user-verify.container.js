import * as Yup from 'yup'
import PropTypes from 'prop-types'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { Text } from '@ui-kitten/components'
import { View, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { styles } from './user-verify.style'
import { Topbar, Loader, Buttons, TextBox } from '../../../components'

const UserVerify = () => {
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
          props.navigation.navigate('ConfirmPassword')
        }
      } catch (err) {
        return err
      }
      setLoading(false)
    },
  })

  return (
    <>
      <Topbar title='lorem ipsum lorem ipsum' backIcon={true} />
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ marginTop: 30 }}>
            <Text style={styles.content}>
            lorem ipsum lorem ipsum
            </Text>
            <Text style={styles.text}>Masukkan kode verifikasi</Text>
            <TextBox
              placeholder='Kode Verifikasi'
            />
            <Buttons title='Verifikasi' onPress={() => navigation.navigate('UserVerify')}/>
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