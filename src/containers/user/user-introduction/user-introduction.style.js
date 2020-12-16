import {StyleSheet} from 'react-native'
import {Color, FontType} from '../../../assets'


const styles = StyleSheet.create({
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
      marginTop: 50,
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
      color: Color.textHintContent,
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
      marginTop: 22,
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
  
export {styles}
