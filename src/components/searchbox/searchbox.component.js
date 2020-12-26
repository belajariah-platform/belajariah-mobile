import React from 'react'
import PropTypes from 'prop-types'
import { Input } from '@ui-kitten/components'

const Searchbox = (props) => {
  return (
    <Input
      value={props.form && props.name && `${props.form.values[props.name]}`}
      onChangeText={
        props.form && props.name && props.form.handleChange(props.name)
      }
      onBlur={props.form && props.name && props.form.handleBlur(props.name)}
      {...props}
      size='medium'
    />
  )
}

Searchbox.propTypes = {
  form : PropTypes.func,
  name : PropTypes.string,
}

export default Searchbox