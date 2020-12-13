import React from 'react';
import ImageView from 'react-native-image-view';

const images = [
  {
    source: {
      uri:
        'https://cdn.pixabay.com/photo/2017/08/17/10/47/paris-2650808_960_720.jpg',
    },
    title: 'Paris',
    width: 806,
    height: 720,
  },
];

const ImageView = props => {
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

export default ImageView;
