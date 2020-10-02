import React from 'react';
import {StyleSheet} from 'react-native';
import {Button, Text} from '@ui-kitten/components';
import {FontType} from '../Themes/Fonts';

export default function ButtonCustom(props) {
  return (
    <Button style={props.style} {...props}>
      <Text style={{...style.text, color: props.color}}>{props.title}</Text>
    </Button>
  );
}

const style = StyleSheet.create({
  text: {
    fontFamily: FontType.bold,
    fontSize: 12,
  },
});
