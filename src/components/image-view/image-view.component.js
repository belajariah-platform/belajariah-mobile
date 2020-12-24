import React from 'react'
import PropTypes from 'prop-types'
import ImageView from 'react-native-image-view'

const ImageViews = props => {
  return (
    <ImageView
      images={props.images}
      imageIndex={0}
      onClose={() => {
        props.setViewImage(false)
      }}
      isVisible={props.view}
    />
  )
}

ImageViews.propTypes = {
  view : PropTypes.bool,
  images : PropTypes.object,
  setViewImage : PropTypes.bool,
}

export default ImageViews
