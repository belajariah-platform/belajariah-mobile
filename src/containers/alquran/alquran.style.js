import { StyleSheet } from 'react-native'
import { Color, FontType, FontSize, FontWeight } from '../../assets'

const styles = StyleSheet.create({
  containerBackground: {
    width: '100%',
    height: '100%',
  },
  containerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sceneContainerStyle: {
    backgroundColor: Color.white,
  },
  tabBarStyle: {
    backgroundColor: Color.white,
    marginTop: '38%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 48,
    borderBottomWidth: 3,
    borderBottomColor: Color.dividerGrey,
    elevation: 0,
  },
  tabBarIndicatorStyle: {
    backgroundColor: 'purple',
    width: '20%',
    left: '15%',
    alignSelf: 'center',
    height: 3,
    borderRadius: 2,
    marginBottom: -3,
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
  containerSearch: {
    marginTop: 20,
    borderWidth: 0,
    borderRadius: 100,
    width: '90%',
    borderColor: Color.greySearchBorder,
    backgroundColor: Color.searchGrey,
  },
  containerListSurah: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 10,
    borderBottomWidth: 2,
    borderBottomColor: Color.dividerGrey,
    paddingTop: 2,
    paddingBottom: 1,
    paddingHorizontal: 20,
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
  textHeader: {
    fontSize: FontSize.mediumLarge,
    fontFamily: FontType.bold,
    color: Color.white,
  },
  textSearch: {
    color: Color.grey,
    fontSize: FontSize.small,
  },
  textIdSurah: {
    fontFamily: FontType.regular,
    color: Color.white,
    textAlign: 'center',
    fontSize: FontSize.small,
  },
  textSurahName: {
    fontFamily: FontType.bold,
    fontSize: FontSize.mediumLarge,
    color: Color.textSurahName,
  },
  textRegular: {
    fontFamily: FontType.regular,
    fontSize: FontSize.smallMedium,
    color: Color.black,
    marginRight: 4,
  },
  textSurahNameArab: {
    flex: 3,
    color: Color.textSurahName,
    fontFamily: FontType.arabBold,
    fontSize: FontSize.extraLarge,
  },
  iconSurah: {
    position: 'absolute',
    top: -10,
  },
})

export { styles }
