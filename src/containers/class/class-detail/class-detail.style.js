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
    marginTop: 0,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  flexTags: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  containerPrice: {
    height : 65,
    width: '100%',
    marginTop:-20,
    paddingVertical: 2,
    flexDirection: 'row',
    alignSelf: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    justifyContent: 'space-between',
    backgroundColor: Color.bgColorPurple,
  },
  flexColumn: {
    flexDirection: 'column',
  },
  backgroundHeader: {
    top: -8,
    position: 'absolute',
  },
  backgroundVideo: {
    top : -10,
    width: 176,
    height: 88,
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
    marginTop: 0,
    color: Color.white,
    textAlign: 'center',
    paddingHorizontal : '2%',
    fontSize: FontSize.smallMedium,
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
    height: 30,
    marginTop: 2,
    width: '100%',
    marginBottom:-5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: Color.softPink,
  },
  tabContainerStyle: {
    marginTop: -54,
  },
  labelStyle: {
    width:'100%',
    textTransform: 'none',
    fontFamily: FontType.bold,
    fontSize: FontSize.smallest,
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
    color: Color.white,
    fontSize: FontSize.large,
    fontFamily: FontType.bold,
  },
  price: {
    color: Color.greyHintText,
    fontFamily: FontType.regular,
    fontSize: FontSize.small,
    textDecorationLine: 'line-through',
  },
  btnBuyClass: {
    top : -3,
    padding: 12,
    borderRadius: 8,
    backgroundColor: Color.bgColorPurple,
  },
})

export default styles
