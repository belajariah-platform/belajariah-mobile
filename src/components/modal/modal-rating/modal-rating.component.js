import PropTypes from 'prop-types'
import Modal from 'react-native-modal'
import React, { useState } from 'react'
import { View, TouchableOpacity, Text, Image } from 'react-native'

import { Images } from '../../../assets'
import { ButtonGradient } from '../../../components'

import { styles } from './modal-rating.style'

const ModalRating = (props) => {
  const maxRating = [1, 2, 3, 4, 5]
  const [defaultRating, setDefaultRating] = useState(0)

  const RatingbarClass = () => {
    return (
      <View style={styles.customRatingBarStyle}>
        {maxRating.map((item, index) => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              key={index}
              onPress={() => setDefaultRating(item)}>
              <Image
                style={styles.starImageStyle}
                source={
                  item <= defaultRating
                    ? Images.BintangFull
                    : Images.BintangBorder
                }
              />
            </TouchableOpacity>
          )
        })}
      </View>
    )
  }

  const ReviewClass = () => {
    return (
      <View style={styles.containerReview}>
        <View>
          <Text style={styles.TextTitleRating}>{props.title}</Text>
        </View>
        <View style={styles.containerTextArea}>
          {props.renderItem}
        </View>
        <RatingbarClass />
        <View style={styles.containerRating}>
          <TouchableOpacity style={styles.touchClose} onPress={props.backdropPress}>
            <Text style={styles.TxtCloseModal}>Nanti</Text>
          </TouchableOpacity>
          <ButtonGradient
            title='Kirim'
            style={styles.ButtonClass} />
        </View>
      </View>
    )
  }

  return (
    <>
      <Modal
        backdropOpacity={0.25}
        isVisible={props.isVisible}
        style={styles.backdropStyle}
        onBackdropPress={props.backdropPress}
        onBackButtonPress={props.backButtonPress}
      >
        <View style={[styles.modalStyle, props.containerStyle]}>
          <View style={styles.modalContentSyle}>
            <ReviewClass />
          </View>
        </View>
      </Modal>
    </>
  )
}

ModalRating.propTypes = {
  title : PropTypes.string,
  isVisible : PropTypes.bool,
  renderItem : PropTypes.object,
  backdropPress : PropTypes.func,
  backButtonPress : PropTypes.func,
  containerStyle : PropTypes.object,
}


export default ModalRating