import { StyleSheet } from 'react-native'
import { Color, FontSize, FontType } from '../../../../assets'

const styles = StyleSheet.create({
  flexFull: {
    flex: 1,
    backgroundColor : Color.softPink
  },
  flexButtonHeader: {
    top : 0,
    paddingRight: 15,
    alignItems: 'center',
    flexDirection: 'row',
    position : 'absolute',
    justifyContent: 'space-between',
  },
  flexButtonHeaderFullscreen: {
    width: '100%',
    position: 'absolute',
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
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'flex-end',
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
  },
  videoContainerStyle: {
    height: 228,
    width: '100%',
    alignSelf: 'center',
    backgroundColor: Color.softPink,
  },
  videoFullscreenContainerStyle: {
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
  },
  videoStyle: {
    height: 228,
    width: '100%',
    alignSelf : 'center',
  },
  videoFullscreenStyle: {
    width: '100%',
    height: '100%',
  },
  controllerStyle: {
    height: 228,
    width: '100%',
    marginTop: -228,
    alignSelf: 'center',
    backgroundColor: '#000000c4',
  },
  controllerFullscreenStyle: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: 'absolute',
    backgroundColor: '#000000c4',
    justifyContent: 'space-between',
  },
  iconBack: {
    marginTop: 0,
  },
  iconShare: {
    marginTop: 14,
    marginRight: 16,
  },
  textDesc: {
    marginTop: 8,
    color: Color.white,
    textAlign: 'center',
    paddingHorizontal : '2%',
    fontFamily: FontType.bold,
    fontSize: FontSize.smallMedium,
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
    paddingVertical: 4,
    marginHorizontal: 4,
    paddingHorizontal: 16,
    fontSize: FontSize.medium,
    fontFamily: FontType.bold,
    backgroundColor: Color.bgColorBlue,
  },
  textBuyClass: {
    color: Color.white,
    fontFamily: FontType.bold,
    fontSize: FontSize.mediumLarge,
  },
  semiBox: {
    height: 16,
    marginTop: 0,
    width: '100%',
    marginBottom: -6,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: Color.softPink,
  },
  tabContainerStyle: {
    marginTop: 10,
  },
  labelStyle: {
    width:'100%',
    textTransform: 'none',
    fontFamily: FontType.bold,
    fontSize: FontSize.smallest,
  },
  indicatorStyle: {
    width: 80,
    height: 4,
    left: '6%',
    borderRadius: 2,
    backgroundColor: Color.purpleHint,
  },
  tabBarStyle: {
    borderRadius: 8,
    paddingVertical: 2,
    marginHorizontal: 16,
    backgroundColor: Color.bgColorPurple,
  },
  discountedPrice: {
    color: Color.white,
    fontSize: FontSize.large,
    fontFamily: FontType.bold,
  },
  price: {
    fontSize: FontSize.small,
    color: Color.greyHintText,
    fontFamily: FontType.regular,
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
