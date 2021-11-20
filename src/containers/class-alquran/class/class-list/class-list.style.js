import { StyleSheet, Dimensions } from 'react-native'
import { Color, FontSize, FontType } from '../../../../assets'

const { width, height }  = Dimensions.get('window')

const styles = StyleSheet.create({
  iconBack: {
    marginTop: 0,
  },
  containerMain: {
    flex: 1,
    backgroundColor: Color.softPink,
  },
  containerHeader: {
    backgroundColor: '#FF66A1',
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
  txtNotes: {
    paddingVertical: '2%',
    fontSize : FontSize.small,
  },
  viewNoteOne: {
    width: '90%',
    opacity: 0.5,
    flexDirection: 'row',
    paddingHorizontal : 16,
  },
  viewMethod : {
    marginTop: '2%',
    marginBottom: '2%',
  },
  textSmall : {
    fontSize : FontSize.smallPoint,
  },
  margins : {
    marginHorizontal : 16
  },
  ImgBanner: {
    height: 310,
    width: '100%',
  },
  TitlePromo: {
    marginVertical: 5,
    color: Color.black,
    fontFamily: FontType.bold,
    fontSize: FontSize.mediumLarge,
  },
  DescPromo: {
    marginVertical: 5,
    color: Color.black,
    textAlign: 'justify',
    fontSize: FontSize.small,
    fontFamily: FontType.regular,
  },
  DescOtherPromo: {
    marginVertical: 5,
    color: Color.black,
    fontSize: FontSize.small,
    fontFamily: FontType.regular,
  },
  containerCodePromo: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  TitleBacaan: {
    color: Color.black,
    fontFamily: FontType.bold,
    fontSize: FontSize.large,
  },
  TxtTime: {
    color: Color.black,
    fontSize: FontSize.small,
    fontFamily: FontType.regular,
  },
  containerHeading: {
    margin: 0,
  },
  ImgHeading: {
    width: '100%',
    height: 240,
  },
  TxtSourceImg: {
    top: '-10%',
    textAlign: 'center',
    color: Color.black,
    fontSize: FontSize.smallest,
    fontFamily: FontType.regular,
  },
  TxtWriter: {
    color: Color.black,
    fontSize: FontSize.small,
    fontFamily: FontType.bold,
  },
  searchbox : {
    borderWidth : 0,
    borderRadius : 20,
    borderColor : '#e6e6e6',
    backgroundColor : Color.white,
  },
  containerSearch : {
    paddingBottom:10,
    marginHorizontal :20,
  },
  cardStyle: {
    padding: 15,
    width: 'auto',
    height: 'auto',
    borderWidth : 0,
    borderRadius: 20,
  },
  viewStyle: {
    flexDirection: 'row',
  },
  imageStyle: {
    width: 110,
    height: 102,
    marginRight: 10,
    borderRadius : 12,
  },
  textStyle: {
    color: Color.black,
    fontFamily: FontType.bold,
    fontSize: FontSize.smallMedium,
  },
  description : {
    marginTop: 10,
    color: Color.black,
    fontSize: FontSize.smallPoint,
    fontFamily: FontType.regular,
  },
  containerDesc : {
    flex : 1,
    marginLeft : 5,
  },
  TxtButtonDetail: {
    textAlign: 'right',
    color: Color.purpleText,
    fontSize: FontSize.small,
    fontFamily: FontType.regular,
  },
  indicatorContainer : {
    top : 12,
    marginBottom : 7,
    alignItems:'center',
  },
  containerNoStory: {
    marginTop: 25,
    position: 'relative',
    height: '40%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ViewList: {
    // marginTop: 24,
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginHorizontal: 16,
    justifyContent: 'space-between',
  },
  ListContent: {
    height: 100,
    margin: 10,
    // borderRadius: 60,
    alignItems: 'center',
    // justifyContent: 'center', 
    width: Dimensions.get('window').width * 0.4, 
  },
  ImgContent: {
      width: 80,
      height: 80,
      resizeMode: 'cover',
  }
})

export default styles