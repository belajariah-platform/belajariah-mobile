import React from 'react';
import ImageView from 'react-native-image-view';

const ImageViews = props => {
  return (
    <ImageView
      images={props.images}
      imageIndex={0}
      onClose={() => {
        props.setViewImage(false);
      }}
      isVisible={props.view}
    />
  );
};

export default ImageViews
