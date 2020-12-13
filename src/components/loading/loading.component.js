import React from 'react';
import {Color} from '../../assets';
import {Overlay} from 'react-native-elements';
import {Fold, Chase, Circle, Wander} from 'react-native-animated-spinkit';

const  Loading = (props) => {
  return (
    <>
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
        <Circle size={35} color={Color.bgColor} />
      </Overlay>
    </>
  );
}

export default Loading;
