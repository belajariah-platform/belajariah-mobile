import React from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'
import { Avatar } from 'react-native-elements'
// import Slider from '@react-native-community/slider'

// import TrackPlayer, {
//   TrackPlayerEvents,
//   STATE_PLAYING,
// } from 'react-native-track-player'
// import {
//   useTrackPlayerProgress,
//   useTrackPlayerEvents,
// } from 'react-native-track-player/lib/hooks'
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native'

import { styles } from './chat.style'
import { Images } from '../../assets'

const Chat = ({ item, openModalRating, openModalPhoto }) => {
  const user_login = 1
  let flexes, containerSound, grafisVoice,
    play, avatar, textTimer, flexDir, text1, text2
  user_login == item.user_code ?
    (
      flexDir = styles.row,
      flexes = styles.flexEnd,
      text1 = styles.textPurple,
      text2 = styles.textWhite,
      avatar = styles.avatarEnd,
      textTimer = styles.textWhite,
      play = Images.IconPlayVoiceWhite,
      grafisVoice = Images.GrafisVoiceWhite,
      containerSound = styles.containerSoundStart
    ) : (
      flexDir = styles.column,
      play = Images.IconPlay,
      flexes = styles.flexStart,
      avatar = styles.avatarStart,
      textTimer = styles.textBlack,
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
      style={[styles.containerChat, flexes]}>
      <View style={containerSound}>
        <View style={flexDir}>
          {user_login == item.user_code ? (
            <Avatar
              onPress={openModalPhoto}
              containerStyle={styles.avatarStart}
              source={ Images.ImageProfileDefault}
              avatarStyle={styles.avatarChatInstructor}
            />
          ) : (
            <View>
              <Text style={[styles.textDesc, { textAlign : 'right' }]}>
                {item.username}
              </Text>
            </View>
          )}
          <View style={styles.flexRow}>
            <TouchableOpacity
              onPress={() => console.log('ok')}>
              <play.default
                width={20}
                height={20}
              />
            </TouchableOpacity>
            <grafisVoice.default style={styles.horizontal}/>
            <Text style={[styles.textSoundDuration, textTimer]}>
              2:00
            </Text>
          </View>
        </View>
        {user_login != item.user_code &&(
          <Avatar
            containerStyle={avatar}
            onPress={openModalPhoto}
            source={ Images.ImageProfileDefault}
            avatarStyle={styles.avatarChatInstructor}
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
          { user_login != item.user_code &&(
            <TouchableOpacity
              activeOpacity={0.2}
              onPress={() => openModalRating(true)}>
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

Chat.propTypes = {
  item : PropTypes.object,
  openModalPhoto : PropTypes.func,
  openModalRating : PropTypes.func
}

export default Chat