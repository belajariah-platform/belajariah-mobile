import {StyleSheet} from 'react-native'
import { FontType, Color } from '../../assets'

const styles = StyleSheet.create({
  button: {
    marginTop: 15,
    marginBottom: 10,
    backgroundColor: Color.bgColor,
    borderWidth: 0,
    borderRadius: 20,
    width: '100%',
    height: 40,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
    fontFamily: FontType.bold,
  },
  });

export {styles}