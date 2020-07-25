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
import {useDispatch} from 'react-redux';
import {userLogin} from '../../Redux/Action/userAction';
import Alert from '../../Components/Alert';

function Register(props) {
  const [success] = React.useState(true);
  const [loading, setLoading] = React.useState(false);
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);

  const dispatch = useDispatch();
  const FormLogin = useFormik({
    initialValues: {email: '', password: ''},
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Masukan email yang valid')
        .required('Email harus diisi'),
      password: Yup.string().required('Passoword harus diisi'),
    }),
    onSubmit: async (values, form) => {
      setLoading(true);
      try {
        const response = await dispatch(userLogin(values));
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
  );

  return (
    <>
      {loading && <Loader loading={loading} setLoading={setLoading} />}
      <TopNavigator title="Login" />
      <View
        style={{
          backgroundColor: 'white',
          flex: 9,
          marginTop: 3,
        }}>
        <ScrollView style={{paddingHorizontal: 20}}>
          <Image source={BGLogin} style={style.image} />
          <View style={{marginTop: 30}}>
            <Text style={style.text}>Alamat Email</Text>
            <InputText
              form={FormLogin}
              name="email"
              placeholder="Lamat Email"
            />

            <Text style={style.text}>Kata Sandi</Text>
            <InputText
              form={FormLogin}
              name="password"
              placeholder="Kata Sandi"
              accessoryRight={renderIcon}
              secureTextEntry={secureTextEntry}
            />
            <TouchableOpacity
              onPress={() => props.navigation.navigate('ChangePassword')}>
              <Text style={style.LupaSandi}>Lupa kata sandi ?</Text>
            </TouchableOpacity>

            <Button style={style.button} onPress={FormLogin.handleSubmit}>
              Login
            </Button>
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
              }}>
              <Text style={{color: textBasic, fontSize: 14}}>
                Belum punya akun ?
              </Text>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('Swiper')}>
                <Text style={style.backToRegister}> Register</Text>
              </TouchableOpacity>
            </View>
            <View>
              <Text style={style.anotherText}>Atau</Text>
            </View>
            <View style={{flexDirection: 'row', alignSelf: 'center'}}>
              <TouchableOpacity
                style={style.anotherLogin}
                activeOpacity={0.6}
                onPress={() => load()}>
                <Image
                  source={require('../../Helpers/Image/google.png')}
                  style={style.ImageIconStyle}
                />
              </TouchableOpacity>
              <TouchableOpacity style={style.anotherLogin} activeOpacity={0.6}>
                <Image
                  source={require('../../Helpers/Image/fb.png')}
                  style={{...style.ImageIconStyle, width: 24, height: 24}}
                />
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
    marginTop: 15,
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
  backToRegister: {
    color: textBold,
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  anotherText: {
    marginTop: 5,
    marginBottom: 10,
    fontSize: 14,
    color: '#bbbbbb',
    textAlign: 'center',
  },
  anotherLogin: {
    alignItems: 'center',
    marginHorizontal: 27,
    marginTop: 15,
    marginBottom: 30,
    padding: 9,
    backgroundColor: '#eff3f6',
    borderWidth: 0,
    borderColor: '#fff',
    height: 50,
    width: 50,
    borderRadius: 100,
  },
  ImageIconStyle: {
    margin: 5,
    height: 22,
    width: 22,
    resizeMode: 'stretch',
  },
  LupaSandi: {
    color: textBold,
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: -10,
    textAlign: 'right',
  },
});
