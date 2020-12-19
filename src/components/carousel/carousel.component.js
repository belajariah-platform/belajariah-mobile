import React from 'react'
import Carousel from 'react-native-looped-carousel'

import {
    View,
    Image, 
} from 'react-native'

import { styles } from './carousel.style'

const  Carousels = () =>{
  return (
    <>
      <Carousel
        delay={5000}
        autoplay
        style={styles.container}>
        <View style={styles.containerImage}>
          <Image style={styles.images}/>
        </View>
      </Carousel>
    </>
  );
}


export default Carousels