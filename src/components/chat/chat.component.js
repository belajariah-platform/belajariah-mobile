import moment from 'moment'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { Avatar } from 'react-native-elements'
import Slider from '@react-native-community/slider'
import NetInfo from '@react-native-community/netinfo'
import React, { useState, useEffect, useRef } from 'react'

import TrackPlayer, {
  STATE_PLAYING,
  STATE_STOPPED,
  TrackPlayerEvents,
} from 'react-native-track-player'

import {
  useTrackPlayerEvents,
  useTrackPlayerProgress,
} from 'react-native-track-player/lib/hooks'

import {
  View,
  Text,
  FlatList,
  ToastAndroid,
  TouchableOpacity,
} from 'react-native'

import {
  Loader,
  ImageView,
  ModalRating,
  ModalNoConnection,
} from '../../components'

import { styles } from './chat.style'
import { RatingAPI } from '../../api'
import { Images, Color } from '../../assets'
import { TimerSecondToTime } from '../../utils'

const Chat = ({ state, audios }) => {
  const flatlistRef = useRef()
  const { userInfo } = useSelector((state) => state.UserReducer)

  const [isTrackPlayerInit, setIsTrackPlayerInit] = useState(false)
  const [isModalFotoVisible, setModalFotoVisible] = useState(false)
  const [modalRatingVisible, setModalRatingVisible] = useState(false)

  const [stateMsg] = useState(state)
  const [mentor, setMentor] = useState(0)
  const [loading, setLoading] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [sliderValue, setSliderValue] = useState(0)
  const [isSeeking, setIsSeeking] = useState(false)
  const [optionSelected, setOptionSelected] = useState({})
  const [connectStatus, setconnectStatus] = useState(false)
  const { position, duration } = useTrackPlayerProgress(250)

  const retryConnection = () => setconnectStatus(!connectStatus)
  const toggleModalFoto = () => setModalFotoVisible(!isModalFotoVisible)
  const togglemodalNoConnection = () => setconnectStatus(!connectStatus)
  const toggleModalRating = () => setModalRatingVisible(!modalRatingVisible)
  const onScrollToEnd = () => flatlistRef.current.scrollToEnd({ animating: true })

  const modalStr = 'Bagaimana penilaian terkait koreksi bacaan oleh ustadz atau ustdzah ini ?'

  const giveRatingMentor = async (rating, mentor) => {
    const values = {
      Comment : '',
      Rating : rating,
      Mentor_Code : mentor,
      User_Code : userInfo.ID,
    }
    try {
      setLoading(true)
      const response = await RatingAPI.InsertRatingMentor(values)
      if (response.data.result) {
        setModalRatingVisible(false)
        ToastAndroid.show('Rating berhasil diberikan', ToastAndroid.SHORT)
      }
      setLoading(false)
    } catch (err) {
      setLoading(false)
      NetInfo.fetch().then(res => {
        setconnectStatus(!res.isConnected)
      })
      return err
    }
  }

  const trackPlayerInit = async () => {
    await TrackPlayer.setupPlayer()
    TrackPlayer.updateOptions({
      stopWithApp: true,
      capabilities: [
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PLAY_FROM_ID,
        TrackPlayer.CAPABILITY_PAUSE,
        TrackPlayer.CAPABILITY_JUMP_FORWARD,
        TrackPlayer.CAPABILITY_JUMP_BACKWARD,
      ],
    })
    await TrackPlayer.add(audios)
    return true
  }

  const startPlayer = async () => {
    let isInit = await trackPlayerInit()
    setIsTrackPlayerInit(isInit)
  }

  useEffect(() => {
    if (!isSeeking && position && duration) {
      setSliderValue(position / duration)
      // console.log(TimerSecondToTime(position), optionSelected.Recording_Duration)
      if (Math.floor(( Number(position) % 3600) % 60) == optionSelected.Recording_Duration) {
        TrackPlayer.stop()
        setOptionSelected({})
      }
    }
  }, [position, duration, isSeeking, optionSelected])

  useTrackPlayerEvents([TrackPlayerEvents.PLAYBACK_STATE], (event) => {
    if (event.state === STATE_PLAYING) {
      setIsPlaying(true)
    } else if (event.state === STATE_STOPPED) {
      setSliderValue(0)
      setIsPlaying(false)
    } else {
      setIsPlaying(false)
    }
  })

  const onButtonPressed = async (id) => {
    let options = {}
    stateMsg.forEach((val, i) => {
      if (val.ID == id) {
        let isPlay = [...stateMsg]
        isPlay[i] = { ...val, Is_Play :
        optionSelected.ID == val.ID &&
        optionSelected.Is_Play  ? false : true
        }
        setOptionSelected(isPlay[i])
        options = isPlay[i]
      }
    })

    if (options.Is_Play &&  options.ID == id) {
      TrackPlayer.skip(id.toString())
      TrackPlayer.play()
    } else {
      TrackPlayer.pause()
    }
  }

  const slidingStarted = () => {
    setIsSeeking(true)
  }

  const slidingCompleted = async (value, id) => {
    if (optionSelected.Is_Play && optionSelected.ID == id) {
      await TrackPlayer.seekTo(value * duration)
      setIsSeeking(false)
      setSliderValue(0)
      if (value == 1) {
        TrackPlayer.stop()
        setOptionSelected({})
      }
    }
  }

  useEffect(() => {
    setOptionSelected({})
    onScrollToEnd()
    startPlayer()
  }, [])

  const ChatList = (item, index) => {
    const user_login = userInfo.ID
    let flexes, containerSound, grafisVoice, grafisBg, title,
      play, avatar, textTimer, flexDir, text1, text2, pause, username
    user_login == item.User_Code ?
      (
        flexDir = styles.row,
        grafisBg = Color.white,
        flexes = styles.flexEnd,
        text2 = styles.textWhite,
        text1 = styles.textPurple,
        avatar = styles.avatarEnd,
        username = item.User_Name,
        textTimer = styles.textWhite,
        pause = Images.IconPauseWhite,
        play = Images.IconPlayVoiceWhite,
        grafisVoice = Color.purpleExHint,
        containerSound = styles.containerSoundStart
      ) :
      user_login != item.User_Code && item.Status == 'Completed' ? (
        play = Images.IconPlay,
        flexDir = styles.column,
        pause = Images.IconPause,
        flexes = styles.flexStart,
        username = item.User_Name,
        avatar = styles.avatarStart,
        textTimer = styles.textBlack,
        grafisBg = Color.purpleMedium,
        title = styles.textRightBlack,
        grafisVoice = Color.purpleButton,
        containerSound = styles.containerSoundEnd
      ) : (
        play = Images.IconPlay,
        flexDir = styles.column,
        text1 = styles.textWhite,
        text2 = styles.textWhite,
        pause = Images.IconPause,
        username = 'Admin Belajariah',
        avatar = styles.avatarStart,
        textTimer = styles.textWhite,
        grafisBg = Color.purpleMedium,
        flexes = styles.flexStartAdmin,
        title = styles.textRightWhite,
        grafisVoice = Color.purpleButton,
        containerSound = styles.containerSoundEnd
      )

    return (
      <View
        key={index}
        style={[styles.containerChat, flexes]}>
        <View style={containerSound}>
          <View style={flexDir}>
            {user_login == item.User_Code ? (
              <Avatar
                onPress={toggleModalFoto}
                containerStyle={styles.avatarStart}
                source={ Images.ImageProfileDefault}
                avatarStyle={styles.avatarChatInstructorEnd}
              />
            ) : (
              <View>
                <Text style={[styles.textDesc, title]}>
                  {username}
                </Text>
              </View>
            )}
            {item.Recording_Name != 0 && (
              <View style={styles.flexRow}>
                <TouchableOpacity
                  disabled={!isTrackPlayerInit}
                  onPress={() => onButtonPressed(item.ID)}>
                  {optionSelected.Is_Play && optionSelected.ID == item.ID ?
                    <pause.default
                      width={23}
                      height={23}
                    /> :
                    <play.default
                      width={23}
                      height={23}
                    />
                  }
                </TouchableOpacity>
                <Slider
                  minimumValue={0}
                  maximumValue={1}
                  value={optionSelected.ID == item.ID ? sliderValue : 0}
                  disabled={optionSelected.ID == item.ID ? false : true}
                  style={{ width: 120 }}
                  thumbTintColor={grafisVoice}
                  maximumTrackTintColor={grafisBg}
                  minimumTrackTintColor={grafisVoice}
                  onSlidingStart={() => slidingStarted()}
                  onSlidingComplete={(e) => slidingCompleted(e, item.ID)}
                />
                <Text style={[styles.textSoundDuration, textTimer]}>
                  {position && optionSelected.ID == item.ID
                    ? TimerSecondToTime(position)
                    : TimerSecondToTime(item.Recording_Duration)}
                </Text>
              </View>
            )}
          </View>
          {user_login != item.User_Code &&(
            <Avatar
              containerStyle={avatar}
              onPress={toggleModalFoto}
              source={ item.User_Image == '' ?
                Images.ImageProfileDefault :
                { uri : item.User_Image }}
              avatarStyle={styles.avatarChatInstructorStart}
            />
          )}
        </View>
        <View style={styles.containerUserDesc}>
          <Text style={[styles.textDesc, text1]}>
              Deskripsi
          </Text>
          <Text style={[styles.textUserDesc, text2]}>
            {item.Description}
          </Text>
          <View style={styles.containerTime}>
            {user_login != item.User_Code && item.Status == 'Completed' &&
            userInfo.Role == 'User' &&(
              <TouchableOpacity
                activeOpacity={0.2}
                onPress={() => {
                  toggleModalRating(true)
                  setMentor(item.User_Code)
                }}>
                <Images.IconGive.default/>
              </TouchableOpacity>
            )}
            <Text style={[styles.textTime, text2]}>
              {moment(item.Created_Date).format('h:mm A')}
            </Text>
          </View>
        </View>
      </View>
    )
  }

  return (
    <>
      <Loader loading={loading}/>
      <FlatList
        data={state}
        ref={flatlistRef}
        style={{ width:'100%' }}
        showsVerticalScrollIndicator ={false}
        contentContainerStyle={{ paddingBottom : 0 }}
        keyExtractor={(item, index) =>  index.toString()}
        renderItem={({ item, index }) => ChatList(item, index)}
      />
      <ModalRating
        isVisible={modalRatingVisible}
        backdropPress={() => toggleModalRating()}
        submit={(e) => giveRatingMentor(e, mentor)}
        backButtonPress={() => toggleModalRating()}
        title='Berikan rating untuk koreksi bacaanmu'
        renderItem={<Text style={styles.textModal}>{modalStr}</Text>}
      />
      <ModalNoConnection
        isVisible={connectStatus}
        retry={() => retryConnection()}
        backdropPress={() => togglemodalNoConnection()}
        backButtonPress={() => togglemodalNoConnection()}
      />
      <ImageView
        isVisible={isModalFotoVisible}
        source={Images.ImageProfileDefault}
        setVisible={() => toggleModalFoto()}
        backButtonPress={() => toggleModalFoto()}
      />
    </>
  )
}

Chat.propTypes = {
  state : PropTypes.array,
  audios : PropTypes.array
}

export default Chat