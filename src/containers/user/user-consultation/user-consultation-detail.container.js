import moment from 'moment'
import { useFormik } from 'formik'
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

import { Images } from '../../../assets'
import { TimeConvert } from '../../../utils'
import { ButtonGradient, ModalRating } from '../../../components'

import styles from './user-consultation.style'

const ConsultationDetail = () => {
  const navigation = useNavigation()
  const [modalVisible, setModalVisible] = useState(false)

  const toggleModal = () => setModalVisible(!modalVisible)

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

  const FormSendMessage = useFormik({
    initialValues: { message: '', voice_note : '' },
    onSubmit:  (values) => {
      console.log(values)
    },
  })

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

  const Message = (item, index) => {
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
              <View style={styles.flexRow}>
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
          <View style={styles.containerTime}>
            { user_login != item.user_code &&(
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text>Rating</Text>
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

  const Footer = () => {
    let icons, alert
    FormSendMessage.values['message'].length > 0 ?
      (icons = Images.IconSend, alert = 'Send message') :
      (icons = Images.IconVoiceRecord, alert = 'Hold to record')

    return (
      <ButtonGradient
        icon={<icons.default/>}
        styles={styles.containerSend}
        onPress={() => Alert.alert(alert)}
        onLongPress={() =>  FormSendMessage.values['message']
          .length == 0 &&(Alert.alert('Record'))}
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
      <View style={styles.containerTextInput}>
        <TextInput
          style={styles.textInput}
          placeholder='Type message here'
          onChangeText={(e) => FormSendMessage
            .setFieldValue('message', e)}
        />
        <Footer/>
      </View>
      <ModalRating
        isVisible={modalVisible}
        backdropPress={() => toggleModal()}
        title='Berikan rating untuk koreksi bacaanmu'
        renderItem={<Text style={styles.textModal}>
                Bagaimana penilaian terkait koreksi bacaan oleh ustadz atau ustdzah ini ?
        </Text>}
      />
    </View>
  )
}

export default ConsultationDetail
