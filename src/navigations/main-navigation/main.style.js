import { StyleSheet } from 'react-native'
import { FontType } from '../../assets'

const styles = StyleSheet.create({
  tabBarStyle : {
    elevation: 40,
    borderWidth: 0,
    marginTop: -30,
    borderTopWidth: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderColor: 'transparent',
  },
  labelStyle : {
    fontSize: 12,
    fontFamily: FontType.regular
  },
})

export { styles }