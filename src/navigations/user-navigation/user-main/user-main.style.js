import { StyleSheet } from 'react-native'
import { FontType, Color } from '../../../assets'

const styles = StyleSheet.create({
  tabBarStyle : {
    height: 60,
    elevation: 40,
    marginTop:-50,
    borderWidth: 0,
    borderTopWidth: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    shadowColor: Color.black,
    borderColor: Color.transparent,
    shadowOffset: { width: 0, height: 1, },
  },
  labelStyle : {
    fontSize: 11,
    marginTop: -5,
    marginBottom:5,
    fontFamily: FontType.regular
  },
})

export { styles }