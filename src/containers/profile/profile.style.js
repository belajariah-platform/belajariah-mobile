import { StyleSheet } from 'react-native'
import { Color, FontType, FontWeight } from '../../assets'

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: Color.bgColorGray,
  },
  background: {
    marginTop: -192,
    marginLeft: 0,
  },
  containerTopButton: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'flex-end',
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
    marginBottom: 48,
  },
  btnSetting: {
    width: 20,
    height: 30,
    marginTop: 8,
    marginRight: 12,
  },
  avatar: {
    alignSelf: 'center',
    zIndex: 1,
    position: 'absolute',
    backgroundColor: 'gray',
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    marginTop: 56,
    borderWidth: 4,
    borderColor: Color.bgColorWhite,
  },
  email: {
    marginRight: 6,
    marginTop: -2,
  },
  phone: {
    marginTop: -4,
    marginRight: 4,
  },
  profileIcon: {
    alignSelf: 'center',
    marginTop: -48,
  },
  headerName: {
    color: Color.textWhite,
    fontFamily: FontType.bold,
    fontSize: 20,
    marginTop: 2,
  },
  headerEmail: {
    color: Color.textWhite,
    fontFamily: FontType.regular,
  },
  headerPhone: {
    color: Color.textWhite,
    fontFamily: FontType.regular,
  },
  subHeader: {
    marginTop: -4,
    fontFamily: FontType.bold,
    color: Color.textPurpleBold,
  },
  dataProfile: {
    marginTop: 4,
    fontFamily: FontType.regular,
    color: Color.textPurpleLight,
  },
  divider: {
    marginVertical: 8,
  },
})

export { styles }
