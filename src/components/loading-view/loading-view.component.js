import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { Flow } from 'react-native-animated-spinkit'

import { Color } from '../../assets'
import { styles } from './loading-view.style'

const LoadingView = (props) => {
  return (
    <View style={[styles.indicatorContainer, props.loadingStyle]}>
      <Flow
        color={props.color || Color.purpleMedium}
        size={props.size || 40} />
    </View>
  )
}

LoadingView.propTypes = {
  size : PropTypes.number,
  color : PropTypes.string || PropTypes.object,
  loadingStyle : PropTypes.object
}

export default LoadingView