import { StyleSheet } from 'react-native'
import { FontType, FontSize, Color } from '../../../assets'

const styles = StyleSheet.create({
  modalStyle : {
    width: 300,
    borderRadius: 22,
    height:'auto',
    alignSelf: 'center',
    paddingHorizontal:25,
    paddingTop: 20,
    paddingBottom : 5,
    backgroundColor:Color.white,
  },
  closeStyle : {
    right:15,
    alignItems:'flex-end',
    justifyContent:'center',
  },
  modalContentSyle : {
    alignSelf: 'center',
    justifyContent:'center',
  },
  containerReview : {
    height: 'auto',
  },
  TextTitleRating: {
    color: Color.black,
    textAlign: 'center',
    fontSize: FontSize.mediumLarge,
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
  },
  ButtonClass : {
    width: 90,
    borderRadius: 20,
  },
  customRatingBarStyle: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  starImageStyle: {
    width: 35,
    height: 35,
    marginRight:8,
  },
  TxtCloseModal: {
    color: Color.bgColor,
    fontSize: FontSize.medium,
  },
  touchClose : {
    width : 90,
    alignItems : 'center',
  },
  viewButtonModal: {
    borderRadius: 15,
    marginBottom: '2%',
    marginVertical: '4%',
    paddingVertical: '3%',
  },
  TxtButtonModal: {
    textAlign: 'center',
    fontFamily: FontType.regular,
    fontSize: FontSize.smallMedium,
  },
})

export { styles }