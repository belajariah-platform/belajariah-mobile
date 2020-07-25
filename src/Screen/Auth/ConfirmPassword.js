import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Icon, Text, Button} from '@ui-kitten/components';
import BGLogin from '../../Helpers/Image/login.png';
import {bgColor, textBold, textBasic} from '../../Components/Color';
import InputText from '../../Components/InputText';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import Loader from '../../Components/Loader';
import TopNavigator from '../../Components/TopNavigator';
import Alert from '../../Components/Alert';

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
      <TopNavigator title="Ubah Kata Sandi" />
      <View
        style={{
          backgroundColor: 'white',
          flex: 9,
          marginTop: 3,
        }}>
        <ScrollView style={{paddingHorizontal: 20}}>
          <View style={{marginTop: 30}}>
            <Text
              style={{
                color: textBasic,
                fontSize: 14,
                lineHeight: 18,
                marginBottom: 30,
              }}>
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

            <Button style={style.button} onPress={FormLogin.handleSubmit}>
              Kirim
            </Button>
          </View>
        </ScrollView>
      </View>
    </>
  );
}

export default ConfirmPassword;

const style = StyleSheet.create({
  image: {
    width: '65%',
    height: 140,
    alignSelf: 'center',
    marginTop: 30,
  },
  button: {
    marginTop: 5,
    marginBottom: 10,
    backgroundColor: bgColor,
    borderWidth: 0,
    borderRadius: 20,
    width: '100%',
    alignSelf: 'center',
  },
  text: {
    marginTop: 5,
    marginBottom: 3,
    fontSize: 14,
    color: textBasic,
    fontWeight: '700',
  },
});
