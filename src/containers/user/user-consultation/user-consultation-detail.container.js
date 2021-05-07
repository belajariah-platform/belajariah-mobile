import PropTypes from 'prop-types'
import { useFormik } from 'formik'
import RNFetchBlob from 'rn-fetch-blob'
import { Text } from '@ui-kitten/components'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import AudioRecorderPlayer from 'react-native-audio-recorder-player'
import {
  View,
  Platform,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import {
  Chat,
  ImageView,
  ModalRating,
  ButtonGradient,
} from '../../../components'

import { Images } from '../../../assets'
import chat from '../../../json/chat.js'
import styles from './user-consultation.style'

const audioRecorderPlayer = new AudioRecorderPlayer()

const ConsultationDetail = ({ route }) => {
  const param = route.params
  const navigation = useNavigation()

  const [isModalFotoVisible, setModalFotoVisible] = useState(false)
  const [modalRatingVisible, setModalRatingVisible] = useState(false)

  const toggleModalFoto = () => setModalFotoVisible(!isModalFotoVisible)
  const toggleModalRating = () => setModalRatingVisible(!modalRatingVisible)
  const modalStr = 'Bagaimana penilaian terkait koreksi bacaan oleh ustadz atau ustdzah ini ?'

  // const [loading, setLoading] = useState(true)
  // const [loadingBtn, setLoadingBtn] = useState(false)
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
      message: '',
      voice_note : '',
      duration : 0,
    },
    onSubmit:  (values, form) => {
      console.log(values)
      handleReload()
      form.resetForm()
      form.setSubmitting(false)
    },
  })

  const onSetInput = async (v, e) => {
    await FormSendMessage.setFieldValue(v, e)
    await FormSendMessage.values['message'].length > 0 ?
      setDataState(s => ({
        ...s, start : false, stop : false,
        send : true, icons : Images.IconSend })) : null
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
          setDataState(s => ({
            ...s, start : true, send : false, icons : Images.IconVoiceRecord })),
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

  const Header = () => {
    return (
      <View style={styles.containerHeader}>
        <View style={styles.flexHeader}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Images.ButtonBack.default style={styles.iconBack} />
          </TouchableOpacity>
          <Text style={styles.textTitleWhite}>{param.classes.Class_Initial}</Text>
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
          value={FormSendMessage.values['message']}
          onChangeText={(e) => onSetInput('message', e)}>
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
      <Chat state={chat}/>
      {VoiceBar()}
      {Footer()}
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
