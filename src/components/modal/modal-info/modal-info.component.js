import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-native-modal'
import { styles } from './modal-info.style'
import { View, TouchableOpacity } from 'react-native'

import { Images } from '../../../assets'

const ModalInfo = (props) => {
  return (
    <>
      <Modal
        backdropOpacity={0.25}
        isVisible={props.isVisible}
        style={styles.backdropStyle}
        onBackdropPress={props.backdropPress}
      >
        <View style={[styles.modalStyle, props.containerStyle]}>
          {props.hideButtonClose || (
            <TouchableOpacity
              onPress={props.backdropPress}
              style={styles.closeStyle}>
              <Images.ButtonClose.default/>
            </TouchableOpacity>
          )}
          <View style={styles.modalContentSyle}>
            {props.renderItem}
          </View>
        </View>
      </Modal>
    </>
  )
}

ModalInfo.propTypes = {
  isVisible : PropTypes.bool,
  renderItem : PropTypes.object,
  backdropPress : PropTypes.func,
  hideButtonClose : PropTypes.bool,
  containerStyle : PropTypes.object,
}


export default ModalInfo