import React from 'react';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';

export default function Shimmer(props) {
  return (
    <ShimmerPlaceHolder
      autoRun={true}
      colorShimmer={['#eeedf2', '#e6e4ea', '#eeedf2']}
      duration={1000}
      visible={props.visible}
      {...props}>
      {props.component}
    </ShimmerPlaceHolder>
  );
}
