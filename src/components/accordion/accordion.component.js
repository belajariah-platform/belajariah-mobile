import React from 'react'
import PropTypes from 'prop-types'
import { Text, View, LayoutAnimation, Platform, UIManager } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { useState } from 'react'

const Accordion = (props) => {
  if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental(true)
  }

  return (
    <View>
      <TouchableOpacity onPress={props.onPress}>
        <Text>{props.title}</Text>
      </TouchableOpacity>
      {props.expand && props.children}
    </View>
  )
}

Accordion.propTypes = {
  expand : PropTypes.bool,
  title : PropTypes.string,
  onPress : PropTypes.func,
  children : PropTypes.object,
}

export default Accordion