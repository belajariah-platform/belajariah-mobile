import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { Text } from '@ui-kitten/components'
import { TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import { styles } from './button-gradient.style'

const ButtonGradient = (props) =>  {
  return (
    <TouchableOpacity
      {...props}
      activeOpacity={0.8}>
      <LinearGradient
        end={props.end || { x: 1, y: 0 }}
        start={props.start || { x: 1, y: 1 }}
        style={[styles.button, props.styles]}
        colors={props.colors || ['#8234A4', '#662980', '#8234A4']}
      >
        <View style={[styles.viewButton, props.containerStyle]}>
          {props.icon}
          <Text style={[styles.text, props.textStyle]}>{props.title}</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  )
}

ButtonGradient.propTypes = {
  end : PropTypes.object,
  colors: PropTypes.array,
  icon : PropTypes.object,
  start : PropTypes.object,
  title : PropTypes.string,
  styles : PropTypes.object,
  textStyle : PropTypes.object,
  containerStyle : PropTypes.object,
}

export default ButtonGradient