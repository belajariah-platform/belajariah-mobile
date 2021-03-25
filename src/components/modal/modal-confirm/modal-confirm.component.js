import React from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-native-modal'
import { View, Text, TouchableOpacity } from 'react-native'

import { Color } from '../../../assets'
import { styles } from './modal-confirm.style'

const ModalConfirm = (props) => {
  let action, color
  props.action == 'Approved' ?  (action = 'menerima', color = '#6e248d' ) :
    props.action == 'Revised' ?  (action = 'membatalkan', color = '#d73c2c') :
      (action = 'menolak', color = '#d73c2c')

  return(
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
            <Text style={styles.TextTitleRating}>Apakah kamu yakin ingin {action}</Text>
            <View style={styles.ViewButton}>
              <View>
                <TouchableOpacity activeOpacity={0.8} onPress={props.submit}>
                  <View style={{ ...styles.viewButtonModal, backgroundColor: color, }}>
                    <Text style={{ ...styles.TxtButtonModal, color: Color.white }}>Ya, saya yakin!</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} onPress={props.backdropPress}>
                  <View style={{ ...styles.viewButtonModal, borderColor: color, borderWidth: 1, }}>
                    <Text style={{ ...styles.TxtButtonModal, color: color, }}>Batal</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </>
  )
}

ModalConfirm.propTypes = {
  submit : PropTypes.func,
  loading : PropTypes.bool,
  title : PropTypes.string,
  action : PropTypes.string,
  isVisible : PropTypes.bool,
  renderItem : PropTypes.object,
  backdropPress : PropTypes.func,
  backButtonPress : PropTypes.func,
  containerStyle : PropTypes.object,
}

export default ModalConfirm