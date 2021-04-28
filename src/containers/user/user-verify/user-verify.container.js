import * as Yup from 'yup'
import PropTypes from 'prop-types'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { Text } from '@ui-kitten/components'
import { View, ScrollView } from 'react-native'
import NetInfo from '@react-native-community/netinfo'
import { useNavigation } from '@react-navigation/native'

import {
  Alerts,
  Topbar,
  Loader,
  Buttons,
  TextBox,
  ModalNoConnection,
} from '../../../components'
import { UserAPI } from '../../../api'
import { styles } from './user-verify.style'

const UserVerify = () => {
  const navigation = useNavigation()
  // const item = props.route.params

  const [loading, setLoading] = useState(false)
  const [connectStatus, setconnectStatus] = useState(false)
  const togglemodalNoConnection = () => setconnectStatus(!connectStatus)

  const FormSubmit = useFormik({
    initialValues: { Verified_Code: '', Email : '' },
    validationSchema: Yup.object({
      Verified_Code: Yup.string()
        .required('Kode verifikasi harus diisi'),
    }),
    onSubmit: async (values, form) => {
      try {
        setLoading(true)
        const response = await UserAPI.VerifyAccount(values)
        if (!response.data.result) {
          Alerts(response.data.result, response.data.message)
        } else {
          form.resetForm()
          navigation.navigate('Login')
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

  // const resetVerification = async (email) => {
  //   try {
  //     if (email != '') {
  //       const values = { Email : email }
  //       const response = await UserAPI.ResetVerification(values)
  //       if (!response.data.result) {
  //         //
  //       }
  //     }
  //   } catch (err) {
  //     return err
  //   }
  // }

  return (
    <>
      <Loader loading={loading}/>
      <ModalNoConnection
        isVisible={connectStatus}
        retry={() => togglemodalNoConnection()}
        backdropPress={() => togglemodalNoConnection()}
        backButtonPress={() => togglemodalNoConnection()}
      />
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
              name='Verified_Code'
              form={FormSubmit}
              placeholder='Kode Verifikasi'
            />
            {/* <TouchableOpacity
              onPress={() => resetVerification(item.Email)}>
              <Text style={styles.leftText}>Reset kode verifikasi</Text>
            </TouchableOpacity> */}
            <Buttons title='Verifikasi'
              onPress={FormSubmit.handleSubmit}/>
          </View>
        </ScrollView>
      </View>
    </>
  )
}


UserVerify.propTypes = {
  route : PropTypes.object,
  navigation : PropTypes.object
}

export default UserVerify