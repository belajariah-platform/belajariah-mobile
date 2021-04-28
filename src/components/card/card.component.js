import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, Image } from 'react-native'

import { styles } from './card.style'

const  Cards = (props)  => {
  return (
    <View style={styles.container}>
      {props.imageTitle}
      <View >
        <Image
          source={props.filepath}
          style={styles.images}
        />
      </View>
      <View style={styles.content}>
        <Text
          style={styles.description}>
          {props.description.substring(0, 150)} ...
        </Text>
        <View style={styles.rating}>
          {props.rating}
        </View>
        {props.price}
      </View>
    </View>
  )
}
Cards.propTypes = {
  price : PropTypes.object,
  rating : PropTypes.object,
  filepath : PropTypes.number,
  imageTitle : PropTypes.object,
  description : PropTypes.string,
}


export default Cards