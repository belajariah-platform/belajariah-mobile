import { StyleSheet } from 'react-native'

import { Color, FontType, FontSize } from '../../../assets'

const styles = StyleSheet.create({
  flexFull: {
    flex: 1,
    borderWidth : 0,
    borderLeftWidth : 0,
    backgroundColor : '#934DB0',
    borderColor : 'transparent',
  },
  drawerBackground: {
    flex : 1,
    paddingVertical: 20,
    alignItems : 'center',
    paddingHorizontal : 3,
  },
  imageAdmin :  {
    width : 35,
    height : 35,
  },
  textIcon : {
    marginTop : 4,
    color : Color.white,
    textAlign : 'center',
    fontSize : FontSize.overSmall,
    fontFamily : FontType.regular,
  },
  centered : {
    width : 60,
    height : 'auto',
    marginBottom : 5,
    borderRadius : 16,
    paddingVertical : 10,
    alignItems : 'center',
    justifyContent : 'center',
  },
  flexOne : { flex : 1 },
  centeredBottom : { alignItems : 'center' },
})

export { styles }
