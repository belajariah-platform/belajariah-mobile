import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-native-modal'
import { styles } from './modal-rating.style'
import { View, TouchableOpacity, Text, TextInput, Image } from 'react-native'
import { ButtonGradient, Progressbar } from '../../../components'
import { Images } from '../../../assets'

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
        <View style={{marginTop: 10,}}>
        <Text style={styles.TextTitleRating}>Berikan ratingmu untuk</Text>
        <Text style={styles.TextTitleRating}>kelas ini</Text>
        </View>
        <View style={styles.containerTextArea}>
          <TextInput
            multiline={true}
            numberOfLines={10}
            style={styles.textArea}/>
        </View>
        <RatingbarClass />
        <View style={styles.containerRating}>
          <TouchableOpacity onPress={props.backdropPress}>
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
  isVisible : PropTypes.bool,
  renderItem : PropTypes.object,
  backdropPress : PropTypes.func,
  containerStyle : PropTypes.object,
}


export default ModalRating