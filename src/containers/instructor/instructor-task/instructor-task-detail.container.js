import moment from 'moment'
import PropTypes from 'prop-types'
import {  useFormik } from 'formik'
import { Text } from '@ui-kitten/components'
import { Avatar } from 'react-native-elements'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import {
  View,
  Alert,
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native'

import { Images } from '../../../assets'
import { ConsultationAPI } from '../../../api'
import { ButtonGradient, ImageView } from '../../../components'
import { TimeConvert, TimerObj, Response } from '../../../utils'

import { styles } from './instructor-task-detail.style'

const InstructorTaskDetail = ({ route }) => {
  const param = route.params
  const navigation = useNavigation()

  const [states, setStates] = useState([])
  const [loading, setLoading] = useState(true)
  const [dataState] = useState({ skip: 0, take: 5, filterString: '[]' })

  const [play, setPlay] = useState(false)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] =  useState(0)
  const [record, setRecord] = useState(false)
  const [message, setMessage] = useState(false)
  const [msgSelected, setMsgSelected] = useState([])
  const [optionSelected, setOptionSelected] = useState({})
  const [isModalFotoVisible, setModalFotoVisible] = useState(false)

  const toggleModalFoto = () => setModalFotoVisible(!isModalFotoVisible)
  console.log(loading)
  const voiceDuration =  (480 - ((minutes*60) + seconds))
  const setInput = (v, e) => FormSendMessage.setFieldValue(v, e)

  const fetchDataConsultation = async ({ skip, take, filterString  }) => {
    try {
      setLoading(true)
      const response = await ConsultationAPI.GetAllConsultationMentor(skip, take, filterString )
      if (response.status === Response.SUCCESS) {
        setStates(response.data.data)
      } else {
        // NetInfo.fetch().then(res => {
        //   setconnectStatus(!res.isConnected)
        // })
      }
      setLoading(false)
    } catch (err) {
      setLoading(false)
      return err
    }
  }
  console.log(states)
  const user_login = 2

  const state = [
    { id : 1, user_code : 1, username : 'Rico Wijaya', voice_code : 1, voice_duration : 122, taken_id : 2, taken_by : 'Ust. Riki Jenifer', class_catgory : 'Tahsin', status : 'Completed', is_play : false, is_read : true, is_action_taken : true, created_date: new Date(), message : 'ustadz mau tanya dong seputar tajwid' },
    { id : 2, user_code : 2, username : 'Ust. Riki Jenifer', voice_code : 2, voice_duration : 60, taken_id : 1, taken_by : 'Ust. Riki Jenifer', class_catgory : 'Tahsin', status : 'Completed', is_play : false, is_read : true, is_action_taken : true, created_date: new Date(), message : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat' },
    { id : 3, user_code : 1, username : 'Rico Wijaya', voice_code : 3, voice_duration : 146, taken_id : 2, taken_by : 'Ust. Riki Jenifer', class_catgory : 'Tahsin', status : 'Completed', is_play : false, is_read : true, is_action_taken : true, created_date: new Date(), message : 'ustadz mau tanya dong seputar tajwid  ' },
    { id : 4, user_code : 2, username : 'Ust. Riki Jenifer', voice_code : 4, voice_duration : 80, taken_id : 1, taken_by : 'Ust. Riki Jenifer', class_catgory : 'Tahsin', status : 'Completed', is_play : false, is_read : true, is_action_taken : true, message : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat' },
    { id : 5, user_code : 1, username : 'Rico Wijaya', voice_code : 3, voice_duration : 152, taken_id : 2, taken_by : 'Ust. Riki Jenifer', class_catgory : 'Tahsin', status : 'Waiting for Response', is_play : false, is_read : false, is_action_taken : false, created_date: new Date(), message : 'ustadz mau tanya dong seputar tajwid' },
    { id : 6, user_code : 1, username : 'Rico Wijaya', voice_code : 3, voice_duration : 189, taken_id : 2, taken_by : 'Ust. Riki Jenifer', class_catgory : 'Tahsin', status : 'Waiting for Response', is_play : false, is_read : false, is_action_taken : false, created_date: new Date(), message : 'ustadz mau tanya dong seputar tajwid' },
  ]

  const FormSendMessage = useFormik({
    initialValues: {
      message: '',
      voice_note : '',
      duration : 0,
    },
    onSubmit:  (values, form) => {
      setPlay(false)
      setRecord(false)
      setMessage(false)
      form.resetForm()
      form.setSubmitting(false)
    },
  })

  const handleCancel = () => {
    setPlay(false)
    setMessage(false)
    setMinutes(TimerObj(480-1).minute)
    setSeconds(TimerObj(480-1).second)
  }

  const handlePlay = () => {
    setPlay(!play)
    setMinutes(TimerObj(FormSendMessage
      .values['duration']).minute)
    setSeconds(TimerObj(FormSendMessage
      .values['duration']).second)
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

  const handleRecord = () => {
    setPlay(false)
    setRecord(false)
    setMessage(true)
    setInput('duration', voiceDuration)
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
            setMinutes(TimerObj(FormSendMessage.values['duration']).minute)
            setSeconds(TimerObj(FormSendMessage.values['duration']).second)
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
            setMsgSelected({ ...msgSelected, is_play : false })
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
    setMinutes(TimerObj(480-1).minute)
    setSeconds(TimerObj(480-1).second)
    fetchDataConsultation(dataState)
  }, [])

  const Header = () => {
    return (
      <View style={styles.containerHeader}>
        <View style={styles.flexHeader}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Images.ButtonBackBlack.default style={styles.iconBack} />
          </TouchableOpacity>
          <Avatar
            onPress={toggleModalFoto}
            containerStyle={styles.avatarUser}
            source={Images.ImageProfileDefault}
            avatarStyle={{ borderRadius : 36 / 2 }}
          />
          <Text style={styles.textTitleBold}>{param.User_Name}</Text>
        </View>
      </View>
    )
  }

  const Message = (item, index) => {
    let icon, iconUser
    optionSelected.is_play &&
    optionSelected.id == item.id &&
    user_login != item.user_code ?
      (icon = Images.IconPause) :
      (icon =  Images.IconPlay)

    optionSelected.is_play &&
    optionSelected.id == item.id &&
    user_login == item.user_code ?
      (iconUser =  Images.IconPauseWhite) :
      (iconUser =  Images.IconPlayVoiceWhite)

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
            <View>
              <Text style={[styles.textDesc, styles.textWhite]}>{item.username}</Text>
              <View style={styles.flexRow}>
                <TouchableOpacity
                  onPress={() => handlePlayList(item)}>
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
              </View>
            </View>
          </View>
        ) : (
          <View style={styles.containerSoundEnd}>
            <TouchableOpacity
              onPress={() => handlePlayList(item)}>
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
            TimeConvert(FormSendMessage.values['duration'])
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
    FormSendMessage.values['message'].length > 0 ? (
      icons = Images.IconSend,
      submit = () => FormSendMessage.handleSubmit()) :
      message ? (icons = Images.IconSend,
      submit = () => FormSendMessage.handleSubmit()) :
        record ? (icons = Images.IconChecklist,
        submit = () => handleRecord()) :
          (icons = Images.IconVoiceRecord,
          submit = () => Alert.alert('Tahan untuk rekam'))

    return (
      <ButtonGradient
        icon={<icons.default/>}
        styles={styles.containerSend}
        onPress={submit}
        onLongPress={() =>  FormSendMessage.values['message']
          .length == 0 &&(setRecord(true))}
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
        {param.Status == 'ongoing' &&(
          <>
            <TextInput
              editable={!record}
              style={styles.textInput}
              placeholder='Ketik pesan ...'
              value={FormSendMessage.values['message']}
              onChangeText={(e) => setInput('message', e)}>
              {record ? (
                <Text>
                  {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
                </Text>
              ): null}
            </TextInput>
            <Footer/>
          </>
        )}
      </View>
      <ImageView
        isVisible={isModalFotoVisible}
        source={Images.ImageProfileDefault}
        setVisible={() => toggleModalFoto()}
        backButtonPress={() => toggleModalFoto()}
      />
    </View>
  )
}


InstructorTaskDetail.propTypes = {
  route : PropTypes.object,
}

export default InstructorTaskDetail
