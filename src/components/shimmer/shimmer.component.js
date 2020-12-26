import React from 'react'
import PropTypes from 'prop-types'
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder'

const Shimmer = (props) => {
  return (
    <ShimmerPlaceHolder
      autoRun={true}
      colorShimmer={['#eeedf2', '#e6e4ea', '#eeedf2']}
      duration={1000}
      visible={props.visible}
      {...props}>
      {props.component}
    </ShimmerPlaceHolder>
  )
}

Shimmer.propTypes = {
  visible : PropTypes.bool,
  component : PropTypes.object,
}

export default Shimmer