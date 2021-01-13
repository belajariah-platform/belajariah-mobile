import { StyleSheet } from 'react-native'
import { Color } from '../../assets'


const styles = StyleSheet.create({
  input: {
    marginVertical: 1,
    borderRadius : 100,
    backgroundColor: Color.white,
    borderColor : Color.greyInput,
  },
  caption: {
    fontSize: 12,
    color: '#ff6721',
  },
})


export { styles }