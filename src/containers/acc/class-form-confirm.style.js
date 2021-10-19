import { StyleSheet, Dimensions } from 'react-native'
import { Color, FontSize, FontType } from '../../assets'

const { height }  = Dimensions.get('window')

const styles = StyleSheet.create({
  flexFull: {
    flex: 1,
    backgroundColor : Color.bgColorPurple,
  },
  ViewIcon: {
      marginTop: '50%',
      alignItems: 'center',
  },
  styleIcon: {
      width: 56,
      height: 38,
  },
  TxtIcon: {
    //   letterSpacing: 1,
      color: Color.white,
      fontSize: FontSize.large,
      fontFamily: FontType.bold,
  },
  Content : {
      alignSelf: 'auto',
      paddingHorizontal: 20,
  },
  ModalContainer : {
      width: '100%',
      height:height/3,
  },
  StyleBtn: {
      height: 50,
      marginTop: '10%',
      borderRadius: 22,
      alignItems: 'center',
  },
  StyleTxtBtn: {
      fontSize: 16,
  },
  TxtMod: {
      color: Color.black,
      textAlign: 'center',
      fontSize: FontSize.medium,
      fontFamily: FontType.regular,
  },
  TxtModBld: {
      color: Color.purpleText,
      fontSize: FontSize.medium,
      fontFamily: FontType.bold,
  },
  ViewTouch: {
      alignItems: 'center',
  },
  ViewTxtTouch: {
      justifyContent: 'center',
      textAlign: 'center',
      alignItems: 'center',
      flexDirection: 'row',
  }
})

export default styles
