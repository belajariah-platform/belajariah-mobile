import { StyleSheet } from 'react-native'
import { Color } from '../../../../assets'

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    width: '90%',
    backgroundColor: 'transparent',
    padding: 24,
  },
  btnClose: {
    alignSelf: 'flex-end',
  },
  videoContainerStyle: {
    height: 176,
    width: '100%',
    alignSelf: 'center',
    backgroundColor: Color.softPink,
  },
  videoFullscreenContainerStyle: {
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
  },
  videoStyle: {
    height: 176,
    width: '100%',
    alignSelf : 'center',
  },
  videoFullscreenStyle: {
    width: '100%',
    height: '100%',
  },
  controllerStyle: {
    height: 176,
    width: '100%',
    marginTop: -176,
    alignSelf: 'center',
    backgroundColor: '#000000c4',
  },
  controllerFullscreenStyle: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: 'absolute',
    backgroundColor: '#000000c4',
    justifyContent: 'space-between',
  },
})

export default styles
