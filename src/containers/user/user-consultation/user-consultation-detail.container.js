import moment from 'moment'
import PropTypes from 'prop-types'
import {  useFormik } from 'formik'
import RNFetchBlob from 'rn-fetch-blob'
import { Text } from '@ui-kitten/components'
import { Avatar } from 'react-native-elements'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import AudioRecorderPlayer from 'react-native-audio-recorder-player'
import {
  View,
  // Alert,
  FlatList,
  Platform,
  TextInput,
  TouchableOpacity,
} from 'react-native'

import { Images } from '../../../assets'
// import { TimerObj } from '../../../utils'
import { ButtonGradient, ImageView, ModalRating } from '../../../components'

import styles from './user-consultation.style'

const audioRecorderPlayer = new AudioRecorderPlayer()

const ConsultationDetail = ({ route }) => {
  const param = route.params
  const navigation = useNavigation()

  // const [play, setPlay] = useState(false)
  // const [minutes, setMinutes] = useState(0)
  // const [seconds, setSeconds] =  useState(0)
  // const [record, setRecord] = useState(false)
  // const [message, setMessage] = useState(false)
  // const [msgSelected, setMsgSelected] = useState([])
  // const [optionSelected, setOptionSelected] = useState({})
  const [isModalFotoVisible, setModalFotoVisible] = useState(false)
  const [modalRatingVisible, setModalRatingVisible] = useState(false)

  const toggleModalFoto = () => setModalFotoVisible(!isModalFotoVisible)
  const toggleModalRating = () => setModalRatingVisible(!modalRatingVisible)

  // const voiceDuration =  (480 - ((minutes*60) + seconds))
  const modalStr = 'Bagaimana penilaian terkait koreksi bacaan oleh ustadz atau ustdzah ini ?'

  // const user_login = 1
  const state = [
    { id : 1, user_code : 1, username : 'Rico Wijaya', voice_code : 1, voice_duration : 122, taken_id : 2, taken_by : 'Ust. Riki Jenifer', class_catgory : 'Tahsin', status : 'Completed', is_play : false, is_read : true, is_action_taken : true, created_date: new Date(), message : 'ustadz mau tanya dong seputar tajwid' },
    { id : 2, user_code : 2, username : 'Ust. Riki Jenifer', voice_code : 2, voice_duration : 60, taken_id : 1, taken_by : 'Ust. Riki Jenifer', class_catgory : 'Tahsin', status : 'Completed', is_play : false, is_read : true, is_action_taken : true, created_date: new Date(), message : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat' },
    { id : 3, user_code : 1, username : 'Rico Wijaya', voice_code : 3, voice_duration : 146, taken_id : 2, taken_by : 'Ust. Riki Jenifer', class_catgory : 'Tahsin', status : 'Completed', is_play : false, is_read : true, is_action_taken : true, created_date: new Date(), message : 'ustadz mau tanya dong seputar tajwid  ' },
    { id : 4, user_code : 2, username : 'Ust. Riki Jenifer', voice_code : 4, voice_duration : 80, taken_id : 1, taken_by : 'Ust. Riki Jenifer', class_catgory : 'Tahsin', status : 'Completed', is_play : false, is_read : true, is_action_taken : true, message : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat' },
    { id : 5, user_code : 1, username : 'Rico Wijaya', voice_code : 3, voice_duration : 152, taken_id : 2, taken_by : 'Ust. Riki Jenifer', class_catgory : 'Tahsin', status : 'Waiting for Response', is_play : false, is_read : false, is_action_taken : false, created_date: new Date(), message : 'ustadz mau tanya dong seputar tajwid' },
    { id : 6, user_code : 1, username : 'Rico Wijaya', voice_code : 3, voice_duration : 189, taken_id : 2, taken_by : 'Ust. Riki Jenifer', class_catgory : 'Tahsin', status : 'Waiting for Response', is_play : false, is_read : false, is_action_taken : false, created_date: new Date(), message : 'ustadz mau tanya dong seputar tajwid' },
  ]

  // const handleCancel = () => {
  //   setPlay(false)
  //   setMessage(false)
  //   setMinutes(TimerObj(480-1).minute)
  //   setSeconds(TimerObj(480-1).second)
  // }

  // const handlePlay = () => {
  //   setPlay(!play)
  //   setMinutes(TimerObj(FormSendMessage
  //     .values['duration']).minute)
  //   setSeconds(TimerObj(FormSendMessage
  //     .values['duration']).second)
  // }

  // const handlePlayList = (item) => {
  //   msgSelected.forEach((val, i) => {
  //     if (val.id == item.id) {
  //       let isPlay = [...msgSelected]
  //       isPlay[i] = { ...val, is_play :
  //       optionSelected.id == val.id &&
  //       optionSelected.is_play  ? false : true
  //       }
  //       setMinutes(TimerObj(val.voice_duration).minute)
  //       setSeconds(TimerObj(val.voice_duration).second)
  //       setOptionSelected(isPlay[i])
  //     }
  //   })
  // }

  // const handleRecord = () => {
  //   setPlay(false)
  //   setRecord(false)
  //   setMessage(true)
  //   setInput('duration', voiceDuration)
  // }

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     if (record) {
  //       if (seconds > 0) {
  //         setSeconds(seconds - 1)
  //       }
  //       if (seconds === 0) {
  //         if (minutes === 0) {
  //           setRecord(!record)
  //           setMessage(!message)
  //           clearInterval(intervalId)
  //         } else {
  //           setMinutes(minutes - 1)
  //           setSeconds(59)
  //         }
  //       }
  //     } else if (play) {
  //       if (seconds > 0) {
  //         setSeconds(seconds - 1)
  //       }
  //       if (seconds === 0) {
  //         if (minutes === 0) {
  //           setPlay(!play)
  //           setMinutes(TimerObj(FormSendMessage.values['duration']).minute)
  //           setSeconds(TimerObj(FormSendMessage.values['duration']).second)
  //           clearInterval(intervalId)
  //         } else {
  //           setMinutes(minutes - 1)
  //           setSeconds(59)
  //         }
  //       }
  //     } else if (optionSelected.is_play) {
  //       if (seconds > 0) {
  //         setSeconds(seconds - 1)
  //       }
  //       if (seconds === 0) {
  //         if (minutes === 0) {
  //           setOptionSelected({
  //             ...optionSelected,
  //             is_play : false
  //           })
  //           clearInterval(intervalId)
  //         } else {
  //           setMinutes(minutes - 1)
  //           setSeconds(59)
  //         }
  //       }
  //     }
  //   }, 1000)
  //   return () => clearInterval(intervalId)
  // }, [seconds, minutes, record, play, optionSelected])

  // useEffect(() => {
  //   setMsgSelected(state)
  //   setMinutes(TimerObj(480-1).minute)
  //   setSeconds(TimerObj(480-1).second)
  // }, [])

  const Message = (item, index) => {
    const user_login = 1
    let flexes, containerSound, grafisVoice, play, avatar
    user_login == item.user_code ?
      (
        flexes = styles.flexEnd,
        avatar = styles.avatarEnd,
        play = Images.IconPlayVoiceWhite,
        grafisVoice = Images.GrafisVoiceWhite,
        containerSound = styles.containerSoundStart
      ) : (
        play = Images.IconPlay,
        flexes = styles.flexStart,
        avatar = styles.avatarStart,
        grafisVoice = Images.GrafisVoice,
        containerSound = styles.containerSoundEnd
      )
    // optionSelected.is_play &&
    // optionSelected.id == item.id &&
    // user_login != item.user_code ?
    //   (icon = Images.IconPause) :
    //   (icon =  Images.IconPlay)

    // optionSelected.is_play &&
    // optionSelected.id == item.id &&
    // user_login == item.user_code ?
    //   (iconUser =  Images.IconPauseWhite) :
    //   (iconUser =  Images.IconPlayVoiceWhite)

    return (
      <View
        key={index}
        style={[styles.containerChat, flexes]}>
        <View style={containerSound}>
          {user_login == item.user_code ? (
            <Avatar
              onPress={toggleModalFoto}
              containerStyle={styles.avatarStart}
              source={ Images.ImageProfileDefault}
              avatarStyle={styles.avatarChatInstructor}
            />
          ) : (
            <Text style={[styles.textDesc, { textAlign : 'right' }]}>
              {item.username}
            </Text>
          )}
          <View>
            <TouchableOpacity
              onPress={() => console.log('ok')}>
              <play.default
                width={20}
                height={20}
              />
            </TouchableOpacity>
            <grafisVoice.default style={styles.horizontal}/>
          </View>
          <Text style={[styles.textSoundDuration, styles.textWhite]}>
            {/* {optionSelected.is_play && optionSelected.id == item.id ? (
                `${minutes}:${seconds < 10 ?
                  `0${seconds}` : seconds}`
              ) : (
                TimeConvert(item.voice_duration)
              )} */}
          </Text>
          {user_login != item.user_code &&(
            <Avatar
              containerStyle={avatar}
              onPress={toggleModalFoto}
              source={ Images.ImageProfileDefault}
              avatarStyle={styles.avatarChatInstructor}
            />
          )}
        </View>
        {/* // ) : (
        //   <View style={styles.containerSoundEnd}>
        //     <View>
        //       <Text style={[styles.textDesc, { textAlign : 'right' }]}>
        //         {item.username}
        //       </Text>
        //       <View style={styles.flexRow}>
        //         <TouchableOpacity */}
        {/* //           onPress={() => console.log(item)}>
        //           <Images.IconPlay.default */}
        {/* //             width={20}
        //             height={20}
        //           />
        //         </TouchableOpacity>
        //         <Images.GrafisVoice.default style={styles.horizontal}/>
        //         <Text style={styles.textSoundDuration}>
        //           {/* {optionSelected.is_play && optionSelected.id == item.id ? (
        //             `${minutes}:${seconds < 10 ?
        //               `0${seconds}` : seconds}`
        //           ) : (
        //             TimeConvert(item.voice_duration)
        //           )} */}
        {/* //         </Text> */}
        {/* //       </View>
        //     </View>
        //     <Avatar
        //       onPress={toggleModalFoto}
        //       containerStyle={styles.avatarEnd}
        //       source={ Images.ImageProfileDefault}
        //       avatarStyle={styles.avatarChatInstructor}
        //     />
        //   </View>
        // )} */}

        <View style={styles.containerUserDesc}>
          <Text style={[styles.textDesc,
            user_login == item.user_code && (styles.textPurple)]}>
            Deskripsi
          </Text>
          <Text style={[styles.textUserDesc,
            user_login == item.user_code && (styles.textWhite)]}>
            {item.message}
          </Text>
          <View style={styles.containerTime}>
            { user_login != item.user_code &&(
              <TouchableOpacity
                activeOpacity={0.2}
                onPress={() => setModalRatingVisible(!modalRatingVisible)}>
                <Images.IconGive.default/>
              </TouchableOpacity>
            )}
            <Text style={[styles.textTime,
              user_login == item.user_code && (styles.textWhite)]}>
              {moment(item.created_date).format('h:mm A')}
            </Text>
          </View>
        </View>
      </View>
    )
  }

  //
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
      form.resetForm()
      form.setSubmitting(false)
      handleReload()
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
      <Header />
      <FlatList
        data={state}
        style={{ width:'100%' }}
        showsVerticalScrollIndicator ={false}
        contentContainerStyle={{ paddingBottom : 50 }}
        keyExtractor={(item, index) =>  index.toString()}
        renderItem={({ item, index }) => Message(item, index)}
      />
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
