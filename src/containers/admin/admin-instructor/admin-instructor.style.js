import { StyleSheet } from 'react-native'
import { Color, FontSize, FontType } from '../../../assets'

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
  },
  containerBackground: {
    width: '100%',
    height: '100%',
  },
  containerBgWelcome: {
    width: 250,
    padding: '5%',
    height: 'auto',
    marginTop: '65%',
    marginLeft: '15%',
    alignSelf: 'center',
  },
  containerWelcome: {
    padding: '3%',
  },
  TxtTitle: {
    marginBottom: 5,
    color: Color.white,
    fontFamily: FontType.bold,
    fontSize: FontSize.extraLarge,
  },
  TxtTitleBottom: {
    marginBottom: 25,
    color: Color.white,
    fontSize: FontSize.large,
    fontFamily: FontType.bold,
  },
  TxtDetailWelcome: {
    color: Color.white,
    fontFamily: FontType.regular,
    fontSize: FontSize.mediumLarge,
  },
  containerHeader: {
    padding : 16,
    flexDirection: 'row',
    alignItems  : 'center',
    justifyContent: 'space-between',
  },
  iconFilter: {
    marginLeft : 16,
    alignSelf : 'center',
  },
  cardInstructor: {
    width: 'auto',
    height: 'auto',
    padding: 16,
    borderRadius: 20,
    borderWidth : 0,
  },
  ViewInstructorInfo: {
    flexDirection: 'row',
  },
  ImgUstadz: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  email : {
    color: Color.black,
    fontSize: FontSize.small,
    fontFamily: FontType.regular,
  },
  TxtTitleInstructor: {
    color: Color.black,
    fontSize: FontSize.small,
    fontFamily: FontType.bold,
  },
  TxtButtonDetail: {
    textAlign: 'right',
    color: Color.purpleText,
    fontSize: FontSize.small,
    fontFamily: FontType.regular,
  },
  textSearch : {
    color : Color.white,
    fontSize: FontSize.small,
    fontFamily: FontType.regular,
  },
  searchbox : {
    borderWidth : 0,
    borderRadius : 20,
    backgroundColor : Color.white,
    borderColor : Color.transparent,
  }
})

export { styles }