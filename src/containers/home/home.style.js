import { StyleSheet, Dimensions } from 'react-native'

import { Resp } from '../../utils'
import { Color, FontSize, FontType, FontWeight } from '../../assets'

const { width, height }  = Dimensions.get('window')

const styles = StyleSheet.create({
  frontContainer: {
    flex: 9,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: Color.softPink,
  },
  containerPromo : {
    marginTop : 10,
  },
  fingerGesture: {
    height: 40,
    width: '100%',
  },
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
    backgroundColor: 'white'
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
  storyView : {
    paddingVertical : 10,
    paddingHorizontal : 15,
  },
  storyImage : {
    width : 296,
    height : 120,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
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
    backgroundColor : Color.white,
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
    marginTop: 2,
    // borderWidth: 1,
    // borderRadius: 14,
    // paddingVertical: 4,
    textAlign: 'center',
    marginHorizontal: 4,
    paddingHorizontal: 8,
    fontFamily: FontType.regular,
    fontSize: FontSize.extraSmall,
    // borderColor: Color.greyMedium,
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
    marginTop: 35,
    alignSelf: 'center',
    width: Resp.TextBannerMainWP,
    height: Resp.TextBannerMainHP,
  },
  ViewHeaderProf: {
    flexDirection: 'row',
    alignItems: 'center',
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
  readMoreText : {
    color: Color.purpleText,
    textAlign: 'center',
    fontFamily: FontType.regular,
    fontSize: FontSize.smallPoint,
  },
  flexStory : {
    flexDirection : 'row',
    alignItems : 'center',
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
  BackroundImgModal : {
    zIndex: -1,
    width: width,
    marginTop: '-5%',
    height: height / 2.2,
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
  },
  ViewCategory: {
    marginTop: 24,
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginHorizontal: -16,
    justifyContent: 'space-between',
  },
  Category: {
    height: 100,
    alignItems: 'center',
    // justifyContent: 'center', 
    width: Dimensions.get('window').width * 0.3, 
  },
  CardCategory: {
    padding: 10,
    width: 'auto',
    height: 'auto',
    borderRadius: 30,
  },
  linearGradient: {
    width: 'auto',
    height: 'auto',
    borderRadius: 30,
  },
  ViewTitleAcc: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  StyleIconFreeAcc: {
    marginTop: 6,
    marginLeft: 6,
  },
  cardAC: {
    width: '100%',
    height: 140,
    elevation: 3,
    borderWidth: 0,
    borderRadius: 20,
    marginVertical: 8,
    shadowRadius: 2.22,
    shadowColor: '#000',
    shadowOpacity: 0.22,
    backgroundColor : Color.white,
    shadowOffset: { width: 0, height: 1 },
  },
  cardClassQuran: {
    width: '100%',
    height: 'auto',
    elevation: 3,
    borderWidth: 0,
    borderRadius: 20,
    marginVertical: 8,
    shadowRadius: 2.22,
    shadowColor: '#000',
    shadowOpacity: 0.22,
    backgroundColor : Color.white,
    shadowOffset: { width: 0, height: 1 },
  },
  ImgCustomACC: {
    height: 130,
    width: '100%',
    maxWidth: '100%',
    borderRadius: 20,
    resizeMode: 'stretch',
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // borderBottomLeftRadius: 20,
  },
  ImgCustomQuran: {
    height: 130,
    width: '100%',
    maxWidth: '100%',
    borderRadius: 20,
    resizeMode: 'cover',
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // borderBottomLeftRadius: 20,
  },
  CardClassQuran: {
    height: 160,
    elevation: 2,
    width: '100%',
    borderWidth: 0,
    borderRadius: 20,
    marginVertical: 8,
    shadowRadius: 2.22,
    shadowColor: '#000',
    shadowOpacity: 0.22,
    backgroundColor : Color.greyMedium,
    shadowOffset: { width: 0, height: 1 },
  }
})

export { styles }

