import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Button, Text} from '@ui-kitten/components';
import Swipers from 'react-native-swiper';
import Swiper1 from '../../Helpers/Image/Swiper1.png';
import Swiper2 from '../../Helpers/Image/Swiper2.png';
import Swiper3 from '../../Helpers/Image/Swiper3.png';
import {Color} from '../../Themes/Colors';
import {FontType} from '../../Themes/Fonts';
import * as Animatable from 'react-native-animatable';

function Swiper(props) {
  const [animation_signup, setAnimation] = React.useState(null);
  const [show, setShow] = React.useState(false);

  function onIndexChanged(index) {
    if (index == 4) {
      setAnimation('flipInX');
      setShow(true);
    } else {
      setAnimation(null);
      setShow(false);
    }
  }

  return (
    <Swipers
      loop={false}
      onIndexChanged={index => onIndexChanged(index)}
      dot={<View style={style.dot} />}
      activeDot={<View style={style.activeDot} />}
      showsButtons={true}
      nextButton={<Text style={style.buttonWrapper}>Selanjutnya</Text>}
      prevButton={
        <Text style={{...style.buttonWrapper, color: '#C7BBD9'}}>
          Sebelumnya
        </Text>
      }
      buttonWrapperStyle={style.wrapper}>
      <View style={style.slide}>
        <View style={style.header}>
          <Image source={Swiper1} style={style.image} />
        </View>
        <View style={style.footer}>
          <Text style={style.title1}>Pertama di Indonesia</Text>
          <Text style={style.title2}>
            Layanan bimbingan belajar Agama Islam berbasis digital pertama di
            Indonesia
          </Text>
        </View>
      </View>
      <View style={style.slide}>
        <View style={style.header}>
          <Image source={Swiper2} style={style.image} />
        </View>
        <View style={style.footer}>
          <Text style={style.title1}>Materi Terlengkap</Text>
          <Text style={style.title2}>
            Materi disusun secara terstruktur dan tersistematis sesuai dengan
            panduan di Al-Quran
          </Text>
        </View>
      </View>
      <View style={style.slide}>
        <View style={style.header}>
          <Image source={Swiper2} style={style.image} />
        </View>
        <View style={style.footer}>
          <Text style={style.title1}>Mentor Berkompeten</Text>
          <Text style={style.title2}>
            Memiliki Ustadz/Ustadzah yang berkompeten di bidangnya masing-masing
          </Text>
        </View>
      </View>
      <View style={style.slide}>
        <View style={style.header}>
          <Image source={Swiper2} style={style.image} />
        </View>
        <View style={style.footer}>
          <Text style={style.title1}>Kelas yang bersertifikat</Text>
          <Text style={style.title2}>
            Memiliki Ustadz/Ustadzah yang berkompeten di bidangnya masing-masing
          </Text>
        </View>
      </View>
      <View style={style.slide}>
        <View style={style.header}>
          <Image source={Swiper3} style={style.image} />
        </View>
        <View style={style.footer}>
          <Text style={style.title1}>Belajar Kapanpun dan Dimanapun</Text>
          <Text style={style.title2}>
            Gunakan di rumah, sekolah maupun kantor
          </Text>
          {show ? (
            <Animatable.View
              delay={100}
              useNativeDriver
              animation={animation_signup}>
              <Button
                style={style.btnSwiper}
                onPress={() => props.navigation.navigate('Register')}>
                <Text style={style.btnText}>Register</Text>
              </Button>
            </Animatable.View>
          ) : null}
        </View>
      </View>
    </Swipers>
  );
}
export default Swiper;

const style = StyleSheet.create({
  slide: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: '100%',
    height: 300,
  },
  title1: {
    marginTop: -70,
    color: Color.textBasic,
    fontSize: 19,
    textAlign: 'center',
    fontFamily: FontType.semiBold,
  },
  title2: {
    color: '#4d5d6c',
    fontSize: 13,
    marginTop: 8,
    textAlign: 'center',
    lineHeight: 18,
  },
  dot: {
    backgroundColor: '#C7BBD9',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: Color.bgColor,
    width: 20,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 5,
  },
  wrapper: {
    backgroundColor: 'transparent',
    marginTop: 296,
    paddingHorizontal: 30,
  },
  buttonWrapper: {
    color: Color.textBold,
    fontSize: 14,
  },
  btnSwiper: {
    marginTop: 20,
    backgroundColor: Color.bgColor,
    borderWidth: 0,
    borderRadius: 20,
    width: 100,
  },
  btnText: {
    color: 'white',
    fontSize: 13,
    fontFamily: FontType.bold,
  },
});
