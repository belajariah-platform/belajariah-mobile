import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, Image } from 'react-native'

import { Images } from '../../assets'
import { styles } from './card.style'

const  Cards = (props)  => {
  console.log(props.filepath)
  return (
    <View style={styles.container}>
      {props.imageTitle}
      <View >
        <Image
          source={props.filepath == '' ? Images.ImgDefault3 :
            { uri : props.filepath }}
          style={styles.images}
        />
      </View>
      <View style={styles.content}>
        <Text
          style={styles.description}>
          {props.description.substring(0, 120)} ...
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
  filepath : PropTypes.string,
  imageTitle : PropTypes.object,
  description : PropTypes.string,
}


export default Cards