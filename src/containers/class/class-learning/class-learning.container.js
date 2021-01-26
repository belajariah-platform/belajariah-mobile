import moment from 'moment'
import * as React from 'react'
import PropTypes from 'prop-types'
import Video from 'react-native-video'
import { List } from 'react-native-paper'
import { useState, useRef, createRef } from 'react'
import { Avatar, Card } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Text, View, ScrollView, Alert, TextInput } from 'react-native'
import MediaControls, { PLAYER_STATES } from 'react-native-media-controls'

import { Images } from '../../../assets'
import ClassLearningPDF from './class_learning-pdf.container'
import { ButtonGradient, TextView, ModalRating } from '../../../components'

import { styles } from '../class-learning/class-learning.style'

const ClassLearning = () => {
  const navigation = useNavigation()
  // const [expanded, setExpanded] = React.useState(true)
  // const handlePress = () => setExpanded(!expanded)
  const videoPlayer = useRef(null)
  const [duration, setDuration] = useState(0)
  const [paused, setPaused] = useState(false)
  const [viewPdf, setViewPdf] = useState(false)
  const [sourcePdf, setSourcePdf] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [currentTime, setCurrentTime] = useState(0)
  const [screenType, setScreenType] = useState('content')
  const [modalVisible, setModalVisible] = useState(false)
  const [isFullScreen, setIsFullScreen] = useState(false)
  const [playerState, setPlayerState] = useState(PLAYER_STATES.PLAYING)

  const toggleModal = () => setModalVisible(!modalVisible)

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
  ]

  const state = {
    rating : 4.7,
    total_user : 1500,
    title : 'Belajar Al-Qur/an dari dasar dengan metode yang mudah dan menyenangkan',
    description : 'Belajar Tahsin dengan ustadz dan ustadzah lorem ipsum dolor sit amet, lorem veriseyum not beijer sit amet. tesset lorem ipsum berusit, lorem veriseyum not beijer sit amet tesset lorem ipsum berusit|lorem veriseyum not beijer sit amet tesset lorem ipsum berusit lorem veriseyum not beijer sit amet. tesset lorem ipsum berusit tesset lorem ipsum berusit lorem veriseyum not beijer sit amet. tesset lorem ipsum berusit',
    topics: [
      {
        title: 'Huruf Hijaiyah, Makhraj dan shifathul huruf',
        materials: [
          { subtitle : 'Dasar Hijaiyah', video_duration : 10 },
          { subtitle: 'Dasar Makhraj', video_duration : 8 },
          { subtitle : 'Shifathul Huruf', video_duration : 12 }],
        document : 'Dasar Hijaiyah',
        filename : 'http://www.africau.edu/images/default/sample.pdf',
        path : 'https://www.belajariah.com/document-assets/file.pdf'
      },
      {
        title: 'Harokat',
        materials: [
          { subtitle : 'Dasar Hijaiyah', video_duration : 4 },
          { subtitle: 'Dasar Makhraj', video_duration : 5 },
          { subtitle : 'Shifathul Huruf', video_duration : 2 }],
        document : 'Dasar Hijaiyah',
        filename : 'http://www.africau.edu/images/default/sample.pdf',
        path : 'https://stintpdevlintaspsshared.blob.core.windows.net/port-services-static/docpdf_20201207095324.pdf'
      },
      {
        title: 'Tajwid',
        materials: [
          { subtitle : 'Dasar Hijaiyah', video_duration : 7 },
          { subtitle: 'Dasar Makhraj', video_duration : 10 },
          { subtitle : 'Shifathul Huruf', video_duration : 3 }],
        document : 'Dasar Hijaiyah',
        filename : 'http://www.africau.edu/images/default/sample.pdf',
        path : 'https://stintpdevlintaspsshared.blob.core.windows.net/port-services-static/docpdf_20201207095324.pdf'
      },
      {
        title: 'Mad',
        materials: [
          { subtitle : 'Dasar Hijaiyah', video_duration : 7 },
          { subtitle: 'Dasar Makhraj', video_duration : 7 },
          { subtitle : 'Shifathul Huruf', video_duration : 7 }],
      },
    ],
  }

  const onLoadStart = () => setIsLoading(true)
  const onEnd = () => setPlayerState(PLAYER_STATES.ENDED)
  const onSeek = (seek) => videoPlayer.current.seek(seek)
  const onSeeking = (currentTime) => setCurrentTime(currentTime)

  const onPaused = (playerState) => {
    setPaused(!paused)
    setPlayerState(playerState)
  }

  const onReplay = () => {
    setPlayerState(PLAYER_STATES.PLAYING)
    videoPlayer.current.seek(0)
  }

  const onProgress = (data) => {
    if (!isLoading && playerState !== PLAYER_STATES.ENDED) {
      setCurrentTime(data.currentTime)
    }
  }

  const onLoad = (data) => {
    setDuration(data.duration)
    setIsLoading(false)
  }

  const onFullScreen = () => {
    setIsFullScreen(isFullScreen)
    if (screenType == 'content') setScreenType('cover')
    else setScreenType('content')
  }

  const renderToolbar = () => (
    <View>
      <Text style={styles.toolbar}> toolbar </Text>
    </View>
  )

  const handleRating = (num) => {
    let rating = []
    const numRound = Math.round(num)
    for (let index = 1; index <= numRound; index++) {
      num - index == 0
        ? rating.push(<Images.Star.default
          style={styles.star}/>)
        : num - index < 0
          ? rating.push(<Images.StarHalfClass.default/>)
          : rating.push(<Images.StarFullClass.default
            style={styles.star} />)
    }
    return (
      <View style={{ flexDirection: 'row' }}>
        {rating.map((val, index) => {
          return <View key={index}>{val}</View>
        })}
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
          <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
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
              setOnType(false)
              Alert.alert('Send message')
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

  const DescriptionClass = () => {
    const handleSplitString = (value) => {
      const stringSplit = value.split('|')
      return (
        <>
          {stringSplit.map((val, index) => {
            return <Text key={index}>{val}.{'\n'}{'\n'}</Text>
          })}
        </>
      )
    }
    return (
      <View style={styles.containerMenuDesc}>
        <Text style={styles.containerTextTitle}>{state.title}</Text>
        <Text style={styles.containerTextCategory}>#Populer Class</Text>
        <View style={styles.containerParentReviw}>
          <View style={styles.containerReviewUser}>
            <Images.IconUserReview.default/>
            <Text style={styles.textRating}>{state.total_user/1000} K</Text>
          </View>
          <View style={styles.containerReviewUser}>
            <View style={styles.customRatingBarStyle}>
              {handleRating(state.rating)}
            </View>
            <Text style={styles.textStyle}>{state.rating}</Text>
          </View>
        </View>
        <TextView
          component={
            <Text style={styles.containerTextDesc}>
              {handleSplitString(state.description)}
            </Text>
          }
        />
      </View>
    )
  }

  const ConsultationClass = () => {
    return (
      <View style={styles.containerRecentJobs}>
        <View style={styles.containerMenuDesc}>
          {onGoingTask.map((task, index) => {
            const [isPressed, setIsPressed] = useState(false)

            return (
              <List.Accordion
                key={index}
                left={() =>  <Images.IconConsultations.default/>}
                title={'Konsultasi Bacaan'}

                titleStyle={styles.textConsul}
                descriptionStyle={styles.textMoment}
                style={[
                  styles.containerConsul,
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

  const ContentClass = () => {
    return (
      <View style={styles.containerMenuDetail}>
        <Text style={styles.containerTitleContent}>Konten Kelas</Text>
        <List.Section>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={()=> {navigation.navigate('ClassExam')}}
          >
            <List.Item
              title={'Pre Exam'}
              style={styles.containerExam}
              titleStyle={styles.textRegular}
              right={() => <Text style={styles.textExam}>Mulai</Text>}
            />
          </TouchableOpacity>
          {state.topics.map((topic, index) => {
            return (
              <List.Accordion
                key={index}
                title={topic.title}
                titleStyle={styles.textRegular}
                style={styles.containerAccordion}
              >
                {topic.materials.map((subtopic, index) => {
                  return  (
                    <>
                      <TouchableOpacity activeOpacity={0.6}>
                        <List.Item
                          key={index}
                          title={subtopic.subtitle}
                          style={styles.containerItem}
                          titleStyle={styles.textRegular}
                          left={() => <Images.IconPlay.default style={styles.iconPlay}/>}
                          right={() => <Text style={styles.textDuration}>{subtopic.video_duration} Menit</Text>}
                        />
                      </TouchableOpacity>
                    </>
                  )
                })}
                {topic.document &&(
                  <TouchableOpacity activeOpacity={0.5}>
                    <List.Item
                      key={index}
                      title={topic.document}
                      style={styles.containerItem}
                      titleStyle={styles.textRegular}
                      onPress={() => {
                        const obj = {
                          path : topic.path,
                          filename : topic.filename,
                        }
                        setViewPdf(!viewPdf)
                        setSourcePdf(obj)
                      }}
                      left={() => <Images.IconDocumentVideo.default style={styles.iconPlay}/>}
                      right={() => <Text style={styles.textDuration}>Document</Text>}
                    />
                  </TouchableOpacity>
                )}
              </List.Accordion>
            )
          })}
          <TouchableOpacity activeOpacity={0.6}>
            <List.Item
              title={'Post Exam'}
              titleStyle={styles.textRegular}
              onPress={()=> {navigation.navigate('ClassExam')}}
              style={{ ...styles.containerExam, borderTopWidth : 0 }}
              right={() => <Text style={styles.textExam}>Mulai</Text>}
            />
          </TouchableOpacity>
        </List.Section>
      </View>
    )
  }

  return (
    <>
      {viewPdf ? (
        <ClassLearningPDF
          viewPdf={viewPdf}
          source={sourcePdf}
          setViewPdf={() => {
            setSourcePdf({})
            setViewPdf(!viewPdf)
          }}
        />
      ) : (
        <>
          <ModalRating
            isVisible={modalVisible}
            backdropPress={() => toggleModal()}
            title='Berikan ratingmu untuk kelas ini'
            renderItem={  <TextInput
              multiline={true}
              numberOfLines={8}
              style={styles.textArea}/>}
          />
          <View style={styles.container}>
            <TouchableOpacity  style={styles.buttonBack}>
              <Images.ButtonBack.default/>
            </TouchableOpacity>
            <Video
              onEnd={onEnd}
              onLoad={onLoad}
              onLoadStart={onLoadStart}
              onProgress={onProgress}
              paused={paused}
              ref={videoPlayer}
              resizeMode={'screenType'}
              onFullScreen={isFullScreen}
              source={{
                uri:
                  'http://belajariah.com/assets/BELAJARIAH%20-%20Solusi%20Tepat%20Belajar%20Membaca%20Al-Quran%20dengan%20Mudah,%20Kapan%20dan%20Dimana%20Saja%20!!.mp4',
              }}
              repeat
              style={styles.mediaPlayer}
              volume={10}
            />
            <MediaControls
              duration={duration}
              isLoading={isLoading}
              mainColor='#333'
              onFullScreen={onFullScreen}
              onPaused={onPaused}
              onReplay={onReplay}
              onSeek={onSeek}
              onSeeking={onSeeking}
              playerState={playerState}
              progress={currentTime}
              toolbar={renderToolbar()}
            />
          </View>
          <View style={styles.containerView}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.containerParentKelas}>
                <DescriptionClass/>
                <ConsultationClass/>
                <ContentClass/>
              </View>
            </ScrollView>
          </View>
        </>
      )}
    </>
  )
}

ClassLearning.propTypes = {
  task: PropTypes.object,
  confirmPress: PropTypes.number,
}

export default ClassLearning