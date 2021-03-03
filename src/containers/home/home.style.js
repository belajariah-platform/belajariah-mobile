import { StyleSheet } from 'react-native'
import { Color, FontSize, FontType, FontWeight } from '../../assets'
import { Resp } from '../../utils'

const styles = StyleSheet.create({
  topLine: {
    width: 50,
    height: 5,
    marginTop: 10,
    borderRadius: 10,
    alignSelf: 'center',
    backgroundColor: Color.greySwipe,
  },
  containerSheetHeader: {
    top: 1,
    paddingBottom: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: Color.softPink,
  },
  contentContainer: {
    paddingHorizontal: 16,
    width: Resp.ViewMainWP,
  },
  containerSearch: {
    marginTop: 10,
    borderWidth: 0,
    maxWidth: '100%',
    borderRadius: 100,
    borderColor: Color.greySearchBorder,
    backgroundColor: Color.greySearchBG,
  },
  containerPriceOptions: {
    top: -5,
    flexDirection: 'row',
  },
  containerPriceFlex: {
    flex: 1,
    flexDirection: 'row',
  },
  navigateSearch: {
    width: '100%',
    marginBottom: 30,
    alignSelf: 'center',
    alignItems: 'center',
  },
  carousel: {
    marginLeft: -16,
    marginBottom: 30,
  },
  cardPromotion: {
    width: 250,
    marginRight: 10,
    marginBottom: 30,
  },
  cardCustom: {
    height: 100,
    borderWidth: 0,
    borderRadius: 20,
    maxWidth: '100%',
    borderColor: Color.transparent,
    backgroundColor: Color.greyMedium,
  },
  cardPopularClass: {
    elevation: 2,
    width: '98%',
    height: '69%',
    marginLeft: 1,
    marginTop: 10,
    borderWidth: 0,
    borderRadius: 20,
    shadowRadius: 2.22,
    shadowColor: '#000',
    shadowOpacity: 0.22,
    shadowOffset: { width: 0, height: 1 },
  },
  bannerAlquranContainer: {
    width: '100%',
    marginVertical: 30,
    alignItems: 'center',
  },
  cardReadQuran: {
    height: 120,
    marginTop: 20,
    marginLeft: 0,
    borderWidth: 0,
    marginRight: 16,
    marginBottom: 12,
    borderRadius: 20,
  },
  cardArticle: {
    width: 296,
    height: 227,
    elevation: 3,
    borderWidth: 0,
    borderRadius: 20,
    marginVertical: 8,
    shadowRadius: 2.22,
    shadowColor: '#000',
    shadowOpacity: 0.22,
    marginHorizontal: 12,
    shadowOffset: { width: 0, height: 1 },
  },
  textTitle: {
    marginTop: 8,
    color: Color.black,
    fontSize: FontSize.large,
    fontFamily: FontType.bold,
  },
  textSubtitle: {
    marginVertical: 4,
    fontSize: FontSize.small,
    color: Color.greyHintText,
    fontFamily: FontType.regular,
  },
  textCategories: {
    marginTop: 4,
    borderWidth: 1,
    borderRadius: 14,
    paddingVertical: 4,
    marginHorizontal: 4,
    paddingHorizontal: 8,
    fontFamily: FontType.regular,
    fontSize: FontSize.extraSmall,
    borderColor: Color.greyMedium,
  },
  textClassDescription: {
    top: -92,
    fontSize: 15,
    color: Color.black,
    fontFamily: FontType.regular,
  },
  textPriceOptions: {
    marginRight: 7,
    borderRadius: 15,
    paddingVertical: 2,
    alignSelf: 'center',
    paddingHorizontal: 7,
    fontFamily: FontType.regular,
    fontSize: FontSize.extraSmall,
    backgroundColor: Color.greyHintExt,
  },
  textPrice: {
    marginRight: 3,
    alignSelf: 'center',
    fontSize: FontSize.small,
    color: Color.greyHeadInput,
    fontFamily: FontType.regular,
    textDecorationLine: 'line-through',
  },
  textDiscountedPrice: {
    alignSelf: 'center',
    fontSize: FontSize.medium,
    fontFamily: FontType.bold,
  },
  textArticleDescription: {
    lineHeight: 16,
    marginBottom: 5,
    color: Color.black,
    textAlign: 'justify',
    fontSize: FontSize.small,
    fontFamily: FontType.regular,
  },
  textBold: {
    fontWeight: FontWeight.bold,
  },
  svgClassTitle: {
    top: 17,
    left: -5,
    zIndex: 1,
    position: 'absolute',
  },
  svgClassBackground: {
    resizeMode: 'cover',
  },
  svgArticleBackground: {
    right: 73,
    bottom: 16,
  },
  iconArrowUp: {
    marginTop: 16,
    marginRight: 16,
    marginBottom: 60,
    alignSelf: 'flex-end',
  },
  textBack: {
    lineHeight: 27,
    color: Color.white,
    textAlign: 'center',
    fontFamily: FontType.regular,
    fontSize: FontSize.extraLarge,
  },
  textBackBold: {
    color: Color.white,
    textAlign: 'center',
    fontFamily: FontType.bold,
    fontSize: FontSize.extraLarge,
  },
  textBackContainer: {
    marginTop: 20,
    alignSelf: 'center',
    width: Resp.TextBannerMainWP,
    height: Resp.TextBannerMainHP,
  },
  headerContainer: {
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerAvatar: {
    width: 35,
    height: 35,
    borderWidth: 2,
    borderRadius: 100,
    borderColor: Color.white,
    backgroundColor: Color.greyMedium,
  },
  imageBackground: {
    width: '100%',
    height: '100%',
  },
  imageProfile: {
    top: -2,
    width: 35,
    left: -1.5,
    height: 35,
    borderWidth: 2,
    borderRadius: 35,
    borderColor: Color.white,
  },
  scrollview: { backgroundColor: Color.softPink },
  headerFlex: { flex: 1 },
  btnReadMore: { alignItems: 'flex-end' },
  textSearch: { color: Color.grey, fontSize: FontSize.small },
})

export { styles }

