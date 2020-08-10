import React from 'react';
import {StyleSheet} from 'react-native';
import {Button, Text} from '@ui-kitten/components';
import {FontType} from '../Themes/Fonts';
import {Color} from '../Themes/Colors';

export default function Buttons(props) {
  return (
    <Button style={style.button} {...props}>
      <Text style={style.text}>{props.title}</Text>
    </Button>
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
    alignSelf: 'center',
  },
  text: {
    color: 'white',
    fontSize: 14,
    fontFamily: FontType.bold,
  },
});
