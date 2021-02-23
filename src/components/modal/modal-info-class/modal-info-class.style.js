import { StyleSheet } from 'react-native'
import { FontType, FontSize, Color } from '../../../assets'

const styles = StyleSheet.create({
  modalStyle : {
    width: '100%',
    height:'auto',
    borderRadius: 22,
    alignSelf: 'center',
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
  viewTxtJudulModal : {
    marginVertical: '3%',
  },
  TxtJudulModal : {
    color: Color.black,
    textAlign: 'center',
    fontSize: FontSize.medium,
    fontFamily: FontType.bold,
  },
  TxtCloseModal: {
    color: Color.bgColor,
    fontSize: FontSize.medium,
  },
  touchClose : {
    width : 90,
    alignItems : 'center',
  },
  containerPaketNaim : {
    marginBottom: '2%',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  containerPaketDarussalam : {
    alignSelf: 'center',
    marginBottom: '2%',
    justifyContent: 'center',
    backgroundColor: '#f9edff',
  },
  containerPaketFirdaus : {
    alignSelf: 'center',
    marginBottom: '2%',
    justifyContent: 'center',
    backgroundColor: '#e7fcf8',
  },
  viewTitlePaket : {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  viewTxtTitlePaket : {
    marginLeft: 10,
  },
  TxtTitlePaketDarussalam : {
    color: Color.purpleText,
    fontFamily: FontType.bold,
    fontSize: FontSize.mediumLarge,
  },
  TxtTitlePaketNaim : {
    color: '#ea4c88',
    fontFamily: FontType.bold,
    fontSize: FontSize.mediumLarge,
  },
  TxtTitlePaketFirdaus : {
    color: '#1abc9c',
    fontFamily: FontType.bold,
    fontSize: FontSize.mediumLarge,
  },
  TxtHargaCoret : {
    marginRight: 5,
    color: Color.black,
    fontSize: FontSize.small,
    fontFamily: FontType.bold,
    textDecorationStyle: 'solid',
    textDecorationLine: 'line-through', 
  },
  viewDescPaket : {
    marginBottom: 5,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  TxtDescPaket : {
    color: Color.black,
    fontFamily: FontType.bold,
    fontSize: FontSize.extraSmall,
  },
  IconBenefit : {
    marginRight: 10,
    alignSelf:'center',
  },
  containerBenefits: {
    marginTop: 16,
    borderWidth: 0,
    borderRadius: 12,
    marginBottom: '10%',
  },
  textBold: {
    marginBottom: 7,
    color: Color.black,
    fontFamily: FontType.bold,
    fontSize: FontSize.smallPoint,
  },
  flexBenefits: {
    left: '40%',
    marginTop: 2,
    marginBottom: 2,
    alignItems: 'center',
    flexDirection: 'row',
  },
})

export { styles }