import PropTypes from 'prop-types'
import Modal from 'react-native-modal'
import React, { useState } from 'react'
import DatePicker from 'react-native-date-picker'
import { View, TouchableOpacity, Text } from 'react-native'

import { Buttons } from '../../../components'
import { Color, Images } from '../../../assets'

import { styles } from './modal-date.style'

const ModalDate = (props) => {
  const [date, setDate] = useState(props.date)
  const onClose = () => {
    props.backdropPress(!props.isVisible)
    setDate(props.date)
  }

  return (
    <>
      <Modal
        backdropOpacity={0.25}
        isVisible={props.isVisible}
        style={styles.backdropStyle}
        onBackdropPress={() => onClose()}
        onBackButtonPress={() => onClose()}
      >
        <View style={styles.modalDateBackgroundStyle}>
          <View style={styles.containerHeader}>
            <Text style={styles.titleModal}>Pilih tanggal</Text>
            <TouchableOpacity
              onPress={props.backdropPress}
              style={styles.closeStyle}>
              <Images.ButtonClose.default/>
            </TouchableOpacity>
          </View>
          <View style={styles.modalStyle}>
            <DatePicker
              date={date}
              locale='en-DK'
              mode={props.mode}
              textColor={Color.grey}
              onDateChange={setDate}
              is24hourSource='locale'
              style={styles.dateStyle}
              maximumDate={new Date()}
            />
            <Buttons
              style={[styles.buttonSave, props.styleBtn]}
              title={props.titleBtn}
              onPress={() => {
                props.dateChange(date)
                props.backdropPress(!props.isVisible)
              }}
            />
          </View>
        </View>
      </Modal>
    </>
  )
}

ModalDate.propTypes = {
  mode : PropTypes.string,
  date : PropTypes.object,
  isVisible : PropTypes.bool,
  styleBtn : PropTypes.object,
  titleBtn : PropTypes.string,
  dateChange : PropTypes.func,
  backdropPress : PropTypes.func,
}


export default ModalDate