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
    borderRadius: 8,
    borderWidth : 0,
  },
  cardMethods: {
    borderRadius: 8,
    borderWidth : 0,
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
    fontFamily: FontType.regular,
    fontSize: FontSize.extraSmall,
  },
  textBold: {
    marginBottom: 4,
    textAlign: 'left',
    color: Color.black,
    fontSize: FontSize.small,
    fontFamily: FontType.bold,
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
})

export default styles
