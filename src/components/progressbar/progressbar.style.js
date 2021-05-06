import { Color } from '../../assets'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container : {
    height:8,
    width: '80%',
    marginBottom: 0,
    borderRadius: 5,
    marginVertical: 2,
    flexDirection : 'row',
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