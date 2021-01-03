import React from 'react'
import PropTypes from 'prop-types'
import { Card } from 'react-native-elements'
import { View, Text, Image } from 'react-native'

import { styles } from './card.style'

const  Cards = (props)  => {
  console.log
  return (
    <View style={styles.container}>
      {props.imageTitle}
      <View >
        <Image
          source={props.images}
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
        <Card.Divider style={styles.divider}/>
        {props.price}
      </View>
    </View>
  )
}
Cards.propTypes = {
  price : PropTypes.object,
  rating : PropTypes.object,
  images : PropTypes.number,
  imageTitle : PropTypes.object,
  description : PropTypes.string,
}


export default Cards