import { StyleSheet } from 'react-native'
import { FontType, FontSize, Color } from '../../../assets'

const styles = StyleSheet.create({
  modalStyle : {
    // width: '100%',
    borderRadius: 20,
    backgroundColor: Color.white,
  },
  modalContentSyle : {
    alignSelf: 'center',
    padding: 20,
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
  TxtMeet : {
    color: '#13A98B',
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
  NewContainer : {
    paddingHorizontal: '12%',
  },
  FlexNew: {
    flexDirection: 'row',
  },
  TxtTitlePackage : {
    color: Color.purpleButton,
    fontFamily: FontType.bold,
    fontSize: FontSize.medium,
  },
  TxtDescTitle : {
    marginBottom: 16,
    color: Color.black,
    fontSize: FontSize.small,
    fontFamily: FontType.regular,
  },
  TxtDescPack : {
    marginLeft: 6,
    maxWidth: '90%',
    color: Color.black,
    fontSize: FontSize.small,
    fontFamily: FontType.regular,
  },
  ViewPrice : {
    marginTop: 18,
  },
  TxtPrice : {
    color: Color.black,
    fontSize: FontSize.small,
    fontFamily: FontType.bold,
    textDecorationLine: 'line-through',
  },
  TxtPriceDiscount : {
    color: '#FF4545',
    fontFamily: FontType.bold,
    fontSize: FontSize.medium,
  },
  StyleBtn : {
    width: 'auto',
    marginHorizontal: '5%',
  }
})

export { styles }