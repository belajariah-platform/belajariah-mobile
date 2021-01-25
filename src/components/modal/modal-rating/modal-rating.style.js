import { StyleSheet, Dimensions } from 'react-native'
import { FontType, FontSize, Color } from '../../../assets'

const { height }  = Dimensions.get('window')

const styles = StyleSheet.create({
  modalStyle : {
    width: 300,
    borderRadius: 22,
    height:height/2.5,
    alignSelf: 'center',
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
    marginTop:17,
    alignSelf: 'center',
    justifyContent:'center',
  },
  containerReview : {
    marginTop: 10,
    height: 'auto',
    marginBottom: 15,
  },
  TextTitleRating: {
    fontSize: FontSize.large,
    fontFamily: FontType.regular,
  },
  containerTextArea : {
    marginTop: 10,
  },
  textArea: {
    height:80,
    width: '100%',
    elevation : 2,
    borderRadius:10,
    alignSelf: 'center',
    backgroundColor:'white',
    textAlignVertical: 'top',
  },
  containerRating : {
    paddingVertical:3,
    alignItems:'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 20,
  },
  ButtonClass : {
    top: '-8%',
    width: 90,
    height: 35,
    borderRadius: 20,
  },
  customRatingBarStyle: {
    marginTop: 15,
    marginBottom: 5,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  starImageStyle: {
    width: 35,
    height: 35,
    marginRight:3,
  },
  TxtCloseModal: {
    color: Color.bgColor,
    fontSize: FontSize.medium,
  },
})

export { styles }