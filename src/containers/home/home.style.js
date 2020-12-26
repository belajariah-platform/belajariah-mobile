<<<<<<< HEAD
import {Color, FontType, FontWeight} from '../../assets';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  scrollview: {
    backgroundColor: Color.bgColorGray,
    flex: 1,
    paddingTop: 20,
    paddingLeft: 16,
    paddingBottom: 40,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  containerSearch: {
    borderWidth: 0,
    marginTop: 10,
    marginRight: 16,
    borderRadius: 16,
    backgroundColor: 'white',
    borderColor: Color.borderSearch,
  },
  containerPriceOptions: {
    flexDirection: 'row',
    top: -92,
  },
  cardPromo: {
    justifyContent: 'center',
    marginVertical: 16,
    marginHorizontal: 0,
    marginRight: 16,
    height: 100,
    borderRadius: 20,
    borderWidth: 0,
  },
  cardPopularClass: {
    borderWidth: 0,
    marginVertical: 12,
    marginLeft: 0,
    marginRight: 16,
    height: 260,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  cardReadQuran: {
    borderWidth: 0,
    marginTop: 20,
    marginBottom: 12,
    marginLeft: 0,
    marginRight: 16,
    height: 120,
    borderRadius: 20,
  },
  cardArticle: {
    borderWidth: 0,
    marginVertical: 8,
    marginHorizontal: 12,
    width: 296,
    height: 224,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  textTitle: {
    color: Color.textBlack,
    fontFamily: FontType.regular,
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 8,
  },
  textSubtitle: {
    marginVertical: 4,
    color: Color.textGray,
    fontFamily: FontType.regular,
    fontSize: 14,
  },
  textCategories: {
    fontFamily: FontType.regular,
    fontSize: 12,
    borderWidth: 1,
    borderColor: Color.bgGray,
    borderRadius: 14,
    marginTop: 4,
    marginHorizontal: 2,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  textClassDescription: {
    top: -92,
    fontFamily: FontType.regular,
    color: Color.textBlack,
    fontSize: 15,
  },
  textPriceOptions: {
    fontFamily: FontType.regular,
    fontSize: 15,
    borderRadius: 15,
    paddingHorizontal: 6,
    marginRight: 8,
    alignSelf: 'center',
  },
  textPrice: {
    fontFamily: FontType.regular,
    fontSize: 14,
    alignSelf: 'center',
    textDecorationLine: 'line-through',
    left: 94,
  },
  textDiscountedPrice: {
    fontFamily: FontType.bold,
    fontSize: 16,
    alignSelf: 'center',
    left: 98,
  },
  textArticleDescription: {
    fontFamily: FontType.regular,
    color: Color.textBlack,
    fontSize: 15,
    right: 4,
    bottom: 14,
    textAlign: 'justify',
  },
  textBold: {
    fontWeight: FontWeight.bold,
  },
  svgClassTitle: {
    zIndex: 1,
    left: -21,
  },
  svgClassBackground: {
    top: -77,
    left: -15,
  },
  svgClassRating: {
    left: -12,
    top: -88,
    marginVertical: 2,
  },
  svgReadQuran: {
    right: 16,
    bottom: 13,
  },
  svgArticleBackground: {
    right: 73,
    bottom: 16,
  },
  dividerPopularClass: {
    top: -84,
  },
  btnReadMore: {
    zIndex: 1,
    bottom: 20,
    left: 164,
  },
  iconArrowUp: {
    marginTop: 16,
    marginBottom: 72,
    marginRight: 16,
    alignSelf: 'flex-end',
=======
import {Color} from '../../assets';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  containerTop: {
    flex: 1,
    paddingTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    justifyContent: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: Color.bgColorGray,
  },
  bgIcon: {
    width: 38,
    height: 38,
    elevation: 60,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  search: {
    width: 220,
    borderWidth: 0,
    marginTop: 5,
    borderRadius: 12,
    marginHorizontal: 15,
    backgroundColor: 'white',
    borderColor: 'transparent',
  },
  containerMiddle: {
    flex: 6,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: Color.bgColorGray,
  },
  containerBottom: {
    flex: 2,
    marginTop: -20,
    paddingTop: 50,
    borderRadius: 50,
    paddingHorizontal: 20,
    backgroundColor: Color.bgColorWhite,
  },
  containerBottoms: {
    flex: 2,
    marginTop: 10,
    paddingTop: 50,
    backgroundColor: Color.bgColor,
>>>>>>> e1fe67e3ee073d77306753e0545e124b19481e2c
  },
});

export {styles};
