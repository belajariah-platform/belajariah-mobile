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
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  containerMethod: {
    marginVertical: 16,
  },
  containerPrice: {
    width: '91%',
    marginHorizontal: '5%',
    paddingVertical: 12,
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'flex-end',
    paddingHorizontal: 16,
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
    fontWeight: 'bold',
    color: Color.black,
    textAlign: 'justify',
    fontFamily: FontType.regular,
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
    borderWidth: 1,
    marginTop: '2%',
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: '5%',
    borderColor: Color.white,
    backgroundColor: Color.bgColorPurple,
  },
  btnBuyClassTwo: {
    padding: 12,
    borderWidth: 1,
    marginTop: '2%',
    borderRadius: 8,
    marginBottom: '5%',
    alignItems: 'center',
    marginHorizontal: '5%',
    borderColor: Color.bgColorPurple,
  },
  divider: {
    marginTop: 5,
    marginHorizontal: -16,
  },
  viewIconBank: {
    paddingVertical: '3%', 
    paddingHorizontal: '3%', 
    borderTopLeftRadius: 10, 
    borderTopRightRadius: 10,
    backgroundColor: '#f9e9ff', 
  },
  viewDetailBank: {
    flexDirection: 'row', 
    paddingHorizontal: 10,
    paddingVertical: '4%', 
    backgroundColor: '#fff', 
    justifyContent: 'space-between',
  },
  TxtButtonSalin: {
    color: '#74ddc4', 
    fontWeight: 'bold',
  },
  viewNoteTwo: {
    width: '90%', 
    opacity: 0.5,
    marginTop: '2%', 
    marginBottom: '2%', 
    flexDirection: 'row', 
  },
  txtViewNote: {
    width: 18, 
    height: 18, 
    color: '#fff',
    marginRight: 5,
    borderRadius: 100, 
    textAlign: 'center', 
    backgroundColor: 'red', 
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
    backgroundColor: '#f9e9ff',
  },
  TxtPayment: {
    fontWeight: 'bold',
  },
  TxtKeterangan: {
    paddingVertical: '2%',
  },
  viewNoteOne: {
    width: '90%', 
    opacity: 0.5,
    flexDirection: 'row', 
  },
  txtViewNoteOne: {
    width: 18, 
    height: 18, 
    color: '#fff',
    marginRight: 5,
    borderRadius: 100, 
    textAlign: 'center', 
    backgroundColor: 'red', 
  }
})

export default styles
