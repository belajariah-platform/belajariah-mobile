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
  const [state, setState] = useState({
    start : true,
    stop : false,
    send : false,
    sent : false,
  })

  const Ayats = [
    'وَالْعَصْرِۙ',
    'اِنَّ الْاِنْسَانَ لَفِيْ خُسْرٍۙ',
    'اِلَّا الَّذِيْنَ اٰمَنُوْا وَعَمِلُوا الصّٰلِحٰتِ وَتَوَاصَوْا بِالْحَقِّ ەۙ وَتَوَاصَوْا بِالصَّبْرِ ࣖ',
  ]

  const handleRecord = () => {
    state.start ? (
      setState(s => ({ ...s, start : false, stop : true })),
      alert('Recording....')
    )
      : (
        state.stop ? (
          setState(s => ({ ...s, stop : false, send : true })),
          alert('Record done.')
        )
          :
          state.send && (
            setState(s => ({ ...s, send : false, sent : true })),
            alert('Send now!')
          )
      )
  }

  const handlePlayRecord = () => {
    alert('play record')
  }

  const handleReload = () => {
    setState(s => ({ ...s, send : false, start : true }))
  }

  return (
    <>
      <Modal
        backdropOpacity={0.25}
        isVisible={props.isVisible}
        style={styles.backdropStyle}
        onBackdropPress={props.backdropPress}
      >
        <View style={styles.modalStyle}>
          <Image source={Images.ModalRecordBG} style={styles.imgBackground}/>
          <TouchableOpacity
            onPress={props.backdropPress}
            style={styles.iconClose}>
            <Images.ButtonClose.default/>
          </TouchableOpacity>

          {state.sent ? (
            <View style={styles.containerRecordSent}>
              <Images.IconRecordSent.default />
              <Text style={styles.textSuccess}>Terkirim</Text>
              <Text style={styles.textModal}>Rekaman anda terkirim</Text>
            </View>
          ) : (
            <View style={styles.containerStyle}>

              <View style={styles.containerSwiper}>
                <Swiper
                  loop={false}
                  showsPagination={false}
                  showsButtons={true}
                  prevButton={<Images.IconRecordPrevious.default />}
                  nextButton={<Images.IconRecordNext.default />}
                >
                  {props.ayats.map((ayat, index) =>
                    <ScrollView key={index} showsVerticalScrollIndicator={false} contentContainerStyle={styles.containerScrollview}>
                      <Text style={styles.textAyat}>{ayat}</Text>
                    </ScrollView>)
                  }
                </Swiper>
                <Text style={styles.textModal}>Ayoo praktek baca ayat diatas, lalu rekam bacaan~mu ya sobat. Dan jangan lupa kirim ya sobat</Text>
              </View>

              {state.start && (
                <View>
                  <Text style={styles.textTimer}>00:00:00</Text>
                  <Images.IconRecordStartGradation.default style={styles.iconRecordGradation}/>
                  <TouchableOpacity onPress={handleRecord} style={styles.iconRecord}>
                    <Images.IconRecordStart.default />
                  </TouchableOpacity>
                </View>
              )}

              {state.stop && (
                <View>
                  <Text style={styles.textTimer}>00:00:14</Text>
                  <Images.IconRecordStopGradation.default style={styles.iconRecordGradation}/>
                  <TouchableOpacity onPress={handleRecord} style={styles.iconRecord}>
                    <Images.IconRecordStop.default />
                  </TouchableOpacity>
                </View>
              )}

              {state.send && (
                <View>
                  <Text style={styles.textTimer}>00:00:14</Text>
                  <Images.IconRecordSendGradation.default style={styles.iconRecordGradation}/>
                  <View style={styles.containerSend}>
                    <TouchableOpacity onPress={handlePlayRecord} style={styles.iconRecord}>
                      <Images.IconRecordPlay.default />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleRecord} style={styles.iconRecord}>
                      <Images.IconRecordSend.default />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleReload} style={styles.iconRecord}>
                      <Images.IconRecordReload.default />
                    </TouchableOpacity>
                  </View>
                </View>
              )}

              {state.sent && (
                <View>
                  <Text style={styles.textTimer}>Done ya</Text>
                </View>
              )}

            </View>
          )}


        </View>
      </Modal>
    </>
  )
}

ModalRecord.propTypes = {
  ayats : PropTypes.array,
  isVisible : PropTypes.bool,
  renderItem : PropTypes.object,
  backdropPress : PropTypes.func,
  hideButtonClose : PropTypes.bool,
  containerStyle : PropTypes.object,
}


export default ModalRecord