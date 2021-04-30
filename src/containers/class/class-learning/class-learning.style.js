import { StyleSheet } from 'react-native'
import { Color, FontSize, FontType } from '../../../assets'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor : Color.white
  },
  containerFullscreen: {
    width: '100%',
    height: '100%',
  },
  containerView : {
    flex: 2.4,
    fontFamily: FontType.regular,
    backgroundColor: Color.softPink,
  },
  containerHeader : {
    height: '10%',
    backgroundColor: '#9956B3',
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
    flexDirection: 'row',

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
  containerModalChecklist : {
    width: '70%',
    marginTop: 96,
    paddingRight: 12,
    flexDirection: 'column',
  },
  containerModalChecklistHeader : {
    width: '100%',
    marginLeft: -24,
    flexDirection : 'row',
  },
  containerModalTitle : {
    marginLeft: 12,
    paddingRight: 4,
  },
  containerModalScrollview : {
    marginTop: 8,
    marginBottom: 48,
  },
  containerIconChecklist : {
    padding: 8,
    borderRadius: 36,
    backgroundColor : Color.mediumPink,
  },
  containerRadioButton : {
    marginLeft: -8,
    alignItems: 'center',
    flexDirection: 'row',
  },
  containerCancelSave : {
    flexDirection: 'row',
    justifyContent : 'space-between',
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
  containerTextPdf : {
    flex : 1,
    justifyContent : 'center',
  },
  containerConsultation: {
    marginBottom:20
  },

  //video
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
  textRating : {
    marginLeft: 10,
    fontFamily: FontType.regular,
    fontSize: FontSize.extraSmall,
  },
  textTitle : {
    flexShrink: 1,
    lineHeight: 18,
    paddingVertical: 5,
    fontFamily: FontType.bold,
    fontSize: FontSize.mediumLarge,
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
    fontFamily: FontType.regular,
    fontSize: FontSize.smallMedium,
  },
  textModalTitle : {
    color: Color.purpleMedium,
    fontFamily: FontType.bold,
    fontSize: FontSize.smallMedium,
  },
  textExam: {
    right : 7,
    fontSize: 11,
    color: '#9741ba',
    alignSelf : 'center',
    fontFamily: FontType.regular,
  },
  textDuration : {
    fontSize: 10,
    alignSelf:'center',
    fontFamily: FontType.regular,
  },
  textConsultation : {
    marginHorizontal : 20,
    fontSize : FontSize.medium
  },
  textDownload : {
    marginLeft : 3,
    color : Color.white,
    fontSize: FontSize.small,
    fontFamily: FontType.regular,
  },
  textPdf : {
    textAlign : 'left',
    color : Color.white,
    fontFamily: FontType.bold,
    fontSize: FontSize.medium,
  },
  textPurpleMedium: {
    color : Color.purpleMedium,
  },
  iconPlay : {
    marginRight:5,
    alignSelf:'center',
  },
  buttonBackPDF : {
    width : 'auto',
    height : 'auto',
    marginLeft : -5,
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
  star : {
    marginRight:1,
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
  buttonCancel : {
    width: 104,
    borderWidth : 1,
    borderColor : 'purple',
    backgroundColor: 'white',
  },
  buttonSave : {
    width: 104,
  },
  imgMaterial : {
    height: 276,
    marginTop: 12,
    width : '100%',
    marginBottom: 4,
  },
})

export { styles }