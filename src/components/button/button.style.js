import {StyleSheet} from 'react-native'
import { FontType, Color } from '../../assets'

const styles = StyleSheet.create({
  button: {
    height: 40,
    width: '100%',
    marginTop: 15,
    borderWidth: 0,
    marginBottom: 10,
    borderRadius: 20,
    justifyContent: 'center',
    backgroundColor: Color.bgColor,
  },
  text: {
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
    fontFamily: FontType.bold,
  },
  });

export {styles}