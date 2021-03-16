import React from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-native-modal'
import { View, TouchableOpacity, Text, TextInput } from 'react-native'

import { ButtonGradient } from '../../../components'

import { styles } from './modal-repair.style'

const ModalRepair = (props) => {
  const Button = () => {
    return (
      <View style={styles.container}>
        <View style={styles.containerButton}>
          <TouchableOpacity style={styles.touchClose} onPress={props.backdropPress}>
            <Text style={styles.TxtCloseModal}>Kembali</Text>
          </TouchableOpacity>
          <ButtonGradient
            title='Kirim'
            onPress={props.submit}
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
        onBackButtonPress={props.backButtonPress}
      >
        <View style={[styles.modalStyle, props.containerStyle]}>
          <View style={styles.modalContentSyle}>
            <TextInput
              multiline={true}
              numberOfLines={8}
              style={styles.textArea}
            />
            <Button />
          </View>
        </View>
      </Modal>
    </>
  )
}

ModalRepair.propTypes = {
  submit : PropTypes.func,
  title : PropTypes.string,
  isVisible : PropTypes.bool,
  renderItem : PropTypes.object,
  backdropPress : PropTypes.func,
  backButtonPress : PropTypes.func,
  containerStyle : PropTypes.object,
}

export default ModalRepair