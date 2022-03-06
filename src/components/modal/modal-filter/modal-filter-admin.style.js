import { StyleSheet, Dimensions } from 'react-native'
import { Color, FontType, FontSize } from '../../../assets'

const { height }  = Dimensions.get('window')

const styles = StyleSheet.create({
  modalStyle : {
    height: 'auto',
    borderRadius: 22,
    backgroundColor:Color.white,
  },
  containerHeader : {
    marginTop: '3%',
    marginBottom: '5%',
    flexDirection: 'row',
    marginHorizontal: '5%',
    justifyContent: 'space-between',
  },
  TxtTitleFilter : {
    color: Color.black,
    fontFamily: FontType.bold,
    fontSize: FontSize.largeMiddle,
  },
  modalContentSyle : {
    justifyContent:'center',
    marginHorizontal: '5%',
  },
  viewReset : {
    marginBottom: '3%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  TxtTitleReset : {
    color: Color.black,
    fontFamily: FontType.bold,
    fontSize: FontSize.medium,
  },
  TxtButtonReset : {
    color: Color.purpleButton,
    fontFamily: FontType.bold,
    fontSize: FontSize.medium,
  },
  viewKategoriKelas : {
    marginBottom: '5%',
    flexDirection: 'row',
  },
  textCategories: {
    marginTop: 3,
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 6,
    marginHorizontal: 4,
    paddingHorizontal: 10,
    fontFamily: FontType.regular,
    borderColor: Color.greyMedium,
    fontSize: FontSize.smallMedium,
  },
  ButtonFilter : {
    marginTop: 10,
    marginBottom: 12,
    borderRadius: 10,
    color: Color.white,
    paddingVertical: 10,
    textAlign: 'center',
    paddingHorizontal: 10,
    fontFamily: FontType.regular,
    borderColor: Color.greyMedium,
    fontSize: FontSize.smallMedium,
    backgroundColor: Color.purpleButton,
  }
})

export { styles }