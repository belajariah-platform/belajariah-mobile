import React, { createRef, useState } from 'react'
import {
  ScrollView,
  TouchableOpacity,
  View,
  TextInput,
  Alert,
} from 'react-native'

import moment from 'moment'
import PropTypes from 'prop-types'
import { Images } from '../../../assets'
import { List } from 'react-native-paper'
import { Text } from '@ui-kitten/components'
import { styles } from './instructor-task.style'
import { Avatar, Card } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import ButtonGradient from '../../../components/button-gradient'

const InstructorTask = () => {
  const navigation = useNavigation()

  const onGoingTask = [
    {
      idTask: 4,
      status: 'ongoing',
      name: 'Rico',
      avatar: Images.ImageProfileDefault,
      date: '17/01/2021',
      time: '16:02',
      userSound: 'sound.wav',
      userSoundDuration: '8:12',
      userDesc: 'Ustadz curhat dong',
      instructorName: 'Ustadz Maulana Al-Hafidz',
      instructorAva: Images.ImageProfileDefault,
      instructorSound: 'sound.wav',
      instructorSoundDuration: '12:15',
      instructorDesc: 'Semoga bisa dipahami, terima kasih',
      instructorDate: '18/01/2021',
      instructorTime: '21:06',
    },
    {
      idTask: 6,
      status: 'ongoing',
      name: 'Rika',
      avatar: Images.ImageProfileDefault,
      date: '17/01/2021',
      time: '16:02',
      userSound: 'sound.wav',
      userSoundDuration: '8:12',
      userDesc:
        'Selamat pagi ustadz, mau bertanya, apakah pelafalan saya seperti pada voice diatas sudah benar? terima kasih ustadz',
      instructorName: 'Ustadz Maulana Al-Hafidz',
      instructorAva: Images.ImageProfileDefault,
      instructorSound: 'sound.wav',
      instructorSoundDuration: '12:15',
      instructorDesc:
        'Jadi begini ya, nah begitu caranya. Semoga bisa dipahami dengan baik, terima kasih',
      instructorDate: '18/01/2021',
      instructorTime: '21:06',
    },
    {
      idTask: 8,
      status: 'ongoing',
      name: 'Yudha',
      avatar: Images.ImageProfileDefault,
      date: '17/01/2021',
      time: '16:02',
      userSound: 'sound.wav',
      userSoundDuration: '8:12',
      userDesc: 'Ustadz curhat dong',
      instructorName: 'Ustadz Maulana Al-Hafidz',
      instructorAva: Images.ImageProfileDefault,
      instructorSound: 'sound.wav',
      instructorSoundDuration: '12:15',
      instructorDesc: 'Semoga bisa dipahami, terima kasih',
      instructorDate: '18/01/2021',
      instructorTime: '21:06',
    },
    {
      idTask: 9,
      status: 'ongoing',
      name: 'Yudhi',
      avatar: Images.ImageProfileDefault,
      date: '17/01/2021',
      time: '16:02',
      userSound: 'sound.wav',
      userSoundDuration: '8:12',
      userDesc: 'Ustadz curhat dong',
      instructorName: 'Ustadz Maulana Al-Hafidz',
      instructorAva: Images.ImageProfileDefault,
      instructorSound: 'sound.wav',
      instructorSoundDuration: '12:15',
      instructorDesc: 'Semoga bisa dipahami, terima kasih',
      instructorDate: '18/01/2021',
      instructorTime: '21:06',
    },
  ]
  const completedTask = [
    {
      idTask: 1,
      status: 'ongoing',
      name: 'Saiki',
      avatar: Images.ImageProfileDefault,
      date: '17/01/2021',
      time: '16:02',
      userSound: 'sound.wav',
      userSoundDuration: '8:12',
      userDesc: 'Ustadz curhat dong',
      instructorName: 'Ustadz Maulana Al-Hafidz',
      instructorAva: Images.ImageProfileDefault,
      instructorSound: 'instructorSound.wav',
      instructorSoundDuration: '10:15',
      instructorDesc:
        'Jadi begini ya, nah begitu caranya, semoga bisa dipahami dengan baik',
      instructorDate: '17/01/2021',
      instructorTime: '17:05',
    },
    {
      idTask: 2,
      status: 'ongoing',
      name: 'Saiya',
      avatar: Images.ImageProfileDefault,
      date: '17/01/2021',
      time: '16:02',
      userSound: 'sound.wav',
      userSoundDuration: '8:12',
      userDesc: 'Ustadz curhat dong',
      instructorName: 'Ustadz Maulana Al-Hafidz',
      instructorAva: Images.ImageProfileDefault,
      instructorSound: 'instructorSound.wav',
      instructorSoundDuration: '10:15',
      instructorDesc:
        'Jadi begini ya, nah begitu caranya, semoga bisa dipahami dengan baik',
      instructorDate: '17/01/2021',
      instructorTime: '20:00',
    },
    {
      idTask: 3,
      status: 'ongoing',
      name: 'Hiyahiya',
      avatar: Images.ImageProfileDefault,
      date: '17/01/2021',
      time: '16:02',
      userSound: 'sound.wav',
      userSoundDuration: '8:12',
      userDesc: 'Ustadz curhat dong',
      instructorName: 'Ustadz Maulana Al-Hafidz',
      instructorAva: Images.ImageProfileDefault,
      instructorSound: 'instructorSound.wav',
      instructorSoundDuration: '10:15',
      instructorDesc:
        'Jadi begini ya, nah begitu caranya, semoga bisa dipahami dengan baik',
      instructorDate: '18/01/2021',
      instructorTime: '08:12',
    },
  ]

  const Header = () => {
    return (
      <View style={styles.containerHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Images.ButtonBackBlack.default  />
        </TouchableOpacity>
        <Text style={styles.textHeader}>My Task</Text>
      </View>
    )
  }

  const RecentJobs = () => {
    return (
      <View style={styles.containerRecentJobs}>
        <Text style={styles.textTitle}>Recent Jobs</Text>
        <Text style={styles.textSubtitle}>
          Pekerjaan yang anda ambil saat ini
        </Text>
        <View>
          {onGoingTask.map((task, index) => {
            const dateTime = task.date + ' ' + task.time
            const momentTime = moment(dateTime, 'DD/MM/YYYY hh:mm').fromNow()
            const [isPressed, setIsPressed] = useState(false)

            return (
              <List.Accordion
                key={index}
                left={() => (
                  <Avatar
                    source={task.avatar}
                    containerStyle={styles.avatarUser}
                  />
                )}
                title={task.name}
                description={`${momentTime} (${task.date})`}
                titleStyle={styles.textUsername}
                descriptionStyle={styles.textMoment}
                style={[
                  styles.containerAccordion,
                  isPressed ? { elevation: 1 } : { elevation: 0 },
                ]}
                onPress={() => {
                  setIsPressed(!isPressed)
                }}>
                <View style={styles.semiBox} />
                <Chatting task={task} />
              </List.Accordion>
            )
          })}
        </View>
      </View>
    )
  }

  const CompletedJobs = () => {
    return (
      <View style={styles.containerCompletedJobs}>
        <Text style={styles.textTitle}>Completed Jobs</Text>
        <Text style={styles.textSubtitle}>
          Semua Pekerjaan yang telah anda selesaikan
        </Text>
        <View>
          {completedTask.map((task, index) => {
            const dateTime = task.date + ' ' + task.time
            const momentTime = moment(dateTime, 'DD/MM/YYYY hh:mm').fromNow()

            return (
              <List.Accordion
                key={index}
                left={() => (
                  <Avatar
                    source={task.avatar}
                    containerStyle={styles.avatarUser}
                  />
                )}
                title={task.name}
                description={`${momentTime} (${task.date})`}
                style={styles.containerAccordion}
                titleStyle={styles.textUsername}
                descriptionStyle={styles.textMoment}
                expanded={false}
              />
            )
          })}
        </View>
      </View>
    )
  }

  const Chatting = ({ task }) => {
    const [confirmCount, setConfirmCount] = useState(0)

    return (
      <View style={styles.containerChat}>
        <ScrollView>
          <UserChatItem task={task} />
          <InstructorSoundItem
            task={task}
            confirmPress={() => {
              setConfirmCount(confirmCount + 1)
            }}
          />
          <InstructorChatItem
            task={task}
            confirmPress={() => {
              setConfirmCount(confirmCount + 1)
            }}
          />
          {confirmCount === 2 ? (
            <InstructorFullItem task={task} />
          ) : (
            <View></View>
          )}
        </ScrollView>
        <InputText />
      </View>
    )
  }

  const UserChatItem = ({ task }) => {
    const time12hourformat = moment(task.time, 'hh:mm').format('h:mm a')
    return (
      <View>
        <Card containerStyle={styles.containerUserChatItem}>
          <View style={styles.containerUserSound}>
            <TouchableOpacity>
              <Images.IconPlayVoiceBlack.default
                width={24}
                height={24}
                style={styles.btnPlayVoice}
              />
            </TouchableOpacity>
            <Text>{task.userSound}</Text>
            <Text style={styles.textSoundDuration}>
              {task.userSoundDuration}
            </Text>
            <Avatar
              source={task.avatar}
              containerStyle={styles.containerAvatarUser}
              avatarStyle={styles.avatarChatInstructor}
            />
          </View>
          <View style={styles.containerUserDesc}>
            <Text style={styles.textDesc}>Deskripsi Voice</Text>
            <Text style={styles.textUserDesc}>{task.userDesc}</Text>
            <Text style={styles.textTime}>{time12hourformat}</Text>
          </View>
        </Card>
      </View>
    )
  }

  const InstructorSoundItem = ({ task, confirmPress }) => {
    return (
      <View>
        <View style={styles.containerConfirm}>
          <TouchableOpacity>
            <Images.IconCancel.default
              width={20}
              height={20}
              style={{ marginRight: 8 }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={confirmPress}>
            <Images.IconConfirm.default width={20} height={20} />
          </TouchableOpacity>
        </View>
        <Card containerStyle={styles.containerChatInstructor}>
          <View style={styles.containerInstructorHeader}>
            <Avatar
              source={task.instructorAva}
              containerStyle={styles.avatarChatInstructor}
            />
            <View>
              <Text style={styles.textInstructorName}>
                {task.instructorName}
              </Text>
              <View style={styles.containerInstructorSound}>
                <TouchableOpacity>
                  <Images.IconPlayVoiceBlack.default
                    width={20}
                    height={20}
                    style={styles.btnPlayVoice}
                  />
                </TouchableOpacity>
                <Text style={styles.btnPlayVoiceSmall}>
                  {task.instructorSound}
                </Text>
                <Text style={styles.textSoundDuration}>
                  {task.instructorSoundDuration}
                </Text>
              </View>
            </View>
          </View>
        </Card>
      </View>
    )
  }

  const InstructorChatItem = ({ task, confirmPress }) => {
    return (
      <View>
        <View style={styles.containerConfirm}>
          <TouchableOpacity>
            <Images.IconCancel.default
              width={20}
              height={20}
              style={{ marginRight: 8 }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={confirmPress}>
            <Images.IconConfirm.default width={20} height={20} />
          </TouchableOpacity>
        </View>
        <Card containerStyle={styles.containerChatInstructor}>
          <View style={styles.containerInstructorHeader}>
            <Avatar
              source={task.instructorAva}
              containerStyle={styles.avatarChatInstructor}
            />
            <Text style={styles.textInstructorName}>{task.instructorName}</Text>
          </View>
          <View style={styles.containerInstructorDesc}>
            <Text style={styles.textDesc}>Deskripsi</Text>
            <Text style={styles.textInstructorDesc}>{task.instructorDesc}</Text>
          </View>
        </Card>
      </View>
    )
  }

  const InstructorFullItem = ({ task }) => {
    const time12hourformat = moment(task.instructorTime, 'hh:mm').format(
      'h:mm a',
    )

    return (
      <Card containerStyle={styles.containerChatInstructorFull}>
        <View style={styles.containerInstructorHeader}>
          <Avatar
            source={task.instructorAva}
            containerStyle={styles.avatarChatInstructor}
          />
          <View>
            <Text style={styles.textInstructorNameWhite}>
              {task.instructorName}
            </Text>
            <View style={styles.containerInstructorSound}>
              <TouchableOpacity>
                <Images.IconPlayVoiceWhite.default
                  width={20}
                  height={20}
                  style={styles.btnPlayVoice}
                />
              </TouchableOpacity>
              <Text style={{ color: 'white' }}>{task.instructorSound}</Text>
              <Text style={styles.textSoundDurationWhite}>
                {task.instructorSoundDuration}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.containerInstructorDesc}>
          <Text style={styles.textDescWhite}>Deskripsi Voice</Text>
          <Text style={styles.textInstructorDescWhite}>
            {task.instructorDesc}
          </Text>
          <Text style={styles.textTimeWhite}>{time12hourformat}</Text>
        </View>
      </Card>
    )
  }

  const InputText = () => {
    const [onType, setOnType] = useState(false)
    const instructorTextInput = createRef()

    return (
      <View style={styles.containerTextInput}>
        <TextInput
          ref={instructorTextInput}
          placeholder='Type message here'
          style={styles.textInput}
          onChangeText={() => setOnType(true)}
        />
        {onType ? (
          <ButtonGradient
            icon={<Images.IconSend.default width={28} height={28} />}
            styles={styles.containerSend}
            onPress={() => {
              Alert.alert('Send message')
              setOnType(false)
              instructorTextInput.current.clear()
            }}
          />
        ) : (
          <ButtonGradient
            icon={<Images.IconVoiceRecord.default width={28} height={28} />}
            styles={styles.containerSend}
            onPress={() => {
              Alert.alert('Hold to record sound')
              setOnType(false)
              instructorTextInput.current.clear()
            }}
            onLongPress={InputSound}
          />
        )}
      </View>
    )
  }

  const InputSound = () => {
    Alert.alert('Record Sound')
  }

  return (
    <View style={styles.containerMain}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <RecentJobs />
        <CompletedJobs />
      </ScrollView>
    </View>
  )
}

InstructorTask.propTypes = {
  task: PropTypes.object,
  confirmPress: PropTypes.number,
}

export default InstructorTask
