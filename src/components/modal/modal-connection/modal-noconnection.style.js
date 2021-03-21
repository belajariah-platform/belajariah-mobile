import { StyleSheet, Dimensions } from 'react-native'
import { Color, FontType, FontSize } from '../../../assets'

const { height }  = Dimensions.get('window')

const styles = StyleSheet.create({
  backdropStyle : {
    flex:1,
    margin: 0,
    alignItems:'stretch',
    justifyContent: 'flex-end',
  },
  modalStyle : {
    height:height/1.9,
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
    flex:1,
    marginTop:-24,
    alignSelf: 'center',
    justifyContent:'center',
  },
  TxtButton : {
    width: 145,
    marginTop: 12,
    borderWidth: 1,
    borderRadius: 12,
    paddingVertical: 7,
    color: Color.white,
    alignSelf: 'center',
    marginHorizontal: 4,
    textAlign: 'center',
    paddingHorizontal: 10,
    fontFamily: FontType.bold,
    borderColor: Color.greyMedium,
    fontSize: FontSize.mediumLarge,
    backgroundColor: Color.purpleButton,
  },
})

export { styles }