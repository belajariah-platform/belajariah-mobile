import { StyleSheet } from 'react-native'
import { Color, FontSize, FontType } from '../../../assets'

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    backgroundColor: '#ab69c6',
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
    paddingTop : 16,
    flexDirection: 'row',
    alignItems  : 'center',
    paddingHorizontal : 16,
    justifyContent: 'space-between',
  },
  iconFilter: {
    marginLeft : 16,
    alignSelf : 'center',
  },
  cardUser: {
    width: 'auto',
    height: 'auto',
    borderWidth : 0,
    borderRadius: 20,
  },
  cardUserOpacity: {
    opacity: 0.9,
    width: 'auto',
    height: 'auto',
    borderWidth : 0,
    borderRadius: 20,
  },
  ViewInstructorInfo: {
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems : 'center',
  },
  avatarUser: {
    width: 44,
    height: 44,
    marginRight: 10,
  },
  textUsername: {
    marginBottom : 2,
    color: Color.black,
    fontSize: FontSize.small,
    fontFamily: FontType.bold,
  },
  TxtTimeTitle: {
    color: Color.black,
    fontSize: FontSize.overSmall,
    fontFamily: FontType.regular,
  },
  TxtTitleDesc: {
    margin: 0,
    padding: 0,
    color: Color.black,
    fontSize: FontSize.smallest,
    fontFamily: FontType.regular,
  },
  TxtButtonDetail: {
    textAlign: 'right',
    color: Color.purpleText,
    fontFamily: FontType.regular,
    fontSize: FontSize.smallMedium,
  },
  containerButtonAction: {
    justifyContent : 'space-between',
    flexDirection: 'row',
  },
  ViewButtonAction: {
    flexDirection: 'row',
  },
  containerDescUser: {
    backgroundColor : 'yellow'
  },
  ViewButtonActionVoice: {
    flexDirection: 'row',
    justifyContent : 'flex-end'
  },
  ButtonAction: {
    width: 70,
    height : 32,
    marginTop : 0,
    marginRight: 10,
    marginBottom : 0,
    borderRadius : 10,
  },
  tabBarStyle: {
    borderRadius: 8,
    paddingVertical: 2,
    marginHorizontal: 16,
    backgroundColor: Color.white,
  },
  textRegular: {
    color: Color.black,
    fontFamily: FontType.bold,
    fontSize: FontSize.extraSmall,
  },
  containerAccordion: {
    width: '75%',
    marginTop : -7,
    paddingVertical: 0,
    paddingHorizontal: 10,
  },
  indicatorStyle: {
    left: '10%',
    width: 40,
    height: 4,
    borderRadius: 2,
    backgroundColor: Color.bgColor,
  },
  labelStyle: {
    textTransform: 'none',
    fontFamily: FontType.regular,
    fontSize: FontSize.smallMedium,
  },
  searchbox : {
    borderWidth : 0,
    borderRadius : 20,
    backgroundColor : Color.white,
    borderColor : Color.transparent,
  },
  description : {
    bottom : 5,
    paddingHorizontal: 17,
    fontFamily: FontType.regular,
    fontSize: FontSize.extraSmall,
  },
  textDuration : {
    fontSize: FontSize.smallPoint,
    fontFamily: FontType.regular,
  },
  iconAccept : {
    bottom : 15
  },
  textButtonDelete: {
    opacity: 2,
    color: Color.red,
    textAlign: 'right',
    fontSize: FontSize.small,
    fontFamily: FontType.regular,
  },
  indicatorContainer : {
    top : 10,
    alignItems:'center',
  },
})

export { styles }