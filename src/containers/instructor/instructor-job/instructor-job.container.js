import React from 'react'
import moment from 'moment'
import { List } from 'react-native-paper'
import Images from '../../../assets/images'
import { Text } from '@ui-kitten/components'
import { styles } from './instructor-job.style'
import { Avatar, Card } from 'react-native-elements'
import ButtonGradient from '../../../components/button-gradient'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Alert, ScrollView, TouchableOpacity, View } from 'react-native'

const InstructorJob = () => {
  const navigation = useNavigation()
  const route = useRoute()

  let { idClass } = route.params ?? {}

  const classes = [
    {
      className: 'Kelas Tahsin',
      userQuestions: [
        {
          userName: 'Rico',
          avatar: Images.ImageProfileDefault,
          date: '16/01/2021',
          time: '16:23',
          sound: 'sound.wav',
          soundDuration: '8.12',
          desc: 'Ustadz curhat dong',
        },
        {
          userName: 'Rika',
          avatar: Images.ImageProfileDefault,
          date: '16/01/2021',
          time: '14:59',
          sound: 'sound.wav',
          soundDuration: '8.12',
          desc: 'Mau nanya nih, lagi bingung disini, cara bacanya gimana ya?',
        },
        {
          userName: 'Yudha',
          avatar: Images.ImageProfileDefault,
          date: '13/01/2021',
          time: '17:59',
          sound: 'sound.wav',
          soundDuration: '8.12',
          desc: 'Ustadz curhat dong',
        },
        {
          userName: 'Yudhi',
          avatar: Images.ImageProfileDefault,
          date: '10/01/2021',
          time: '17:59',
          sound: 'sound.wav',
          soundDuration: '8.12',
          desc: 'Ustadz curhat dong',
        },
        {
          userName: 'Yudhi',
          avatar: Images.ImageProfileDefault,
          date: '10/01/2020',
          time: '17:59',
          sound: 'sound.wav',
          soundDuration: '8.12',
          desc: 'Ustadz curhat dong',
        },
      ],
    },
    {
      className: 'Kelas Tilawah',
      userQuestions: [
        {
          userName: 'Ada',
          avatar: Images.ImageProfileDefault,
          date: '16/01/2021',
          time: '04:59',
          sound: 'sound.wav',
          soundDuration: '8.12',
          desc: 'Ustadz curhat dong',
        },
        {
          userName: 'Adi',
          avatar: Images.ImageProfileDefault,
          date: '06/01/2021',
          time: '17:59',
          sound: 'sound.wav',
          soundDuration: '8.12',
          desc: 'Ustadz curhat dong',
        },
        {
          userName: 'Aduduh',
          avatar: Images.ImageProfileDefault,
          date: '01/01/2020',
          time: '17:59',
          sound: 'sound.wav',
          soundDuration: '8.12',
          desc: 'Ustadz curhat dong',
        },
        {
          userName: 'Mantab',
          avatar: Images.ImageProfileDefault,
          date: '06/01/2010',
          time: '17:59',
          sound: 'sound.wav',
          soundDuration: '8.12',
          desc: 'Ustadz curhat dong',
        },
      ],
    },
  ]

  const Header = () => {
    return (
      <View style={styles.containerHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Images.ButtonBackBlack.default style={styles.btnBack} />
        </TouchableOpacity>
        <View style={styles.containerTitle}>
          <Text style={styles.textHeader1}>Jobs List</Text>
          <Text style={styles.textHeader2}>{classes[idClass].className}</Text>
        </View>
        <TouchableOpacity>
          <Images.IconFilterBlack.default width={18} style={styles.btnFilter} />
        </TouchableOpacity>
      </View>
    )
  }

  const CardList = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.containerScrollView}>
        {classes[idClass].userQuestions.map((question, index) => {
          const datetime = question.date + ' ' + question.time
          return (
            <Card key={index} containerStyle={styles.containerCard}>
              <View>
                <View style={styles.flexRow}>
                  <Avatar
                    source={question.avatar}
                    containerStyle={styles.avatarUser}
                  />
                  <View style={styles.containerNameSound}>
                    <Text style={styles.textUsername}>{question.userName}</Text>
                    <Text style={styles.textTime}>
                      {moment(datetime, 'DD/MM/YYYY hh:mm').fromNow()}
                      {` (${question.date})`}
                    </Text>
                  </View>
                </View>
                <View style={styles.flexRow}>
                  <TouchableOpacity>
                    <Images.IconPlayVoiceBlack.default
                      width={24}
                      height={24}
                      style={styles.iconPlayVoice}
                    />
                  </TouchableOpacity>
                  <Text style={styles.textSound}>{question.sound}</Text>
                  <Text style={styles.textSoundDuration}>
                    {question.soundDuration}
                  </Text>
                </View>
                <List.Accordion
                  title='Deskripsi Voice user'
                  titleStyle={styles.textAccordionTitle}
                  style={styles.containerAccordion}>
                  <Text style={styles.textDesc}>{question.desc}</Text>
                </List.Accordion>

                <ButtonGradient
                  title='Apply'
                  styles={styles.btnApply}
                  onPress={() => {
                    Alert.alert(
                      'Accept Job, Pop Card, and go to InstructorTask',
                    )
                    navigation.navigate('InstructorTask')
                  }}
                />
              </View>
            </Card>
          )
        })}
      </ScrollView>
    )
  }

  return (
    <View style={styles.container}>
      <Header />
      <CardList />
    </View>
  )
}

export default InstructorJob
