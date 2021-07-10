import { StyleSheet } from 'react-native'
import { Color, FontSize, FontType } from '../../../../assets'

const styles = StyleSheet.create({
    iconBack: {
      marginTop: 0,
    },
    containerMain: {
      flex: 1,
      paddingBottom: 20,
      backgroundColor: '#13A98B',
    },
    containerHeader: {
      backgroundColor: '#1DB597',
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
      backgroundColor: '#13A98B',
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
      backgroundColor: '#13A98B',
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
      width: '100%',
      height: 240,
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
      marginBottom: 10,
      borderRadius: 16,
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
      color: Color.black,
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
    textRegular: {
      lineHeight : 15,
      color: Color.black,
      fontFamily: FontType.regular,
      fontSize: FontSize.smallPoint,
    },
    containerAccordion: {
      paddingVertical: 2,
      marginHorizontal: 0,
      alignItems: 'center',
      flexDirection: 'row',
      backgroundColor: Color.white,
    },
    containerItem: {
      marginLeft: 5,
      paddingVertical: 2,
      paddingHorizontal: 4,
    },
    IconStyle: {
      marginTop: '-2%',
    },
    ViewDown: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    ViewRating: {
      marginTop: 8,
      flexDirection: 'row',
    },
    TxtRating: {
      marginRight: 6,
    }

  })
  
  export default styles