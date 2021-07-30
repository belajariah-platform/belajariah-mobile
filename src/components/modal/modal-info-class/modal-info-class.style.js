import { StyleSheet } from 'react-native'
import { FontType, FontSize, Color } from '../../../assets'

const styles = StyleSheet.create({
  modalStyle : {
    width: '100%',
    borderRadius: 20,
    backgroundColor: Color.white,
  },
  modalContentSyle : {
    alignSelf: 'center',
    paddingVertical : 20,
    justifyContent:'center',
  },
  viewTxtJudulModal : {
    marginBottom: 16,
  },
  TxtJudulModal : {
    color: Color.black,
    textAlign: 'center',
    fontSize: FontSize.medium,
    fontFamily: FontType.bold,
  },
  containerPaket : {
    alignSelf: 'center',
    paddingVertical : 12,
    paddingHorizontal : 12,
    justifyContent: 'center',
  },
  viewTitlePaket : {
    width: '70%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  viewTxtTitlePaket : {
    width: '100%',
    marginLeft: 2,
    marginRight: 2,
  },
  TxtTitlePaket : {
    color: Color.purpleText,
    fontFamily: FontType.bold,
    fontSize: FontSize.medium,
  },
  TxtTitlePackage : {
    color: '#4D4D4D',
    fontFamily: FontType.bold,
    fontSize: FontSize.medium,
  },
  TxtHargaCoret : {
    marginTop: 2,
    marginRight: 5,
    color: Color.black,
    fontSize: FontSize.small,
    fontFamily: FontType.regular,
    textDecorationStyle: 'solid',
    textDecorationLine: 'line-through',
  },
  TxtHarga : {
    marginLeft: 2,
    color: Color.black,
    fontFamily: FontType.bold,
    fontSize: FontSize.smallMedium,
  },
  TxtPrice : {
    marginRight: 5,
    color: Color.purpleText,
    fontSize: FontSize.medium,
    fontFamily: FontType.bold,
    textDecorationStyle: 'solid',
    textDecorationLine: 'line-through',
  },
  TxtMeet : {
    color: Color.purpleText,
    fontFamily: FontType.bold,
    fontSize: FontSize.smallPoint,
  },
  viewDescPaket : {
    marginBottom: 5,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  TxtDescPaket : {
    color: Color.black,
    fontFamily: FontType.regular,
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
  textRegular: {
    marginBottom: 7,
    color: Color.black,
    textAlign: 'justify',
    fontFamily: FontType.regular,
    fontSize: FontSize.smallPoint,
  },
  textDescPackage: {
    marginVertical: 4,
    color: Color.black,
    textAlign: 'justify',
    fontFamily: FontType.regular,
    fontSize: FontSize.smallPoint,
  },
  flexBenefits: {
    left: '34%',
    marginBottom: 4,
    alignItems: 'center',
    flexDirection: 'row',
  },
})

export { styles }