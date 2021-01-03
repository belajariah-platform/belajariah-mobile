import { StyleSheet, Dimensions } from 'react-native'
import { Color } from '../../../assets'

const { height }  = Dimensions.get('window')

const styles = StyleSheet.create({
  backdropStyle : {
    flex:1,
    margin: 0,
    alignItems:'stretch',
    justifyContent: 'flex-end',
  },
  modalStyle : {
    height:height/2.5,
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
  }
})

export { styles }