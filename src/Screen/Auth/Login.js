import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Icon, Text} from '@ui-kitten/components';
import BGLogin from '../../Helpers/Image/login.png';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {useDispatch} from 'react-redux';
import {userLogin} from '../../Redux/Action/userAction';
import Alert from '../../Components/Alert';
import Buttons from '../../Components/Button';
import Loader from '../../Components/Loader';
import TopNavigator from '../../Components/TopNavigator';
import InputText from '../../Components/InputText';
import {FontType} from '../../Themes/Fonts';
import {Color} from '../../Themes/Colors';

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
      <TopNavigator title="Login" backIcon={false} />
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
            <TouchableOpacity
              onPress={() => props.navigation.navigate('ChangePassword')}>
              <Text style={style.LupaSandi}>Lupa kata sandi ?</Text>
            </TouchableOpacity>

            <Buttons onPress={FormLogin.handleSubmit} title="Login" />
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
              }}>
              <Text style={{color: Color.textBasic, fontSize: 14}}>
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
    width: '53%',
    height: 142,
    alignSelf: 'center',
    marginTop: 30,
  },

  text: {
    fontFamily: FontType.semiBold,
    marginTop: 5,
    marginBottom: 3,
    fontSize: 14,
    color: Color.textBasic,
  },
  backToRegister: {
    color: Color.textBold,
    fontSize: 14,
    fontFamily: FontType.semiBold,
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
    color: Color.textBold,
    fontSize: 13,
    fontFamily: FontType.semiBold,
    marginBottom: 20,
    marginTop: -10,
    textAlign: 'right',
  },
});
