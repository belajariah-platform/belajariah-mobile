import PropTypes from 'prop-types'
import React, { useState, useRef } from 'react'
import { View, Dimensions } from 'react-native'
import Carousel, { Pagination } from 'react-native-snap-carousel'

const Carousels = (props) => {
  const isCarousel = useRef(null)
  const [index, setIndex] = useState(0)
  const { width }  = Dimensions.get('window')

  return (
    <View>
      <Carousel
        layout='default'
        ref={isCarousel}
        data={props.data}
        sliderWidth={width}
        itemWidth={width-32}
        useScrollView={true}
        renderItem={props.renderItem}
        onSnapToItem={(index) => setIndex(index)}
      />
      {props.pagination && (
        <Pagination
          dotsLength={props.data.length}
          activeDotIndex={index}
          carouselRef={isCarousel}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.92)'
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
          tappableDots={true}
        />
      )}
    </View>
  )
}


Carousels.propTypes = {
  data : PropTypes.array,
  pagination : PropTypes.bool,
  renderItem : PropTypes.func,
}


export default Carousels