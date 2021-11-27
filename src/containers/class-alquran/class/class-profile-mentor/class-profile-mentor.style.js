import { StyleSheet } from 'react-native'
import { Color, FontSize, FontType } from '../../../../assets'

const styles = StyleSheet.create({
    containerHeaderProfile : {
      marginBottom : -1,
      backgroundColor: '#13A98B',
    },
    flexHeaderInProfile: {
      paddingBottom: 16,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    flexHeaderProfile: {
      paddingBottom: 1,
      alignItems: 'center',
      flexDirection: 'row',
    },
    semiBoxProfile: {
      height: 12,
      width: '100%',
      borderTopLeftRadius: 26,
      borderTopRightRadius: 26,
      backgroundColor: '#1DB597',
    },
    textTitleHeader: {
      color: Color.white,
      fontFamily: FontType.bold,
      fontSize: FontSize.mediumLarge,
    },
    iconBackProfile: {
      marginTop: 0,
    },
    containerMainProfile: {
      flex: 1,
      backgroundColor: Color.softPink,
    },
    ViewTitle: {
    //   paddingTop: '12%',
      alignItems: 'center',
    //   backgroundColor: '#1DB597',
    },
    imageStyleInstructor: {
      width: 170,
      height: 170,
      marginTop: '14%',
      borderRadius: 100,
      marginBottom: '2%',
    },
    BackgroundImg: {
      zIndex: 1,
      height: 216,
      width: '100%',
      alignItems: 'center',
    },
    TxtTitleInstructor : {
      marginTop: '8%',
      maxWidth: '90%',
      color: '#1DB597',
      textAlign: 'center',
      fontFamily: FontType.bold,
      fontSize: FontSize.largeMiddle,
    },
    TxtFromInstructor : {
      marginBottom: 8,
      color: Color.black,
      fontFamily: FontType.regular,
      fontSize: FontSize.smallMedium,
    },
    ViewCard : {
      flexDirection: 'row',
    },
    cardStyleInstructor: {
      padding: 15,
      elevation: 0,
      width: 'auto',
      height: 'auto',
      borderWidth : 0,
      borderRadius: 10,
    },
    IconCard : {
      width: 55,
    },
    TxttitleCard : {
      marginBottom: 6,
      maxWidth: '96%',
      color: '#1DB597',
      fontFamily: FontType.bold,
      fontSize: FontSize.medium,
    },
    TxttitleCardOther : {
      marginBottom: 6,
      color: '#1DB597',
      fontFamily: FontType.bold,
      fontSize: FontSize.medium,
    },
    TxtDescCard : {
      lineHeight: 18,
      maxWidth: '94%',
      textAlign: 'justify',
      fontSize: FontSize.smallPoint,
    },
    TxtDescStudy : {
      lineHeight: 18,
      maxWidth: '90%',
      textAlign: 'justify',
      fontSize: FontSize.smallPoint,
    }, 
    TxtDescSystem : {
      lineHeight: 18,
      textAlign: 'justify',
      fontSize: FontSize.smallPoint,
    }, 
    ViewTxt : {
      marginLeft: 4,
    },
    BtnPengajar : {
      height: 50,
      elevation: 5,
      shadowRadius: 1,  
      borderRadius: 30,
      shadowOpacity: 0.8,
      shadowColor: '#752796',
      backgroundColor: '#1DB597',
      shadowOffset: { width: 0, height: 1 },
    },
    ViewBtn : {
      marginBottom: '1%',
      marginHorizontal: '4%',
    },
    TxtButton : {
      color: Color.white,
      fontFamily: FontType.bold,
      fontSize: FontSize.mediumLarge,
    },
    ViewSchedules : {
      flexDirection: 'row',
    },
    ViewSchedule : {
      flexDirection: 'row',
    },
    TxtSchedule : {
      marginRight: 0,
      // fontFamily: FontType.bold,
    },
    ViewRating: {
      marginVertical: 6,
      flexDirection: 'row',
    },
    TxtRating: {
      marginRight: 6,
      color: Color.black,
      fontFamily: FontType.bold,
      fontSize: FontSize.smallMedium,
    },
    TxtAllReview : {
      marginLeft: 6,
      color: '#1DB597',
      fontFamily: FontType.regular,
      fontSize: FontSize.smallMedium,
    }
  })
  
  export default styles