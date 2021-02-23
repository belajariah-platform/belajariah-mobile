import { StyleSheet } from 'react-native'
import { FontType, FontSize, Color } from '../../../assets'


const styles = StyleSheet.create({
  backdropStyle : {
    flex:1,
    margin: 0,
    alignItems:'stretch',
    justifyContent: 'flex-end',
  },
  modalStyle : {
    height: '92%',
    borderTopLeftRadius:22,
    borderTopRightRadius: 22,
    backgroundColor:Color.white,
  },
  closeStyle : {
    right:15,
    marginTop:17,
    alignItems:'flex-end',
    justifyContent:'center',
  },
  modalContentSyle : {
    flex: 1,
    justifyContent:'space-between'
  },
  textAyat: {
    textAlign: 'center',
    color: Color.textSurahName,
    fontSize: FontSize.largest,
    fontFamily: FontType.arabBold,
  },
  textModal : {
    color : Color.black,
    textAlign: 'center',
    paddingHorizontal: 24,
    fontSize : FontSize.medium,
    fontFamily: FontType.regular,
  },
  textTimer : {
    bottom : 72,
    textAlign: 'center',
    color : Color.purpleMedium,
    fontFamily : FontType.bold,
    fontSize : FontSize.medium,
  },
})

export { styles }