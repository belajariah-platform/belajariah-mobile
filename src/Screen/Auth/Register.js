import React from 'react';
import {
  View,
  ScrollView,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import {Icon, Text, CheckBox} from '@ui-kitten/components';
import BGRegister from '../../Helpers/Image/register.png';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {Color} from '../../Themes/Colors';
import {FontType} from '../../Themes/Fonts';
import Loader from '../../Components/Loader';
import TopNavigator from '../../Components/TopNavigator';
import Alert from '../../Components/Alert';
import InputText from '../../Components/InputText';
import Buttons from '../../Components/Button';

function Register(props) {
  const [success] = React.useState(true);
  const [loading, setLoading] = React.useState(false);
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);
  const [checked, setChecked] = React.useState(false);

  const FormRegister = useFormik({
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
            Alert('Success', 'Registrasi user berhasil', () =>
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
      <TopNavigator title="Register" backIcon={true} />
      <View
        style={{
          backgroundColor: 'white',
          flex: 9,
          marginTop: 3,
        }}>
        <ScrollView style={{paddingHorizontal: 20}}>
          <Image source={BGRegister} style={style.image} />
          <View style={{marginTop: 30}}>
            <Text style={style.text}>Nama Lengkap</Text>
            <InputText
              form={FormRegister}
              error
              name="name"
              placeholder="Nama Lengkap"
            />
            <Text style={style.text}>Alamat Email</Text>
            <InputText
              form={FormRegister}
              name="email"
              placeholder="Enter Your Email"
            />
            <Text style={style.text}>Nomor Telepon</Text>
            <InputText
              form={FormRegister}
              name="no_hp"
              placeholder="Masukan Nomor Teleponmu"
              keyboardType={'numeric'}
            />
            <Text style={style.text}>Password</Text>
            <InputText
              form={FormRegister}
              name="password"
              placeholder="Masukan Passwordmu"
              accessoryRight={renderIcon}
              secureTextEntry={secureTextEntry}
            />
            <CheckBox
              style={style.checkbox}
              status="primary"
              checked={checked}
              onChange={nextChecked => setChecked(nextChecked)}>
              {
                <Text style={style.textCheckbox}>
                  Saya menyetujui
                  <TouchableWithoutFeedback>
                    <Text style={style.textCheckBox2}> Kebijakan Pribadi </Text>
                  </TouchableWithoutFeedback>
                  <Text>dan</Text>
                  <TouchableWithoutFeedback>
                    <Text style={style.textCheckBox2}> Syarat Ketentuan </Text>
                  </TouchableWithoutFeedback>
                  oleh Tim Belajariah
                </Text>
              }
            </CheckBox>
            <Buttons onPress={FormRegister.handleSubmit} title="Register" />
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
              }}>
              <Text style={style.textBackToLogin}>Sudah punya akun ?</Text>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('Login')}>
                <Text style={style.backToLogin}> Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
}

export default Register;

const style = StyleSheet.create({
  image: {
    width: '65%',
    height: 140,
    alignSelf: 'center',
    marginTop: 30,
  },
  button: {
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: Color.bgColor,
    borderWidth: 0,
    borderRadius: 20,
    width: '100%',
    alignSelf: 'center',
  },
  text: {
    marginTop: 5,
    marginBottom: 3,
    fontSize: 14,
    color: Color.textBasic,
    fontFamily: FontType.semiBold,
  },
  checkbox: {
    marginTop: 18,
    paddingLeft: 4,
  },
  textCheckbox: {
    fontSize: 14,
    color: Color.textBasic,
  },
  textCheckBox2: {color: Color.textBold, fontSize: 14},
  backToLogin: {
    color: Color.textBold,
    fontSize: 14,
    fontFamily: FontType.semiBold,
    marginBottom: 30,
  },
  textBackToLogin: {color: Color.textBasic, fontSize: 14},
});
