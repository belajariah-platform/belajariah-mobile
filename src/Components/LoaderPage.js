import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Fold, Chase, Circle, Wander} from 'react-native-animated-spinkit';
import {bgColor} from './Color';

function LoaderPage(props) {
  return (
    <View>
      <Circle size={35} color={bgColor} />
    </View>
  );
}

const style = StyleSheet.create({});

export default LoaderPage;
