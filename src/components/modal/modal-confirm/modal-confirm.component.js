import PropTypes from 'prop-types'
import Modal from 'react-native-modal'
import React, { useState } from 'react'
import { View, TouchableOpacity, Text, Image } from 'react-native'

import { Images } from '../../../assets'
import { ButtonGradient } from '../../../components'

import { styles } from './modal-confirm.style'

const ModalConfirm = (props) => {
    return(
        <>
      <Modal
        backdropOpacity={0.25}
        isVisible={props.isVisible}
        style={styles.backdropStyle}
        onBackdropPress={props.backdropPress}
      >
        <View style={[styles.modalStyle, props.containerStyle]}>
          <View style={styles.modalContentSyle}>
            <Text style={styles.TextTitleRating}>Apakah anda yakin untuk menerima ini?</Text>
            <View style={styles.ViewButton}>
            {props.renderItem}
            </View>
          </View>
        </View>
      </Modal>
    </>
    )
}

ModalConfirm.propTypes = {
    title : PropTypes.string,
    isVisible : PropTypes.bool,
    renderItem : PropTypes.object,
    backdropPress : PropTypes.func,
    containerStyle : PropTypes.object,
  }

export default ModalConfirm