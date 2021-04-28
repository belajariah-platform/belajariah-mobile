import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
  modalContainer: {
    right: 0,
    left: -20,
    width : width,
    height : height,
  },
  hideModal : {
    top : 22,
    left : 4,
    position : 'absolute',
  }
})

export { styles }