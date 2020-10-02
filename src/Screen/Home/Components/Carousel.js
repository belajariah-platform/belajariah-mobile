import React from 'react';
import {Image, View} from 'react-native';
import Carousel from 'react-native-looped-carousel';

export default function Carousels(props) {
  return (
    <>
      <Carousel
        delay={5000}
        autoplay
        style={{height: 170, width: 300, alignSelf: 'center'}}>
        <View
          style={{
            alignSelf: 'center',
            width: 300,
            marginTop: -20,
          }}>
          <Image
            source={require('../../../Helpers/Image/carousel2.png')}
            style={{
              width: 270,
              height: 150,
              alignSelf: 'center',
            }}
          />
        </View>
        {/* <View
          style={{
            alignSelf: 'center',
            width: 300,
            marginTop: -20,
          }}>
          <Image
            source={require('../../../Helpers/Image/carousel.png')}
            style={{
              width: 240,
              height: 150,
              alignSelf: 'center',
            }}
          />
        </View> */}
      </Carousel>
    </>
  );
}
