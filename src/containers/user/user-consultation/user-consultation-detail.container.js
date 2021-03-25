import moment from 'moment'
import PropTypes from 'prop-types'
import {  useFormik } from 'formik'
import Sound from 'react-native-sound'
import { useSelector } from 'react-redux'
import { Text } from '@ui-kitten/components'
import { Avatar } from 'react-native-elements'
import AudioRecord from 'react-native-audio-record'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import {
  View,
  Alert,
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native'

import {
  Alerts,
  ImageView,
  ModalRating,
  ButtonGradient,
} from '../../../components'
import {
  TimerObj,
  Response,
  VoiceNote,
  TimeConvert,
} from '../../../utils'

import { Images } from '../../../assets'
import { ConsultationAPI, RatingAPI } from '../../../api'
import styles from './user-consultation.style'

const ConsultationDetail = ({ route }) => {
  const param = route.params
  const navigation = useNavigation()
  const [dataObj, setDataObj] = useState({})
  const { userInfo } = useSelector((state) => state.UserReducer)

  const [states, setStates] = useState([])
  const [loading, setLoading] = useState(true)
  const [dataState] = useState({ skip: 0, take: 10, filterString: '[]' })

  const [play, setPlay] = useState(false)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] =  useState(0)
  const [record, setRecord] = useState(false)
  const [message, setMessage] = useState(false)
  const [audioFile, setAudioFile] = useState('')
  const [msgSelected, setMsgSelected] = useState([])
  const [optionSelected, setOptionSelected] = useState({})
  const [isModalFotoVisible, setModalFotoVisible] = useState(false)
  const [modalRatingVisible, setModalRatingVisible] = useState(false)

  const toggleModalRating = (item) => {
    setDataObj(item)
    setModalRatingVisible(!modalRatingVisible)
  }
  const toggleModalFoto = () => setModalFotoVisible(!isModalFotoVisible)

  const voiceDuration =  (480 - ((minutes*60) + seconds))
  const setInput = (v, e) => FormSendMessage.setFieldValue(v, e)
  const modalStr = 'Bagaimana penilaian terkait koreksi bacaan oleh ustadz atau ustdzah ini ?'

  const user_login = 1
  const state = [
    { id : 1, user_code : 1, username : 'Rico Wijaya', voice_code : 1, voice_duration : 122, taken_id : 2, taken_by : 'Ust. Riki Jenifer', class_catgory : 'Tahsin', status : 'Completed', is_play : false, is_read : true, is_action_taken : true, created_date: new Date(), message : 'ustadz mau tanya dong seputar tajwid', Recording_Name : 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' },
    { id : 2, user_code : 2, username : 'Ust. Riki Jenifer', voice_code : 2, voice_duration : 60, taken_id : 1, taken_by : 'Ust. Riki Jenifer', class_catgory : 'Tahsin', status : 'Completed', is_play : false, is_read : true, is_action_taken : true, created_date: new Date(), message : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',  Recording_Name : '' },
    { id : 3, user_code : 1, username : 'Rico Wijaya', voice_code : 3, voice_duration : 146, taken_id : 2, taken_by : 'Ust. Riki Jenifer', class_catgory : 'Tahsin', status : 'Completed', is_play : false, is_read : true, is_action_taken : true, created_date: new Date(), message : 'ustadz mau tanya dong seputar tajwid',  Recording_Name : 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' },
    { id : 4, user_code : 2, username : 'Ust. Riki Jenifer', voice_code : 4, voice_duration : 80, taken_id : 1, taken_by : 'Ust. Riki Jenifer', class_catgory : 'Tahsin', status : 'Completed', is_play : false, is_read : true, is_action_taken : true, message : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',  Recording_Name : '' },
    { id : 5, user_code : 1, username : 'Rico Wijaya', voice_code : 3, voice_duration : 152, taken_id : 2, taken_by : 'Ust. Riki Jenifer', class_catgory : 'Tahsin', status : 'Waiting for Response', is_play : false, is_read : false, is_action_taken : false, created_date: new Date(), message : 'ustadz mau tanya dong seputar tajwid',  Recording_Name : '' },
    { id : 6, user_code : 1, username : 'Rico Wijaya', voice_code : 3, voice_duration : 189, taken_id : 2, taken_by : 'Ust. Riki Jenifer', class_catgory : 'Tahsin', status : 'Waiting for Response', is_play : false, is_read : false, is_action_taken : false, created_date: new Date(), message : 'ustadz mau tanya dong seputar tajwid',  Recording_Name : 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' },
  ]

  const fetchDataConsultation = async ({ skip, take, filterString }) => {
    try {
      setLoading(true)
      const response = await ConsultationAPI.GetAllConsultationUser(skip, take, filterString)
      if (response.status === Response.SUCCESS) {
        setStates(response.data.data)
        setLoading(false)
      }
    } catch (err) {
      setLoading(false)
      return err
    }
  }

  const FormSendMessage = useFormik({
    initialValues: {
      Taken_Code : 0,
      Description : '',
      Recording_Code : 0,
      Action : 'Approved',
      Recording_Duration : 0,
      User_Code : userInfo.ID,
      Status_Code : 'ENC00000020',
      Class_Code : param.Class_Code,
      Expired_Date : param.Expired_Date,
    },
    onSubmit: async (values, form) => {
      const response =  await ConsultationAPI.GetAllConsultationSpamUser(values)
      if (response.data.count >= 2) {
        Alerts(false, 'Pesan kamu sudah melebihi batas')
      } else {
        const res = await ConsultationAPI.InsertConsultation(values)
        if (res.data.result) {
          form.setSubmitting(false)
          form.resetForm()
          setMessage(false)
          setAudioFile([])
          setRecord(false)
          setPlay(false)
        }
      }
    },
  })

  const giveRatingMentor = async (rating) => {
    const values = {
      Comment : '',
      Rating : rating,
      User_Code : dataObj.Taken_Code,
      Mentor_Code : dataObj.User_Code,
    }
    try {
      const response = await RatingAPI.InsertRatingMentor(values)
      if (response.data.result) {
        Alerts(true, 'Terimakasih telah memberikan review')
      }
    } catch (err) {
      return err
    }
  }

  useEffect(() => {
    let sound = null
    let music = null
    sound
    music
  }, [])

  const StartRecord = () => {
    AudioRecord.start()
  }

  const PauseRecord = () => {
    sound.pause()
  }

  const StartPathRecord = (musicUrl) => {
    console.log(musicUrl)
    music = new Sound(musicUrl, Sound.MAIN_BUNDLE, (e) => {
      if (e) {
        console.log('error loading track:', e)
      } else {
        music.play()
      }
    })
  }

  const StopPathRecord = () => {
    music.stop()
  }

  const loadRecord = () => {
    return new Promise((resolve, reject) => {
      if (!audioFile) {
        const reason = 'File path is empty !'
        return reject(reason)
      }

      sound = new Sound(audioFile, '', error => {
        if (error) {
          console.log('failed to load the file', error)
          return reject(error)
        }
        return resolve()
      })
    })
  }

  const ReplayRecord = async () => {
    try {
      await loadRecord()
    } catch (error) {
      console.log(error)
    }
    Sound.setCategory('Playback')
    try {
      sound.play(success => {
        if (success) {
          console.log('successfully finished playing')
        } else {
          console.log('playback failed due to audio decoding errors')
        }
      })
    } catch (error) {
      console.log('ERROR =>', error)
    }
  }

  const handleCancel = () => {
    sound.stop()
    setPlay(false)
    setAudioFile('')
    setMessage(false)
    setMinutes(TimerObj(480-1).minute)
    setSeconds(TimerObj(480-1).second)
  }

  const handlePlay = () => {
    setPlay(!play)
    setMinutes(TimerObj(FormSendMessage
      .values['Recording_Duration']).minute)
    setSeconds(TimerObj(FormSendMessage
      .values['Recording_Duration']).second)
    // if (play) {
    ReplayRecord()
    // } else {
    //   VoiceNote.PauseRecord()
    // }
  }

  const handlePlayList = (item) => {
    msgSelected.forEach((val, i) => {
      if (val.id == item.id) {
        let isPlay = [...msgSelected]
        isPlay[i] = { ...val, is_play :
        optionSelected.id == val.id &&
        optionSelected.is_play  ? false : true
        }
        setMinutes(TimerObj(val.voice_duration).minute)
        setSeconds(TimerObj(val.voice_duration).second)
        setOptionSelected(isPlay[i])
      }
    })
  }

  const handleSetRecord = async () => {
    setPlay(false)
    setRecord(false)
    setMessage(true)
    setInput('duration', voiceDuration)
    let audio = await AudioRecord.stop()
    setAudioFile(audio)
  }

  const handleRecord = () => {
    if ( FormSendMessage.values['Description']
      .length == 0) {
      setRecord(true)
      StartRecord()
    }
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (record) {
        if (seconds > 0) {
          setSeconds(seconds - 1)
        }
        if (seconds === 0) {
          if (minutes === 0) {
            setRecord(!record)
            setMessage(!message)
            clearInterval(intervalId)
          } else {
            setMinutes(minutes - 1)
            setSeconds(59)
          }
        }
      } else if (play) {
        if (seconds > 0) {
          setSeconds(seconds - 1)
        }
        if (seconds === 0) {
          if (minutes === 0) {
            setPlay(!play)
            setMinutes(TimerObj(FormSendMessage.values['Recording_Duration']).minute)
            setSeconds(TimerObj(FormSendMessage.values['Recording_Duration']).second)
            clearInterval(intervalId)
          } else {
            setMinutes(minutes - 1)
            setSeconds(59)
          }
        }
      } else if (optionSelected.is_play) {
        if (seconds > 0) {
          setSeconds(seconds - 1)
        }
        if (seconds === 0) {
          if (minutes === 0) {
            setOptionSelected({
              ...optionSelected,
              is_play : false
            })
            clearInterval(intervalId)
          } else {
            setMinutes(minutes - 1)
            setSeconds(59)
          }
        }
      }
    }, 1000)
    return () => clearInterval(intervalId)
  }, [seconds, minutes, record, play, optionSelected])

  useEffect(() => {
    setMsgSelected(state)
    fetchDataConsultation(dataState)
    setMinutes(TimerObj(480-1).minute)
    setSeconds(TimerObj(480-1).second)
    VoiceNote.AskPermissionsRecording()
  }, [])

  const Header = () => {
    return (
      <View style={styles.containerHeader}>
        <View style={styles.flexHeader}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Images.ButtonBack.default style={styles.iconBack} />
          </TouchableOpacity>
          <Text style={styles.textTitleWhite}>{param.Class_Initial}</Text>
        </View>
        <View style={styles.semiBox} />
      </View>
    )
  }

  const Message = (item, index) => {
    let icon, iconUser, playRecord
    optionSelected.is_play &&
    optionSelected.id == item.id &&
    user_login != item.user_code ?
      (icon = Images.IconPause,
      playRecord = () => StartPathRecord(item.Recording_Name)) :
      (icon =  Images.IconPlay,
      playRecord = () =>StopPathRecord())

    optionSelected.is_play &&
    optionSelected.id == item.id &&
    user_login == item.user_code ?
      (iconUser =  () =>Images.IconPauseWhite,
      playRecord = StartPathRecord(item.Recording_Name)) :
      (iconUser =  Images.IconPlayVoiceWhite,
      playRecord = () => StopPathRecord())

    return (
      <View
        key={index}
        style={[styles.containerChat,
          user_login == item.user_code ?
            styles.flexEnd : styles.flexStart]}>

        {user_login == item.user_code ? (
          <View style={styles.containerSoundStart}>
            <Avatar
              onPress={toggleModalFoto}
              containerStyle={styles.avatarStart}
              source={ Images.ImageProfileDefault}
              avatarStyle={styles.avatarChatInstructor}
            />
            {item.Recording_Name.length != 0 &&(
              <>
                <TouchableOpacity
                  onPress={() => {
                    handlePlayList(item)
                    playRecord
                  }}>
                  <iconUser.default
                    width={20}
                    height={20}
                  />
                </TouchableOpacity>
                <Images.GrafisVoiceWhite.default style={styles.horizontal}/>
                <Text style={[styles.textSoundDuration, styles.textWhite]}>
                  {optionSelected.is_play && optionSelected.id == item.id ? (
                    `${minutes}:${seconds < 10 ?
                      `0${seconds}` : seconds}`
                  ) : (
                    TimeConvert(item.voice_duration)
                  )}
                </Text>
              </>
            )}
          </View>
        ) : (
          <View style={styles.containerSoundEnd}>
            <View>
              <Text style={[styles.textDesc, { textAlign : 'right' }]}>
                {item.username}
              </Text>
              {item.Recording_Name.length != 0 && (
                <View style={styles.flexRow}>
                  <TouchableOpacity
                    onPress={() => {
                      handlePlayList(item)
                      playRecord
                    }}>
                    <icon.default
                      width={20}
                      height={20}
                    />
                  </TouchableOpacity>
                  <Images.GrafisVoice.default style={styles.horizontal}/>
                  <Text style={styles.textSoundDuration}>
                    {optionSelected.is_play && optionSelected.id == item.id ? (
                      `${minutes}:${seconds < 10 ?
                        `0${seconds}` : seconds}`
                    ) : (
                      TimeConvert(item.voice_duration)
                    )}
                  </Text>
                </View>
              )}
            </View>
            <Avatar
              onPress={toggleModalFoto}
              containerStyle={styles.avatarEnd}
              source={ Images.ImageProfileDefault}
              avatarStyle={styles.avatarChatInstructor}
            />
          </View>
        )}
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
                onPress={() => toggleModalRating(item)}>
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

  const VoiceMessage = () => {
    let icon
    play ? (icon = Images.IconPause):(icon =  Images.IconPlay)
    return message &&(
      <View style={styles.containerVoice}>
        <TouchableOpacity
          onPress={() => handlePlay()}>
          <icon.default
            width={20}
            height={20}
          />
        </TouchableOpacity>
        <Images.GrafisVoice.default style={styles.horizontal}/>
        <Text style={styles.textSoundDuration}>
          {play ? (
            `${minutes}:${seconds < 10 ?
              `0${seconds}` : seconds}`
          ) : (
            TimeConvert(FormSendMessage.values['Recording_Duration'])
          )}
        </Text>
        <TouchableOpacity
          style={styles.cancel}
          onPress={() => handleCancel()}>
          <Images.IconCancel.default/>
        </TouchableOpacity>
      </View>
    )
  }

  const Footer = () => {
    let icons, submit
    FormSendMessage.values['Description'].length > 0 ? (
      icons = Images.IconSend,
      submit = () => FormSendMessage.handleSubmit()) :
      message ? (icons = Images.IconSend,
      submit = () => FormSendMessage.handleSubmit()) :
        record ? (icons = Images.IconChecklist,
        submit = () => handleSetRecord()) :
          (icons = Images.IconVoiceRecord,
          submit = () => Alert.alert('Tahan untuk rekam'))

    return (
      <ButtonGradient
        onPress={submit}
        icon={<icons.default/>}
        styles={styles.containerSend}
        onLongPress={() => handleRecord()}
      />
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
      <VoiceMessage/>
      <View style={styles.containerTextInput}>
        <TextInput
          editable={!record}
          style={styles.textInput}
          placeholder='Ketik pesan ...'
          value={FormSendMessage.values['Description']}
          onChangeText={(e) => setInput('Description', e)}>
          {record ? (
            <Text>
              {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
            </Text>
          ): null}
        </TextInput>
        <Footer/>
      </View>
      <ModalRating
        submit={giveRatingMentor}
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
