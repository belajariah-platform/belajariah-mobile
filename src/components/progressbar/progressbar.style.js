import { Color } from '../../assets'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container : {
    height:8,
    marginBottom: 0,
    width: '100%',
    borderRadius: 5,
    marginVertical: 2,
    backgroundColor: '#5b147e',
  },
  progressBar: {
    height:9,
    borderRadius:10,
    maxWidth: '100%',
    borderWidth : 0,
    borderColor: Color.transparent,
  },
})

export { styles }