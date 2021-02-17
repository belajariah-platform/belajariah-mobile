import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { List, RadioButton } from 'react-native-paper'
import { useNavigation, useRoute } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Text, View, ScrollView } from 'react-native'

import { FontType, Images } from '../../../assets'
import ClassLearningPDF from './class_learning-pdf.container'
import { ButtonGradient, TextView, ModalInfo, ModalRating, VideoPlayer, Buttons } from '../../../components'

import { styles } from '../class-learning/class-learning.style'
import { Alert } from 'react-native'
import { Color } from '../../../assets'
import { Image } from 'react-native'

const ClassLearning = () => {
  const route = useRoute()
  const navigation = useNavigation()
  const [viewPdf, setViewPdf] = useState(false)
  const [sourcePdf, setSourcePdf] = useState({})
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [modalRatingVisible, setModalRatingVisible] = useState(false)
  const [modalChecklistVisible, setModalChecklistVisible] = useState(false)
  const [firstChecklist, setFirstChecklist] = useState(false)
  const [secondChecklist, setSecondChecklist] = useState(false)

  const toggleModalRating = () => setModalRatingVisible(!modalRatingVisible)
  const toggleModalChecklist = () => setModalChecklistVisible(!modalChecklistVisible)

  const state = {
    rating : 4.7,
    total_user : 1500,
    title : 'Belajar Al-Qur/an dari dasar dengan metode yang mudah dan menyenangkan',
    description : 'Belajar Tahsin dengan ustadz dan ustadzah lorem ipsum dolor sit amet, lorem veriseyum not beijer sit amet. tesset lorem ipsum berusit, lorem veriseyum not beijer sit amet tesset lorem ipsum berusit|lorem veriseyum not beijer sit amet tesset lorem ipsum berusit lorem veriseyum not beijer sit amet. tesset lorem ipsum berusit tesset lorem ipsum berusit lorem veriseyum not beijer sit amet. tesset lorem ipsum berusit',
    materialCount : 12,
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

  let { passPreExam } = route.params ?? {}
  let { passPostExam } = route.params ?? {}
  const [progress, setProgress] = useState(0)
  const [playIndex, setPlayIndex] = useState(0)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [playSubIndex, setPlaySubIndex] = useState(0)
  const [currentSubIndex, setCurrentSubIndex] = useState(0)
  const [isPostExamLocked, setIsPostExamLocked] = useState(true)
  let percentage = Number(progress /  state.materialCount * 100).toFixed(1)

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

  const handleModalChecklist = () => {
    setModalChecklistVisible(true)
  }

  const handleVideoEnd = (index, subIndex) => {
    handleModalChecklist()
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
        <View style={styles.containerTextTitle} >
          <Text style={[styles.textTitle, { width: '82%' }]}>{state.title}</Text>
          <TouchableOpacity onPress={handleModalChecklist} style={styles.containerIconChecklist}>
            <Images.IconChecklistLearning.default />
          </TouchableOpacity>
        </View>
        <Text style={styles.containerTextCategory}>#Populer Class</Text>
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
    const playVideo = (index, subIndex) => {
      if(passPreExam) {
        if(index > currentIndex) {
          Alert.alert('Materi belum dibuka, silahkan tonton materi pada topik sebelumnya dulu ya')
        } else if(index < currentIndex) {
          setPlayIndex(index)
          setPlaySubIndex(subIndex)
        } else {
          if(subIndex > currentSubIndex) {
            Alert.alert('Materi belum dibuka, silahkan tonton materi sebelumnya dulu ya')
          } else {
            setPlayIndex(index)
            setPlaySubIndex(subIndex)
          }
        }
      } else {
        Alert.alert('Silahkan kerjakan pre-exam terlebih dahulu')
      }
    }

    const unlockNext = (index, subIndex) => {
      if(passPreExam) {
        if(index == currentIndex && subIndex == currentSubIndex) {
          let nextIndex = state.topics[currentIndex + 1]
          let nextSubIndex = state.topics[currentIndex].materials[currentSubIndex + 1]

          if(nextSubIndex == undefined) {
            if(nextIndex == undefined) {
              //end of array
              if(isPostExamLocked) {
                Alert.alert('Post exam unlocked!')
                setProgress(progress + 1)
                setIsPostExamLocked(false)
              }
            } else {
              //next index
              setProgress(progress + 1)
              setCurrentIndex(currentIndex + 1)
              setCurrentSubIndex(0)
            }
          } else {
            //next subindex
            setProgress(progress + 1)
            setCurrentSubIndex(currentSubIndex + 1)
          }
        }
      }
    }

    const getLockStatus = (index, subIndex) => {
      if(passPreExam) {
        if(index < currentIndex) {
          return false
        } else if(index > currentIndex) {
          return true
        } else {
          if(subIndex < currentSubIndex) {
            return false
          } else if(subIndex > currentSubIndex) {
            return true
          } else {
            return false
          }
        }
      } else {
        return true
      }
    }

    return (
      <View style={styles.containerMenuDetail}>
        <Text style={styles.containerTitleContent}>Konten Kelas</Text>
        <List.Section>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={()=> {
              if(passPreExam) {
                Alert.alert('Pre-exam sudah diselesaikan sebelumnya')
              } else {
                navigation.navigate('ClassExam')
              }
            }}
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
                  const isLocked = getLockStatus(index, subIndex)

                  return  (
                    <TouchableOpacity
                      key={subIndex}
                      activeOpacity={0.6}
                      onPress={() => {
                        playVideo(index, subIndex)
                        unlockNext(index, subIndex)
                      }}>
                      <List.Item
                        key={subIndex}
                        title={subtopic.subtitle}
                        style={isLocked ? [styles.containerItem, { backgroundColor: Color.disableGrey }] : styles.containerItem}
                        titleStyle={styles.textRegular}
                        left={() =>
                          isLocked ?
                            (<Images.IconLockedMaterial.default style={styles.iconPlay} />)
                            :
                            (<Images.IconPlay.default style={styles.iconPlay}/>)
                        }
                        right={() => <Text style={styles.textDuration}>{subtopic.video_duration} Menit</Text>}
                      />
                    </TouchableOpacity>
                  )
                })}
                {topic.document &&(
                  <TouchableOpacity activeOpacity={0.5}>
                    <List.Item
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

                {/* Dummy */}
                <TouchableOpacity activeOpacity={0.5}>
                  <List.Item
                    title='Dummy - Masuk ke page rekam'
                    style={styles.containerItem}
                    titleStyle={styles.textRegular}
                    onPress={() => {
                      Alert.alert('Ke page rekam')
                    }}
                    left={() => <Images.IconRecordVoice.default style={styles.iconPlay}/>}
                    right={() => <Text style={styles.textDuration}>Rekam Bacaan</Text>}
                  />
                </TouchableOpacity>

              </List.Accordion>
            )
          })}
          <TouchableOpacity activeOpacity={0.6}>
            <List.Item
              title={'Post Exam'}
              titleStyle={styles.textRegular}
              onPress={()=> {
                isPostExamLocked ?
                  Alert.alert('Silahkan selesaikan seluruh materi terlebih dahulu')
                  :
                  navigation.navigate('ClassExam')
              }}
              style={isPostExamLocked ? { ...styles.containerExam, borderTopWidth : 0, backgroundColor : Color.disableGrey } : { ...styles.containerExam, borderTopWidth : 0 }}
              right={() => <Text style={styles.textExam}>Mulai</Text>}
            />
          </TouchableOpacity>
        </List.Section>
      </View>
    )
  }

  const ChecklistClass = () => {
    return (
      <View style={styles.containerModalChecklist}>
        <View style={styles.containerModalChecklistHeader}>
          <Image source={Images.ImgChecklist}/>
          <View style={styles.containerModalTitle}>
            <Text style={styles.textModalTitle}>Yukk, Lakukan Praktek dibawah ini</Text>
            <Text style={styles.textRegular}>Dengan praktek dibawah ini akan membantu sobat Belajariah lebih cepat memahami loh...</Text>
          </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.containerModalScrollview}>

          <Image source={Images.ImgDummySoal} style={styles.imgMaterial}/>
          <Text style={styles.textRegular}>Sudahkah kamu melakukannya? <Text style={styles.textPurpleMedium}>Checklist</Text> jika sudah, dan Ayoo lakukan jika belum</Text>
          <View style={styles.containerRadioButton}>
            <RadioButton
              status={firstChecklist ? 'checked' : 'unchecked'}
              onPress={() => setFirstChecklist(!firstChecklist)}
              color={Color.purpleMedium} />
            <Text style={{ fontFamily: FontType.bold }}>Sudah</Text>
          </View>

          <Image source={Images.ImgDummySoal} style={styles.imgMaterial}/>
          <Text style={styles.textRegular}>Sudahkah kamu melakukannya? <Text style={styles.textPurpleMedium}>Checklist</Text> jika sudah, dan Ayoo lakukan jika belum</Text>
          <View style={styles.containerRadioButton}>
            <RadioButton
              status={secondChecklist ? 'checked' : 'unchecked'}
              onPress={() => setSecondChecklist(!secondChecklist)}
              color={Color.purpleMedium} />
            <Text style={{ fontFamily: FontType.bold }}>Sudah</Text>
          </View>

          <View style={styles.containerCancelSave}>
            <Buttons
              title='Batal'
              onPress={toggleModalChecklist}
              style={styles.buttonCancel}
              textStyle={{ color : 'purple' }}
            />
            <ButtonGradient
              title='Simpan'
              onPress={toggleModalChecklist}
              styles={styles.buttonSave}
            />
          </View>
        </ScrollView>
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
              isVisible={modalRatingVisible}
              backdropPress={() => toggleModalRating()}
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
                posterLink={state.topics[playIndex].materials[playSubIndex].posterLink}
                videoLink={'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'}
                iconPlaySize = {48}
                iconSkipSize = {32}
                showSkipButton={true}
                showBackButton={true}
                iconPlaySizeFullscreen = {80}
                iconSkipSizeFullscreen = {48}
                videoStyle={styles.videoStyle}
                style={styles.videoContainerStyle}
                controllerStyle={styles.controllerStyle}
                videoFullscreenStyle={styles.videoFullscreenStyle}
                fullscreenStyle={styles.videoFullscreenContainerStyle}
                onFullScreenPress={() => setIsFullscreen(!isFullscreen)}
                controllerFullscreenStyle={styles.controllerFullscreenStyle}
                onVideoEnd = { () => handleVideoEnd(playIndex, playSubIndex)}
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
      <ModalInfo
        isVisible={modalChecklistVisible}
        hideButtonClose={true}
        renderItem={ <ChecklistClass /> }
        containerStyle={{ height : '92%' }}
      />
    </>
  )
}

export default ClassLearning