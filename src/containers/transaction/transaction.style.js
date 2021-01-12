import { StyleSheet } from 'react-native'

import { Color, FontType, FontSize } from '../../assets'

const styles = StyleSheet.create({
  containerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerScrollView: {
    marginBottom: 72,
  },
  containerNoTransaction: {
    flex: 1,
    marginTop: 16,
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  titleHeader: {
    marginTop: 16,
    marginLeft: 12,
    color: Color.white,
    fontFamily: FontType.bold,
    fontSize: FontSize.mediumLarge,
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
    borderWidth: 0,
    borderRadius: 12,
    backgroundColor: Color.transparentBg,
  },
  iconFilter: {
    marginTop: 8,
    marginRight: 8,
  },
  iconNoTransaction: {
    marginTop: 80,
    position: 'absolute',
  },
  iconComplete: {
    marginTop: 4,
    marginRight: 8,
  },
  iconFailed: {
    marginTop: 4,
    marginRight: 8,
  },
  ribbonComplete: {
    top: -20,
    right: -20,
    position: 'absolute',
  },
  ribbonFailed: {
    top: -20,
    right: -20,
    position: 'absolute',
  },
  textFirstLine: {
    marginTop: 174,
    color: Color.white,
    position: 'absolute',
    fontSize: FontSize.medium,
    fontFamily: FontType.regular,
  },
  textSecondLine: {
    marginTop: 196,
    color: Color.white,
    position: 'absolute',
    fontSize: FontSize.medium,
    fontFamily: FontType.regular,
  },
  textBold: {
    color: Color.white,
    fontSize: FontSize.medium,
    fontFamily: FontType.bold,
  },
  textCardSuccess: {
    alignSelf: 'flex-start',
    color: Color.textSuccess,
    fontSize: FontSize.large,
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
    fontSize: FontSize.medium,
    fontFamily: FontType.regular,
  },
  textDesc: {
    marginBottom: 8,
    color: Color.white,
    fontSize: FontSize.medium,
    fontFamily: FontType.bold,
  },
  textDate: {
    color: Color.white,
    fontSize: FontSize.medium,
    fontFamily: FontType.regular,
  },
  flexRow: {
    flexDirection: 'row',
  },
})

export { styles }
