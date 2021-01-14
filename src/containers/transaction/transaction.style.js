import { StyleSheet } from 'react-native'

import { Color, FontType, FontSize } from '../../assets'

const styles = StyleSheet.create({
  containerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerScrollView: {
    width:'100%',
    marginBottom: 72,
  },
  containerNoTransaction: {
    width: '90%',
    height: 300,
    marginTop: '5%',
    borderRadius: 25,
    alignItems : 'center',
    marginHorizontal: '5%',
    justifyContent : 'center',
    backgroundColor: Color.transparentBg,
  },
  titleHeader: {
    marginTop: '5%',
    marginLeft: '5%',
    color: Color.white,
    fontFamily: FontType.bold,
    fontSize: FontSize.mediumLarge,
  },
  imageBackground : {
    width: '100%',
    height: '100%',
    marginTop: '5%',
    alignItems: 'center',
  },
  bgHeader: {
    flex: 1,
    backgroundColor: Color.transactionBgColor,
  },
  bgNoTransaction: {
    flex: 1,
    width: '100%',
    borderRadius: 20,
  },
  bgNoTransactionTransparent: {
    width: 376,
    height: 300,
    marginTop: 20,
    borderRadius: 20,
    position: 'absolute',
    backgroundColor: Color.transparentBg,
  },
  bgTransactionTransparent: {
    width:'90%',
    borderWidth: 0,
    marginBottom:7,
    marginTop: '5%',
    borderRadius: 12,
    alignSelf:'center',
    paddingVertical:12,
    paddingHorizontal:15,
    backgroundColor: Color.transparentBg,
  },
  iconFilter: {
    top: '25%',
    marginRight: '2%',
  },
  iconStatus: {
    marginRight: 8,
  },
  ribbonComplete: {
    top: -16,
    right: -20,
    position: 'absolute',
  },
  ribbonFailed: {
    top: -20,
    right: -20,
    position: 'absolute',
  },
  textFirstLine: {
    marginTop : 15,
    color: Color.white,
    fontSize: FontSize.medium,
    fontFamily: FontType.regular,
  },
  textSecondLine: {
    color: Color.white,
    fontSize: FontSize.medium,
    fontFamily: FontType.regular,
  },
  textBold: {
    color: Color.white,
    fontSize: FontSize.extraSmall,
    fontFamily: FontType.bold,
  },
  textCardStatus: {
    alignSelf: 'flex-start',
    fontSize: FontSize.mediumLarge,
  },
  textCardPending: {
    color: 'yellow',
    alignSelf: 'flex-start',
    fontSize: FontSize.large,
  },
  textCardFailed: {
    alignSelf: 'flex-start',
    color: Color.textFailed,
    fontSize: FontSize.large,
  },
  textInvoice: {
    marginBottom: 4,
    color: Color.white,
    fontSize: FontSize.small,
    fontFamily: FontType.regular,
  },
  textDesc: {
    marginBottom: 8,
    color: Color.white,
    fontFamily: FontType.bold,
    fontSize: FontSize.extraSmall,
  },
  textDate: {
    marginTop:3,
    color: Color.white,
    fontSize: FontSize.extraSmall,
    fontFamily: FontType.regular,
  },
  flexRow: {
    flexDirection: 'row',
  },
})

export { styles }
