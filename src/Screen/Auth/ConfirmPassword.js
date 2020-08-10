import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import {Icon, Text, Button} from '@ui-kitten/components';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import Loader from '../../Components/Loader';
import TopNavigator from '../../Components/TopNavigator';
import Alert from '../../Components/Alert';
import InputText from '../../Components/InputText';
import Buttons from '../../Components/Button';
import {FontType} from '../../Themes/Fonts';
import {Color} from '../../Themes/Colors';

function ConfirmPassword(props) {
  const [success] = React.useState(true);
  const [loading, setLoading] = React.useState(false);
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);

  const FormLogin = useFormik({
    initialValues: {email: '', password: '', confirm_password: ''},
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Masukan email yang valid')
        .required('Email harus diisi'),
      password: Yup.string()
        .min(8, 'password minimal 8 karakter')
        .required('Passoword harus diisi'),
      confirm_password: Yup.string()
        .oneOf([Yup.ref('password')], 'konfirmasi kata sandi tidak sama')
        .required('Passoword harus diisi'),
    }),
    onSubmit: (values, form) => {
      setLoading(true);
      try {
        if (success === true) {
          form.resetForm();
          Alert('Success', 'Kata sandi berhasil diubah', () =>
            props.navigation.navigate('Login'),
          );
        } else {
        }
      } catch (err) {}
      setLoading(false);
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
      <TopNavigator title="Ubah Kata Sandi" backIcon={true} />
      <View
        style={{
          backgroundColor: 'white',
          flex: 9,
          marginTop: 3,
        }}>
        <ScrollView style={{paddingHorizontal: 20}}>
          <View style={{marginTop: 30}}>
            <Text style={style.content}>
              Silahkan masukkan kata sandi baru untuk dikonfirmasi oleh
              belajariah.
            </Text>
            <Text style={style.text}>Alamat Email</Text>
            <InputText
              form={FormLogin}
              name="email"
              placeholder="Alamat Email"
            />
            <Text style={style.text}>Kata Sandi</Text>
            <InputText
              form={FormLogin}
              name="password"
              placeholder="Kata Sandi"
              accessoryRight={renderIcon}
              secureTextEntry={secureTextEntry}
            />
            <Text style={style.text}>Konfirmasi Kata Sandi</Text>
            <InputText
              form={FormLogin}
              name="confirm_password"
              placeholder="Konfirmasi Kata Sandi"
              accessoryRight={renderIcon}
              secureTextEntry={secureTextEntry}
            />

            <Buttons onPress={FormLogin.handleSubmit} title="Reset" />
          </View>
        </ScrollView>
      </View>
    </>
  );
}

export default ConfirmPassword;

const style = StyleSheet.create({
  content: {
    color: Color.textBasic,
    fontSize: 14,
    lineHeight: 18,
    marginBottom: 30,
  },
  image: {
    width: '65%',
    height: 140,
    alignSelf: 'center',
    marginTop: 30,
  },
  text: {
    marginTop: 5,
    marginBottom: 3,
    fontSize: 14,
    color: Color.textBasic,
    fontFamily: FontType.semiBold,
  },
});
