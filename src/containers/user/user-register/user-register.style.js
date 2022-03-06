import { StyleSheet } from 'react-native'

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import { Color, FontSize, FontType } from '../../../assets'

const styles = StyleSheet.create({
  container : {
    flex: 9,
    marginTop: 3,
    paddingHorizontal: 30,
    backgroundColor: Color.white,
  },
  image: {
    marginTop: 30,
    marginBottom: 16,
    height: hp('23'),
    width: wp('57.5'),
    alignSelf: 'center',
  },
  button: {
    width: '100%',
    marginTop: 20,
    borderWidth: 0,
    marginBottom: 10,
    borderRadius: 20,
    alignSelf: 'center',
    backgroundColor: Color.purpleButton,
  },
  text: {
    marginTop: 5,
    marginBottom: 3,
    color: Color.greyHeadInput,
    fontFamily: FontType.regular,
    fontSize: FontSize.smallMedium,
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
  textCountry : {
    color: Color.greyInput,
    fontFamily : FontType.regular,
    fontSize: FontSize.smallPoint,
  },
  textCheckBox2: {
    color: Color.purpleText,
    fontFamily: FontType.regular,
    fontSize: FontSize.smallMedium,
  },
  backToLogin: {
    fontSize: FontSize.small,
    marginBottom: 30,
    color: Color.purpleText,
    fontFamily: FontType.regular,
  },
  textBackToLogin: {
    color: Color.black,
    fontSize: FontSize.small,
    fontFamily: FontType.regular,
  },
  footer : {
    alignSelf: 'center',
    flexDirection: 'row',
  },
  phoneOne : { width : '24%', marginRight : '2%' },
  phoneTwo : { width : '55%' },
  anotherLogin: {
    height: 50,
    padding: 9,
    width: '100%',
    elevation: 1,
    marginTop: 15,
    borderWidth: 0,
    marginBottom: 24,
    borderRadius: 30,
    borderColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 27,
    justifyContent: 'center',
    backgroundColor: Color.greyHintBG,
  },
  ImageIconStyle: {
    width: 32,
    height: 32,
    resizeMode: 'stretch',
  },
  ImageFlag: {
    width: 40,
    height: 28,
    resizeMode: 'stretch',
  },
  TxtGoogleButton: {
    marginRight: 5,
    marginLeft: 15,
    fontSize: FontSize.mediumLarge,
  },
  anotherText: {
    marginTop: 0,
    marginBottom: 24,
    textAlign: 'center',
    fontSize: FontSize.small,
    color: Color.greyHintText,
  },
  containerCountry : {
    width:'80%', 
    alignItems:'center', 
    alignSelf: 'center',
    flexDirection:'row', 
    justifyContent:'space-between', 
  },
  divider : {
    height: 1, 
    width: '80%', 
    marginTop:10, 
    alignSelf: 'center', 
    backgroundColor: Color.greyMedium, 
  },
  inputCountry : {
    height: 40,
    width: '40%', 
    borderWidth: 1, 
    marginRight: 10,
    borderRadius:20, 
    alignItems: 'center',
    justifyContent: 'center', 
    borderColor: Color.greyInput, 
  }
})

export { styles }