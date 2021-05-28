import moment from 'moment'
import PropTypes from 'prop-types'
import { List } from 'react-native-paper'
import { Card } from 'react-native-elements'
import Slider from '@react-native-community/slider'
import { useNavigation } from '@react-navigation/native'
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
  Image,
  FlatList,
  RefreshControl,
  TouchableOpacity,
} from 'react-native'

import {
  ImageView,
  ButtonGradient,
  ModalNoConnection,
} from '../../components'

import { styles } from './chat.style'
import { Images, Color } from '../../assets'
import { TimerSecondToTime } from '../../utils'

const ChatAdmin = ({ state, audios, confirm, renderFooter, onLoadMore }) => {
  const flatlistRef = useRef()
  const navigation = useNavigation()

  const [isTrackPlayerInit, setIsTrackPlayerInit] = useState(false)
  const [isModalFotoVisible, setModalFotoVisible] = useState(false)

  const [stateMsg] = useState(state)
  const [isPlaying, setIsPlaying] = useState(false)
  const [sliderValue, setSliderValue] = useState(0)
  const [isSeeking, setIsSeeking] = useState(false)
  const [optionSelected, setOptionSelected] = useState({})
  const [connectStatus, setconnectStatus] = useState(false)
  const { position, duration } = useTrackPlayerProgress(250)

  const retryConnection = () => setconnectStatus(!connectStatus)
  const toggleModalFoto = () => setModalFotoVisible(!isModalFotoVisible)
  const togglemodalNoConnection = () => setconnectStatus(!connectStatus)
  const onScrollToEnd = () => flatlistRef.current.scrollToEnd({ animating: true })

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
    return (
      <View key={index}>
        <Card containerStyle={styles.cardUser}>
          <View style={styles.ViewInstructorInfo}>
            <Image
              style={styles.avatarUser}
              source={item.User_Image == '' ?
                Images.ImageProfileDefault  : { uri :item.User_Image }}
            />
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={()=> navigation.navigate('AdminProfileAll', item)}
            >
              <Text style={styles.textUsername}>{item.User_Name}</Text>
              <Text style={styles.TxtTimeTitle}>
                {moment(item.Created_Date).format('h:mm A')} ({moment(item.Created_Date).format('L')})
              </Text>
            </TouchableOpacity>
          </View>
          {item.Recording_Path != '' ? (
            <View style={styles.containerButtonAction}>
              <View style={styles.ViewButtonAction}>
                <TouchableOpacity
                  disabled={!isTrackPlayerInit}
                  onPress={() => onButtonPressed(item.ID)}
                >
                  {optionSelected.Is_Play && optionSelected.ID == item.ID ?
                    <Images.IconPause.default
                      width={23}
                      height={23}
                    /> :
                    <Images.IconPlay.default
                      width={23}
                      height={23}
                    />
                  }
                </TouchableOpacity>
                <Slider
                  minimumValue={0}
                  maximumValue={1}
                  style={{ width: 120 }}
                  value={optionSelected.ID == item.ID ? sliderValue : 0}
                  disabled={optionSelected.ID == item.ID ? false : true}
                  thumbTintColor={Color.purpleButton}
                  maximumTrackTintColor={Color.purpleExHint}
                  minimumTrackTintColor={Color.purpleButton}
                  onSlidingStart={() => slidingStarted()}
                  onSlidingComplete={(e) => slidingCompleted(e, item.ID)}
                />
                <Text style={styles.textDuration}>
                  {position && optionSelected.ID == item.ID
                    ? TimerSecondToTime(position)
                    : TimerSecondToTime(item.Recording_Duration)}
                </Text>
              </View>
              <TouchableOpacity
                activeOpacity={0.5}
                style={{ marginRight: 5 }}>
                <Images.IconDownloadVoice.default/>
              </TouchableOpacity>
            </View>
          ) : null}
          <List.Section>
            <List.Accordion
              title='Deskripsi konsultasi'
              titleStyle={styles.textRegular}
              style={styles.containerAccordion}>
              <View>
                <Text style={styles.description}>
                  {item.Description}
                </Text>
              </View>
            </List.Accordion>
          </List.Section>
          <View style={styles.ViewButtonActionVoice}>
            <ButtonGradient
              title='Tolak'
              styles={styles.ButtonAction}
              // disabled={loadingBtn ? true : false}
              colors={['#d73c2c', '#ff6c5c', '#d73c2c']}
              onPress={() => confirm('Rejected', item)}
            />
            <ButtonGradient
              title='Terima'
              styles={styles.ButtonAction}
              // disabled={loadingBtn ? true : false}
              onPress={() => confirm('Approved', item)}
            />
          </View>
        </Card>
      </View>
    )
  }

  return (
    <>
      <FlatList
        data={state}
        ref={flatlistRef}
        style={{ width:'100%' }}
        onEndReachedThreshold={0.1}
        ListFooterComponent={renderFooter}
        onEndReached={(e) => onLoadMore(e)}
        showsVerticalScrollIndicator ={false}
        contentContainerStyle={{ paddingBottom : 0 }}
        keyExtractor={(item, index) =>  index.toString()}
        renderItem={({ item, index }) => ChatList(item, index)}
        refreshControl={<RefreshControl
          // onRefresh={onRefreshing}
        />}
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

ChatAdmin.propTypes = {
  state : PropTypes.array,
  audios : PropTypes.array,
  confirm : PropTypes.func,
  onLoadMore : PropTypes.func,
  renderFooter : PropTypes.func,

}

export default ChatAdmin