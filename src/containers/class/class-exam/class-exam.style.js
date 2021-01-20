import { StyleSheet } from 'react-native'
import { Color, FontSize, FontType } from '../../../assets'

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    backgroundColor: Color.softPink,
  },
  containerHeader: {
    backgroundColor: Color.transactionBgColor,
  },
  iconBack: {
    marginTop: 0,
  },
  flexHeader: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  textTitleWhite: {
    flex : 1,
    color: Color.white,
    fontFamily: FontType.bold,
    fontSize: FontSize.mediumLarge,
  },
  textTimer: {
    marginRight : 20,
    color: Color.white,
    fontFamily: FontType.bold,
    fontSize: FontSize.mediumLarge,
  },
  headerBox: {
    height: 16,
    width: '100%',
    marginTop: -16,
    backgroundColor: Color.softPink,
  },
  containerScrollNumber: {
    flex : 1,
    paddingBottom : 50,
    backgroundColor: '#6A546A',
  },
  scrollBox : {
    paddingTop:10,
  },
  scrollTouch : {
    width: 40,
    height: 40,
    borderRadius:100,
    marginHorizontal:8,
    alignItems:'center',
    justifyContent : 'center',
    backgroundColor : '#9956B3',
  },
  textScroll : {
    color : Color.white,
    fontFamily : FontType.regular,
    fontSize :  FontSize.mediumLarge,
  },
  questionBox : {
    top : 5,
    height: '90%',
    padding : 22,
    width: '100%',
    elevation : 4,
    borderRadius : 16,
    backgroundColor: Color.white,
  },
  textQuestion : {
    lineHeight : 19,
    color : Color.black,
    fontFamily : FontType.bold,
    fontSize : FontSize.smallMedium,
  },
  textOption : {
    color : Color.black,
    alignSelf : 'center',
    fontFamily : FontType.regular,
    fontSize : FontSize.smallMedium,
  },
  textAlfabeth : {
    textAlign : 'center',
    color : '#C2C2C2',
    fontFamily : FontType.regular,
    fontSize : FontSize.smallMedium,
  },
  touchOption : {
    width : 24,
    height : 24,
    marginRight : 10,
    borderRadius : 100,
    alignItems : 'center',
    justifyContent : 'center',
    backgroundColor : Color.greyExam
  },
  containerOption : {
    marginTop : 15,
    flexDirection : 'row',
  },
  buttonPrev : {
    left : 0,
    bottom : 0,
    width:'45%',
    borderWidth : 2,
    borderRadius : 16,
    position : 'absolute',
    marginHorizontal : 10,
    backgroundColor : Color.white,
    borderColor : Color.purpleExHint,
  },
  buttonNext : {
    right : 0,
    bottom : 0,
    width:'45%',
    borderRadius : 16,
    position : 'absolute',
    marginHorizontal : 10,
    backgroundColor : Color.purpleMedium,
  },
  containerButton : {
    flexDirection : 'row',
    justifyContent: 'space-between',
  }
})

export { styles }
