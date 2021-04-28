import { StyleSheet, Dimensions } from 'react-native'
import { Color, FontSize, FontType } from '../../assets'

const styles = StyleSheet.create({
  headerControl: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerWithoutBackButton : {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  fullscreenButton: {
    top: '4%',
    paddingRight: '4%',
    alignItems: 'flex-end',
  },
  controllerWrapper: {
    flex: 3,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 5,
    justifyContent: 'space-evenly',
  },
  controllerTouchable: {
    padding: 5,
  },
  controllerTouchableDisabled: {
    opacity: 0.3,
  },
  smallBarWrapper: {
    marginBottom: '2%',
    justifyContent : 'flex-end',
  },
  barWrapper: {
    marginBottom: 6,
    justifyContent : 'flex-end',
  },
  timeWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 5,
    justifyContent: 'space-between',
  },
  timeLeft: {
    flex: 1,
    fontSize: 16,
    color: Color.white,
    fontFamily: FontType.regular,
    paddingLeft: FontSize.mediumLarge,
  },
  timeRight: {
    flex: 1,
    paddingRight: 12,
    textAlign: 'right',
    color: Color.white,
    fontFamily: FontType.regular,
    fontSize: FontSize.mediumLarge,
  },
})

export { styles }