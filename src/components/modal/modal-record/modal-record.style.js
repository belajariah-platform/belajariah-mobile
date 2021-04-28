import { StyleSheet } from 'react-native'
import { FontType, FontSize, Color } from '../../../assets'


const styles = StyleSheet.create({
  backdropStyle : {
    flex: 1,
    margin: 0,
    alignItems: 'stretch',
    justifyContent: 'flex-end',
  },
  modalStyle : {
    height: '92%',
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    backgroundColor: Color.white,
  },
  imgBackground : {
    width: '100%',
    height: '100%',
    position: 'absolute',
    resizeMode : 'contain',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  containerStyle : {
    flex: 1,
    justifyContent: 'space-between',
  },
  containerSwiper : {
    height: 228,
    marginTop: '16%',
  },
  containerScrollview : {
    flexGrow: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  containerSend : {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  containerRecordSent : {
    flex: 1,
    marginTop: '-8%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textAyat: {
    textAlign: 'center',
    color: Color.textSurahName,
    fontSize: FontSize.largest,
    fontFamily: FontType.arabBold,
  },
  textModal : {
    color : Color.black,
    textAlign: 'center',
    paddingHorizontal: 24,
    fontSize : FontSize.medium,
    fontFamily: FontType.regular,
  },
  textTimer : {
    bottom : 72,
    textAlign: 'center',
    color : Color.purpleMedium,
    fontFamily : FontType.bold,
    fontSize : FontSize.medium,
  },
  textSuccess : {
    marginTop: 12,
    color : Color.textSuccess,
    fontFamily : FontType.bold,
    fontSize : FontSize.largeMiddle,
  },
  iconClose : {
    right: 15,
    marginTop: 17,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  iconRecord : {
    bottom: 56,
    alignSelf : 'center',
  },
  iconRecordGradation : {
    bottom : 46,
    alignSelf: 'center',
    position : 'absolute',
  },
})

export { styles }