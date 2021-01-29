import { StyleSheet } from 'react-native'
import { Color, FontType, FontSize } from '../../assets'

const styles = StyleSheet.create({
  containerBackground: {
    width: '100%',
    height: '100%',
  },
  containerHeader: {
    flexDirection: 'row',
  },
  containerTitle: {
    marginTop: 12,
    marginLeft: 4,
  },
  containerTitleMetadata: {
    marginTop: 4,
    flexDirection: 'row',
  },
  containerScrollview: {
    flexGrow: 1,
    marginTop: 8,
    paddingVertical: 2,
    paddingHorizontal: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: Color.white,
  },
  containerAyat: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  contentContainerScrollview: {
    paddingBottom: 20,
  },
  textTitle: {
    color: Color.white,
    fontSize: FontSize.large,
    fontFamily: FontType.bold,
  },
  textRegularWhite: {
    color: Color.white,
    fontFamily: FontType.regular,
    fontSize: FontSize.smallMedium,
  },
  textRegularBlack: {
    color: Color.black,
    fontFamily: FontType.regular,
    fontSize: FontSize.smallMedium,
  },
  textArab: {
    fontSize: 24,
    marginRight: 12,
    marginVertical: 4,
    color: Color.purpleText,
    fontFamily: FontType.arabRegular,
  },
  textArabNumber: {
    fontSize: 24,
    marginRight: 8,
    color: Color.purpleText,
  },
  indicatorContainer : {
    flex : 1,
    alignItems:'center',
    justifyContent : 'center',
    backgroundColor : Color.bgColorPurple
  },
})

export { styles }
