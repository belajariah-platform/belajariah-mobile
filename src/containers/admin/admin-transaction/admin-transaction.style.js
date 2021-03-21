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
  containerNoTransaction: {
    margin: 12,
    height: '42%',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.transparentBg,
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
  divider: {
    height: 1,
    marginTop: 16,
    marginHorizontal: -10,
  },
  TxtNoTransaction: {
    marginTop: 12,
    color: Color.white,
    textAlign : 'center',
    paddingHorizontal : 10,
    fontSize: FontSize.medium,
    fontFamily: FontType.regular,
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
    paddingHorizontal: '5%',
  },
  ViewInstructorInfo: {
    paddingBottom: 10,
  },
  avatarUser: {
    width: 44,
    height: 44,
    marginRight: 10,
  },
  textUsername: {
    marginBottom : 2,
    color: Color.black,
    fontSize: FontSize.medium,
    fontFamily: FontType.bold,
  },
  TxtTimeTitle: {
    color: Color.black,
    fontSize: FontSize.smallest,
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
    alignItems: 'center',

  },
  ViewButtonAction: {
    width : '100%',
    flexDirection: 'row',
    justifyContent : 'space-between',
  },
  containerDescUser: {
    backgroundColor : 'yellow',
  },
  ViewPrice: {
    marginVertical: 10,
  },
  ViewButtonActionVoice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ButtonAction: {
    width: 80,
    height : 35,
    marginTop : 3,
    marginRight: 3,
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
    width: '85%',
    marginTop : -7,
    paddingVertical: 0,
    paddingHorizontal: 10,
  },
  indicatorStyle: {
    width: 40,
    height: 4,
    left: '10%',
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
    fontFamily: FontType.regular,
    fontSize: FontSize.smallPoint,
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
    top : 12,
    marginBottom : 7,
    alignItems:'center',
  },
  ViewTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  TxtInvoice: {
    color: Color.red,
    textAlign: 'right',
    fontFamily: FontType.bold,
    fontSize: FontSize.smallest,
  },
  ViewLabel: {
    left: '-7%',
    flexDirection : 'row',
    paddingVertical: 6,
    paddingHorizontal: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#ab69c6',
    borderBottomRightRadius: 20,
  },
  TxtLabel : {
    left: '-7%',
    color: Color.white,
    fontFamily: FontType.bold,
    fontSize: FontSize.smallPoint,
  },
  viewTxtClass: {
    marginVertical: '3%',
  },
  TxtDescKelas: {
    color: Color.black,
    fontFamily: FontType.regular,
    fontSize: FontSize.extraSmall,
  },
  viewFoto: {
    padding: 6,
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
  },
  TxtBank: {
    color: Color.black,
    fontSize: FontSize.medium,
    fontFamily: FontType.regular,
  },
  TxtHarga: {
    color: Color.red,
    fontFamily: FontType.bold,
    fontSize: FontSize.mediumLarge,
  },
  ViewButtonReject: {
    alignSelf: 'center',
    alignItems: 'center',
    alignContent: 'center',
    marginHorizontal: '5%',
  },
  ButtonActionReject: {
    width: 80,
    height : 35,
    marginTop : 3,
    marginBottom : 0,
    borderRadius : 10,
  },
  viewButtonModal: {
    borderRadius: 15,
    marginBottom: '2%',
    marginVertical: '4%',
    paddingVertical: '3%',
  },
  TxtButtonModal: {
    textAlign: 'center',
    fontFamily: FontType.regular,
    fontSize: FontSize.smallMedium,
  },
  viewPriceTwo: {
    marginTop: 15,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  IconMini: {
    top: '-7%',
    left: '85%',
    position : 'absolute',
  },
  hideModal : {
    top : 22,
    left : 10,
    position : 'absolute',
  }
})

export { styles }