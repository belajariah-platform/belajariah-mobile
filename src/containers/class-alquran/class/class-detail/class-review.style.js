import { StyleSheet } from 'react-native'
import { Color, FontSize, FontType } from '../../../../assets'

const styles = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flexRating: {
    marginLeft: -1,
    flexDirection: 'row',
  },
  container: {
    backgroundColor: Color.softPink,
  },
  card: {
    borderWidth: 0,
    borderRadius: 16,
    paddingBottom: 16,
    // marginBottom: '10%',
    paddingHorizontal: 0,
  },
  header: {
    paddingHorizontal: 16,
  },
  footer: {
    marginTop: 16,
  },
  cardReview: {
    borderWidth: 0,
    borderTopWidth: 1,
    marginVertical: 0,
    marginHorizontal: 0,
    paddingVertical : 11,
    borderBottomWidth : 0,
    paddingHorizontal : 15,
    borderColor: Color.lightGrey,
  },
  rating: {
    marginRight: 12,
    borderRadius: 8,
    color: Color.white,
    paddingVertical: 12,
    paddingHorizontal: 24,
    fontFamily: FontType.bold,
    backgroundColor: '#1DB597',
    fontSize: FontSize.extraLarge,
  },
  textBold: {
    marginBottom: 10,
    textAlign: 'left',
    color: Color.black,
    fontFamily: FontType.bold,
    fontSize: FontSize.smallPoint,
  },
  textBoldCustom: {
    marginBottom: 4,
    textAlign: 'left',
    color: Color.black,
    fontFamily: FontType.bold,
    fontSize: FontSize.extraSmall,
  },
  textView: {
    top : 2,
    marginBottom: 10,
    textAlign: 'left',
    color: Color.black,
    paddingHorizontal: 15,
    fontFamily: FontType.bold,
    fontSize: FontSize.smallest,
  },
  textRegular: {
    marginBottom: 8,
    fontFamily: FontType.regular,
    fontSize: FontSize.extraSmall,
  },
  ViewCardFormRat: {
    marginTop: 16,
    borderWidth: 0,
    borderRadius: 12,
    marginBottom: '1%',
  },
  containerTextArea : {
    marginTop: 0,
  },
  textArea: {
    height: 100,
    elevation : 1,
    borderRadius: 20,
    textAlign: 'center',
    paddingHorizontal: 10,
    marginHorizontal: '6%',
    backgroundColor: '#f1f3f4',
  },
  TxtBtnRating: {
    textAlign: 'center',
    fontFamily: FontType.bold,
    fontSize: FontSize.medium,
  },
  customRatingBarStyle: {
    // marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  starImageStyle: {
    width: 40,
    height: 40,
    marginRight:8,
    marginVertical: 4,
  },
  containerRating : {
    marginTop: 4,
    alignItems:'center',
    marginHorizontal: '6%',
  },
  StyleBtn2 : {
    width: '100%',
    height: 44,
    borderRadius: 60,
    backgroundColor: '#BDBDBD',
  },
  StyleTxt2 : {
    color: Color.white,
    fontSize: FontSize.medium,
    fontFamily: FontType.bold,
  },
  textRating: {
    bottom: 2,
    marginLeft: 8,
    color: Color.black,
    fontSize: FontSize.medium,
    fontFamily: FontType.bold,
  },
})

export default styles
