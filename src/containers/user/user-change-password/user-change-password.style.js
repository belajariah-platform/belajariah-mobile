import { StyleSheet } from 'react-native'
import { Color, FontType } from '../../../assets'

const styles = StyleSheet.create({
    container : {
      flex: 9,
      marginTop: 3,
      paddingHorizontal : 30,
      backgroundColor: 'white', 
    },
    content: {
      color: Color.textBasic,
      fontSize: 14,
      lineHeight: 18,
      marginBottom: 30,
    },
    text: {
      marginTop: 5,
      marginBottom: 3,
      fontSize: 14,
      color: Color.textBasic,
      fontFamily: FontType.semiBold,
    },
  });

export {styles}