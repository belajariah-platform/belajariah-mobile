import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { Text } from '@ui-kitten/components'
import { TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import { styles } from './button-gradient.style'
import { colors } from 'react-native-elements'

const ButtonGradient = (props) =>  {
  return (
    <TouchableOpacity
      {...props}
      activeOpacity={0.8}>
      <LinearGradient
        style={[styles.button, props.styles]}
        colors={props.colors || ['#8234A4', '#662980', '#8234A4']}
      >
        <View style={styles.viewButton}>
          {props.icon}
          <Text style={[styles.text, props.textStyle]}>{props.title}</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  )
}

ButtonGradient.propTypes = {
  colors: PropTypes.array,
  icon : PropTypes.object,
  title : PropTypes.string,
  styles : PropTypes.object,
  textStyle : PropTypes.object,
}

export default ButtonGradient