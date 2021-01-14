import { StyleSheet, Dimensions } from 'react-native'
import { Color, FontSize, FontType } from '../../../assets'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerView : {
    flex:2.4,
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
  containerTouchFilter : {
    width: 100,
  },
  containerClassProgress : {
    marginTop: 20,
    paddingTop: '3%',
    paddingBottom: '8%',
    flexDirection: 'row',
    marginHorizontal: '5%',
    paddingHorizontal: '7%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: '#9956B3',
    justifyContent: 'space-between',
  },
  containerIconProgress : {
    flexDirection: 'row',
    paddingVertical: '3%',
    paddingHorizontal: '7%',
    justifyContent: 'space-between',
  },
  ImageClass : {
    width: 100,
    height: 100,
    marginTop: 5,
  },
  TextClass : {
    width: '60%',
    fontSize: 16,
    color: '#fff',
    marginLeft: '3%',
    marginTop: '-5%',
    alignSelf: 'center',
    fontFamily: FontType.regular,
  },
  ButtonTextClass : {
    fontSize: 18,
    color:'#fff',
    marginTop: '-8%',
    marginLeft: '12%',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  ButtonClass : {
    width: 100,
    height: 50,
    paddingTop: 15,
    borderRadius: 20,
    marginRight: '5%',
    backgroundColor: '#6e248d',
  },
  ButtonClassNew : {
    width: 130,
    height: 50,
    paddingTop: 15,
    borderRadius: 20,
    marginRight: '5%',
    backgroundColor: '#6e248d',
  },
  containerParentKelas : {
    backgroundColor: Color.softPink,
  },
  containerMenuDesc : {
    width: '100%',
    paddingTop: '5%',
    paddingBottom: '5%',
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
  containerParentReviw : {
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
    marginHorizontal:18,
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
  video: {
    backgroundColor: 'black',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width * (9 / 16),
  },
  toolbar: {
    padding: 10,
    marginTop: 30,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  mediaPlayer: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: 'absolute',
    backgroundColor: 'black',
    justifyContent: 'center',
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
  containerConsul : {
    width: '100%',
    borderRadius: 20,
    marginVertical: '3%',
    flexDirection: 'row',
    paddingVertical: '3%',
    paddingHorizontal: 25,
    backgroundColor: '#9741ba',
  },
  textConsul : {
    color: '#fff',
    marginLeft: '5%',
    marginVertical: 5,
    fontFamily: FontType.bold,
    fontSize: FontSize.smallMedium,
  },
  textRegular: {
    color: Color.black,
    fontSize: 13.5,
    fontFamily: FontType.regular,
  },
  containerAccordion: {
    borderTopWidth: 1,
    paddingVertical: 0,
    paddingHorizontal: 9,
    borderBottomWidth: 1,
    borderColor: Color.lightGrey,
    backgroundColor: Color.white,
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
  star : { marginRight:1 }
})

export { styles }