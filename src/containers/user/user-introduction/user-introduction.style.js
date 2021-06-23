import { StyleSheet } from 'react-native'

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import { Color, FontSize, FontType } from '../../../assets'


const styles = StyleSheet.create({
  slide: {
    flex: 1,
    backgroundColor: Color.white,
  },
  header: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    flex: 1,
    marginTop: 50,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: wp('100%'),
    height: hp('42'),
  },
  title1: {
    marginTop: -70,
    color: Color.black,
    textAlign: 'center',
    fontSize: FontSize.large,
    fontFamily: FontType.semiBold,
  },
  title2: {
    marginTop: 8,
    lineHeight: 18,
    textAlign: 'center',
    fontSize: FontSize.small,
    color: Color.greyHintText,
    fontFamily : FontType.regular,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 5,
    backgroundColor: Color.purpleHint,
  },
  activeDot: {
    width: 20,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 5,
    backgroundColor: Color.purpleButton,
  },
  wrapper: {
    marginTop: '82%',
    paddingHorizontal: 30,
    backgroundColor: Color.transparent,
  },
  buttonWrapper: {
    marginTop: 22,
    display: 'none',
    color: Color.purpleText,
    fontSize: FontSize.small,
  },
  btnSwiper: {
    width: 100,
    marginTop: 20,
    borderWidth: 0,
    borderRadius: 20,
    backgroundColor: Color.purpleButton,
  },
})

export { styles }
