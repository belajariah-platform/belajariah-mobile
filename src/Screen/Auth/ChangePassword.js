import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import {Text, Button} from '@ui-kitten/components';
import {bgColor, textBold, textBasic} from '../../Components/Color';
import InputText from '../../Components/InputText';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import Loader from '../../Components/Loader';
import TopNavigator from '../../Components/TopNavigator';

function ChangePassword(props) {
  const [loading, setLoading] = React.useState(false);
  const [success] = React.useState(true);

  const FormLogin = useFormik({
    initialValues: {email: ''},
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Masukan email yang valid')
        .required('Email harus diisi'),
    }),
    onSubmit: (values, form) => {
      setLoading(true);
      try {
        if (success === true) {
          props.navigation.navigate('ConfirmPassword');
        }
      } catch (error) {}
      setLoading(false);
    },
  });

  return (
    <>
      {loading && <Loader loading={loading} setLoading={setLoading} />}
      <TopNavigator title="Lupa Kata Sandi" />
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
              Silahkan masukan alamat email yang terdaftar di Belajariah dan
              kami akan mengirimkan instruksi untuk mengganti kata sandi kamu.
            </Text>
            <Text style={style.text}>Alamat Email</Text>
            <InputText
              form={FormLogin}
              name="email"
              placeholder="Alamat Email"
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

export default ChangePassword;

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
