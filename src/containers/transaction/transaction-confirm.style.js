import { Picker } from 'react-native'
import { StyleSheet } from 'react-native'
import { Color, FontSize, FontType } from '../../assets'

const styles = StyleSheet.create({

  containerMain: {
    flex: 1,
    backgroundColor: Color.softPink,
  },
  containerHeader: {
    backgroundColor: Color.transactionBgColor,
  },
  containerScrollView: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  flexHeader: {

    flexDirection: 'row',
    paddingVertical: '5%',
    justifyContent: 'center',
  },
  flexRating: {
    marginTop: 4,
    flexDirection: 'row',
  },
  flexColumn: {
    flexDirection: 'column',
  },
  flexRow: {
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
    borderRadius: 8,
  },
  textTitleWhite: {
    color: Color.white,
    fontFamily: FontType.bold,
    fontSize: FontSize.mediumLarge,
  },
  textTitleBlack: {
    color: Color.black,
    textAlign: 'center',
    marginHorizontal: '10%',
    fontFamily: FontType.bold,
    fontSize: FontSize.extraLarge,
  },
  textBold: {
    marginBottom: 4,
    textAlign: 'left',
    color: Color.black,
    fontSize: FontSize.medium,
    fontFamily: FontType.bold,
  },
  textRegularPurple: {
    color: Color.purpleText,
    fontFamily: FontType.regular,
    fontSize: FontSize.smallMedium,
  },
  textBuyClass: {
    textAlign: 'center',
    color: Color.white,
    fontFamily: FontType.bold,
    fontSize: FontSize.mediumLarge,
  },
  textGateway: {
    color: Color.black,
    paddingVertical: 4,
    alignSelf: 'center',
    paddingHorizontal: 8,
    fontFamily: FontType.bold,
    fontSize: FontSize.medium,
    backgroundColor: Color.softPink,
  },
  btnBuyClass: {
    width: '90%',
    borderWidth: 1,
    marginTop: '2%',
    borderRadius: 8,
    paddingVertical: 12,
    textAlign: 'center',
    paddingHorizontal: 12,
    marginHorizontal: '5%',
    borderColor: Color.white,
    backgroundColor: Color.bgColorPurple,
  },
  divider: {
    marginTop: 5,
    marginHorizontal: -16,
  },
  viewIconBank: {
    paddingVertical: '3%', 
    paddingHorizontal: '3%', 
    borderTopLeftRadius: 10, 
    borderTopRightRadius: 10,
    backgroundColor: '#f9e9ff', 
  },
  viewDetailBank: {
    flexDirection: 'row', 
    paddingHorizontal: 10,
    paddingVertical: '4%', 
    backgroundColor: '#fff', 
    justifyContent: 'space-between',
  },
  TxtButtonSalin: {
    color: '#74ddc4', 
    fontWeight: 'bold',
  },
  viewNoteTwo: {
    width: '90%', 
    opacity: 0.5,
    marginTop: '2%', 
    marginBottom: '2%', 
    flexDirection: 'row', 
  },
  txtViewNote: {
    width: 18, 
    height: 18, 
    color: '#fff',
    marginRight: 5,
    borderRadius: 100, 
    textAlign: 'center', 
    backgroundColor: 'red', 
  },
  containerTitle: {
    alignItems: 'center',
  },
  viewImage: {
    marginVertical: '8%',
  },
  viewDesc: {
    marginHorizontal: '10%',
  },
  viewTxtDesc: {
    textAlign: 'center',
    fontSize: FontSize.large, 
  },
  viewTxtDescBold: {
    lineHeight: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: FontSize.large, 
  },
  viewButtonFinish: {
    marginTop: '10%', 
    marginBottom: '5%',
    marginHorizontal: '3%', 
  },

})

export default styles