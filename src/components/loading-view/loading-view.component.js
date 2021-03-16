import React from 'react'
import PropTypes from 'prop-types'
import { View, ActivityIndicator } from 'react-native'

import { Color } from '../../assets'
import { styles } from './loading-view.style'

const LoadingView = (props) => {
  return (
    <View style={[styles.indicatorContainer, props.loadingStyle]}>
      <ActivityIndicator
        color={props.color || Color.purpleMedium}
        size={40} />
    </View>
  )
}

LoadingView.propTypes = {
  color : PropTypes.string,
  loadingStyle : PropTypes.object
}

export default LoadingView