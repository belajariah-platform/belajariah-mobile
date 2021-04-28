import { StyleSheet } from 'react-native'

import { Color, FontSize, FontType } from '../../../assets'

const styles = StyleSheet.create({
  backdropStyle : {
    margin:0,
    alignItems:'stretch',
    justifyContent:'flex-end',
  },
  modalStyle : {
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor:Color.white,
  },
  dateStyle : {
    height:100,
    marginVertical:5
  },
  iconButtonContainer: {
    margin: 10,
    alignItems:'flex-start',
  },
  iconButton: {
    color: Color.black,
  },
  modalDateBackgroundStyle: {
    borderTopLeftRadius:22,
    borderTopRightRadius: 22,
    backgroundColor:Color.white,
  },
  titleModal : {
    marginLeft : 10,
    alignSelf : 'center',
    color : Color.black,
    fontFamily: FontType.regular,
    fontSize : FontSize.mediumLarge,
  },
  containerHeader : {
    marginTop : 17,
    marginBottom : 15,
    alignItems : 'center',
    flexDirection : 'row',
    marginHorizontal : 15,
    justifyContent : 'space-between',
  },
  closeStyle : {
    alignItems:'flex-end',
    justifyContent:'center',
  },
  buttonSave : {
    width:'90%',
  }
})

export { styles }