import React from 'react';
import {styles} from './searchbox.style'
import {Input} from '@ui-kitten/components';

const Searchbox = (props) => {
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

export default Searchbox 