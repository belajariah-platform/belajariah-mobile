import { StyleSheet } from 'react-native'

import { Resp } from '../../../utils'
import { Color, FontType, FontSize } from '../../../assets'

const styles = StyleSheet.create({
  containerButtonBack: {
    top: 10,
    left: 0,
  },
  containerView: {
    flex: 1,
    backgroundColor: Color.softPink,
  },
  containerViewBg: {
    flex: 1,
    zIndex: 1,
    top: '-11%',
  },
  containerAvatar: {
    zIndex: 2,
    top: '13%',
    width: '95%',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  containerTitleAvatar: {
    marginTop: 10,
    marginLeft: 20,
    marginBottom: 5,
    color: Color.white,
    position: 'relative',
    fontFamily: FontType.regular,
    fontSize: FontSize.extraLarge,
  },
  containerTouch: {
    borderRadius: 100,
  },
  avatarBorder: {
    width: 108,
    zIndex: 2,
    height: 108,
    position: 'relative',
  },
  avatar: {
    width: 90,
    zIndex: 2,
    height: 90,
    top: 9,
    left: 9,
    position: 'relative',
  },
  image: {
    width: Resp.HeaderProfileWP,
    height: Resp.HeaderProfileHP,
  },
  containerViewTop: {
    top: '-10%',
    borderRadius: 35,
    paddingVertical: 20,
    position: 'relative',
    marginHorizontal: 30,
    paddingHorizontal: 30,
    backgroundColor: '#fff',
  },
  containerTextJudul: {
    marginBottom: 28,
    color: Color.black,
    fontSize: FontSize.large,
    fontFamily: FontType.bold,
  },
  containerText: {
    marginTop: -8,
    marginBottom: 5,
    fontSize: FontSize.small,
    color: Color.greyHeadInput,
    fontFamily: FontType.regular,
  },
  datePickerInput: {
    height: 40,
    marginTop: 3,
    width: '100%',
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 21,
    paddingHorizontal: 8,
    borderColor: '#b3b3b3',
    backgroundColor: Color.white,
  },
  containerRadio: {
    marginBottom: 16,
    flexDirection: 'row',
  },
  containerInputRadio: {
    marginLeft: 1,
    marginRight: 15,
  },
  datePickerControl: {
    borderWidth: 0,
    backgroundColor: Color.transparent,
  },
  fixToText: {
    marginTop: 0,
    alignItems: 'flex-end',
  },
  containerButton: {
    width: 100,
  },
  iconChoose : {
    marginRight : 50,
    alignItems : 'center',
    flexDirection : 'column',
  },
  textChoose : {
    marginVertical : 5,
    fontFamily : FontType.regular,
    fontSize : FontSize.smallPoint,
  },
  textTitleChoose : {
    top : -5,
    marginBottom : 10,
    fontFamily : FontType.regular,
    fontSize : FontSize.mediumLarge,
  },
  iconGallery : {
    alignItems : 'center',
    flexDirection : 'column',
  },
  containerCamera : {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Color.black,
  },
  containerToolCamera : {
    height : 110,
    marginTop : -15,
    flexDirection:'row',
    alignItems : 'center',
    justifyContent:'center',
    borderTopLeftRadius : 16,
    borderTopRightRadius : 16,
    backgroundColor : Color.black
  },
  btnTakePicture : {
    width: 67,
    height: 67,
    borderWidth : 4,
    borderRadius: 100,
    alignSelf: 'center',
    borderColor : '#d1d1d1',
    marginHorizontal : '15%',
    backgroundColor: Color.white,
  },
  btnCancel : {
    alignSelf: 'center',
    marginHorizontal : '16%',
  },
  camera : {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  textCancel : {
    color : Color.white,
    fontFamily : FontType.regular,
    fontSize : FontSize.mediumLarge,
  }
})

export { styles }
