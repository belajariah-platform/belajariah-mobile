import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { List } from 'react-native-paper'
import { useNavigation, useRoute } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Text, View, ScrollView } from 'react-native'

import { Images } from '../../../assets'
import ClassLearningPDF from './class_learning-pdf.container'
import { ButtonGradient, TextView, ModalRating, VideoPlayer } from '../../../components'

import { styles } from '../class-learning/class-learning.style'
import { Alert } from 'react-native'
import { Color } from '../../../assets'

const ClassLearning = () => {
  const route = useRoute()
  const navigation = useNavigation()
  const [viewPdf, setViewPdf] = useState(false)
  const [sourcePdf, setSourcePdf] = useState({})
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)

  const toggleModal = () => setModalVisible(!modalVisible)

  //update locked class logic
  const topicCount = 12
  let { passPreExam } = route.params ?? {}
  const [currentIndex, setCurrentIndex] = useState(0)
  const [progressCount, setProgressCount] = useState(1)
  const [currentSubIndex, setCurrentSubIndex] = useState(0)
  const progressPercentage = Number(progressCount / topicCount * 100).toFixed(1)

  const state = {
    rating : 4.7,
    total_user : 1500,
    title : 'Belajar Al-Qur/an dari dasar dengan metode yang mudah dan menyenangkan',
    description : 'Belajar Tahsin dengan ustadz dan ustadzah lorem ipsum dolor sit amet, lorem veriseyum not beijer sit amet. tesset lorem ipsum berusit, lorem veriseyum not beijer sit amet tesset lorem ipsum berusit|lorem veriseyum not beijer sit amet tesset lorem ipsum berusit lorem veriseyum not beijer sit amet. tesset lorem ipsum berusit tesset lorem ipsum berusit lorem veriseyum not beijer sit amet. tesset lorem ipsum berusit',
    preExamDone : passPreExam,
    topics: [
      {
        title: 'Huruf Hijaiyah, Makhraj dan shifathul huruf',
        materials: [
          { subtitle : 'Dasar Hijaiyah', video_duration : 10, posterLink : 'https://i.ibb.co/X24cBK9/Screenshot-1.jpg' },
          { subtitle: 'Dasar Makhraj', video_duration : 8, posterLink : 'https://i.ibb.co/Gv3zpmK/Screenshot-2.jpg' },
          { subtitle : 'Shifathul Huruf', video_duration : 12, posterLink : 'https://i.ibb.co/vLhnZtM/Screenshot-3.jpg' }],
        document : 'Dasar Hijaiyah',
        filename : 'http://www.africau.edu/images/default/sample.pdf',
        path : 'https://www.belajariah.com/document-assets/file.pdf'
      },
      {
        title: 'Harokat',
        materials: [
          { subtitle : 'Dasar Hijaiyah', video_duration : 4, posterLink : 'https://i.ibb.co/LJTsYGS/Screenshot-4.jpg' },
          { subtitle: 'Dasar Makhraj', video_duration : 5, posterLink : 'https://i.ibb.co/LJTsYGS/Screenshot-4.jpg' },
          { subtitle : 'Shifathul Huruf', video_duration : 2, posterLink : 'https://i.ibb.co/LJTsYGS/Screenshot-4.jpg' }],
        document : 'Dasar Hijaiyah',
        filename : 'http://www.africau.edu/images/default/sample.pdf',
        path : 'https://stintpdevlintaspsshared.blob.core.windows.net/port-services-static/docpdf_20201207095324.pdf'
      },
      {
        title: 'Tajwid',
        materials: [
          { subtitle : 'Dasar Hijaiyah', video_duration : 7, posterLink : 'https://i.ibb.co/LJTsYGS/Screenshot-4.jpg' },
          { subtitle: 'Dasar Makhraj', video_duration : 10, posterLink : 'https://i.ibb.co/LJTsYGS/Screenshot-4.jpg' },
          { subtitle : 'Shifathul Huruf', video_duration : 3, posterLink : 'https://i.ibb.co/LJTsYGS/Screenshot-4.jpg' }],
        document : 'Dasar Hijaiyah',
        filename : 'http://www.africau.edu/images/default/sample.pdf',
        path : 'https://stintpdevlintaspsshared.blob.core.windows.net/port-services-static/docpdf_20201207095324.pdf'
      },
      {
        title: 'Mad',
        materials: [
          { subtitle : 'Dasar Hijaiyah', video_duration : 7, posterLink : 'https://i.ibb.co/LJTsYGS/Screenshot-4.jpg' },
          { subtitle: 'Dasar Makhraj', video_duration : 7, posterLink : 'https://i.ibb.co/LJTsYGS/Screenshot-4.jpg' },
          { subtitle : 'Shifathul Huruf', video_duration : 7, posterLink : 'https://i.ibb.co/LJTsYGS/Screenshot-4.jpg' }],
      },
    ],
  }
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
        <Text>is it done? {String(state.preExamDone)}</Text>
        <View style={styles.containerParentReview}>
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
      <View style={styles.containerConsultation}>
        <View style={styles.containerMenuDesc}>
          <ButtonGradient
            end={{ x: 1, y : 1 }}
            start={{ x:0, y : 1 }}
            title='Konsultasi Bacaan'
            styles={styles.viewConsultation}
            textStyle={styles.textConsultation}
            icon={<Images.IconConsultations.default/>}
            containerStyle={styles.buttonConsultation}
            onPress={() => navigation.navigate('Consultation')}
            colors={['#7d369a', '#9a42bd', '#9a42bd', '#7d369a']}
          />
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
                {topic.materials.map((subtopic, subIndex) => {
                  const [locked, setLocked] = useState(true)

                  return  (
                    <>
                      <TouchableOpacity
                        key={subIndex}
                        activeOpacity={0.6}
                        onPress={() => {
                          let count = 0

                          if(state.preExamDone) {
                            state.topics.forEach((topicCount, i) => {
                              if(i <= index) {
                                topicCount.materials.forEach((subtopicCount, j) => {
                                  if(i < index) {
                                    count = count + 1
                                  } else {
                                    if(j <= subIndex) {
                                      count = count + 1
                                    }
                                  }
                                })
                              }
                            })
                            if(count > progressCount + 1) {
                              Alert.alert('Tonton dulu materi sebelumnya ya ' + count)
                            } else {
                              setLocked(false)
                              setProgressCount(count)
                              setCurrentIndex(index)
                              setCurrentSubIndex(subIndex)
                            }
                          } else {
                            Alert.alert('Silahkan selesaikan Pre Exam terlebih dahulu ya')
                          }
                        }}>
                        <List.Item
                          key={subIndex}
                          title={subtopic.subtitle}
                          style={locked ? [styles.containerItem, { backgroundColor: Color.disableGrey }] : styles.containerItem}
                          titleStyle={styles.textRegular}
                          left={() =>
                            locked ?
                              (<Images.IconLockedMaterial.default style={styles.iconPlay} />)
                              :
                              (<Images.IconPlay.default style={styles.iconPlay}/>)
                          }
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
          <View style={isFullscreen? styles.containerFullscreen : styles.container}>
            <ModalRating
              isVisible={modalVisible}
              backdropPress={() => toggleModal()}
              title='Berikan rating untuk koreksi bacaanmu'
              renderItem={<Text style={styles.textModal}>
                Bagaimana penilaian terkait koreksi bacaan oleh ustadz atau ustdzah ini ?
              </Text>}
            />
            <View style={styles.container}>
              <TouchableOpacity  style={styles.buttonBack}>
                <Images.ButtonBack.default/>
              </TouchableOpacity>

              <VideoPlayer
                posterLink={state.topics[currentIndex].materials[currentSubIndex].posterLink}
                videoLink={'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'}
                iconPlaySize = {48}
                iconSkipSize = {20}
                iconPlaySizeFullscreen = {80}
                iconSkipSizeFullscreen = {48}
                videoStyle={styles.videoStyle}
                style={styles.videoContainerStyle}
                controllerStyle={styles.controllerStyle}
                videoFullscreenStyle={styles.videoFullscreenStyle}
                fullscreenStyle={styles.videoFullscreenContainerStyle}
                onFullScreenPress={() => setIsFullscreen(!isFullscreen)}
                controllerFullscreenStyle={styles.controllerFullscreenStyle}
              />
            </View>
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