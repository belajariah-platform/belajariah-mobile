import React from 'react';
import {StyleSheet} from 'react-native';
import {Input, Text} from '@ui-kitten/components';

export default function InputText(props) {
  return (
    <Input
      value={props.form && props.name && `${props.form.values[props.name]}`}
      caption={
        <Text style={style.caption}>
          {props.form &&
            props.name &&
            props.form.touched[props.name] &&
            props.form.errors[props.name]}
        </Text>
      }
      onChangeText={
        props.form && props.name && props.form.handleChange(props.name)
      }
      onBlur={props.form && props.name && props.form.handleBlur(props.name)}
      {...props}
      style={style.input}
      size="medium"
      status={
        props.form &&
        props.name &&
        props.form.touched[props.name] &&
        props.form.errors[props.name]
          ? 'danger'
          : null
      }
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
