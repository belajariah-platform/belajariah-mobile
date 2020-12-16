import {StyleSheet} from 'react-native'
import {
    Color, 
    FontType
} from '../../../assets'

const styles = StyleSheet.create({
    container : {
      backgroundColor: 'white',
      flex: 9,
      marginTop: 3,
      paddingHorizontal: 30
    },
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
      color: Color.textHint,
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

export {styles}
  