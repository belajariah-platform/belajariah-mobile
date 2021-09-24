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
    viewNotifClass : {
      height: 20,
      // textAlign: 'right',
      paddingTop: 2,
      borderRadius: 15,
      paddingHorizontal: 8,
      backgroundColor: '#13A98B',
    },
    textNotifClass : {
      color: Color.white,
      fontSize : FontSize.smallest,
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
    ViewTxtMentor : {
      width: '60%'
    },
    textStyle: {
      marginRight: 4,
      maxWidth: '100%',
      color: Color.black,
      fontFamily: FontType.bold,
      fontSize: FontSize.smallMedium,
    },
    textStyleCity: {
      marginRight: 4,
      maxWidth: '100%',
      color: '#13A98B',
      fontFamily: FontType.regular,
      fontSize: FontSize.smallMedium,
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
      width: '74%',
      marginLeft : 5,
      marginRight: 10,
    },
    ViewTop : {
      justifyContent: 'space-between',
      flexDirection: 'row',
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
    ViewRating: {
      marginVertical: 6,
      flexDirection: 'row',
    },
    TxtRating: {
      marginRight: 6,
    },
    TxtDesc: {
      width: '100%',
    },
    ViewSchedules : {
      width: '100%',
      flexDirection: 'row',
      marginLeft: '-10%',
    },
    ViewSchedule : {
      flexDirection: 'row',
    },
    TxtSchedule : {
      marginRight: 1,
    }
  })
  
  export default styles