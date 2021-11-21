import { StyleSheet } from 'react-native'
import { Color, FontSize, FontType } from '../../../assets'

const styles = StyleSheet.create({
  iconBack: {
    marginTop: 0,
  },
  containerMain: {
    flex: 1,
    backgroundColor: Color.softPink,
  },
  containerHeader: {
    backgroundColor: Color.transactionBgColor,
  },
  containerScrollView: {
    paddingHorizontal : 20,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  flexHeader: {
    paddingBottom: 16,
    alignItems: 'center',
    flexDirection: 'row',
  },
  semiBox: {
    height: 16,
    width: '100%',
    marginTop: -16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: Color.softPink,
  },
  cardDetail: {
    borderWidth : 0,
    borderRadius: 10,
    marginBottom : 15,
    paddingVertical : 10,
    paddingHorizontal : 15,
    backgroundColor : Color.white,
  },
  textTitleWhite: {
    color: Color.white,
    fontFamily: FontType.bold,
    fontSize: FontSize.mediumLarge,
  },
  buttonStyle: {
    padding: 12,
    height : 45,
    marginTop: 4,
    width : '100%',
    borderRadius: 8,
    alignSelf: 'center',
    marginHorizontal: 4,
    borderColor: Color.white,
    backgroundColor: Color.bgColorPurple,
  },
  containerButtonUpload: {
    alignItems: 'center',
  },
  textTitle: {
    color: Color.black,
    fontSize: FontSize.small,
    fontFamily: FontType.bold,
  },
  viewButtonFinish: {
    marginTop: 10,
  },
  Txtright: {
    marginTop : 4,
    textAlign: 'right',
    color: Color.black,
    fontSize: FontSize.small,
    fontFamily: FontType.regular,
  },
  ViewDescBank: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  customStyle : {
    paddingVertical : 20,
  },
  textInput : {
    marginLeft : -21,
    marginVertical: 0,
    marginBottom : -25,
    borderColor : Color.transparent,
  },
  imageStyle : {
    opacity : 0.3,
    borderRadius : 10,
  },
  containerModal: {
    alignItems: 'center',
  },
  contentModal: {
    marginHorizontal: '6%',
  },
  textModalTitle: {
    color: Color.black,
    textAlign: 'center',
    fontFamily: FontType.bold,
    fontSize: FontSize.medium,
  },
  textModalDesc: {
    lineHeight: 24,
    textAlign: 'center',
    fontSize: FontSize.smallMedium,
  },
  textModalDescBold: {
    lineHeight: 24,
    textAlign: 'center',
    fontFamily : FontType.bold,
    fontSize: FontSize.smallMedium,
  },
  iconComplete: {
    marginVertical: '4%',
  },
  ViewNotice: {
    padding: 20,
    marginBottom: 16, 
    borderRadius: 20, 
    alignItems: 'center',
    backgroundColor: 'white', 
  },
  IconNotice: {
    marginBottom: 10,
    textAlign: 'center',
  },
  TxtNotice: {
    color: '#1a1a1a', 
    fontWeight: '700',
    textAlign: 'center', 
    fontSize: FontSize.smallMedium, 
  }
})

export default styles