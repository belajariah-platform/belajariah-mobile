import React from 'react';
import {styles} from './button.style'
import {Button, Text} from '@ui-kitten/components';

const Buttons = (props) =>  {
  return (
    <Button style={props.style} {...props}>
      <Text style={{...styles.text, color: props.color}}>{props.title}</Text>
    </Button>
  );
}

export default Buttons