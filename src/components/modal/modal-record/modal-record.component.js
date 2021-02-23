import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-native-modal'
import { styles } from './modal-record.style'
import { View, TouchableOpacity } from 'react-native'

import { Images } from '../../../assets'
import { Text } from 'react-native'
import { Image } from 'react-native'
import { ScrollView } from 'react-native'
import { Alert } from 'react-native'
import Swiper from 'react-native-swiper'

const ModalRecord = (props) => {
  const Ayats = [
    'قُلْ هُوَ اللّٰهُ اَحَدٌۚ',
    'اَللّٰهُ الصَّمَدُۚ',
    'لَمْ يَلِدْ وَلَمْ يُوْلَدْۙ',
    'وَلَمْ يَكُنْ لَّهٗ كُفُوًا اَحَدٌ',
  ]

  return (
    <>
      <Modal
        backdropOpacity={0.25}
        isVisible={props.isVisible}
        style={styles.backdropStyle}
        onBackdropPress={props.backdropPress}
      >
        <View style={[styles.modalStyle, props.containerStyle]}>
          <Image source={Images.ModalRecordBG} style={{ position: 'absolute', height: '100%', width: '100%', borderTopLeftRadius: 20, borderTopRightRadius: 20, resizeMode : 'contain' }}/>
          <TouchableOpacity
            onPress={props.backdropPress}
            style={styles.closeStyle}>
            <Images.ButtonClose.default/>
          </TouchableOpacity>
          <View style={styles.modalContentSyle}>
            <View></View>
            <View style={{ minHeight : 120, maxHeight: 240 }}>
              <Swiper
                showsPagination={false}
                loop={false}>
                {Ayats.map((ayat, index) =>
                  <ScrollView key={index} style={{ backgroundColor: 'white', maxHeight: 240, flexGrow: 0 }}>
                    <Text style={styles.textAyat}>{ayat}</Text>
                  </ScrollView>)
                }
              </Swiper>
              <Text style={styles.textModal}>Ayoo praktek baca ayat diatas, lalu rekam bacaan~mu ya sobat. Dan jangan lupa kirim ya sobat</Text>
            </View>

            <View>
              <Text style={styles.textTimer}>00:00:00</Text>
              <Images.IconRecordStartGradation.default style={{ position : 'absolute', bottom : 46, alignSelf: 'center' }}/>
              <TouchableOpacity onPress={() => Alert.alert('halo')} style={{ alignSelf : 'center', bottom: 56 }}>
                <Images.IconRecordStart.default />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  )
}

ModalRecord.propTypes = {
  isVisible : PropTypes.bool,
  renderItem : PropTypes.object,
  backdropPress : PropTypes.func,
  hideButtonClose : PropTypes.bool,
  containerStyle : PropTypes.object,
}


export default ModalRecord