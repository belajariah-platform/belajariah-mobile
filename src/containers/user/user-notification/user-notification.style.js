import { StyleSheet } from 'react-native'
import { Color, FontSize, FontType } from '../../../assets'

const styles = StyleSheet.create({
    containerHeaderNotif : {
      backgroundColor: Color.purpleMedium,
    },
    flexHeaderInNotif: {
      paddingBottom: 16,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    flexHeaderNotif: {
      paddingBottom: 1,
      alignItems: 'center',
      flexDirection: 'row',
    },
    semiBoxNotif: {
      height: 12,
      width: '100%',
      borderTopLeftRadius: 26,
      borderTopRightRadius: 26,
      backgroundColor: Color.purpleMedium,
    },
    textTitleHeader: {
      color: Color.white,
      fontFamily: FontType.bold,
      fontSize: FontSize.mediumLarge,
    },
    iconBackNotif: {
      marginTop: 0,
    },
    containerMainNotif: {
      flex: 1,
      backgroundColor: Color.white,
    },
    cardStyle: {
      padding: 0,
      elevation: 0,
      width: 'auto',
      height: 'auto',
      borderWidth : 0,
      borderRadius: 10,
      paddingHorizontal: 10,
      backgroundColor: Color.white,
    },
    cardStyleFilter: {
      padding: 0,
      elevation: 0,
      width: 'auto',
      height: 'auto',
      borderWidth : 0,
      borderRadius: 10,
      paddingHorizontal: 10,
      backgroundColor: Color.purpleMedium,
    },
    ContainerNo : {
      marginTop: '30%',
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent:'center',
    },
    TxtNoNotif: {
      marginTop: 30,
      color: Color.black,
      textAlign: 'center',
      fontFamily: FontType.bold,
      fontSize: FontSize.mediumLarge,
    },
    ContainerBody : {
      marginTop: 1,
    },
    ViewListNotif : {
      marginVertical: 1,
    },
    TxtDateNotif : {
      marginVertical: 2,
      color: Color.grey,
      fontSize: FontSize.medium,
      fontFamily: FontType.regular,
    },
    ViewListBody : {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    TxtListMentor : {
      color: Color.black,
      fontSize: FontSize.medium,
      fontFamily: FontType.bold,
    },
    TxtListMentorMeet : {
      color: Color.purpleText,
      fontFamily: FontType.bold,
      fontSize: FontSize.mediumLarge,
    },
    TxtListSt : {
      color: Color.black,
      fontSize: FontSize.medium,
      fontFamily: FontType.regular,
    },
    divider : {
      marginTop : 15,
    },
    ContainerListFilter : {
      marginBottom: 20,
      backgroundColor: Color.purpleMedium,
    },
    // ViewBtnList : {
    //   paddingVertical: 20,
    //   paddingHorizontal: 4,
    //   backgroundColor: Color.softPink,
    // },
    ViewListFilter : {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    textList: {
      textAlign: 'center',
      borderWidth: 1,
      borderRadius: 20,
      paddingVertical: 10,
      marginHorizontal: 4,
      paddingHorizontal: 24,
      borderColor: Color.white,
      fontSize: FontSize.medium,
      fontFamily: FontType.regular,
    },
  })
  
  export default styles