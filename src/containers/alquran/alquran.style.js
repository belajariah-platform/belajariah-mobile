import { StyleSheet } from 'react-native'
import { Color, FontType, FontSize } from '../../assets'

const styles = StyleSheet.create({
  containerBackground: {
    width: '100%',
    height: '100%',
  },
  containerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerSearch: {
    bottom: 5,
    height: 64,
    width: '100%',
    borderTopLeftRadius: 20,
    backgroundColor: 'white',
    borderTopRightRadius: 20,
  },
  containerListSurah: {
    flex: 10,
    paddingTop: 2,
    paddingBottom: 1,
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 2,
    paddingHorizontal: 20,
    borderBottomColor: Color.dividerGrey,
  },
  containerIdSurah: {
    flex: 1,
  },
  containerSurahName: {
    flex: 6,
    marginLeft: 12,
  },
  containerTranslateAyatCount: {
    flexDirection: 'row',
  },
  containerTemp: {
    marginTop: '28%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: Color.white,
  },
  sceneContainerStyle: {
    backgroundColor: Color.white,
  },
  tabBarStyle: {
    height: 48,
    elevation: 0,
    marginTop: '28%',
    borderBottomWidth: 3,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: Color.white,
    borderBottomColor: Color.dividerGrey,
  },
  tabBarIndicatorStyle: {
    height: 3,
    left: '15%',
    width: '20%',
    borderRadius: 2,
    marginBottom: -3,
    alignSelf: 'center',
    backgroundColor: 'purple',
  },
  tabBarLabelStyle: {
    fontSize: FontSize.large,
    fontFamily: FontType.bold,
    textTransform: 'capitalize',
  },
  navigateSearch: {
    width: '100%',
    marginBottom: 30,
    alignSelf: 'center',
    alignItems: 'center',
  },
  searchBox: {
    width: '90%',
    marginTop: 20,
    borderWidth: 0,
    borderRadius: 100,
    backgroundColor: Color.searchGrey,
    borderColor: Color.greySearchBorder,
  },
  textHeader: {
    color: Color.white,
    fontSize: FontSize.large,
    fontFamily: FontType.bold,
  },
  textSearch: {
    color: Color.grey,
    fontSize: FontSize.small,
  },
  textIdSurah: {
    color: Color.white,
    textAlign: 'center',
    fontSize: FontSize.small,
    fontFamily: FontType.regular,
  },
  textSurahName: {
    fontFamily: FontType.bold,
    color: Color.textSurahName,
    fontSize: FontSize.mediumLarge,
  },
  textRegular: {
    marginRight: 4,
    color: Color.black,
    fontFamily: FontType.regular,
    fontSize: FontSize.smallMedium,
  },
  textSurahNameArab: {
    flex: 3,
    color: Color.textSurahName,
    fontSize: FontSize.extraLarge,
    fontFamily: FontType.arabBold,
  },
  iconSurah: {
    top: -10,
    position: 'absolute',
  },
  iconSearch: {
    marginRight: -12,
  },
  indicatorContainer : {
    flex : 1,
    alignItems:'center',
    justifyContent : 'center',
    backgroundColor : Color.bgColorPurple
  },
})

export { styles }
