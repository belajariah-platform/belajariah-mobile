import { StyleSheet } from 'react-native'
import { Color, FontSize, FontType } from '../../../../assets'

const styles = StyleSheet.create({
    containerHeaderProfile : {
      backgroundColor: Color.purpleMedium,
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
      zIndex: 10,
      height: 12,
      width: '100%',
      marginTop: -50,
      borderTopLeftRadius: 26,
      borderTopRightRadius: 26,
      backgroundColor: Color.softPink,
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
    TxtDescCard : {
      lineHeight: 18,
      maxWidth: '95%',
      textAlign: 'justify',
    }, 
    BtnPengajar : {
      height: 50,
      elevation: 5,
      shadowRadius: 1,  
      marginBottom: 20,
      borderRadius: 30,
      shadowOpacity: 0.8,
      shadowColor: '#752796',
      backgroundColor: '#1DB597',
      shadowOffset: { width: 0, height: 1 },
    },
    TxtButton : {
      color: Color.white,
      fontFamily: FontType.bold,
      fontSize: FontSize.mediumLarge,
    },
    StyleIcon : {
      top: -20,
      marginLeft: '40%',
      position: 'absolute',
    },
    StyleIllust : {
      top: -30,
      zIndex: 1,
      width: 230,
      height: 200,
    },
    TxtMeet : {
      marginTop: 16,
      marginBottom: 8,
      color: Color.black,
      fontSize: FontSize.medium,
      fontFamily: FontType.regular,
    },
    datePickerInput: {
      height: 40,
      marginBottom: 6,
      width: '100%',
      borderWidth: 1,
      borderRadius: 8,
      paddingHorizontal: 8,
      borderColor: '#BDBDBD33',
      backgroundColor: '#BDBDBD33',
    },
    datePickerControl: {
      borderWidth: 0,
      backgroundColor: Color.transparent,
    },
    ViewTitle : {
      marginTop: '5%',
      marginBottom: '3%',
    },
    TxtTitleList : {
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
      fontFamily: FontType.regular,
    },
    containerRadio: {
      marginBottom: 1,
    },
    TxtHeader: {
      maxWidth: '56%',
      marginLeft: -70,
      marginRight: 100,
      marginBottom: 100,
      color: Color.white,
      fontFamily: FontType.regular,
      fontSize: FontSize.mediumLarge,
    },
    TxtHeaderBold : {
      color: Color.white,
      fontFamily: FontType.bold,
      fontSize: FontSize.mediumLarge,
    },
    ViewHeader : {
      flexDirection: 'row',
      alignItems: 'center',
    },
    cardStyleInstructor: {
      padding: 0,
      elevation: 0,
      width: 'auto',
      height: 'auto',
      borderWidth : 0,
      borderRadius: 0,
      paddingHorizontal: 10,
      backgroundColor: Color.softPink,
    },
    TxtMeet : {
      marginTop: 4,
      marginBottom: 8,
      color: Color.black,
      fontSize: FontSize.medium,
      fontFamily: FontType.regular,
    },
  })
  
  export default styles