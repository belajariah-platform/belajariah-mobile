import React from 'react';
import {StyleSheet} from 'react-native';
import {Input, Text} from '@ui-kitten/components';

export default function SearchText(props) {
  return (
    <Input
      value={props.form && props.name && `${props.form.values[props.name]}`}
      onChangeText={
        props.form && props.name && props.form.handleChange(props.name)
      }
      onBlur={props.form && props.name && props.form.handleBlur(props.name)}
      {...props}
      size="medium"
    />
  );
}

const style = StyleSheet.create({
  input: {
    marginVertical: 1,
  },
  caption: {
    fontSize: 12,
    color: '#ff6721',
  },
});
