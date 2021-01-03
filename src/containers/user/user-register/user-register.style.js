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
  }
})

export { styles }