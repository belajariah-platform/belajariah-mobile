import React from 'react';
import {styles} from './button.style'
import {Text} from '@ui-kitten/components'
import {TouchableOpacity} from 'react-native'

const Buttons = (props) =>  {
  return (
    <TouchableOpacity style={styles.button} {...props} activeOpacity={0.9}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
}

export default Buttons