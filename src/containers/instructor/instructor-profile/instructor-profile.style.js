import { StyleSheet } from 'react-native'
import { Color, FontType, FontSize } from '../../../assets'

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: Color.softPink,
  },
  flexRating: {
    flexDirection: 'row',
  },
  textRating: {
    marginLeft: 4,
    color: Color.white,
    fontFamily: FontType.regular,
    fontSize: FontSize.smallMedium,
  },
  background: {
    marginLeft: 0,
    marginTop: -192,
  },
  btnClose: {
    marginTop: 16,
    marginLeft: 12,
  },
  btnDrawer: {
    width: 20,
    height: 30,
    marginTop: 8,
    marginRight: 12,
  },
  containerDrawerButton: {
    width: '100%',
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerProfileHeader: {
    marginTop: 164,
    alignSelf: 'center',
    position: 'absolute',
    alignItems: 'center',
  },
  containerEmailPhone: {
    marginTop: 2,
    flexDirection: 'row',
  },
  containerCardStatus: {
    borderWidth: 0,
    marginTop: -172,
    borderRadius: 24,
  },
  wrapperCardStatus: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  containerCardProfile: {
    marginTop: 12,
    borderWidth: 0,
    borderRadius: 24,
    marginBottom: 20,
  },
  cardStatus: {
    borderWidth: 0,
    borderRadius: 16,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: Color.softPink,
  },
  textStatusComplete: {
    textAlign: 'center',
    color: Color.purpleText,
    fontFamily: FontType.regular,
    fontSize: FontSize.smallMedium,
  },
  textStatusOngoing: {
    textAlign: 'center',
    color: Color.yellowText,
    fontFamily: FontType.regular,
    fontSize: FontSize.smallMedium,
  },
  textStatusOverdue: {
    textAlign: 'center',
    color: Color.textRed,
    fontFamily: FontType.regular,
    fontSize: FontSize.smallMedium,
  },
  iconStatus: {
    marginVertical: 8,
    alignSelf: 'center',
  },
  textCompleteCount: {
    textAlign: 'center',
    color: Color.purpleText,
    fontFamily: FontType.bold,
    fontSize: FontSize.extraLarge,
  },
  textOngoingCount: {
    textAlign: 'center',
    color: Color.yellowText,
    fontFamily: FontType.bold,
    fontSize: FontSize.extraLarge,
  },
  textOverdueCount: {
    textAlign: 'center',
    color: Color.textRed,
    fontFamily: FontType.bold,
    fontSize: FontSize.extraLarge,
  },
  avatar: {
    zIndex: 1,
    width: 100,
    height: 100,
    marginTop: 56,
    borderWidth: 4,
    alignSelf: 'center',
    position: 'absolute',
    borderRadius: 100 / 2,
    borderColor: Color.white,
    backgroundColor: Color.black,
  },
  iconEmail: {
    marginTop: -2,
    marginRight: 6,
  },
  iconPhone: {
    marginTop: -4,
    marginRight: 4,
  },
  iconProfile: {
    marginTop: -48,
    alignSelf: 'center',
  },
  headerName: {
    marginTop: 2,
    color: Color.white,
    fontSize: FontSize.large,
    fontFamily: FontType.bold,
  },
  headerEmail: {
    color: Color.white,
    fontFamily: FontType.regular,
    fontSize: FontSize.mediumLarge,
  },
  headerPhone: {
    color: Color.white,
    fontFamily: FontType.regular,
    fontSize: FontSize.mediumLarge,
  },
  subHeader: {
    marginTop: -4,
    color: Color.purpleText,
    fontFamily: FontType.bold,
    fontSize: FontSize.smallMedium,
  },
  dataProfile: {
    marginTop: 4,
    color: Color.purpleHint,
    fontFamily: FontType.regular,
    fontSize: FontSize.smallMedium,
  },
  divider: {
    marginVertical: 8,
  },
})

export { styles }
