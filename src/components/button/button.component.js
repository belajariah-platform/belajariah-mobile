import React from 'react'
import PropTypes from 'prop-types'
import { Text } from '@ui-kitten/components'
import { TouchableOpacity } from 'react-native'

import { styles } from './button.style'

const Buttons = (props) =>  {
  return (
    <TouchableOpacity style={styles.button} {...props} activeOpacity={0.9}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  )
}

Buttons.propTypes = {
  title : PropTypes.string
}

export default Buttons