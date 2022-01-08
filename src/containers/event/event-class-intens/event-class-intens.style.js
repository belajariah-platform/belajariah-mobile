import { StyleSheet, Dimensions } from 'react-native'
import { Color, FontSize, FontType } from '../../../assets'

const { height }  = Dimensions.get('window')

const styles = StyleSheet.create({
  flexFullBg: {
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
      color: Color.white,
      fontSize: FontSize.large,
      fontFamily: FontType.bold,
  },
  textRequired: {
    color: Color.red,
    fontSize: FontSize.small,
    fontFamily: FontType.bold,
  },
  Content : {
      alignSelf: 'auto',
      paddingHorizontal: 20,
  },
  ModalContainer : {
      width: '100%',
      height:height/3.2
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
  },
  flexFull: {
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor : Color.softPink,
  },
  iconBack: {
    marginTop: 0,
  },
  semiBox: {
    height: 16,
    marginTop: 0,
    width: '100%',
    marginBottom: -6,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: Color.softPink,
  },
  HeaderClass : {
    zIndex: 1,
    height: 186,
    width: '100%',
  },
  flexHeader: {
    paddingBottom: 16,
    alignItems: 'center',
    flexDirection: 'row',
  },
  textTitleWhite: {
    color: Color.white,
    fontFamily: FontType.bold,
    fontSize: FontSize.mediumLarge,
  },
  ViewButton: {
    marginLeft: '2%',
    marginRight: '3%',
  },
  StyleBtn: {
    height: 50,
    borderRadius: 22,
    alignItems: 'center',
    // backgroundColor: '#13A98B',
  },
  StyleTxtBtn: {
    fontSize: 16,
    marginLeft: 10,
  },
  containerHeaderProfile : {
    backgroundColor: Color.purpleButton,
  },
  cardStyle: {
    elevation: 0,
    marginTop: 0,
    width: 'auto',
    height: 'auto',
    borderWidth : 0,
    backgroundColor: Color.softPink,
  },
  TxtTitleDesc: {
    marginBottom: 20,
    color: Color.black,
    fontFamily: FontType.bold,
    fontSize: FontSize.medium,
  },
  TxtDesc: {
    lineHeight: 18,
    color: Color.black,
    textAlign: 'justify',
    fontFamily: FontType.regular,
    fontSize: FontSize.smallMedium,
  },
  containerText: {
    marginTop: 4,
    marginBottom: 5,
    color: Color.black,
    fontSize: FontSize.small,
    fontFamily: FontType.regular,
  },
  StyleInputB: {
    borderRadius: 5,
    borderWidth: 0,
    borderColor: '#BDBDBD33',
    backgroundColor: '#BDBDBD60',
  },
  containerRadio: {
    marginBottom: 16,
  },
  containerInputRadio: {
    marginLeft: 1,
    marginRight: 15,
  },
  phoneOne : { 
    width : '28%', 
    borderWidth: 0,
    borderRadius: 5,
    marginRight : '2%',
    borderColor: '#BDBDBD33',
    backgroundColor: '#BDBDBD60',
  },
  phoneTwo : { 
    width : '70%',
    borderWidth: 0,
    borderRadius: 5,
    borderColor: '#BDBDBD33',
    backgroundColor: '#BDBDBD60',
  },
  checkbox: {
    marginTop: 18,
    paddingLeft: 4,
  },
  textCheckbox: {
    lineHeight: 19,
    color: Color.black,
    fontFamily : FontType.regular,
    fontSize: FontSize.smallMedium,
  },
  textCheckBox2: {
    color: Color.purpleText,
    fontFamily: FontType.regular,
    fontSize: FontSize.smallMedium,
  },
  containerHeaderProfile : {
    backgroundColor: Color.purpleMedium,
  },
  flexHeaderInProfile: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flexHeaderProfile: {
    paddingBottom: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  semiBoxProfile: {
    height: 12,
    width: '100%',
    borderTopLeftRadius: 26,
    borderTopRightRadius: 26,
    backgroundColor: Color.softPink,
  },
  textTitleHeader: {
    color: Color.white,
    fontFamily: FontType.bold,
    fontSize: FontSize.mediumLarge,
  },
  iconBackProfile: {
    marginTop: 0,
  },
  ViewNoRegis: {
    marginTop: '50%',
    alignItems: 'center',
  }
})

export default styles
