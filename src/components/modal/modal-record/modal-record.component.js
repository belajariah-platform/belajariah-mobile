import PropTypes from 'prop-types'
import Modal from 'react-native-modal'
import RNFetchBlob from 'rn-fetch-blob'
import Swiper from 'react-native-swiper'
import { styles } from './modal-record.style'
import React, { useState, useEffect } from 'react'
import NetInfo from '@react-native-community/netinfo'
import AudioRecorderPlayer from 'react-native-audio-recorder-player'

import {
  View,
  Text,
  Image,
  Platform,
  ScrollView,
  TouchableOpacity,
} from 'react-native'
import {
  Loader,
  LoadingView,
  ModalNoConnection,
} from '../../../components'

import { Images } from '../../../assets'
import { Response } from '../../../utils'
import { ExerciseAPI, QuranAPI } from '../../../api'

const audioRecorderPlayer = new AudioRecorderPlayer()

const ModalRecord = (props) => {
  const [state, setState] = useState([])
  const [loading, setLoading] = useState(true)
  const [loadingBtn, setLoadingBtn] = useState(false)
  const [connectStatus, setconnectStatus] = useState(false)
  const [dataState, setDataState] = useState({
    start : true,
    stop : false,
    send : false,
    sent : false,
  })

  const [audio, setAudio] = useState('')
  const [playTime, setPlayTime] = useState('')
  const [duration, setDuration] = useState('0')
  const [isPlaying, setIsPlaying] = useState(false)
  const [recordTime, setRecordTime] = useState('00:00')
  const [showPlayTimeAndDuration, setShowPlayTimeAndDuration] = useState(false)


  const onStartRecord = async () => {
    const dirs = RNFetchBlob.fs.dirs
    const path = Platform.select({
      ios: 'hello.m4a',
      android: `${dirs.CacheDir}/belajariah.mp3`,
    })
    await audioRecorderPlayer.startRecorder(path)
    audioRecorderPlayer.addRecordBackListener((e) => {
      const time = audioRecorderPlayer
        .mmssss(Math.floor(e.current_position))
        .toString()
        .substr(0, 5)

      setRecordTime(time)
    })
  }

  const onStopRecord = async () => {
    await audioRecorderPlayer.addRecordBackListener((e) => {
      let duration = e.current_position.toString()
      duration.substr(0, duration.length - 3)
    })
    const result = await audioRecorderPlayer.stopRecorder()
    audioRecorderPlayer.removeRecordBackListener()
    setAudio(result)
  }

  const onStartPlay = async () => {
    console.log(audio)
    const dirs = RNFetchBlob.fs.dirs
    const path = Platform.select({
      ios: 'hello.m4a',
      android: `${dirs.CacheDir}/belajariah.mp3`,
    })
    await audioRecorderPlayer.startPlayer(path)
    audioRecorderPlayer.addPlayBackListener((e) => {
      const position = audioRecorderPlayer
        .mmssss(Math.floor(e.current_position))
        .toString()
        .substr(0, 5)
      const duration = audioRecorderPlayer
        .mmssss(Math.floor(e.duration))
        .toString()
        .substr(0, 5)

      setPlayTime(position)
      setDuration(duration)
      audioRecorderPlayer.removeRecordBackListener()
      return
    })
  }

  const onPausePlay = async () => {
    await audioRecorderPlayer.pausePlayer()
  }


  const togglemodalNoConnection = () => setconnectStatus(!connectStatus)
  const retryConnection = () => {
    fetchDataQuran()
    setconnectStatus(!connectStatus)
  }

  const fetchDataQuran = async (data) => {
    try {
      const dataObj = {
        id: data.Surat_Code,
        count: 100,
      }
      setLoading(true)
      const response = await QuranAPI.GetDetailQuran(dataObj)
      if (response.status === Response.SUCCESS) {
        const dataArr = []
        response.data.data.verses.forEach((val, index) => {
          if (index + 1 >= data.Ayat_Start && index + 1 <= data.Ayat_End) {
            dataArr.push(val)
          }
        })
        setState(dataArr)
      }
      setLoading(false)
    } catch (err) {
      setLoading(false)
      return err
    }
  }

  const InsertRecord = async () => {
    const values = {
      User_Code              : props.user.User_Code,
      Class_Code             : props.user.Class_Code,
      Title_Code             : props.data.Title_Code,
      Recording_Code         : 1,
      Duration               : 2,
      Expired_Date           : props.user.Expired_Date,
    }
    try {
      setLoadingBtn(true)
      const response = await ExerciseAPI.InsertExerciseReading(values)
      if (response.data.result) {
        setDataState(s => ({ ...s, send : false, sent : true }))
      }
      setLoadingBtn(false)
      handleReload()
    } catch (error) {
      handleReload()
      NetInfo.fetch().then(res => {
        setconnectStatus(!res.isConnected)
      })
      setLoadingBtn(false)
      return error
    }
  }

  const handleRecord = () => {
    dataState.start ? (
      setDataState(s => ({ ...s, start : false, stop : true })),
      onStartRecord(),
      setIsPlaying(false),
      setPlayTime(''),
      setDuration(''),
      setShowPlayTimeAndDuration(false)
    )
      : (
        dataState.stop ? (
          setDataState(s => ({ ...s, stop : false, send : true })),
          onStopRecord()
        )
          :
          dataState.send && (
            InsertRecord()
          )
      )
  }

  const handlePlayRecord = () => {
    setIsPlaying(!isPlaying)
    if (isPlaying) {
      onPausePlay()
    } else {
      onStartPlay()
      setShowPlayTimeAndDuration(true)
    }
  }

  const handleReload = () => {
    setDataState(s => ({ ...s, send : false, start : true }))
    setAudio('')
    setPlayTime('')
    setDuration('')
    setIsPlaying(false)
    setRecordTime('00:00')
    setShowPlayTimeAndDuration(false)
  }


  useEffect(() => {
    if (playTime == duration) {
      setIsPlaying(false)
      audioRecorderPlayer.stopPlayer()
      audioRecorderPlayer.removePlayBackListener()
    }
  }, [playTime, duration])

  useEffect(() => {
    fetchDataQuran(props.data)
  }, [props.data])

  let icon
  isPlaying ? icon = Images.IconRecordPause :
    icon = Images.IconRecordPlay

  return (
    <>
      <Loader loading={loadingBtn}/>
      <ModalNoConnection
        isVisible={connectStatus}
        retry={() => retryConnection()}
        backdropPress={() => togglemodalNoConnection()}
        backButtonPress={() => togglemodalNoConnection()}
      />
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

          {dataState.sent ? (
            <View style={styles.containerRecordSent}>
              <Images.IconRecordSent.default />
              <Text style={styles.textSuccess}>Terkirim</Text>
              <Text style={styles.textModal}>Rekaman anda terkirim</Text>
            </View>
          ) : (
            <View style={styles.containerStyle}>

              <View style={styles.containerSwiper}>
                {loading ?
                  <LoadingView/> :
                  <Swiper
                    loop={false}
                    showsPagination={false}
                    showsButtons={true}
                    prevButton={<Images.IconRecordPrevious.default />}
                    nextButton={<Images.IconRecordNext.default />}
                  >
                    {state.map((ayat, index) =>
                      <ScrollView key={index} showsVerticalScrollIndicator={false} contentContainerStyle={styles.containerScrollview}>
                        <Text style={styles.textAyat}>{ayat.text.arab}</Text>
                      </ScrollView>)
                    }
                  </Swiper>
                }
                <Text style={styles.textModal}>Ayoo praktek baca ayat diatas, lalu rekam bacaan~mu ya sobat dan jangan lupa kirim ya.</Text>
              </View>

              {dataState.start && (
                <View>
                  <Text style={styles.textTimer}>
                    {recordTime}
                  </Text>
                  <Images.IconRecordStartGradation.default style={styles.iconRecordGradation}/>
                  <TouchableOpacity onPress={handleRecord} style={styles.iconRecord}>
                    <Images.IconRecordStart.default />
                  </TouchableOpacity>
                </View>
              )}

              {dataState.stop && (
                <View>
                  <Text style={styles.textTimer}>
                    {recordTime}
                  </Text>
                  <Images.IconRecordStopGradation.default style={styles.iconRecordGradation}/>
                  <TouchableOpacity onPress={handleRecord} style={styles.iconRecord}>
                    <Images.IconRecordStop.default />
                  </TouchableOpacity>
                </View>
              )}

              {dataState.send && (
                <View>
                  <Text style={styles.textTimer}>
                    {showPlayTimeAndDuration
                      ? playTime
                      : recordTime}
                  </Text>
                  <Images.IconRecordSendGradation.default style={styles.iconRecordGradation}/>
                  <View style={styles.containerSend}>
                    <TouchableOpacity onPress={handlePlayRecord} style={styles.iconRecord}>
                      <icon.default />
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

              {dataState.sent && (
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
  user : PropTypes.object,
  data : PropTypes.object,
  loading : PropTypes.bool,
  isVisible : PropTypes.bool,
  renderItem : PropTypes.object,
  backdropPress : PropTypes.func,
  backButtonPress : PropTypes.func,
  hideButtonClose : PropTypes.bool,
  containerStyle : PropTypes.object,
}


export default ModalRecord