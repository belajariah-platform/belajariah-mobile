import PropTypes from 'prop-types'
import Modal from 'react-native-modal'
import React, { useState } from 'react'
import Swiper from 'react-native-swiper'
import { styles } from './modal-record.style'

import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native'

import { ExerciseAPI } from '../../../api'
import { Images } from '../../../assets'

const ModalRecord = (props) => {
  const [state, setState] = useState({
    start : true,
    stop : false,
    send : false,
    sent : false,
  })

  // const Ayats = [
  //   'وَالْعَصْرِۙ',
  //   'اِنَّ الْاِنْسَانَ لَفِيْ خُسْرٍۙ',
  //   'اِلَّا الَّذِيْنَ اٰمَنُوْا وَعَمِلُوا الصّٰلِحٰتِ وَتَوَاصَوْا بِالْحَقِّ ەۙ وَتَوَاصَوْا بِالصَّبْرِ ࣖ',
  // ]
  const InsertRecord = async () => {
    const values = {
      User_Code              : 18,
      Class_Code             : 'CLC00000001',
      Recording_Code         : 1,
      Duration               : 2,
      Expired_Date           : '2021-03-27T13:07:09.000Z'
    }
    try {
      const response = await ExerciseAPI.InsertExerciseReading(values)
      if (response.data.result) {
        //
      }
    } catch (error) {
      return error
    }
  }

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
            InsertRecord(),
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
        onBackButtonPress={props.backButtonPress}
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
  data : PropTypes.object,
  ayats : PropTypes.array,
  isVisible : PropTypes.bool,
  renderItem : PropTypes.object,
  backdropPress : PropTypes.func,
  backButtonPress : PropTypes.func,
  hideButtonClose : PropTypes.bool,
  containerStyle : PropTypes.object,
}


export default ModalRecord