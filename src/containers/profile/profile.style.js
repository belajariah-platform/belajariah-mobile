import { StyleSheet } from 'react-native'
import { Color, FontType, FontSize } from '../../assets'

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  background: {
    marginTop: -192,
    marginLeft: 0,
  },
  btnClose: {
    marginTop: 16,
    marginLeft: 8,
  },
  btnDrawer: {
    width: 20,
    height: 30,
    marginTop: 8,
    marginRight: 12,
  },
  containerDrawerButton: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  containerProfileHeader: {
    position: 'absolute',
    alignSelf: 'center',
    marginTop: 172,
    alignItems: 'center',
  },
  containerEmailPhone: {
    flexDirection: 'row',
    marginTop: 2,
  },
  containerCard: {
    borderRadius: 24,
    borderWidth: 0,
    marginTop: -172,
    marginBottom: 20,
  },
  avatarBorder: {
    zIndex: 1,
    width: 110,
    height: 110,
    marginTop: 56,
    alignSelf: 'center',
    position: 'absolute',
    borderRadius: 100 / 2,
  },
  avatar: {
    top: 10,
    zIndex: 1,
    width: 90,
    height: 90,
    alignSelf: 'center',
    position: 'absolute',
    borderRadius: 100 / 2,
  },
  iconEmail: {
    marginRight: 6,
    marginTop: -2,
  },
  iconPhone: {
    marginTop: -4,
    marginRight: 4,
  },
  iconProfile: {
    alignSelf: 'center',
    marginTop: -48,
  },
  headerName: {
    marginTop: 2,
    marginBottom : 3,
    color: Color.white,
    fontSize: FontSize.large,
    fontFamily: FontType.bold,
  },
  headerEmail: {
    color: Color.white,
    fontSize: FontSize.medium,
    fontFamily: FontType.regular,
  },
  headerPhone: {
    color: Color.white,
    fontFamily: FontType.regular,
    fontSize: FontSize.smallMedium,
  },
  subHeader: {
    marginTop: -4,
    fontFamily: FontType.bold,
    fontSize: FontSize.small,
    color: Color.purpleText,
  },
  dataProfile: {
    marginTop: 4,
    fontFamily: FontType.regular,
    fontSize: FontSize.small,
    color: Color.purpleHint,
  },
  divider: {
    marginVertical: 8,
  },
})

export { styles }
