import { StyleSheet } from 'react-native'
import { Color, FontSize, FontType } from '../../../../assets'

const styles = StyleSheet.create({
  flexFull: {
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor : Color.softPink,
  },
  // videoContainerStyle: {
  //   height: 228,
  //   width: '100%',
  //   alignSelf: 'center',
  //   backgroundColor: Color.softPink,
  // },
  // videoFullscreenContainerStyle: {
  //   width: '100%',
  //   height: '100%',
  //   backgroundColor: 'black',
  // },
  // videoStyle: {
  //   height: 228,
  //   width: '100%',
  //   alignSelf : 'center',
  // },
  // videoFullscreenStyle: {
  //   width: '100%',
  //   height: '100%',
  // },
  // controllerStyle: {
  //   height: 228,
  //   width: '100%',
  //   marginTop: -228,
  //   alignSelf: 'center',
  //   backgroundColor: '#000000c4',
  // },
  // controllerFullscreenStyle: {
  //   top: 0,
  //   left: 0,
  //   right: 0,
  //   bottom: 0,
  //   position: 'absolute',
  //   backgroundColor: '#000000c4',
  //   justifyContent: 'space-between',
  // },
  iconBack: {
    marginTop: 0,
  },
  semiBox: {
    height: 16,
    marginTop: -10,
    width: '100%',
    marginBottom: -6,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: Color.softPink,
  },
  HeaderClass : {
    zIndex: 1,
    height: 186,
    width: '100%',
  },
  flexHeader: {
    paddingBottom: 16,
    alignItems: 'center',
    flexDirection: 'row',
  },
  textTitleWhite: {
    color: Color.white,
    fontFamily: FontType.bold,
    fontSize: FontSize.mediumLarge,
  },
  ViewButton: {
    // marginLeft: '2%',
    // marginRight: '3%',
    marginHorizontal: 20,
  },
  StyleBtn: {
    height: 50,
    borderRadius: 22,
    alignItems: 'center',
    // backgroundColor: '#13A98B',
  },
  StyleTxtBtn: {
    fontSize: 16,
    marginLeft: 10,
  },
  containerHeaderProfile : {
    backgroundColor: Color.purpleButton,
  },
  cardStyle: {
    height:'auto',
    borderWidth: 0,
    borderRadius: 12,
    marginVertical: 16,
  },
  TxtTitleDesc: {
    marginBottom: 12,
    color: Color.black,
    fontFamily: FontType.bold,
    fontSize: FontSize.smallPoint,
  },
  TxtDesc: {
    lineHeight: 15,
    color: Color.black,
    textAlign: 'justify',
    fontFamily: FontType.regular,
    fontSize: FontSize.smallPoint,
  },
  ViewBenefits: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  TxtBenefits: {
    marginLeft: 6,
    color: Color.black,
    fontFamily: FontType.regular,
    fontSize: FontSize.smallPoint,
  },
  tabContainerStyle: {
    marginTop: 10,
  },
  tabBarStyle: {
    borderRadius: 8,
    paddingVertical: 2,
    marginHorizontal: 16,
    backgroundColor: '#1DB597',
  },
  labelStyle: {
    width:'100%',
    textTransform: 'none',
    fontFamily: FontType.bold,
    fontSize: FontSize.smallest,
  },
  indicatorStyle: {
    width: 86,
    height: 4,
    left: '13.6%',
    borderRadius: 2,
    backgroundColor: Color.white,
  },
})

export default styles
