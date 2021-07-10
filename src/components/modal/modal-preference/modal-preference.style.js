import { StyleSheet, Dimensions } from 'react-native'
import { Color, FontType, FontSize } from '../../../assets'

const { height }  = Dimensions.get('window')

const styles = StyleSheet.create({
  backdropStyle : {
    flex:1,
    margin: 0,
    alignItems:'stretch',
    justifyContent: 'flex-end',
  },
  modalStyle : {
    height:height/2.2,
    borderTopLeftRadius:22,
    borderTopRightRadius: 22,
    backgroundColor:Color.white,
  },
  closeStyle : {
    right:15,
    marginTop:17,
    alignItems:'flex-end',
    justifyContent:'center',
  },
  modalContentSyle : {
    flex:1,
    width: '90%',
    marginTop:-24,
    marginLeft: '10%',
    marginRight: '10%',
    alignSelf: 'center',
    // justifyContent: 'center',
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
  BtnPengajar : {
    height: 50,
    borderRadius: 30,
    backgroundColor: Color.grey,
  },
  TxtButton : {
    color: Color.white,
    fontFamily: FontType.bold,
    fontSize: FontSize.mediumLarge,
  },
  ViewTitle : {
    marginTop: '5%',
    marginBottom: '3%',
  },
  TxtTitle : {
    marginBottom: 4,
    color: Color.black,
    fontFamily: FontType.bold,
    fontSize: FontSize.medium,
  },
  TxtTitleDesc : {
    color: Color.grey,
    fontSize: FontSize.small,
    fontFamily: FontType.semiBold,
  },
  ContainerCheck: {
    marginBottom: '1%',
  },
  ViewCheck: {
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  TxtCheck: {
    marginLeft: 10,
    color: Color.black,
    fontSize: FontSize.medium,
    fontFamily: FontType.bold,
  }
})

export { styles }