import { StyleSheet } from 'react-native'
import { Color, FontSize, FontType } from '../../assets'

const styles = StyleSheet.create({
  iconBack: {
    marginTop: 0,
  },
  containerMain: {
    flex: 1,
    backgroundColor: Color.softPink,
  },
  containerHeader: {
    backgroundColor: Color.transactionBgColor,
  },
  containerScrollView: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  flexHeader: {
    paddingBottom: 16,
    alignItems: 'center',
    flexDirection: 'row',
  },
  semiBox: {
    height: 16,
    width: '100%',
    marginTop: -16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: Color.softPink,
  },
  textTitleWhite: {
    color: Color.white,
    fontFamily: FontType.bold,
    fontSize: FontSize.mediumLarge,
  },
  containerSetting: {
    marginBottom: '10%',
  },
  containerTopTitle: {
    marginTop : 10,
    marginBottom : 15,
    flexDirection: 'row',
    marginHorizontal: 20,
  },
  title: {
    marginBottom : 5,
    color: Color.black,
    fontFamily: FontType.bold,
    fontSize: FontSize.large,
  },
  imgHeading: {
    width: '100%',
    height: 205,
    alignSelf : 'center',
  },
  viewParagraph: {
    marginVertical: 5,
    marginHorizontal: 20,
  },
  textParagraph: {
    lineHeight : 17,
    marginBottom : 15,
    color: Color.black,
    fontFamily: FontType.regular,
    fontSize: FontSize.smallMedium,
  },
  textTitleBold: {
    marginTop : 5,
    lineHeight : 17,
    marginBottom : 10,
    color: Color.black,
    fontFamily: FontType.bold,
    fontSize: FontSize.mediumLarge,
  },
  textSubtitleBold: {
    lineHeight : 17,
    marginBottom : 10,
    color: Color.black,
    fontFamily: FontType.bold,
    fontSize: FontSize.small,
  },
  textSubpoint: {
    marginLeft:15,
    lineHeight : 17,
    marginBottom : 10,
    color: Color.black,
    fontFamily: FontType.regular,
    fontSize: FontSize.small,
  },
  textParagraphContact : { marginLeft : 10 },
  containerContactUs : { flexDirection : 'row', alignItems : 'center', marginVertical : 5 },
})

export default styles