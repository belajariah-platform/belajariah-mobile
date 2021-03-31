import { StyleSheet } from 'react-native'
import { Color, FontSize, FontType } from '../../assets'

const styles = StyleSheet.create({
  iconBack: {
    marginTop: 0,
  },
  iconChevronRight: {
    width: 24,
    height: 24,
    marginTop: -2,
    tintColor: Color.grey,
  },
  containerMain: {
    flex: 1,
    backgroundColor: Color.softPink,
  },
  containerHeader: {
    backgroundColor: Color.transactionBgColor,
  },
  containerScrollView: {
    flex: 1,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  containerMethod: {
    marginVertical: 16,
  },
  containerPrice: {
    width: '91%',
    paddingVertical: 12,
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'flex-end',
    marginHorizontal: '5%',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: Color.white,
    justifyContent: 'space-between',
  },
  flexHeader: {
    paddingBottom: 16,
    alignItems: 'center',
    flexDirection: 'row',
  },
  flexRating: {
    marginTop: 4,
    flexDirection: 'row',
  },
  flexColumn: {
    flexDirection: 'column',
  },
  flexRow: {
    flexDirection: 'row',
  },
  flexVoucher: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  semiBox: {
    height: 16,
    width: '100%',
    marginTop: -16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: Color.softPink,
  },
  cardDetail: {
    borderRadius: 8,
  },
  cardMethods: {
    width: '90%',
    borderRadius: 8,
    marginHorizontal: '5%',

  },
  textTitleWhite: {
    color: Color.white,
    fontFamily: FontType.bold,
    fontSize: FontSize.mediumLarge,
  },
  textTitleBlack: {
    marginLeft: 16,
    color: Color.black,
    fontFamily: FontType.bold,
    fontSize: FontSize.mediumLarge,
  },
  textRegular: {
    marginBottom: 8,
    color: Color.black,
    fontFamily: FontType.regular,
    fontSize: FontSize.smallMedium,
  },
  textBold: {
    marginBottom: 4,
    textAlign: 'left',
    color: Color.black,
    fontSize: FontSize.medium,
    fontFamily: FontType.bold,
  },
  textRegularPurple: {
    color: Color.purpleText,
    fontFamily: FontType.regular,
    fontSize: FontSize.smallMedium,
  },
  textBoldPurple: {
    textAlign: 'left',
    color: Color.purpleText,
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
  textTotalPrice: {
    color: Color.black,
    textAlign: 'justify',
    fontFamily: FontType.bold,
    fontSize: FontSize.smallMedium,
  },
  textPrice: {
    color: Color.textRed,
    fontSize: FontSize.large,
    fontFamily: FontType.bold,
  },
  textLineThroughPrice: {
    marginRight: 8,
    alignSelf: 'center',
    color: Color.greyHintText,
    fontFamily: FontType.regular,
    fontSize: FontSize.smallMedium,
    textDecorationLine: 'line-through',
  },
  textBuyClass: {
    color: Color.white,
    fontFamily: FontType.bold,
    fontSize: FontSize.mediumLarge,
  },
  textBuyClassTwo: {
    color: Color.bgColorPurple,
    fontFamily: FontType.bold,
    fontSize: FontSize.mediumLarge,
  },
  textGateway: {
    color: Color.black,
    paddingVertical: 4,
    alignSelf: 'center',
    paddingHorizontal: 8,
    fontFamily: FontType.bold,
    fontSize: FontSize.medium,
    backgroundColor: Color.softPink,
  },
  btnBuyClass: {
    padding: 12,
    width : '90%',
    height : 45,
    borderRadius: 8,
    marginTop: 4,
    alignSelf: 'center',
    marginHorizontal: 4,
    borderColor: Color.white,
    backgroundColor: Color.bgColorPurple,
  },
  btnBuyClassTwo: {
    padding: 12,
    height : 45,
    marginTop: 2,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 4,
    alignItems: 'center',
    marginHorizontal: '5%',
    borderColor: Color.bgColorPurple,
  },
  divider: {
    marginTop: 5,
  },
  viewIconBank: {
    paddingVertical: '3%',
    paddingHorizontal: '3%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: Color.mediumPink,
  },
  viewDetailBank: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: '4%',
    backgroundColor: Color.white,
    justifyContent: 'space-between',
  },
  TxtButtonSalin: {
    color: Color.tosca,
    fontSize : FontSize.small,
    fontFamily : FontType.bold,
  },
  txtViewNote: {
    width: 18,
    height: 18,
    borderRadius: 100,
    color: Color.white,
    textAlign: 'center',
    backgroundColor: Color.red,
  },
  viewNoteThree: {
    opacity: 0.5,
    width: '90%',
    flexDirection: 'row',
  },
  viewTextTotalPayment: {
    width: '100%',
    marginVertical: 5,
    paddingVertical: '2%',
    paddingHorizontal : 16,
    backgroundColor: Color.mediumPink,
  },
  txtPayment: {
    fontSize : FontSize.small,
    fontFamily : FontType.bold,
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
  viewNoteTwo: {
    width: '90%',
    opacity: 0.5,
    marginVertical : 3,
    flexDirection: 'row',
    paddingHorizontal : 10,
  },
  txtViewNoteOne: {
    width: 17,
    height: 17,
    padding : 1,
    marginRight: 7,
    borderRadius: 100,
    color: Color.white,
    textAlign: 'center',
    backgroundColor: Color.red,
    fontSize : FontSize.smallest,
    fontFamily : FontType.regular,
  },
  textSmall : {
    fontSize : FontSize.smallPoint,
  },
  margins : {
    marginHorizontal : 16
  }
})

export default styles
