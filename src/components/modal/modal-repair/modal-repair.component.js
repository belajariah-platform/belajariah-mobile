import PropTypes from 'prop-types'
import Modal from 'react-native-modal'
import React, { useState } from 'react'
import { View, TouchableOpacity, Text, Image, TextInput } from 'react-native'

import { Images } from '../../../assets'
import { ButtonGradient } from '../../../components'

import { styles } from './modal-repair.style'

const ModalRepair = (props) => {
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
        <View style={styles.containerRating}>
          <TouchableOpacity style={styles.touchClose} onPress={props.backdropPress}>
            <Text style={styles.TxtCloseModal}>Kembali</Text>
          </TouchableOpacity>
          <ButtonGradient
            title='Kirim'
            style={styles.ButtonClass}
            colors={['#0bb091', '#16c4a4', '#0bb091']} />
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
      >
        <View style={[styles.modalStyle, props.containerStyle]}>
          <View style={styles.modalContentSyle}>
            <TextInput
                multiline={true}
                numberOfLines={8}
                style={styles.textArea}
            />
            <ReviewClass />
          </View>
        </View>
      </Modal>
    </>
    )
}

ModalRepair.propTypes = {
    title : PropTypes.string,
    isVisible : PropTypes.bool,
    renderItem : PropTypes.object,
    backdropPress : PropTypes.func,
    containerStyle : PropTypes.object,
  }

export default ModalRepair