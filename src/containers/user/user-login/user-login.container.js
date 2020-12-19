import * as Yup from 'yup'
import {useFormik} from 'formik'
import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {Icon, Text} from '@ui-kitten/components';

import {userLogin} from '../../../Redux/Action/userAction';

import {  
  View,
  Image, 
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native'

import {
    Topbar,
    Buttons,
    TextBox
} from '../../../components'

import { Images, Color } from '../../../assets'
import { styles } from './user-login.style'

const Login = (props) => {
  const dispatch = useDispatch()
  const [success] = useState(true)
  const [loading, setLoading] = useState(false)
  const [secureTextEntry, setSecureTextEntry] = useState(true)

  const FormSubmit = useFormik({
    initialValues: {email: '', password: ''},
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Masukan email yang valid')
        .required('Email harus diisi'),
      password: Yup.string()
        .required('Passoword harus diisi'),
    }),
    onSubmit:  (values, form) => {
      setLoading(true);
      try {
        const response =  dispatch(userLogin(values));
        if (success === true) {
        }
      } catch (err) {
        if (err.response) {
        }
      }
      setLoading(false);
    },
  });

  const load = () => {
    setInterval(function() {
      setLoading(false);
    }, 2000);
    setLoading(true);
  };
  
  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };
  
  const renderIcon = props => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'} />
    </TouchableWithoutFeedback>
  )

  return (
    <>
      <Topbar title="Login" backIcon={false} />
       <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator ={false}>
          <Images.Login.default style={styles.image} />
          <View style={{marginTop: 30}}>
            <Text style={styles.text}>Alamat Email</Text>
            <TextBox
              form={FormSubmit}
              name="email"
              placeholder="Alamat Email"
            />
            <Text style={styles.text}>Kata Sandi</Text>
            <TextBox
              form={FormSubmit}
              name="password"
              placeholder="Kata Sandi"
              accessoryRight={renderIcon}
              secureTextEntry={secureTextEntry}
            />
            <TouchableOpacity
              onPress={() => props.navigation.navigate('ChangePassword')}>
              <Text style={styles.LupaSandi}>Lupa kata sandi ?</Text>
            </TouchableOpacity>

            <Buttons onPress={FormSubmit.handleSubmit} title="Login" />
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
              }}>
              <Text style={{color: Color.textBasic, fontSize: 14}}>
                Belum punya akun ?
              </Text>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('Introduction')}>
                <Text style={styles.backToRegister}> Daftar</Text>
              </TouchableOpacity>
            </View>
            <View>
              <Text style={styles.anotherText}>Atau</Text>
            </View>
            <View style={{flexDirection: 'row', alignSelf: 'center'}}>
              <TouchableOpacity
                style={styles.anotherLogin}
                activeOpacity={0.6}
                onPress={() => load()}
              >
                <Image
                  source={Images.Google}
                  style={styles.ImageIconStyle}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.anotherLogin} activeOpacity={0.6}>
                <Image
                  source={Images.Fb}
                  style={{...styles.ImageIconStyle, width: 24, height: 24}}
                />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  )
}

export default Login
