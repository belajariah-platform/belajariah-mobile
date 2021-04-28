import React from 'react'
import PropTypes from 'prop-types'
import { Text } from '@ui-kitten/components'
import { TouchableOpacity } from 'react-native'

import { styles } from './button.style'
import { View } from 'react-native'

const Buttons = (props) =>  {
  return (
    <TouchableOpacity
      {...props}
      activeOpacity={0.9}
      style={[styles.button, props.style]}>
      <View style={styles.viewButton}>
        {props.icon}
        <Text style={[styles.text, props.textStyle]}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  )
}

Buttons.propTypes = {
  icon : PropTypes.object,
  style : PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  title : PropTypes.string,
  textStyle : PropTypes.object,
}

export default Buttons