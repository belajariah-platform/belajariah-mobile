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
    marginTop: 164,
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
  avatar: {
    alignSelf: 'center',
    zIndex: 1,
    position: 'absolute',
    backgroundColor: Color.black,
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    marginTop: 56,
    borderWidth: 4,
    borderColor: Color.white,
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
    color: Color.white,
    fontFamily: FontType.bold,
    fontSize: FontSize.large,
    marginTop: 2,
  },
  headerEmail: {
    color: Color.white,
    fontSize: FontSize.mediumLarge,
    fontFamily: FontType.regular,
  },
  headerPhone: {
    color: Color.white,
    fontSize: FontSize.mediumLarge,
    fontFamily: FontType.regular,
  },
  subHeader: {
    marginTop: -4,
    fontFamily: FontType.bold,
    fontSize: FontSize.smallMedium,
    color: Color.purpleText,
  },
  dataProfile: {
    marginTop: 4,
    fontFamily: FontType.regular,
    fontSize: FontSize.smallMedium,
    color: Color.purpleHint,
  },
  divider: {
    marginVertical: 8,
  },
})

export { styles }
