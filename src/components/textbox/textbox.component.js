import React from 'react'
import PropTypes from 'prop-types'
import { styles } from './textbox.style'
import { Input, Text } from '@ui-kitten/components'

const Textbox = (props) => {
  // console.log(props.form.values[props.name])
  return (
    <Input
      value={props.form && props.name && `${props.form.values[props.name]}`}
      caption={
        <Text style={styles.caption}>
          {props.form &&
            props.name &&
            props.form.touched[props.name] &&
            props.form.errors[props.name]}
        </Text>
      }
      autoCapitalize='none'
      onChangeText={
        props.form && props.name && props.form.handleChange(props.name)
      }
      onBlur={props.form && props.name && props.form.handleBlur(props.name)}
      {...props}
      style={[styles.input, props.customStyle]}
      size='medium'
      autoCapitalize={props.AutoCapital}
      status={
        props.form &&
        props.name &&
        props.form.touched[props.name] &&
        props.form.errors[props.name]
          ? 'danger'
          : null
      }
    />
  )
}

Textbox.propTypes = {
  form : PropTypes.object,
  name : PropTypes.string,
  AutoCapital : PropTypes.string,
  customStyle : PropTypes.object,
}

export default Textbox
