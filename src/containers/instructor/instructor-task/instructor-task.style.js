import { StyleSheet } from 'react-native'
import { Color, FontType, FontSize } from '../../../assets'

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    backgroundColor: Color.white,
  },
  containerHeader: {
    paddingRight:20,
    paddingVertical:2,
    alignItems:'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerTaskList: {
    borderRadius: 20,
    marginVertical: 8,
    paddingVertical: 8,
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 12,
    paddingHorizontal: 16,
    backgroundColor: Color.white,
  },
  textHeader: {
    color: Color.black,
    fontSize: FontSize.large,
    fontFamily: FontType.bold,
  },
  textUsername: {
    marginLeft: 8,
    color: Color.black,
    fontSize: FontSize.medium,
    fontFamily: FontType.bold,
  },
  textMoment: {
    marginLeft: 8,
    color: Color.black,
    fontSize: FontSize.extraSmall,
    fontFamily: FontType.regular,
  },
  avatarUser: {
    width: 48,
    height: 48,
  },
  sceneContainerStyle: {
    backgroundColor: Color.softPink,
  },
  tabBarStyle: {
    height: 48,
    elevation: 0,
    marginTop: 2,
    borderBottomWidth: 3,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: Color.softPink,
    borderBottomColor: Color.dividerGrey,
  },
  tabBarIndicatorStyle: {
    height: 3,
    borderRadius: 2,
    marginBottom: -3,
    alignSelf: 'center',
    backgroundColor: Color.bgColorPurple,
  },
  tabBarLabelStyle: {
    fontSize: FontSize.smallMedium,
    fontFamily: FontType.bold,
    textTransform: 'capitalize',
  },
  iconComplete: {
    right: 16,
    position: 'absolute',
  },
})

export { styles }
