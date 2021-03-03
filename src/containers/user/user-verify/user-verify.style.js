import { StyleSheet } from 'react-native'
import { Color, FontSize, FontType } from '../../../assets'

const styles = StyleSheet.create({
  container : {
    flex: 9,
    marginTop: 3,
    paddingHorizontal : 30,
    backgroundColor: Color.white,
  },
  content: {
    lineHeight: 19,
    marginBottom: 30,
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
  leftText: {
    marginTop: -10,
    marginBottom: 20,
    textAlign: 'right',
    color: Color.purpleText,
    fontFamily: FontType.regular,
    fontSize: FontSize.smallMedium,
  },
})

export { styles }