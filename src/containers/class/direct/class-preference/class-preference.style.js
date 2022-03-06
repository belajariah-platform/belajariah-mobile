import { StyleSheet, Dimensions } from 'react-native'
import { Color, FontSize, FontType } from '../../../../assets'

const { height }  = Dimensions.get('window')

const styles = StyleSheet.create({
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
    TxtTitle : {
      color: Color.black,
      fontFamily: FontType.bold,
      fontSize: FontSize.mediumLarge,
    },
    TxtChildTitle : {
      marginTop: 4,
      marginBottom: 2,
      color: Color.grey,
      fontFamily: FontType.regular,
      fontSize: FontSize.smallMedium,
    },
    cardStyleInstructor: {
      padding: 0,
      elevation: 0,
      width: 'auto',
      height: 'auto',
      borderWidth : 0,
      borderRadius: 10,
      paddingHorizontal: 10,
      backgroundColor: Color.softPink,
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
      width: 180,
      height: 140,
      marginBottom: 25,
      alignSelf: 'center',
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
      width: '100%',
      borderWidth: 1,
      marginBottom: 6,
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
    TxtSchedule : {
      fontSize: FontSize.medium,
      fontFamily: FontType.semiBold,
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
    TxtInputRadio: {
      color: Color.black,
      fontSize: FontSize.medium,
      fontFamily: FontType.regular,
    },
    StyleB : {
      backgroundColor: '#1DB597',
    },
    ViewSchedules : {
      width: '100%',
      marginVertical: 2,
      paddingVertical: 10,
      flexDirection: 'row',
      paddingHorizontal: 10,
      justifyContent: 'center',
    },
    ViewSchedule : {
      flexDirection: 'row',
      alignItems: 'center',
    },
    NewStyleInputSch : {
      height: 40,
      width: '100%',
      marginBottom: 6,
      borderRadius: 8,
      // paddingHorizontal: 8,
      borderColor: '#BDBDBD33',
      backgroundColor: '#BDBDBD33',
    },
    Content : {
      alignSelf: 'auto',
      paddingHorizontal: 20,
    },
    ModalContainer : {
      width: '100%',
      height:height/1.8,
    },
    StyleIconModal : {
      width: 280,
      height: 142,
      marginBottom: 18,
    },
    StyleChoose : {
      paddingVertical: 6,
      paddingHorizontal: 10,
      backgroundColor: '#CBFFF5',
    },
    BtnModal : {
      height: 52,
      marginTop: 30,
      width : '100%',
      marginBottom: 24,
      borderRadius: 30,
      backgroundColor: '#1DB597',
    },
  })
  
  export default styles