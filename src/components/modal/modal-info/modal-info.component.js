import React from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-native-modal'
import { styles } from './modal-info.style'
import { View, TouchableOpacity } from 'react-native'

import { Images } from '../../../assets'

const ModalDate = (props) => {
  return (
    <>
      <Modal
        backdropOpacity={0.25}
        isVisible={props.isVisible}
        style={styles.backdropStyle}
        onBackdropPress={props.backdropPress}
      >
        <View style={styles.modalStyle}>
          <TouchableOpacity
            onPress={props.backdropPress}
            style={styles.closeStyle}>
            <Images.ButtonClose.default/>
          </TouchableOpacity>
          <View style={styles.modalContentSyle}>
            {props.renderItem}
          </View>
        </View>
      </Modal>
    </>
  )
}

ModalDate.propTypes = {
  isVisible : PropTypes.bool,
  renderItem : PropTypes.object,
  backdropPress : PropTypes.func,
}


export default ModalDate