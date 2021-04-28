import React from 'react'
import PropTypes from 'prop-types'
import { Input } from '@ui-kitten/components'

const Searchbox = (props) => {
  return (
    <Input
      {...props}
      size ={props.size || 'small'}
    >{props.renderItem}</Input>
  )
}

Searchbox.propTypes = {
  size : PropTypes.string,
  renderItem : PropTypes.object
}

export default Searchbox