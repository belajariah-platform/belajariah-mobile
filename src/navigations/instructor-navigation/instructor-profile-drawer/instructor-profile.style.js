import { StyleSheet } from 'react-native'

import { Color, FontType, FontSize } from '../../../assets'

const styles = StyleSheet.create({
  flexFull: {
    flex: 1,
  },
  drawerBackground: {
    flex: 1,
    marginTop: -6,
    marginRight: -8,
  },
  btnClose: {
    marginTop: 6,
    marginLeft: 16,
  },
  labelHeader: {
    marginLeft: 28,
    color: Color.white,
    fontFamily: FontType.bold,
    fontSize: FontSize.mediumLarge,
  },
  label: {
    marginLeft: 42,
    color: Color.white,
    fontFamily: FontType.regular,
    fontSize: FontSize.mediumLarge,
  },
  iconLogout: {
    left: 108,
    marginRight: -56,
  },
  versionContainer: {
    flex: 1,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  version: {
    marginTop: 4,
    marginLeft: 16,
    color: Color.white,
    fontFamily: FontType.regular,
    fontSize: FontSize.smallMedium,
  },
})

export { styles }
