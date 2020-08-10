import React from 'react';
import {StyleSheet} from 'react-native';
import {Button, Text} from '@ui-kitten/components';
import {FontType} from '../Themes/Fonts';

export default function ButtonCustom(props) {
  return (
    <Button style={props.styles} {...props}>
      <Text style={style.text}>{props.title}</Text>
    </Button>
  );
}

const style = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 14,
    fontFamily: FontType.bold,
  },
});
