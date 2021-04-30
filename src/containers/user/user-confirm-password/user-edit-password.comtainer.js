import * as Yup from 'yup'
import PropTypes from 'prop-types'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Text, Icon, } from '@ui-kitten/components'
import NetInfo from '@react-native-community/netinfo'
import { useNavigation } from '@react-navigation/native'

import {
  View,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native'
import {
  Alerts,
  Topbar,
  Loader,
  Buttons,
  TextBox,
  ModalNoConnection
} from '../../../components'

import { UserAPI } from '../../../api'
import { styles } from './user-edit-password.style'

const UserEditPassword = () => {
  const navigation = useNavigation()
  const { userInfo } = useSelector((state) => state.UserReducer)

  const [loading, setLoading] = useState(false)
  const [connectStatus, setconnectStatus] = useState(false)
  const [secureTextEntry, setSecureTextEntry] = useState(true)
  const [secureTextEntryNewPassword, setSecureTextEntryNewPassword] = useState(true)
  const [secureTextEntryConfirmPassword, setSecureTextEntryConfirmPassword] = useState(true)

  const togglemodalNoConnection = () => setconnectStatus(!connectStatus)

  const FormSubmit = useFormik({
    initialValues: {
      Old_Password: '',
      New_Password: '',
      Confirm_Password: '',
      Email : userInfo.Email,
    },
    validationSchema: Yup.object({
      Old_Password: Yup.string()
        .required('Password lama harus diisi'),
      New_Password: Yup.string()
        .required('Password baru harus diisi')
        .min(8, 'Password minimal 8 karakter'),
      Confirm_Password: Yup.string()
        .oneOf([Yup.ref('New_Password')], 'Konfirmasi password tidak sama')
        .required('Konfirmasi password harus diisi'),
    }),
    onSubmit: async (values, form) => {
      try {
        console.log(values)
        setLoading(true)
        const response = await UserAPI.ChangePasswordPrivate(values)
        if (!response.data.result) {
          Alerts(response.data.result, response.data.message)
        } else {
          form.resetForm()
          navigation.navigate('Profil')
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

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry)
  }

  const toggleSecureEntryNewPassword = () => {
    setSecureTextEntryNewPassword(!secureTextEntryNewPassword)
  }

  const toggleSecureEntryConfirmPassword = () => {
    setSecureTextEntryConfirmPassword(!secureTextEntryConfirmPassword)
  }

  const renderIcon = props => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'} />
    </TouchableWithoutFeedback>
  )

  const renderIconNewPassword = props => (
    <TouchableWithoutFeedback onPress={toggleSecureEntryNewPassword}>
      <Icon {...props} name={secureTextEntryNewPassword ? 'eye-off' : 'eye'} />
    </TouchableWithoutFeedback>
  )

  const renderIconConfirmPassword = props => (
    <TouchableWithoutFeedback onPress={toggleSecureEntryConfirmPassword}>
      <Icon {...props} name={secureTextEntryConfirmPassword ? 'eye-off' : 'eye'} />
    </TouchableWithoutFeedback>
  )

  return(
    <>
      <ModalNoConnection
        isVisible={connectStatus}
        retry={() => togglemodalNoConnection()}
        backdropPress={() => togglemodalNoConnection()}
        backButtonPress={() => togglemodalNoConnection()}
      />
      <Loader loading={loading}/>
      <Topbar title='Ubah Password' backIcon={true} />
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ marginTop: 30 }}>
            <Text style={styles.text}>Masukkan password lama</Text>
            <TextBox
              name='Old_Password'
              form={FormSubmit}
              placeholder='Password Lama'
              accessoryRight={renderIcon}
              secureTextEntry={secureTextEntry}
            />
            <Text style={styles.text}>Masukkan password baru</Text>
            <TextBox
              name='New_Password'
              form={FormSubmit}
              placeholder='Password Baru'
              accessoryRight={renderIconNewPassword}
              secureTextEntry={secureTextEntryNewPassword}
            />
            <Text style={styles.text}>Konfirmasi password baru</Text>
            <TextBox
              name='Confirm_Password'
              form={FormSubmit}
              placeholder='Konfirmasi Password Baru'
              accessoryRight={renderIconConfirmPassword}
              secureTextEntry={secureTextEntryConfirmPassword}
            />
            <Buttons title='Ubah Kata Sandi'
              onPress={FormSubmit.handleSubmit}/>
          </View>
        </ScrollView>
      </View>
    </>
  )
}

UserEditPassword.propTypes = {
  navigation : PropTypes.object
}

export default UserEditPassword