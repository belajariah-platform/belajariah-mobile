import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Text} from '@ui-kitten/components';
import {FontType} from '../Themes/Fonts';
import {Color} from '../Themes/Colors';

export default function Buttons(props) {
  return (
    <TouchableOpacity style={style.button} {...props} activeOpacity={0.9}>
      <Text style={style.text}>{props.title}</Text>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
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
