import { StyleSheet } from 'react-native'
import { Color, FontSize, FontType } from '../../../assets'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerFullscreen: {
    width: '100%',
    height: '100%',
  },
  containerView : {
    flex: 2.4,
    backgroundColor: '#9956B3',
    fontFamily: FontType.regular,
  },
  containerHeader : {
    height: '10%',
    backgroundColor: '#9956B3',
  },
  buttonBack : {
    top: 0,
    left: 0,
    zIndex : 10,
    position: 'absolute',
    backgroundColor:'yellow'
  },
  containerParentKelas : {
    backgroundColor: Color.softPink,
  },
  containerMenuDesc : {
    width: '100%',
    paddingTop: 20,
    paddingBottom: 5,
    paddingHorizontal: 18,
    backgroundColor: Color.softPink,
  },
  containerTextTitle : {
    lineHeight:18,
    paddingVertical: 5,
    fontFamily: FontType.bold,
    fontSize: FontSize.mediumLarge,
  },
  containerTextCategory : {
    marginTop:2,
    marginBottom:10,
    fontFamily: FontType.regular,
    fontSize: FontSize.smallMedium,
  },
  containerTextDesc : {
    lineHeight:15,
    fontFamily: FontType.regular,
    fontSize: FontSize.extraSmall,
  },
  containerParentReview : {
    flexDirection: 'row',
    marginVertical: '3%',
  },
  containerReviewUser : {
    flexDirection: 'row',
    alignContent: 'space-between',
  },
  textRating : {
    marginLeft: 10,
    fontFamily: FontType.regular,
    fontSize: FontSize.extraSmall,
  },
  containerMenuDetail : {
    height: 'auto',
    paddingBottom: 5,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  containerTitleContent : {
    marginTop:10,
    color: Color.black,
    marginHorizontal:16,
    fontSize: FontSize.medium,
    fontFamily: FontType.regular,
  },
  containerTextHeaderDetail : {
    borderTopWidth: 1,
    borderBottomWidth:1,
    backgroundColor:'#FFF',
    borderColor: '#e6e6e6',
  },
  containerTextDetail : {
    borderTopWidth: 1,
    borderColor: '#e6e6e6',
    backgroundColor:'#fef5ff',
  },
  videoContainerStyle: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    backgroundColor: Color.softPink,
  },
  videoFullscreenContainerStyle: {
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
  },
  videoStyle: {
    width: '100%',
    height: '100%',
  },
  videoFullscreenStyle: {
    width: '100%',
    height: '100%',
  },
  controllerStyle: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    position: 'absolute',
    backgroundColor: '#000000c4',
    justifyContent: 'space-between',
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
  textStyle: {
    color: '#000',
    marginLeft: 10,
    textAlign: 'center',
    fontFamily: FontType.regular,
    fontSize: FontSize.extraSmall,
  },
  customRatingBarStyle: {
    marginLeft: '10%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  starImageStyle: {
    width: 12,
    height: 12,
    marginRight:2,
  },
  textConsul : {
    color: '#fff',
    marginLeft: '5%',
    marginVertical: 5,
    fontFamily: FontType.bold,
    fontSize: FontSize.smallMedium,
  },
  textRegular: {
    fontSize: 13.5,
    color: Color.black,
    fontFamily: FontType.regular,
  },
  textModal : {
    color: Color.black,
    fontSize: FontSize.smallMedium,
    fontFamily: FontType.regular,
  },
  textExam: {
    right : 7,
    fontSize: 11,
    color: '#9741ba',
    alignSelf : 'center',
    fontFamily: FontType.regular,
  },
  containerAccordion: {
    paddingVertical: 0,
    paddingHorizontal: 9,
    borderBottomWidth: 1,
    borderColor: Color.lightGrey,
    backgroundColor: Color.white,
  },
  containerExam : {
    paddingVertical: 5,
    borderTopWidth : 1,
    borderBottomWidth : 1,
    borderColor: Color.lightGrey,
  },
  containerItem: {
    paddingVertical: 4,
    borderBottomWidth: 1,
    paddingHorizontal: 15,
    borderColor: Color.lightGrey,
    backgroundColor : Color.softPink
  },
  iconPlay : {
    marginRight:5,
    alignSelf:'center',
  },
  textDuration : {
    alignSelf:'center',
    fontSize: 10,
    fontFamily: FontType.regular,
  },
  containerPDF : {
    flex : 1,
    backgroundColor : Color.transactionBgColor,
  },
  containerHeaderPDF : {
    height : 50,
    paddingVertical : 7,
    flexDirection : 'row',
    paddingHorizontal : 10,
    justifyContent: 'space-between',
  },
  buttonBackPDF : {
    width : 'auto',
    marginLeft : -5,
    height : 'auto',
  },
  buttonDownloadPDF : {
    padding : 5,
    elevation : 4,
    width : 'auto',
    height : 'auto',
    borderRadius : 10,
    alignItems : 'center',
    flexDirection : 'row',
    justifyContent : 'center',
    backgroundColor : '#9956B3',
  },
  textDownload : {
    marginLeft : 3,
    color : Color.white,
    fontSize: FontSize.small,
    fontFamily: FontType.regular,
  },
  textPdf : {
    color : Color.white,
    textAlign : 'left',
    fontFamily: FontType.bold,
    fontSize: FontSize.medium,
  },
  containerTextPdf : {
    flex : 1,
    justifyContent : 'center',
  },
  star : {
    marginRight:1,
  },
  containerConsultation: {
    marginBottom:20
  },
  viewConsultation : {
    height : 47,
    marginTop : 0,
    marginBottom :0,
    borderRadius : 16,
    paddingHorizontal : 20,
  },
  buttonConsultation : {
    alignItems : 'center',
    alignSelf:'flex-start',
  },
  textConsultation : {
    marginHorizontal : 20,
    fontSize : FontSize.medium

  }
})

export { styles }