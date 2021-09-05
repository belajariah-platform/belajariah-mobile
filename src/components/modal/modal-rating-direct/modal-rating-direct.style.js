import { StyleSheet, Dimensions } from 'react-native'
import { FontType, FontSize, Color } from '../../../assets'

const { width, height }  = Dimensions.get('window')

const styles = StyleSheet.create({
  backdropStyle : {
    flex:1,
    margin: 0,
    alignItems:'stretch',
    justifyContent: 'flex-end',
  },
  modalStyle : {
    zIndex: 1,
    width: '100%',
    height: height/1.75,
    alignSelf: 'center',
    // paddingHorizontal:25,
    // paddingTop: 20,
    // paddingBottom : 5,
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    backgroundColor:Color.white,
  },
  closeStyle : {
    right:15,
    alignItems:'flex-end',
    justifyContent:'center',
  },
  modalContentSyle : {
    // alignSelf: 'center',
    // justifyContent:'center',
  },
  TextTitleRating: {
    textAlign: 'center',
    fontSize: FontSize.mediumLarge,
    fontFamily: FontType.regular,
  },
  containerRating : {
    marginTop: 4,
    alignItems:'center',
    marginHorizontal: '6%',
  },
  ButtonClass : {
    width: 90,
    borderRadius: 20,
  },
  customRatingBarStyle: {
    // marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  starImageStyle: {
    width: 40,
    height: 40,
    marginRight:8,
    marginVertical: 4,
  },
  ViewTxtMdl : {
    marginVertical: 16,
  },
  containerTextArea : {
    marginTop: 20,
  },
  TxtCloseModal: {
    color: Color.bgColor,
    fontSize: FontSize.medium,
  },
  touchClose : {
    width : 90,
    alignItems : 'center',
  },
  ViewHeader : {
    zIndex: 2,
    height: 120,
    width: '100%',
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    backgroundColor: '#2CD1B3',
  },
  BackroundImgModal : {
    zIndex: 10,
    width: width,
    height: height / 4,
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
  },
  StyleBtn2 : {
    width: '100%',
    height: 44,
    borderRadius: 60,
    backgroundColor: '#BDBDBD',
  },
  StyleBtn : {
    width: 310,
    height: 44,
    borderRadius: 60,
    backgroundColor: Color.purpleButton,
  },
  StyleTxt : {
    color: Color.white,
    fontSize: FontSize.medium,
    fontFamily: FontType.bold,
  },
  StyleTxt2 : {
    color: Color.white,
    fontSize: FontSize.medium,
    fontFamily: FontType.bold,
  },
  TxtOr : {
    color: Color.purpleButton,
  },
  TopHeader : {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: Color.purpleButton,
  },
  TxtHeader : {
    maxWidth: '60%',
    lineHeight: 20,
    color: Color.white,
    fontSize: FontSize.medium,
    fontFamily: FontType.regular,
  },
  IconHeader : {
    marginRight: 16,
    marginLeft: '16%',
  },
  TxtHeaderBld : {
    color: Color.white,
    fontSize: FontSize.medium,
    fontFamily: FontType.bold,
  },
  TextTitleRatingBld : {
    fontFamily: FontType.bold,
  },
  TextTitleRatingBldYellow : {
    color: '#F1C40F',
    fontFamily: FontType.bold,
  }
})

export { styles }