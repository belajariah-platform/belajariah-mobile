import { StyleSheet } from 'react-native'
import { Color, FontSize, FontType } from '../../../../assets'

const styles = StyleSheet.create({
    iconBack: {
      marginTop: 0,
    },
    containerMain: {
      flex: 1,
      backgroundColor: '#B66DD3',
    },
    containerHeader: {
      backgroundColor: '#13A98B',
    },
    containerScrollView: {
      borderTopLeftRadius: 16,
      borderTopRightRadius: 16,
    },
    flexHeaderIn: {
      paddingBottom: 16,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    flexHeader: {
      paddingBottom: 1,
      alignItems: 'center',
      flexDirection: 'row',
    },
    semiBox: {
      height: 16,
      width: '100%',
      borderTopLeftRadius: 16,
      borderTopRightRadius: 16,
      backgroundColor: '#B66DD3',
    },
    textTitleWhite: {
      color: Color.white,
      fontFamily: FontType.bold,
      fontSize: FontSize.mediumLarge,
    },
    txtNotes: {
      paddingVertical: '2%',
      fontSize : FontSize.small,
    },
    viewNoteOne: {
      width: '90%',
      opacity: 0.5,
      flexDirection: 'row',
      paddingHorizontal : 16,
    },
    viewMethod : {
      marginTop: '2%',
      marginBottom: '2%',
    },
    viewNotifClass : {
      height: 20,
      paddingTop: 2,
      borderRadius: 15,
      paddingHorizontal: 8,
      backgroundColor: '#B66DD3',
    },
    textNotifClass : {
      color: Color.white,
      fontSize : FontSize.smallest,
    },
    textSmall : {
      fontSize : FontSize.smallPoint,
    },
    margins : {
      marginHorizontal : 16
    },
    ImgBanner: {
      height: 310,
      width: '100%',
    },
    TitlePromo: {
      marginVertical: 5,
      color: Color.black,
      fontFamily: FontType.bold,
      fontSize: FontSize.mediumLarge,
    },
    DescPromo: {
      marginVertical: 5,
      color: Color.black,
      textAlign: 'justify',
      fontSize: FontSize.small,
      fontFamily: FontType.regular,
    },
    DescOtherPromo: {
      marginVertical: 5,
      color: Color.black,
      fontSize: FontSize.small,
      fontFamily: FontType.regular,
    },
    containerCodePromo: {
      marginVertical: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    TitleBacaan: {
      color: Color.black,
      fontSize: FontSize.large,
      fontFamily: FontType.bold,
    },
    TxtTime: {
      color: Color.black,
      fontSize: FontSize.small,
      fontFamily: FontType.regular,
    },
    containerHeading: {
      margin: 0,
    },
    ImgHeading: {
      height: 240,
      width: '100%',
    },
    TxtSourceImg: {
      top: '-10%',
      color: Color.black,
      textAlign: 'center',
      fontSize: FontSize.smallest,
      fontFamily: FontType.regular,
    },
    TxtWriter: {
      color: Color.black,
      fontSize: FontSize.small,
      fontFamily: FontType.bold,
    },
    searchbox : {
      borderWidth : 0,
      borderRadius : 20,
      borderColor: '#fff',
    },
    containerSearch : {
      paddingBottom:10,
      marginHorizontal :20,
    },
    cardStyle: {
      padding: 15,
      elevation: 4,
      width: 'auto',
      height: 'auto',
      borderWidth : 0,
      borderRadius: 20,
    },
    viewStyle: {
      flexDirection: 'row',
    },
    imageStyle: {
      width: 80,
      height: 80,
      marginRight: 10,
      borderRadius : 12,
    },
    textStyle: {
      color: Color.purpleText,
      fontFamily: FontType.bold,
      fontSize: FontSize.smallMedium,
    },
    description : {
      width: 250,
      marginTop: 5,
      color: Color.black,
      fontFamily: FontType.regular,
      fontSize: FontSize.smallPoint,
    },
    iconFilter: {
      marginRight : 16,
      alignSelf : 'center',
    },
    City : {
      marginTop: 1,
      color: Color.black,
      fontFamily: FontType.regular,
      fontSize: FontSize.smallPoint,
    },
    containerDesc : {
      flex : 1,
      marginLeft : 5,
    },
    TxtButtonDetail: {
      textAlign: 'right',
      color: Color.purpleText,
      fontSize: FontSize.small,
      fontFamily: FontType.regular,
    },
    indicatorContainer : {
      top : 12,
      marginBottom : 7,
      alignItems:'center',
    },
    containerNoStory: {
      margin: 12,
      height: '40%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    // Style InstructorProfile
    containerHeaderProfile : {
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
      color: '#1DB597',
      fontFamily: FontType.bold,
      fontSize: FontSize.largeMiddle,
    },
    TxtFromInstructor : {
      color: Color.black,
      fontFamily: FontType.regular,
      fontSize: FontSize.smallPoint,
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
      color: '#1DB597',
      fontFamily: FontType.bold,
      fontSize: FontSize.medium,
    },
    TxtDescCard : {
      lineHeight: 18,
      maxWidth: '95%',
      textAlign: 'justify',
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
    ViewSchedule : {
      // flexDirection: 'row',
      // justifyContent: 'space-between',
    },
    TxtSchedule : {
      marginRight: 1,
    }
  })
  
  export default styles