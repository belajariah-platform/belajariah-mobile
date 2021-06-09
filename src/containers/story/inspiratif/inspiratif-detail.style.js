import { StyleSheet } from 'react-native'
import { Color, FontSize, FontType } from '../../../assets'

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
  textTitleBlack: {
    marginLeft: 16,
    color: Color.black,
    fontFamily: FontType.bold,
    fontSize: FontSize.mediumLarge,
  },
  containerInspiratif: {
    marginBottom: '10%',
  },
  containerTopTitle: {
    marginTop : 10,
    flexDirection: 'row',
    marginHorizontal: 20,
  },
  TitleBacaan: {
    marginBottom : 5,
    color: Color.black,
    fontFamily: FontType.bold,
    fontSize: FontSize.large,
  },
  TxtTime: {
    color: Color.black,
    fontSize: FontSize.small,
    fontFamily: FontType.regular,
  },
  ImgHeading: {
    height: 176,
    width: '100%',
    alignSelf : 'center',
  },
  TxtSourceImg: {
    color: Color.black,
    fontStyle : 'italic',
    fontSize: FontSize.overSmall,
    fontFamily: FontType.regular,
  },
  TouchText : {
    width : '85%',
    marginTop : -20,
    marginLeft : 10,
    marginBottom : 30,
    alignSelf :'center',
  },
  containerWriter: {
    marginBottom: 10,
    marginHorizontal: 20,
  },
  TxtWriter: {
    color: Color.black,
    fontSize: FontSize.small,
    fontFamily: FontType.bold,
  },
  ViewParagraf: {
    marginVertical: 5,
    marginHorizontal: 20,
  },
  Txtbacaan: {
    lineHeight : 17,
    marginBottom : 15,
    color: Color.black,
    fontFamily: FontType.regular,
    fontSize: FontSize.smallMedium,
  },
  ImgBody: {
    height : 250,
    width: '100%',
    marginBottom : 20,
    borderRadius : 16,
    resizeMode: 'cover',
    backgroundColor : Color.greyMedium
  }
})

export default styles