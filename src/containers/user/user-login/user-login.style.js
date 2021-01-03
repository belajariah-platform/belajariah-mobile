import { StyleSheet } from 'react-native'


import {
  Color,
  FontSize,
  FontType
} from '../../../assets'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'

const styles = StyleSheet.create({
  container : {
    flex: 9,
    marginTop: 3,
    paddingHorizontal: 30,
    backgroundColor: Color.white,
  },
  image: {
    marginTop: 30,
    width : wp('47%'),
    height : hp('23%'),
    alignSelf: 'center',
  },
  text: {
    marginTop: 5,
    marginBottom: 3,
    color: Color.greyHeadInput,
    fontFamily: FontType.semiBold,
    fontSize: FontSize.smallMedium,
  },
  backToRegister: {
    marginBottom: 30,
    color: Color.purpleText,
    fontFamily: FontType.regular,
    fontSize: FontSize.smallMedium,
  },
  anotherText: {
    marginTop: 5,
    marginBottom: 10,
    textAlign: 'center',
    fontSize: FontSize.small,
    color: Color.greyHintText,
  },
  anotherLogin: {
    width: 50,
    height: 50,
    padding: 9,
    marginTop: 15,
    borderWidth: 0,
    marginBottom: 30,
    borderRadius: 100,
    borderColor: '#fff',
    alignItems: 'center',
    marginHorizontal: 27,
    backgroundColor: Color.greyHintBG,
  },
  ImageIconStyle: {
    margin: 5,
    width: 22,
    height: 22,
    resizeMode: 'stretch',
  },
  forgotPassword: {
    marginTop: -10,
    marginBottom: 20,
    textAlign: 'right',
    color: Color.purpleText,
    fontFamily: FontType.regular,
    fontSize: FontSize.smallMedium,
  },
  nothaveAccount : {
    alignSelf: 'center',
    flexDirection: 'row',
  },
  nothaveAccountText : {
    color: Color.black,
    fontFamily: FontType.regular,
    fontSize: FontSize.smallMedium,
  }
})

export { styles }
