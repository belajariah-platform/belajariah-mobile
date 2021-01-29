import { StyleSheet, Dimensions } from 'react-native'
import { Color, FontSize, FontType } from '../../assets'

const styles = StyleSheet.create({
  headerControl: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  headerControlFullscreen: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  fullscreenButton: {
    top: 6,
    paddingRight: 6,
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
  barWrapper: {
    flex: 1,
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
    paddingLeft: FontSize.mediumLarge,
    fontFamily: FontType.regular,
    color: Color.white,
  },
  timeRight: {
    flex: 1,
    fontSize: FontSize.mediumLarge,
    fontFamily: FontType.regular,
    color: Color.white,
    paddingRight: 12,
    textAlign: 'right',
  },
})

export { styles }