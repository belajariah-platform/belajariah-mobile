import React from 'react'
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
        style={[styles.backdropStyle, props.custombackdropStyle]}
        onBackdropPress={props.backdropPress}
        onBackButtonPress={props.backButtonPress}
      >
        <View style={[styles.modalStyle, props.containerStyle]}>
          {props.hideButtonClose || (
            <TouchableOpacity
              onPress={props.backdropPress}
              style={styles.closeStyle}>
              <Images.ButtonClose.default/>
            </TouchableOpacity>
          )}
          <View style={[styles.modalContentSyle, props.ModalContent]}>
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
  ModalContent : PropTypes.object,
  backButtonPress : PropTypes.func,
  hideButtonClose : PropTypes.bool,
  containerStyle : PropTypes.object,
  custombackdropStyle : PropTypes.object,
}


export default ModalInfo