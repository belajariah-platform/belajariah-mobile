import PropTypes from 'prop-types'
import { useFormik } from 'formik'
import RNFetchBlob from 'rn-fetch-blob'
import { useSelector } from 'react-redux'
import { Text } from '@ui-kitten/components'
import React, { useState, useEffect } from 'react'
import TrackPlayer from 'react-native-track-player'
import { useNavigation } from '@react-navigation/native'
import AudioRecorderPlayer from 'react-native-audio-recorder-player'
import {
  View,
  Platform,
  TextInput,
  // BackHandler,
  TouchableOpacity,
} from 'react-native'
import {
  Chat,
  Alerts,
  ImageView,
  ModalRating,
  LoadingView,
  ButtonGradient,
} from '../../../components'

import { Images } from '../../../assets'
import { Response } from '../../../utils'
import { ConsultationAPI } from '../../../api'
import styles from './user-consultation.style'

const audioRecorderPlayer = new AudioRecorderPlayer()

const ConsultationDetail = ({ route }) => {
  const param = route.params
  const navigation = useNavigation()
  const { userInfo } = useSelector((state) => state.UserReducer)

  const [count, setCount] = useState(0)
  const [state, setState] = useState([])
  const [loading, setLoading] = useState(true)
  const [stateAudio, setStateAudio] = useState([])
  const [intervals, setIntervals] = useState(true)
  const [isModalFotoVisible, setModalFotoVisible] = useState(false)
  const [modalRatingVisible, setModalRatingVisible] = useState(false)
  const [dataStates] = useState({ skip: 0, take: 1000, filterString: '[]', sort : 'ASC'  })

  const toggleModalFoto = () => setModalFotoVisible(!isModalFotoVisible)
  const toggleModalRating = () => setModalRatingVisible(!modalRatingVisible)
  const modalStr = 'Bagaimana penilaian terkait koreksi bacaan oleh ustadz atau ustdzah ini ?'
  const str = '*Maaf fitur konsultasi anda telah mencapai batas silahkan lakukan perpanjangan Kelas untuk menggunakan fitur konsultasi'

  // const [connectStatus, setconnectStatus] = useState(false)
  const [dataState, setDataState] = useState({
    start : true,
    stop : false,
    send : false,
    icons : Images.IconVoiceRecord
  })

  const [audio, setAudio] = useState('')
  const [playTime, setPlayTime] = useState('')
  const [duration, setDuration] = useState('0')
  const [isPlaying, setIsPlaying] = useState(false)
  const [recordTime, setRecordTime] = useState('00:00')
  const [showPlayTimeAndDuration, setShowPlayTimeAndDuration] = useState(false)

  const FormSendMessage = useFormik({
    initialValues: {
      Taken_Code : 0,
      Description: '',
      Recording_Code : '',
      Action : 'Approved',
      Recording_Duration : 0,
      User_Code: userInfo.ID,
      Status_Code : 'ENC00000019',
      Class_Code : param.classes.Class_Code,
      Expired_Date : param.classes.Expired_Date,
    },
    onSubmit:  (values, form) => {
      state[state.length-1].User_Code == userInfo.ID ?
        Alerts(false, 'Anda bisa berkonsultasi lagi setelah ustad/ustadzah sudah membalas') :
        sendConsultation(values, form)
    },
  })

  const sendConsultation = async (values, form) => {
    try {
      setLoading(true)
      const response = await ConsultationAPI.InsertConsultation(values)
      if (response.data.result) {
        handleReload()
        form.resetForm()
        form.setSubmitting(false)
        fetchDataUserConsultation(dataStates)
        setDataState(s => ({
          ...s, start : true, send : false, icons : Images.IconVoiceRecord }))
      }
      setLoading(false)
    } catch (err) {
      setLoading(false)
      handleReload()
      form.resetForm()
      form.setSubmitting(false)
      return err
    }
  }

  const fetchDataUserConsultation = async ({ skip, take, filterString, sort }) => {
    try {
      let counts = 0
      let audios = []
      const response = await ConsultationAPI.GetAllConsultationUser(skip, take, filterString, sort)
      if (response.status === Response.SUCCESS) {
        response.data.data.map((a) => {
          if (a.Recording_Path !== '') {
            audios.push({
              id: a.ID.toString(),
              url: a.Recording_Path,
              type: 'default',
              title: 'Audio...',
            })
          } if (a.User_Code == userInfo.ID && a.Status != 'Revision') {
            counts += 1
          }
        })
        setCount(counts)
        setStateAudio(audios)
        setState(response.data.data)
      }
      setLoading(false)
    } catch (err) {
      setLoading(false)
      return err
    }
  }

  const onSetInput =  (v, e) => {
    FormSendMessage.setFieldValue(v, e)
  }

  const onStartRecord = async () => {
    const dirs = RNFetchBlob.fs.dirs
    const path = Platform.select({
      ios: 'consultation.m4a',
      android: `${dirs.CacheDir}/consultation.mp3`,
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
      ios: 'consultation.m4a',
      android: `${dirs.CacheDir}/consultation.mp3`,
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

  const onRecord = () => {
    dataState.start ? (
      setDataState(s => ({
        ...s, start : false, stop : true, icons : Images.IconChecklist })),
      onStartRecord(),
      setIsPlaying(false),
      setPlayTime(''),
      setDuration(''),
      setShowPlayTimeAndDuration(false)
    ) : (
      dataState.stop ? (
        setDataState(s => ({
          ...s, stop : false, send : true, icons : Images.IconSend })),
        onStopRecord()
      ) :
        dataState.send && (
          FormSendMessage.handleSubmit()
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
    console.log('ok')
    setDataState(s => ({
      ...s, start : true, send : false, icons : Images.IconVoiceRecord }))
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
    const delay = setTimeout(() => {
      FormSendMessage.values['Description'].length > 0 ?
        setDataState(s => ({
          ...s, start : false, stop : false,
          send : true, icons : Images.IconSend })) :
        setDataState(s => ({
          ...s, start : true, stop : false,
          send : false, icons : Images.IconVoiceRecord }))
    }, 500)
    return () => clearTimeout(delay)
  }, [FormSendMessage.values['Description']])

  useEffect(() => {
    if (intervals) {
      setLoading(true)
      fetchDataUserConsultation(dataStates)
      setIntervals(false)
    } else {
      const intervalId = setInterval(() => {
        fetchDataUserConsultation(dataStates)
      }, 10000)
      return () => clearInterval(intervalId)
    }
  }, [])

  // useEffect(() => {
  //   const backAction = () => TrackPlayer.stop()
  //   const backHandler = BackHandler.addEventListener(
  //     'hardwareBackPress',
  //     backAction
  //   )
  //   return () => backHandler.remove()
  // }, [])

  const Header = () => {
    return (
      <View style={styles.containerHeader}>
        <View style={styles.flexHeader}>
          <TouchableOpacity onPress={() => {
            navigation.goBack()
            TrackPlayer.stop()
          }}>
            <Images.ButtonBack.default style={styles.iconBack} />
          </TouchableOpacity>
          <Text style={styles.textTitleWhite}>{param.classes.Class_Initial}</Text>
          <Text style={styles.textRight}>{param.classes.Total_Consultation - count}x</Text>
        </View>
        <View style={styles.semiBox} />
      </View>
    )
  }

  const VoiceBar = () => {
    let icon
    isPlaying ? icon = Images.IconRecordPause :
      icon = Images.IconRecordPlay
    return dataState.send && audio != '' &&(
      <View style={styles.containerVoice}>
        <TouchableOpacity
          onPress={handlePlayRecord}>
          <icon.default
            width={23}
            height={23}
          />
        </TouchableOpacity>
        <Images.GrafisVoice.default style={styles.horizontal}/>
        <Text style={styles.textSoundDuration}>
          {showPlayTimeAndDuration
            ? playTime
            : recordTime}
        </Text>
        <TouchableOpacity
          style={styles.cancel}
          onPress={handleReload}>
          <Images.IconCancel.default/>
        </TouchableOpacity>
      </View>
    )
  }

  const Footer = () => {
    return (
      <View style={styles.containerTextInput}>
        <TextInput
          style={styles.textInput}
          placeholder='Ketik pesan ...'
          editable={dataState.start || dataState.send}
          value={FormSendMessage.values['Description']}
          onChangeText={(e) => onSetInput('Description', e)}>
          {dataState.stop ? (
            <Text>
              {recordTime}
            </Text>
          ) : null }
        </TextInput>
        <ButtonGradient
          onPress={onRecord}
          styles={styles.containerSend}
          icon={<dataState.icons.default/>}
        />
      </View>
    )
  }

  return (
    <View style={styles.containerMain}>
      {Header()}
      {loading ? <LoadingView/> :
        state.length != 0 ?
          <Chat state={state} audios={stateAudio}/> :
          <View style={{ flex : 1 }}/>
      }
      {param.classes.Is_Expired ||
        param.classes.Total_Consultation - count == 0 ?
        <View style={styles.containerExtend}>
          <Text style={styles.textExtend}>{str}</Text>
          <ButtonGradient
            title='Perpanjang Kelas'
            onPress={() => navigation.navigate('Home')}
            styles={styles.btnExtend}
          />
        </View> :
        <>
          {VoiceBar()}
          {Footer()}
        </>
      }
      <ModalRating
        isVisible={modalRatingVisible}
        backdropPress={() => toggleModalRating()}
        backButtonPress={() => toggleModalRating()}
        title='Berikan rating untuk koreksi bacaanmu'
        renderItem={<Text style={styles.textModal}>{modalStr}</Text>}
      />
      <ImageView
        isVisible={isModalFotoVisible}
        source={Images.ImageProfileDefault}
        setVisible={() => toggleModalFoto()}
        backButtonPress={() => toggleModalFoto()}
      />
    </View>
  )
}

ConsultationDetail.propTypes = {
  route : PropTypes.object
}

export default ConsultationDetail
