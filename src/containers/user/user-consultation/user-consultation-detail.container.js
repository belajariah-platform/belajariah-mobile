import moment from 'moment'
import React, { useState } from 'react'
import { Text } from '@ui-kitten/components'
import { Avatar } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import {
  View,
  Alert,
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native'

import { TimeConvert } from '../../../utils'
import { Images } from '../../../assets'
import { ButtonGradient } from '../../../components'

import styles from './user-consultation.style'

const ConsultationDetail = () => {
  const navigation = useNavigation()
  const [onType, setOnType] = useState(false)

  // let flatList = createRef()
  const user_login = 1
  const state = [
    { user_code : 1, username : 'Rico Wijaya', voice_code : 1, voice_duration : 126, taken_id : 2, taken_by : 'Ust. Riki Jenifer', class_catgory : 'Tahsin', status : 'Completed', is_read : true, is_action_taken : true, created_date: new Date(), message : 'ustadz mau tanya dong seputar tajwid' },
    { user_code : 2, username : 'Ust. Riki Jenifer', voice_code : 2, voice_duration : 60, taken_id : 1, taken_by : 'Ust. Riki Jenifer', class_catgory : 'Tahsin', status : 'Completed', is_read : true, is_action_taken : true, created_date: new Date(), message : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat' },
    { user_code : 1, username : 'Rico Wijaya', voice_code : 3, voice_duration : 146, taken_id : 2, taken_by : 'Ust. Riki Jenifer', class_catgory : 'Tahsin', status : 'Completed', is_read : true, is_action_taken : true, created_date: new Date(), message : 'ustadz mau tanya dong seputar tajwid  ' },
    { user_code : 2, username : 'Ust. Riki Jenifer', voice_code : 4, voice_duration : 80, taken_id : 1, taken_by : 'Ust. Riki Jenifer', class_catgory : 'Tahsin', status : 'Completed', is_read : true, is_action_taken : true, message : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat' },
    { user_code : 1, username : 'Rico Wijaya', voice_code : 3, voice_duration : 146, taken_id : 2, taken_by : 'Ust. Riki Jenifer', class_catgory : 'Tahsin', status : 'Waiting for Response', is_read : false, is_action_taken : false, created_date: new Date(), message : 'ustadz mau tanya dong seputar tajwid' },
    { user_code : 1, username : 'Rico Wijaya', voice_code : 3, voice_duration : 146, taken_id : 2, taken_by : 'Ust. Riki Jenifer', class_catgory : 'Tahsin', status : 'Waiting for Response', is_read : false, is_action_taken : false, created_date: new Date(), message : 'ustadz mau tanya dong seputar tajwid' },
  ]

  const Header = () => {
    return (
      <View style={styles.containerHeader}>
        <View style={styles.flexHeader}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Images.ButtonBack.default style={styles.iconBack} />
          </TouchableOpacity>
          <Text style={styles.textTitleWhite}>Pesan Suara</Text>
        </View>
        <View style={styles.semiBox} />
      </View>
    )
  }

  const Content = (item, index) => {
    return(
      <View
        key={index}
        style={[styles.containerChat,
          user_login == item.user_code ?
            styles.flexEnd : styles.flexStart]}>
        {user_login == item.user_code ? (
          <View style={styles.containerSoundStart}>
            <Avatar
              containerStyle={styles.avatarStart}
              source={ Images.ImageProfileDefault}
              avatarStyle={styles.avatarChatInstructor}
            />
            <TouchableOpacity>
              <Images.IconPlayVoiceWhite.default
                width={20}
                height={20}
              />
            </TouchableOpacity>
            <Images.GrafisVoiceWhite.default style={styles.horizontal}/>
            <Text style={[styles.textSoundDuration, styles.textWhite]}>
              {TimeConvert(item.voice_duration)}
            </Text>
          </View>
        ) : (
          <View style={styles.containerSoundEnd}>
            <View>
              <Text style={[styles.textDesc, { textAlign : 'right' }]}>
                {item.username}
              </Text>
              <View style={{ flexDirection : 'row' }}>
                <TouchableOpacity>
                  <Images.IconPlayVoiceBlack.default
                    width={20}
                    height={20}
                  />
                </TouchableOpacity>
                <Images.GrafisVoice.default style={styles.horizontal}/>
                <Text style={styles.textSoundDuration}>
                  {TimeConvert(item.voice_duration)}
                </Text>
              </View>
            </View>
            <Avatar
              source={ Images.ImageProfileDefault}
              containerStyle={styles.avatarEnd}
              avatarStyle={styles.avatarChatInstructor}
            />
          </View>
        )}
        <View style={styles.containerUserDesc}>
          <Text style={[styles.textDesc,
            user_login == item.user_code && (styles.textPurple)]}>
            Deskripsi Voice
          </Text>
          <Text style={[styles.textUserDesc,
            user_login == item.user_code && (styles.textWhite)]}>
            {item.message}
          </Text>
          <Text style={[styles.textTime,
            user_login == item.user_code && (styles.textWhite)]}>
            {moment(item.created_date).format('h:mm A')}
          </Text>
        </View>
      </View>
    )
  }

  const Footer = () => {
    return (
      <View style={styles.containerTextInput}>
        <TextInput
          placeholder='Type message here'
          style={styles.textInput}
          onChangeText={() => setOnType(true)}
        />
        {onType ? (
          <ButtonGradient
            icon={<Images.IconSend.default width={28} height={28} />}
            styles={styles.containerSend}
            onPress={() => {
              setOnType(false)
              Alert.alert('Send message')
            }}
          />
        ) : (
          <ButtonGradient
            icon={<Images.IconVoiceRecord.default width={28} height={28} />}
            styles={styles.containerSend}
            onPress={() => {
              setOnType(false)
              Alert.alert('Hold to record sound')
            }}
            onLongPress={() => Alert.alert('Record')}
          />
        )}
      </View>
    )
  }


  return (
    <View style={styles.containerMain}>
      <Header />
      <FlatList
        data={state}
        style={{ width:'100%' }}
        // ref={ref => (flatList = ref)}
        showsVerticalScrollIndicator ={false}
        contentContainerStyle={{ paddingBottom : 50 }}
        keyExtractor={(item, index) =>  index.toString()}
        renderItem={({ item, index }) => Content(item, index)}
        // onLayout={() => flatList.scrollToEnd({ animated: true })}
        // onContentSizeChange={() =>flatList.scrollToEnd({ animated: true })}
      />
      <Footer/>
    </View>
  )
}

export default ConsultationDetail
