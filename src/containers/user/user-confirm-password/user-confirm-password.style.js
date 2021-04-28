import { StyleSheet } from 'react-native'
import { Color, FontSize, FontType } from '../../../assets'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'

const styles = StyleSheet.create({
  container : {
    flex: 9,
    marginTop: 3,
    paddingHorizontal : 30,
    backgroundColor: Color.white,
  },
  image: {
    marginBottom: 15,
    width : wp('65%'),
    height : hp('26%'),
    alignSelf: 'center',
  },
  content: {
    lineHeight: 19,
    marginBottom: 25,
    color: Color.black,
    fontSize: FontSize.medium,
    fontFamily: FontType.regular,
  },
  text: {
    marginTop: 5,
    marginBottom: 3,
    color: Color.greyHeadInput,
    fontFamily: FontType.semiBold,
    fontSize: FontSize.smallMedium,
  },
})

export { styles }