import { StyleSheet } from 'react-native'
import { Color, FontType } from '../../../assets'

const styles = StyleSheet.create({
    container : {
      backgroundColor: 'white',
      flex: 9,
      marginTop: 3,
      paddingHorizontal: 30
    },
    image: {
      width: '65%',
      height: 140,
      alignSelf: 'center',
      marginTop: 30,
    },
    button: {
      marginTop: 20,
      marginBottom: 10,
      backgroundColor: Color.bgColor,
      borderWidth: 0,
      borderRadius: 20,
      width: '100%',
      alignSelf: 'center',
    },
    text: {
      marginTop: 5,
      marginBottom: 3,
      fontSize: 14,
      color: Color.textBasic,
      fontFamily: FontType.semiBold,
    },
    checkbox: {
      marginTop: 18,
      paddingLeft: 4,
    },
    textCheckbox: {
      fontSize: 14,
      color: Color.textBasic,
    },
    textCheckBox2: {
      color: Color.textBold, 
      fontSize: 14
    },
    backToLogin: {
      color: Color.textBold,
      fontSize: 14,
      fontFamily: FontType.semiBold,
      marginBottom: 30,
    },
    textBackToLogin: {
        color: Color.textBasic, 
        fontSize: 14},
    footer : {
      flexDirection: 'row',
      alignSelf: 'center',
    }
  });
  
  export { styles }