import moment from 'moment'
import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react'
import { Avatar } from 'react-native-elements'
import Slider from '@react-native-community/slider'

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
  TouchableOpacity,
} from 'react-native'

import {
  ImageView,
  ModalRating,
} from '../../components'

import { styles } from './chat.style'
import { TimerSecondToTime } from '../../utils'
import { Images, Color } from '../../assets'

const Chat = ({ state }) => {
  const [isTrackPlayerInit, setIsTrackPlayerInit] = useState(false)
  const [isModalFotoVisible, setModalFotoVisible] = useState(false)
  const [modalRatingVisible, setModalRatingVisible] = useState(false)

  const [stateMsg, setStateMsg] = useState([])
  const [isPlaying, setIsPlaying] = useState(false)
  const [sliderValue, setSliderValue] = useState(0)
  const [isSeeking, setIsSeeking] = useState(false)
  const [optionSelected, setOptionSelected] = useState({})
  const { position, duration } = useTrackPlayerProgress(250)

  const toggleModalFoto = () => setModalFotoVisible(!isModalFotoVisible)
  const toggleModalRating = () => setModalRatingVisible(!modalRatingVisible)
  const modalStr = 'Bagaimana penilaian terkait koreksi bacaan oleh ustadz atau ustdzah ini ?'

  let audios = []
  state.map((a) => {
    if (a.Recording_Name !== '') {
      audios.push({
        id: a.id.toString(),
        url: a.Recording_Name,
        type: 'default',
        title: 'Audio...',
      })
    }
  })

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
      if (sliderValue.toString().substring(0, 5) == '0.997') {
        TrackPlayer.stop()
        setOptionSelected({})
      }
    }
  }, [position, duration, isSeeking])

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
      if (val.id == id) {
        let isPlay = [...stateMsg]
        isPlay[i] = { ...val, is_play :
        optionSelected.id == val.id &&
        optionSelected.is_play  ? false : true
        }
        setOptionSelected(isPlay[i])
        options = isPlay[i]
      }
    })

    if (options.is_play &&  options.id == id) {
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
    if (optionSelected.is_play && optionSelected.id == id) {
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
    setStateMsg(state)
    ,
    // if (item.Recording_Name !== '') {
    startPlayer()
    // }
  }, [])

  const ChatList = (item, index) => {
    const user_login = 1
    let flexes, containerSound, grafisVoice, grafisBg,
      play, avatar, textTimer, flexDir, text1, text2, pause
    user_login == item.user_code ?
      (
        flexDir = styles.row,
        grafisBg = Color.white,
        flexes = styles.flexEnd,
        text1 = styles.textPurple,
        text2 = styles.textWhite,
        avatar = styles.avatarEnd,
        textTimer = styles.textWhite,
        pause = Images.IconPauseWhite,
        play = Images.IconPlayVoiceWhite,
        grafisVoice = Color.purpleExHint,
        containerSound = styles.containerSoundStart
      ) : (
        play = Images.IconPlay,
        flexDir = styles.column,
        pause = Images.IconPause,
        flexes = styles.flexStart,
        avatar = styles.avatarStart,
        textTimer = styles.textBlack,
        grafisBg = Color.purpleMedium,
        grafisVoice = Color.purpleButton,
        containerSound = styles.containerSoundEnd
      )

    return (
      <View
        key={index}
        style={[styles.containerChat, flexes]}>
        <View style={containerSound}>
          <View style={flexDir}>
            {user_login == item.user_code ? (
              <Avatar
                onPress={toggleModalFoto}
                containerStyle={styles.avatarStart}
                source={ Images.ImageProfileDefault}
                avatarStyle={styles.avatarChatInstructorEnd}
              />
            ) : (
              <View>
                <Text style={[styles.textDesc, styles.textRight]}>
                  {item.username}
                </Text>
              </View>
            )}
            {item.Recording_Name != 0 && (
              <View style={styles.flexRow}>
                <TouchableOpacity
                  disabled={!isTrackPlayerInit}
                  onPress={() => onButtonPressed(item.id)}>
                  {optionSelected.is_play && optionSelected.id == item.id ?
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
                  value={optionSelected.id == item.id ? sliderValue : 0}
                  disabled={optionSelected.id == item.id ? false : true}
                  style={{ width: 120 }}
                  thumbTintColor={grafisVoice}
                  maximumTrackTintColor={grafisBg}
                  minimumTrackTintColor={grafisVoice}
                  onSlidingStart={() => slidingStarted()}
                  onSlidingComplete={(e) => slidingCompleted(e, item.id)}
                />
                <Text style={[styles.textSoundDuration, textTimer]}>
                  {position && optionSelected.id == item.id
                    ? TimerSecondToTime(position)
                    : TimerSecondToTime(item.voice_duration)}
                </Text>
              </View>
            )}
          </View>
          {user_login != item.user_code &&(
            <Avatar
              containerStyle={avatar}
              onPress={toggleModalFoto}
              source={ Images.ImageProfileDefault}
              avatarStyle={styles.avatarChatInstructorStart}
            />
          )}
        </View>
        <View style={styles.containerUserDesc}>
          <Text style={[styles.textDesc, text1]}>
              Deskripsi
          </Text>
          <Text style={[styles.textUserDesc, text2]}>
            {item.message}
          </Text>
          <View style={styles.containerTime}>
            {user_login != item.user_code &&(
              <TouchableOpacity
                activeOpacity={0.2}
                onPress={() => toggleModalRating(true)}>
                <Images.IconGive.default/>
              </TouchableOpacity>
            )}
            <Text style={[styles.textTime, text2]}>
              {moment(item.created_date).format('h:mm A')}
            </Text>
          </View>
        </View>
      </View>
    )
  }

  return (
    <>
      <FlatList
        data={state}
        style={{ width:'100%' }}
        showsVerticalScrollIndicator ={false}
        contentContainerStyle={{ paddingBottom : 0 }}
        keyExtractor={(item, index) =>  index.toString()}
        renderItem={({ item, index }) => ChatList(item, index)}
      />
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
    </>
  )
}

Chat.propTypes = {
  state : PropTypes.array,
}

export default Chat