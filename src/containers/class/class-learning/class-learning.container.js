import * as React from 'react'
import Video from 'react-native-video'
import { useState, useRef } from 'react'
import { List } from 'react-native-paper'
import { Text, View, ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import MediaControls, { PLAYER_STATES } from 'react-native-media-controls'

import { Images } from '../../../assets'
import { styles } from '../class-learning/class-learning.style'

const ClassLearning = () => {
  // const [expanded, setExpanded] = React.useState(true)
  // const handlePress = () => setExpanded(!expanded)
  const videoPlayer = useRef(null)
  const [duration, setDuration] = useState(0)
  const [paused, setPaused] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [currentTime, setCurrentTime] = useState(0)
  const [screenType, setScreenType] = useState('content')
  const [isFullScreen, setIsFullScreen] = useState(false)
  const [playerState, setPlayerState] = useState(PLAYER_STATES.PLAYING)

  const state = {
    rating : 4.7,
    total_user : 1500,
    title : 'Belajar Al-Qur/an dari dasar dengan metode yang mudah dan menyenangkan',
    description : 'Belajar Tahsin dengan ustadz dan ustadzah lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
    topics: [
      {
        title: 'Huruf Hijaiyah, Makhraj dan shifathul huruf',
        materials: [
          { subtitle : 'Dasar Hijaiyah', video_duration : 10 },
          { subtitle: 'Dasar Makhraj', video_duration : 8 },
          { subtitle : 'Shifathul Huruf', video_duration : 12 }],
        document : 'Dasar Hijaiyah'
      },
      {
        title: 'Harokat',
        materials: [
          { subtitle : 'Dasar Hijaiyah', video_duration : 4 },
          { subtitle: 'Dasar Makhraj', video_duration : 5 },
          { subtitle : 'Shifathul Huruf', video_duration : 2 }],
        document : 'Dasar Hijaiyah'
      },
      {
        title: 'Tajwid',
        materials: [
          { subtitle : 'Dasar Hijaiyah', video_duration : 7 },
          { subtitle: 'Dasar Makhraj', video_duration : 10 },
          { subtitle : 'Shifathul Huruf', video_duration : 3 }],
        document : 'Dasar Hijaiyah'
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

  const DescriptionClass = () => {
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
        <Text style={styles.containerTextDesc}>{state.description.substr(0, 300)}.....</Text>
        <TouchableOpacity>
          <View style={styles.containerConsul}>
            <Images.IconConsultations.default/>
            <Text style={styles.textConsul}> Konsultasi bacaan</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  const ContentClass = () => {
    return (
      <View style={styles.containerMenuDetail}>
        <Text style={styles.containerTitleContent}>Konten Kelas</Text>
        <List.Section>
          {state.topics.map((topic, index) => {
            return (
              <List.Accordion key={index} title={topic.title} titleStyle={styles.textRegular} style={styles.containerAccordion} >
                {topic.materials.map((subtopic, index) => {
                  return  (
                    <>
                      <TouchableOpacity activeOpacity={0.5}>
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
                      left={() => <Images.IconPlay.default style={styles.iconPlay}/>}
                      right={() => <Text style={styles.textDuration}>Document</Text>}
                    />
                  </TouchableOpacity>
                )}
              </List.Accordion>
            )
          })}
        </List.Section>
      </View>
    )
  }

  return (
    <>
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
        <ScrollView>
          <View style={styles.containerParentKelas}>
            <DescriptionClass/>
            <ContentClass/>
          </View>
        </ScrollView>
      </View>
    </>
  )
}

export default ClassLearning