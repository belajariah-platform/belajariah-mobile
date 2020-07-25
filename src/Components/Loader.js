import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Overlay} from 'react-native-elements';
import {Fold, Chase, Circle, Wander} from 'react-native-animated-spinkit';
import {bgColor} from './Color';

function Loader(props) {
  return (
    <View>
      <Overlay
        isVisible={props.loading}
        windowBackgroundColor="rgba(49, 49, 49, .5)"
        overlayBackgroundColor="black"
        borderWidth={0}
        width={80}
        height={80}
        borderRadius={20}
        style={{padding: 20}}
        overlayStyle={{padding: 15}}>
        <Circle size={35} color={bgColor} />
      </Overlay>
    </View>
  );
}

const style = StyleSheet.create({});

export default Loader;
