import * as Yup from 'yup'
import React, {useState} from 'react'
import { useFormik } from 'formik'

import { Images } from '../../../assets'
import { styles } from './user-register.style'
import { 
  Loader,
  Alerts,
  Topbar,
  TextBox,
  Buttons
 } from '../../../components'

import {
  View,
  ScrollView, 
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native'

import {
  Icon, 
  Text, 
  CheckBox
} from '@ui-kitten/components'

const Register = (props) => {
  const [success] = useState(true)
  const [loading, setLoading] = useState(false)
  const [checked, setChecked] = useState(false)
  const [secureTextEntry, setSecureTextEntry] = useState(true)

  const FormSubmit = useFormik({
    initialValues: {name: '', email: '', no_hp: '', password: ''},
    validationSchema: Yup.object({
      name: Yup.string().required('nama harus diisi'),
      no_hp: Yup.string().required('nomor telepon harus diisi'),
      email: Yup.string()
        .email('Masukan email yang valid')
        .required('Email harus diisi'),
      password: Yup.string()
        .min(8, 'password minimal 8 karakter')
        .required('Passoword harus diisi'),
    }),
    onSubmit: (values, form) => {
      if (checked === true) {
        try {
          setLoading(true);
          if (success === true) {
            form.resetForm();
            Alerts('Success', 'Registrasi user berhasil', () =>
              props.navigation.navigate('Login'),
            );
          } else {
          }
        } catch (err) {}
        setLoading(false);
      }
    },
  });

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const renderIcon = props => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'} />
    </TouchableWithoutFeedback>
  );


  return (
    <>
      {loading && <Loader loading={loading} setLoading={setLoading} />}
      <Topbar title="Register" backIcon={true} />
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator ={false}>
          <Images.Register.default style={styles.image} />
          <View style={{marginTop: 30}}>
            <Text style={styles.text}>Nama Lengkap</Text>
            <TextBox
              form={FormSubmit}
              error
              name="name"
              placeholder="Nama Lengkap"
            />
            <Text style={styles.text}>Alamat Email</Text>
            <TextBox
              form={FormSubmit}
              name="email"
              placeholder="Enter Your Email"
            />
            <Text style={styles.text}>Nomor Telepon</Text>
            <TextBox
              form={FormSubmit}
              name="no_hp"
              placeholder="Masukan Nomor Teleponmu"
              keyboardType={'numeric'}
            />
            <Text style={styles.text}>Password</Text>
            <TextBox
              form={FormSubmit}
              name="password"
              placeholder="Masukan Passwordmu"
              accessoryRight={renderIcon}
              secureTextEntry={secureTextEntry}
            />
            <CheckBox
              style={styles.checkbox}
              status="primary"
              checked={checked}
              onChange={nextChecked => setChecked(nextChecked)}>
              {
                <Text style={styles.textCheckbox}>
                  Saya menyetujui
                  <TouchableWithoutFeedback>
                    <Text style={styles.textCheckBox2}> Kebijakan Pribadi </Text>
                  </TouchableWithoutFeedback>
                  <Text>dan</Text>
                  <TouchableWithoutFeedback>
                    <Text style={styles.textCheckBox2}> Syarat Ketentuan </Text>
                  </TouchableWithoutFeedback>
                  oleh Tim Belajariah
                </Text>
              }
            </CheckBox>
            <Buttons onPress={FormSubmit.handleSubmit} title="Register" />
            <View
              style={styles.footer}>
              <Text style={styles.textBackToLogin}>Sudah punya akun ?</Text>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('Login')}>
                <Text style={styles.backToLogin}> Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  )
}

export default Register
