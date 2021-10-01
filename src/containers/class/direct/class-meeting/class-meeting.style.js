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
      width: 214,
      borderWidth: 1,
      // marginBottom: 6,
      borderRadius: 8,
      paddingHorizontal: 8,
      borderColor: '#BDBDBD33',
      backgroundColor: '#BDBDBD33',
    },
    datePickerControl: {
      borderWidth: 0,
      backgroundColor: Color.transparent,
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
      marginTop: 6,
      color: Color.black,
      fontSize: FontSize.medium,
      fontFamily: FontType.regular,
    },
    ViewInput : {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    StyleBtn : {
      width: 86,
      backgroundColor: '#1DB597',
    },
    StyleTxt : {
      color: Color.white,
      fontSize: FontSize.medium,
      fontFamily: FontType.regular,
    },
    StyleImgComplete : {
      marginRight: 20,
    },
    textArea: {
      height: 100,
      elevation : 1,
      borderRadius: 20,
      textAlign: 'center',
      paddingHorizontal: 10,
      marginHorizontal: '6%',
      backgroundColor: '#f1f3f4',
    },
  })
  
  export default styles