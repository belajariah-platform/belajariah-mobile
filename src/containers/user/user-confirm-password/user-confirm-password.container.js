import * as Yup from 'yup'
import PropTypes from 'prop-types'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { Text, Icon } from '@ui-kitten/components'
import NetInfo from '@react-native-community/netinfo'
import { useNavigation } from '@react-navigation/native'

import {
  View,
  Image,
  Alerts,
  ScrollView,
  TouchableWithoutFeedback
} from 'react-native'
import {
  Topbar,
  Loader,
  Buttons,
  TextBox,
  ModalNoConnection,
} from '../../../components'

import { UserAPI } from '../../../api'
import { Images } from '../../../assets'

import { styles } from './user-confirm-password.style'


const ConfirmPassword = (props) => {
  const navigation = useNavigation()
  const item = props.route.params

  const [loading, setLoading] = useState(false)
  const [connectStatus, setconnectStatus] = useState(false)
  const [secureTextEntry, setSecureTextEntry] = useState(true)
  const [secureTextEntryConfirmPassword, setSecureTextEntryConfirmPassword] = useState(true)
  const togglemodalNoConnection = () => setconnectStatus(!connectStatus)

  const FormSubmit = useFormik({
    initialValues: { Password: '', Confirm_Password: '', Email : item },
    validationSchema: Yup.object({
      Password: Yup.string()
        .min(8, 'Password minimal 8 karakter')
        .required('Password harus diisi'),
      Confirm_Password: Yup.string()
        .oneOf([Yup.ref('Password')], 'Konfirmasi password tidak sama')
        .required('Password harus diisi'),
    }),
    onSubmit: async (values, form) => {
      try {
        setLoading(true)
        const response = await UserAPI.ChangePasswordPublic(values)
        if (!response.data.result) {
          Alerts(response.data.result, response.data.error)
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

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry)
  }

  const toggleSecureEntryConfirmPassword = () => {
    setSecureTextEntryConfirmPassword(!secureTextEntryConfirmPassword)
  }

  const renderIcon = props => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'} />
    </TouchableWithoutFeedback>
  )

  const renderIconConfirmPassword = props => (
    <TouchableWithoutFeedback onPress={toggleSecureEntryConfirmPassword}>
      <Icon {...props} name={secureTextEntryConfirmPassword ? 'eye-off' : 'eye'} />
    </TouchableWithoutFeedback>
  )

  return (
    <>
      <ModalNoConnection
        isVisible={connectStatus}
        retry={() => togglemodalNoConnection()}
        backdropPress={() => togglemodalNoConnection()}
        backButtonPress={() => togglemodalNoConnection()}
      />
      <Loader loading={loading}/>
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
              name='Password'
              form={FormSubmit}
              placeholder='Password Baru'
              accessoryRight={renderIcon}
              secureTextEntry={secureTextEntry}
            />
            <Text style={styles.text}>Konfirmasi Password</Text>
            <TextBox
              form={FormSubmit}
              name='Confirm_Password'
              accessoryRight={renderIconConfirmPassword}
              placeholder='Konfirmasi Password'
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

ConfirmPassword.propTypes = {
  route : PropTypes.object,
  navigation : PropTypes.object
}

export default ConfirmPassword