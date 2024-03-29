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
  containerNoTask : {
    flex: 1,
    marginTop : -100,
    alignItems: 'center',
    justifyContent : 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  btnExtend : {
    width : '100%',
    alignSelf :'center',
  },
  textExtend : {
    color : Color.red,
    fontStyle: 'italic',
    textAlign : 'center',
    fontSize: FontSize.small,
    fontFamily: FontType.regular,
  },
  containerExtend : {
    paddingTop : 10,
    elevation : 6,
    paddingHorizontal : 20,
    borderTopLeftRadius : 25,
    borderTopRightRadius : 25,
    backgroundColor : Color.white,
  },
  flexHeader: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  semiBox: {
    height: 16,
    width: '100%',
    marginTop: -6,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: Color.softPink,
  },
  textTitleWhite: {
    flex : 1,
    color: Color.white,
    fontFamily: FontType.bold,
    textTransform: 'capitalize',
    fontSize: FontSize.mediumLarge,
  },
  textRight :  {
    marginRight : 25,
    color: Color.white,
    fontFamily: FontType.bold,
    textTransform: 'capitalize',
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
  //
  cardCategory : {
    width : 135,
    height : 119,
    marginVertical : 15,
    marginHorizontal : 15,
  },
  textSeeMessage : {
    bottom : 25,
    color: Color.white,
    position : 'absolute',
    fontFamily: FontType.bold,
    fontSize: FontSize.smallest,
  },
  textCategory : {
    lineHeight : 18,
    color: Color.white,
    textAlign : 'center',
    paddingHorizontal : 10,
    textTransform : 'capitalize',
    fontFamily: FontType.berkshire,
    fontSize: FontSize.medium,
  },
  textModal : {
    color: Color.black,
    fontSize: FontSize.smallMedium,
    fontFamily: FontType.regular,
  },
  containerCategory : {
    top : 28,
    height : 60,
    width : '75%',
    position : 'absolute',
    justifyContent : 'center',
  },
  containerTextInput: {
    flexDirection: 'row',
    alignItems : 'center',
    justifyContent : 'center',
  },
  textInput: {
    flex : 1,
    height : 48,
    elevation : 1,
    paddingLeft: 24,
    marginLeft : 12,
    borderRadius: 28,
    marginVertical: 5,
    backgroundColor: Color.white,
  },
  containerSend: {
    width: 50,
    height: 48,
    marginTop: 0,
    marginBottom :0,
    borderRadius: 20,
    marginHorizontal : 12,
  },
  //chat card
  containerChat: {
    width: '65%',
    paddingTop: 4,
    borderWidth: 0,
    borderRadius: 20,
    paddingBottom: 16,
    marginVertical : 10,
    marginHorizontal : 20,
    backgroundColor: Color.white,
  },
  containerSoundStart: {
    marginLeft : 4,
    marginRight : 20,
    marginBottom : 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  containerSoundEnd: {
    marginRight : 4,
    marginLeft : 20,
    marginBottom : 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  textSoundDuration: {
    color: Color.black,
    fontFamily: FontType.regular,
    fontSize: FontSize.smallPoint,
  },
  avatarChatInstructor: {
    width: 34,
    height: 34,
    borderRadius: 34 / 2,
    marginLeft : 5,
  },
  containerUserDesc: {
    paddingLeft: 20,
    paddingRight : 15
  },
  textDesc: {
    marginTop: 2,
    color: Color.black,
    fontFamily: FontType.bold,
    fontSize: FontSize.smallest,
  },
  textUserDesc: {
    marginTop: 4,
    marginBottom : 10,
    lineHeight : 15,
    color: Color.black,
    fontSize: FontSize.smallMedium,
    fontFamily: FontType.regular,
  },
  textTime: {
    flex : 1,
    marginRight: 16,
    textAlign: 'right',
    color: Color.black,
    fontFamily: FontType.regular,
    fontSize: FontSize.smallPoint,
  },
  containerTime : {
    marginTop : 10,
    flexDirection : 'row',
    alignItems : 'center',
    justifyContent : 'space-between',
  },
  notif : {
    top : 12,
    right : 12,
    position : 'absolute',
  },
  flexEnd : {
    alignSelf : 'flex-end',
    borderTopRightRadius: 0,
    backgroundColor: Color.bgColorPurple,
  },
  flexStart : {
    alignSelf : 'flex-start',
    borderTopLeftRadius: 0,
    backgroundColor : '#f3e8f5'
  },
  avatarStart: {
    flex: 1,
    alignItems: 'flex-start',
  },
  avatarEnd: {
    flex: 1,
    alignItems: 'flex-end',
  },
  containerVoice : {
    paddingTop : 15,
    paddingBottom : 10,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal : 20,
  },
  row : {
    flexDirection : 'row',
    alignItems : 'center',
  },
  textHeadline : {
    fontFamily : FontType.bold,
    fontSize : FontSize.mediumLarge,
  },
  textHeadlines : {
    fontFamily : FontType.bold,
    color : Color.purpleButton,
    fontSize : FontSize.mediumLarge,
  },
  textGuide : {
    fontFamily : FontType.regular,
    fontSize : FontSize.small,
  },
  floatingChat : {
    position : 'absolute',
    bottom : 20,
    right : 20,
  },
  videoStyle: {
    alignSelf : 'center',
    width: '100%',
    height: 228,
  },
  videoContainerStyle: {
    width: '100%',
    height: 228,
    alignSelf: 'center',
    backgroundColor: Color.softPink,
  },
  controllerStyle: {
    width: '100%',
    height: 228,
    marginTop: -228,
    alignSelf: 'center',
    backgroundColor: '#000000c4',
  },
  videoFullscreenStyle: {
    width: '100%',
    height: '100%',
  },
  videoFullscreenContainerStyle: {
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
  },
  controllerFullscreenStyle: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: 'absolute',
    backgroundColor: '#000000c4',
    justifyContent: 'space-between',
  },
  imageGuide : {
    width:41,
    height : 30,
    marginRight : 10,
  },
  textGuidePoint : {
    width : 280,
    marginBottom : 10,
  },
  scrollGuide : { marginTop: '2%', marginBottom : '10%' },
  cancel : { marginLeft : '20%' },
  textPurple : { color : '#58006f' },
  textWhite : { color : Color.white },
  flexRow : { flexDirection : 'row' },
  horizontal : { marginHorizontal : 10 },
  column : { flexDirection : 'column' }
})

export default styles