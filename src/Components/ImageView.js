import React from 'react';
import {StyleSheet} from 'react-native';
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

const ImageViews = props => {
  console.log(props);
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

export default ImageViews;

const Styles = StyleSheet.create({});
