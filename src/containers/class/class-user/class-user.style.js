import { StyleSheet } from 'react-native'
import { FontType, FontSize, Color } from '../../../assets'

const styles = StyleSheet.create({
  containerView : {
    flex: 1,
    backgroundColor: Color.transactionBgColor,
  },
  containerHeader : {
    paddingTop : 15,
    height : 'auto',
    flexDirection: 'row',
    alignItems : 'center',
    paddingHorizontal : 20,
    justifyContent: 'space-between',
  },
  containerTextHeader : {
    color: Color.white,
    fontFamily: FontType.bold,
    fontSize: FontSize.mediumLarge,
  },
  containerTouchFilter : {
    width: 100,
  },
  containerViewClass : {
    width: '90%',
    height: 300,
    marginTop: '5%',
    borderRadius: 25,
    alignItems : 'center',
    justifyContent: 'center',
    backgroundColor: Color.transparentBg,
  },
  containerViewClass2 : {
    width: '90%',
    height: 10000,
    marginTop: '5%',
    borderRadius: 25,
    alignItems : 'center',
    justifyContent: 'center',
  },
  containerTextClass : {
    marginTop:-5,
    marginBottom: 15,
    color: Color.white,
    fontFamily : FontType.bold,
    fontSize: FontSize.largest,
  },
  containerChildTextClass : {
    color: Color.white,
    fontSize: FontSize.medium,
    fontFamily : FontType.regular,
  },
  containerChildTextClass2 : {
    color: Color.white,
    fontSize: FontSize.medium,
    fontFamily : FontType.bold,
  },
  containerClassProgress : {
    marginTop: 20,
    paddingTop: 12,
    alignItems:'center',
    paddingBottom: 26,
    flexDirection: 'row',
    paddingHorizontal: 12,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#9956B3',
    justifyContent: 'space-between',
  },
  containerIconProgress : {
    paddingTop: '4%',
    paddingBottom: '2%',
    flexDirection: 'row',
    paddingHorizontal: '7%',
    justifyContent: 'space-between',
  },
  textButton : {
    fontFamily : FontType.regular,
    fontSize : FontSize.extraSmall,
  },
  iconClassCustomLeft : {
    marginTop:-2,
    marginRight:5,
  },
  iconClassCustomRight : {
    marginTop:1,
    marginRight:5,
  },
  customIconProgress : {
    paddingTop: 0,
    alignItems:'center',
    flexDirection : 'row',
  },
  imageBackground : {
    width: '100%',
    height: '100%',
    marginTop: '5%',
    alignItems: 'center',
  },
  ImageClass : {
    width: 80,
    height: 80,
  },
  TextClass : {
    width: '64%',
    color: Color.white,
    fontSize: FontSize.small,
    fontFamily: FontType.regular,
  },
  TextTitleRating: {
    fontSize: FontSize.large,
    fontFamily: FontType.regular,
  },
  progressBar : {
    padding: 6,
    height : 35,
    marginTop:5,
    borderRadius: 10,
    paddingHorizontal:10,
    backgroundColor: Color.transparentBg,
  },
  progressBarText : {
    flex : 1,
    width: 160,
    fontSize: 10,
    color: Color.white,
    fontFamily: FontType.regular,
  },
  ButtonTextClass : {
    marginLeft: '5%',
    marginTop: '-8%',
    alignSelf: 'center',
    color: Color.white,
    fontSize: FontSize.small,
    fontFamily: FontType.bold,
  },
  buttonClassCustom : {
    width: 130,
    height: 35,
    borderRadius: 15,
    backgroundColor: '#6e248d',
  },
  ButtonClass : {
    width: 90,
    height: 35,
    borderRadius: 20,
    backgroundColor: '#6e248d',
  },
  ButtonClassNew : {
    width: 130,
    height: 50,
    borderRadius: 20,
    marginRight: '5%',
    backgroundColor: '#6e248d',
  },
  containerReview : {
    paddingTop:5,
    height: 'auto',
    marginBottom: 5,
    paddingHorizontal: 20,
  },
  containerClassReview : {
    display: 'flex',
    paddingVertical: 1,
    flexDirection: 'row',
  },
  TextHeaderReview : {
    fontSize: 16,
    marginTop: 5,
  },
  touchClassReview : {
    height: 30,
    width: 'auto',
    marginTop: 10,
    marginRight: 10,
    borderRadius: 20,
    paddingHorizontal: 15,
    justifyContent:'center',
    backgroundColor: '#6e248d',
  },
  buttonClassReview : {
    color: Color.white,
    fontSize: FontSize.smallest,
    fontFamily : FontType.regular,
  },
  textArea: {
    height:80,
    elevation : 1,
    borderRadius:10,
    backgroundColor:'white',
    textAlignVertical: 'top',
  },
  containerRating : {
    paddingVertical:3,
    alignItems:'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  customRatingBarStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  starImageStyle: {
    width: 23,
    height: 23,
    marginRight:3,
  },
  containerFilter : {
    height : 'auto',
    alignItems : 'flex-end',
  },
  imageBackgroundCard : { height: 'auto', marginBottom:-15 },
  containerTextArea : { marginTop: 20 },
  iconTop : { top:-4 }
})

export { styles }