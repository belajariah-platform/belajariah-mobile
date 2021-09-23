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
    height : 65,
    width: '100%',
    marginTop:-20,
    elevation : 10,
    paddingVertical: 2,
    flexDirection: 'row',
    alignSelf: 'flex-end',
    alignItems: 'center',
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
    marginTop : 15,
    borderWidth : 0,
    borderRadius: 10,
    paddingVertical : 15,
    marginHorizontal : 20,
    paddingHorizontal : 18,
    backgroundColor : Color.white
  },
  cardMethods: {
    marginTop : 15,
    borderWidth : 0,
    borderRadius: 10,
    paddingVertical : 15,
    marginHorizontal : 20,
    paddingHorizontal : 18,
    backgroundColor : Color.white
  },
  cardMethodCustom : {
    marginBottom: '5%',
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
    fontSize: FontSize.small,
    fontFamily: FontType.regular,
  },
  textBold: {
    marginBottom: 4,
    textAlign: 'left',
    color: Color.black,
    fontFamily: FontType.bold,
    fontSize: FontSize.smallMedium,
  },
  textRegularPurple: {
    color: Color.purpleText,
    fontFamily: FontType.regular,
    fontSize: FontSize.extraSmall,
  },
  textBoldPurple: {
    textAlign: 'left',
    color: Color.purpleText,
    fontFamily: FontType.bold,
    fontSize: FontSize.extraSmall,
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
    fontFamily: FontType.regular,
    fontSize: FontSize.small,
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
  textGateway: {
    color: Color.black,
    paddingVertical: 4,
    alignSelf: 'center',
    paddingHorizontal: 8,
    fontFamily: FontType.bold,
    fontSize: FontSize.medium,
  },
  btnBuyClass: {
    padding: 12,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: Color.white,
    backgroundColor: Color.bgColorPurple,
  },
  divider: {
    marginTop: 16,
    marginHorizontal: -16,
  },
  containerModal: {
    alignItems: 'center',
  },
  TitleModal: {
    color: Color.black,
    fontFamily: FontType.bold,
    fontSize: FontSize.medium,
  },
  TxtDescModal: {
    color: Color.black,
    textAlign: 'center',
    marginVertical: 4,
    marginHorizontal: '10%',
    fontFamily: FontType.regular,
    fontSize: FontSize.smallMedium,
  },
  ImgVoucher: {
    width : 90,
    height : 90,
    marginVertical: 5,
  },
  viewModalInput: {
    marginTop : 15,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent : 'center',
  },
  InputVoucher: {
    width: '55%',
    height : 40,
    borderRadius : 10,
    paddingHorizontal : 15,
    borderColor: '#cbcbcb',
  },
  ButtonClaim: {
    width: 100,
    height : 40,
    marginTop : 0,
    marginBottom: 0,
    borderRadius: 10,
    marginRight : 15,
    color: Color.white,
    fontFamily: FontType.bold,
    backgroundColor: '#cbcbcb',
  },
  ViewSchedule: {
    marginTop: 10,
  }
})

export default styles
