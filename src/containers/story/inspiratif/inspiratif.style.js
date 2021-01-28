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
  containerInspiratif: {
    marginBottom: '10%',
  },
  containerTopTitle: {
    flexDirection: 'row',
    marginHorizontal: '5%',
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
  containerWriter: {
    marginHorizontal: '5%',
    marginBottom: 10,
  },
  TxtWriter: {
    color: Color.black,
    fontSize: FontSize.small,
    fontFamily: FontType.bold,
  },
  ViewParagraf: {
    marginVertical: '2%',
    marginHorizontal: '5%',
  },
  Txtbacaan: {
    color: Color.black,
    fontFamily: FontType.regular,
    fontSize: FontSize.smallMedium,
  },
  containerImg: {
    marginVertical: '2%',
    marginHorizontal: '5%',
  },
  ImgBody: {
    width: '100%',
    height: 260,
  },
  searchbox : {
    borderWidth : 0,
    borderRadius : 20,
    backgroundColor : Color.white,
    borderColor : '#e6e6e6',
  },
  cardInstructor: {
    width: 'auto',
    height: 'auto',
    padding: 15,
    borderRadius: 20,
    borderWidth : 0,
  },
  ViewInstructorInfo: {
    flexDirection: 'row',
  },
  ImgUstadz: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  TxtTitleInstructor: {
    color: Color.black,
    fontSize: FontSize.medium,
    fontFamily: FontType.bold,
  },
  email : {
    marginTop: '10%',
    color: Color.black,
    fontSize: FontSize.small,
    fontFamily: FontType.regular,
  },
  TxtButtonDetail: {
    textAlign: 'right',
    color: Color.purpleText,
    fontSize: FontSize.small,
    fontFamily: FontType.regular,
  },
})

export default styles