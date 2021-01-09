import { StyleSheet } from 'react-native'

import { Resp } from '../../utils'
import { Color, FontType, FontSize } from '../../assets'

const styles = StyleSheet.create({
  drawerBackground: {
    flex: 1,
    height: 720,
    marginTop: -6,
    marginRight: -4,
  },
  btnClose: {
    marginLeft: 16,
    marginTop: 4,
  },
  labelHeader: {
    marginLeft: 28,
    fontFamily: FontType.bold,
    fontSize: FontSize.mediumLarge,
    color: Color.white,
  },
  label: {
    marginLeft: 42,
    fontFamily: FontType.regular,
    fontSize: FontSize.mediumLarge,
    color: Color.white,
  },
  iconLogout: {
    left: 108,
    marginRight: -56,
  },
  versionContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
    alignItems: 'flex-end',
    marginBottom: 56,
  },
  version: {
    marginTop: 4,
    marginLeft: 16,
    fontFamily: FontType.regular,
    fontSize: FontSize.smallMedium,
    color: Color.white,
  },
})

export { styles }
