import moment from 'moment'
import React, { useState } from 'react'
import { List } from 'react-native-paper'
import Images from '../../../assets/images'
import { Text } from '@ui-kitten/components'
import { styles } from './instructor-job.style'
import { Avatar, Card } from 'react-native-elements'
import ButtonGradient from '../../../components/button-gradient'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Alert, ScrollView, TouchableOpacity, View } from 'react-native'
import { ImageView, ModalFilterUstadz } from '../../../components'

const InstructorJob = () => {
  const route = useRoute()
  const navigation = useNavigation()
  const [isModalFotoVisible, setModalFotoVisible] = useState(false)
  const [modalFilterVisible, setModalFilterVisible] = useState(false)

  const toggleModalFoto = () => setModalFotoVisible(!isModalFotoVisible)
  const toggleModalFilter = () => setModalFilterVisible(!modalFilterVisible)

  let { idClass } = route.params ?? {}

  const state = [
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
          <Images.ButtonBackBlack.default/>
        </TouchableOpacity>
        <Text style={styles.textHeader}>{state[idClass].className}</Text>
        <TouchableOpacity onPress = {toggleModalFilter}>
          <Images.IconFilterBlack.default width={18}/>
        </TouchableOpacity>
      </View>
    )
  }

  const CardList = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.containerScrollView}>
        {state[idClass].userQuestions.map((question, index) => {
          const datetime = question.date + ' ' + question.time
          return (
            <Card key={index} containerStyle={styles.containerCard}>
              <View>
                <View style={styles.flexRow}>
                  <Avatar
                    source={question.avatar}
                    onPress={toggleModalFoto}
                    containerStyle={styles.avatarUser}
                    avatarStyle={{ borderRadius: 48 / 2 }}
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
                  title='Deskripsi konsultasi'
                  titleStyle={styles.textAccordionTitle}
                  style={styles.containerAccordion}>
                  <Text style={styles.textDesc}>{question.desc}</Text>
                </List.Accordion>

                <ButtonGradient
                  title='Ambil'
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

  const EmptyList = () => {
    return(
      <View style={styles.containerNoTask}>
        <Images.IllustrationNoTaskAvailable.default style={{ marginTop: '4%' }} />
        <Text style={styles.textNoTaskTitle}>Maaf!</Text>
        <Text style={styles.textNoTask}>Saat ini belum ada <Text style={styles.textHeader}>task</Text> yang tersediah yah</Text>
      </View>
    )
  }

  return (
    <>
      <ModalFilterUstadz
        isVisible={modalFilterVisible}
        backdropPress={() => toggleModalFilter()}
        backButtonPress={() => toggleModalFilter()}
      />
      <ImageView
        isVisible={isModalFotoVisible}
        source={Images.ImageProfileDefault}
        setVisible={() => toggleModalFoto()}
        backButtonPress={() => toggleModalFoto()}
      />
      <View style={styles.container}>
        <Header />
        {state == 0 ? <EmptyList/> : <CardList />}
      </View>
    </>
  )
}

export default InstructorJob
