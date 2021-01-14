import { StyleSheet } from 'react-native'
import { Color, FontSize, FontType } from '../../../assets'

const styles = StyleSheet.create({
  flexFull: {
    flex: 1,
  },
  flexButtonHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flexRating: {
    marginTop: 4,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  flexTags: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  containerPrice: {
    flexDirection: 'row',
    backgroundColor: Color.bgColorPurple,
    width: '100%',
    paddingVertical: 12,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  flexColumn: {
    flexDirection: 'column',
  },
  backgroundHeader: {
    position: 'absolute',
    top: -8,
  },
  backgroundVideo: {
    width: 196,
    height: 108,
    alignSelf: 'center',
    backgroundColor: Color.softPink,
  },
  iconBack: {
    marginTop: 0,
  },
  iconShare: {
    marginTop: 14,
    marginRight: 16,
  },
  textDesc: {
    marginTop: 4,
    color: Color.white,
    textAlign: 'center',
    fontSize: FontSize.medium,
    fontFamily: FontType.bold,
  },
  textRating: {
    marginTop: 4,
    marginLeft: 8,
    color: Color.white,
    fontSize: FontSize.medium,
    fontFamily: FontType.bold,
  },
  textTag: {
    marginTop: 8,
    borderWidth: 0,
    borderRadius: 8,
    color: Color.white,
    marginHorizontal: 4,
    paddingVertical: 4,
    paddingHorizontal: 16,
    fontSize: FontSize.medium,
    fontFamily: FontType.bold,
    backgroundColor: Color.bgColorBlue,
  },
  textBuyClass: {
    fontFamily: FontType.bold,
    color: Color.white,
    fontSize: FontSize.mediumLarge,
  },
  semiBox: {
    height: 20,
    width: '100%',
    marginTop: 44,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: Color.softPink,
  },
  tabContainerStyle: {
    marginTop: -54,
  },
  labelStyle: {
    textTransform: 'none',
    fontSize: FontSize.small,
    fontFamily: FontType.bold,
  },
  indicatorStyle: {
    left: '6%',
    width: 80,
    height: 4,
    borderRadius: 2,
    backgroundColor: Color.bgColor,
  },
  tabBarStyle: {
    borderRadius: 8,
    paddingVertical: 2,
    marginHorizontal: 16,
    backgroundColor: Color.white,
  },
  discountedPrice: {
    fontSize: FontSize.large,
    fontFamily: FontType.bold,
    color: Color.white,
  },
  price: {
    fontFamily: FontType.regular,
    color: Color.greyHintText,
    fontSize: FontSize.smallMedium,
    textDecorationLine: 'line-through',
  },
  btnBuyClass: {
    backgroundColor: Color.bgColorPurple,
    borderColor: Color.white,
    borderRadius: 8,
    borderWidth: 1,
    padding: 12,
  },
})

export default styles
