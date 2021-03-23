import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { List, RadioButton } from 'react-native-paper'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {
  // useRoute,
  useNavigation,
} from '@react-navigation/native'

import {
  Alert,
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native'

import {
  Buttons,
  TextView,
  ModalInfo,
  ModalRating,
  LoadingView,
  ModalRecord,
  VideoPlayer,
  ButtonGradient,
} from '../../../components'
import {
  ExerciseAPI,
  LearningAPI,
  UserClassAPI,
} from '../../../api'

import { Response } from '../../../utils'
import { Color, FontType, Images } from '../../../assets'
import ClassLearningPDF from './class_learning-pdf.container'

import { styles } from '../class-learning/class-learning.style'

const ClassLearning = (props) => {
  // const route = useRoute()
  const dispatch = useDispatch()
  const item = props.route.params
  const navigation = useNavigation()
  const { detail } = useSelector((state) => state.UserClassDetailReducer)

  const [counts, setCount] = useState(0)
  const [record, setRecord] = useState({})
  const [states, setStates] = useState([])
  const [expand, setExpand] = useState([])
  const [stateExc, setStateExc] = useState([])
  const [loading, setLoading] = useState(true)
  const [viewPdf, setViewPdf] = useState(false)
  const [sourcePdf, setSourcePdf] = useState({})
  const [showTask, setShowTask] = useState(false)
  const [loadingExc, setLoadingExc] = useState(true)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [modalRatingVisible, setModalRatingVisible] = useState(false)
  const [modalRecordVisible, setModalRecordVisible] = useState(false)
  const [modalChecklistVisible, setModalChecklistVisible] = useState(false)
  const [dataState] = useState({ skip: 0, take: 1000, filter: [], filterString: '[]' })

  const obj = {
    posterTrailerLink : 'https://i.ibb.co/bvtVG7H/Screenshot.jpg',
    videoTrailerLink : 'https://www.belajariah.com/video_pembelajaran/TrailerMini.mp4',
    posterLink : 'https://i.ibb.co/vLhnZtM/Screenshot-3.jpg',
  }

  const [progress, setProgress] = useState({
    playIndex  : 0,
    playSubIndex : 0,
    subtitleCode : '',
    // passPreExam : 0,
    // passPostExam : 0,
    // count : detail.Progress_Count,
    // percentage : detail.Progress,
    // currentIndex : detail.Progress_Index,
    // currentSubIndex : detail.Progress_Subindex,
  })

  const toggleModalRating = () => setModalRatingVisible(!modalRatingVisible)
  const toggleModalRecord = (item) => {
    setRecord(item)
    setModalRecordVisible(!modalRecordVisible)
  }
  const toggleModalChecklist = () => {
    setModalChecklistVisible(!modalChecklistVisible)
    fetchDataExercise(dataState, progress.subtitleCode)
  }

  const fetchDataLearning = async (state, code) => {
    try {
      let { skip, take, filterString } = state
      filterString=`[{"type": "text", "field" : "class_code", "value": "${code}"}]`
      const response = await LearningAPI.GetAllLearning(skip, take, filterString)
      if (response.status === Response.SUCCESS) {
        setStates(response.data.data)
        setCount(response.data.count)
      }
      setLoading(false)
    } catch (err) {
      setLoading(false)
      return err
    }
  }

  const fetchDataExercise = async (state, code) => {
    try {
      let { skip, take, filterString } = state
      filterString=`[{"type": "text", "field" : "subtitle_code", "value": "${code}"}]`
      const response = await ExerciseAPI.GetAllExercise(skip, take, filterString)
      if (response.status === Response.SUCCESS) {
        setStateExc(response.data.data)
      }
      setLoadingExc(false)
    } catch (err) {
      setLoadingExc(false)
      return err
    }
  }

  const updateProgressClass = async (percentage, count, index, subIndex) => {
    const values = {
      ID : detail.ID,
      Status : 'In Progress',
      Progress : percentage,
      Progress_Count : count,
      Progress_Index: index,
      progress_Subindex : subIndex,
      User_Code : detail.User_Code,
    }
    try {
      const response = await UserClassAPI.UpdateProgressUserClass(values)
      if (response.data.result) {
        dispatch(UserClassAPI.GetUserClass(item.Class_Code))
      }
    } catch (error) {
      return error
    }
  }

  useEffect(() => {
    dispatch(UserClassAPI.GetUserClass(item.Class_Code))
    fetchDataLearning(dataState, item.Class_Code)

    if(expand.length <= 0) {
      state.topics.map(() => {
        setExpand(expand => [...expand, false])
      })
    }
  }, [])

  const toggleExpand = (index) => {
    let tempExpand = [...expand]
    tempExpand[index] = !tempExpand[index]
    setExpand(tempExpand)
  }

  const state = {
    isExpired : false,
    rating : 4.7,
    total_user : 1500,
    title : 'Belajar Al-Qur\'an dari dasar dengan metode yang mudah dan menyenangkan',
    description : 'Belajar Tahsin dengan ustadz dan ustadzah lorem ipsum dolor sit amet, lorem veriseyum not beijer sit amet. tesset lorem ipsum berusit, lorem veriseyum not beijer sit amet tesset lorem ipsum berusit|lorem veriseyum not beijer sit amet tesset lorem ipsum berusit lorem veriseyum not beijer sit amet. tesset lorem ipsum berusit tesset lorem ipsum berusit lorem veriseyum not beijer sit amet. tesset lorem ipsum berusit',
    materialCount : 12,
    posterTrailerLink : 'https://i.ibb.co/bvtVG7H/Screenshot.jpg',
    videoTrailerLink : 'https://www.belajariah.com/video_pembelajaran/TrailerMini.mp4',
    topics: [
      {
        title: 'Huruf Hijaiyah, Makhraj dan shifathul huruf',
        materials: [
          { subtitle : 'Dasar Hijaiyah', video_link : 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4', video_duration : 10, posterLink : 'https://i.ibb.co/X24cBK9/Screenshot-1.jpg', taskImages: [Images.ImgDummySoal, Images.ImgDummySoal2], isDone : false },
          { subtitle: 'Dasar Makhraj', video_link : 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4', video_duration : 8, posterLink : 'https://i.ibb.co/Gv3zpmK/Screenshot-2.jpg', taskImages: [Images.ImgDummySoal], isDone : false },
          { subtitle : 'Shifathul Huruf', video_link : 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4', video_duration : 12, posterLink : 'https://i.ibb.co/vLhnZtM/Screenshot-3.jpg', taskImages: [Images.ImgDummySoal, Images.ImgDummySoal2, Images.ImgDummySoal3], isDone : false }],
        document : 'Dasar Hijaiyah',
        filename : 'http://www.africau.edu/images/default/sample.pdf',
        path : 'https://www.belajariah.com/document-assets/file.pdf',
        sound : 'Sound.wav',
        ayats: [ 'وَالْعَصْرِۙ', 'اِنَّ الْاِنْسَانَ لَفِيْ خُسْرٍۙ', 'اِلَّا الَّذِيْنَ اٰمَنُوْا وَعَمِلُوا الصّٰلِحٰتِ وَتَوَاصَوْا بِالْحَقِّ ەۙ وَتَوَاصَوْا بِالصَّبْرِ ࣖ' ],
      },
      {
        title: 'Harokat',
        materials: [
          { subtitle : 'Dasar Hijaiyah', video_link : 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4', video_duration : 4, posterLink : 'https://i.ibb.co/LJTsYGS/Screenshot-4.jpg', taskImages: [Images.ImgDummySoal, Images.ImgDummySoal2], isDone : false },
          { subtitle: 'Dasar Makhraj', video_link : 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4', video_duration : 5, posterLink : 'https://i.ibb.co/LJTsYGS/Screenshot-4.jpg', taskImages: [Images.ImgDummySoal, Images.ImgDummySoal2], isDone : false },
          { subtitle : 'Shifathul Huruf', video_link : 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4', video_duration : 2, posterLink : 'https://i.ibb.co/LJTsYGS/Screenshot-4.jpg', taskImages: [Images.ImgDummySoal, Images.ImgDummySoal2], isDone : false }],
        document : 'Dasar Hijaiyah',
        filename : 'http://www.africau.edu/images/default/sample.pdf',
        path : 'https://stintpdevlintaspsshared.blob.core.windows.net/port-services-static/docpdf_20201207095324.pdf',
        sound : 'Sound.wav',
        ayats: [ 'قُلْ هُوَ اللّٰهُ اَحَدٌۚ', 'اَللّٰهُ الصَّمَدُۚ', 'لَمْ يَلِدْ وَلَمْ يُوْلَدْۙ', 'وَلَمْ يَكُنْ لَّهٗ كُفُوًا اَحَدٌ ࣖ' ],
      },
      {
        title: 'Tajwid',
        materials: [
          { subtitle : 'Dasar Hijaiyah', video_link : 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4', video_duration : 7, posterLink : 'https://i.ibb.co/LJTsYGS/Screenshot-4.jpg', taskImages: [Images.ImgDummySoal, Images.ImgDummySoal2], isDone : false },
          { subtitle: 'Dasar Makhraj', video_link : 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4', video_duration : 10, posterLink : 'https://i.ibb.co/LJTsYGS/Screenshot-4.jpg', taskImages: [Images.ImgDummySoal, Images.ImgDummySoal2], isDone : false },
          { subtitle : 'Shifathul Huruf', video_link : 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4', video_duration : 3, posterLink : 'https://i.ibb.co/LJTsYGS/Screenshot-4.jpg', taskImages: [Images.ImgDummySoal, Images.ImgDummySoal2], isDone : false }],
        document : 'Dasar Hijaiyah',
        filename : 'http://www.africau.edu/images/default/sample.pdf',
        path : 'https://stintpdevlintaspsshared.blob.core.windows.net/port-services-static/docpdf_20201207095324.pdf',
        sound : 'Sound.wav',
        ayats: [ 'وَالْعَصْرِۙ', 'اِنَّ الْاِنْسَانَ لَفِيْ خُسْرٍۙ', 'اِلَّا الَّذِيْنَ اٰمَنُوْا وَعَمِلُوا الصّٰلِحٰتِ وَتَوَاصَوْا بِالْحَقِّ ەۙ وَتَوَاصَوْا بِالصَّبْرِ ࣖ' ],
      },
      {
        title: 'Mad',
        materials: [
          { subtitle : 'Dasar Hijaiyah', video_link : 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4', video_duration : 7, posterLink : 'https://i.ibb.co/LJTsYGS/Screenshot-4.jpg', taskImages: [Images.ImgDummySoal, Images.ImgDummySoal2], isDone : false },
          { subtitle: 'Dasar Makhraj', video_link : 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4', video_duration : 7, posterLink : 'https://i.ibb.co/LJTsYGS/Screenshot-4.jpg', taskImages: [Images.ImgDummySoal, Images.ImgDummySoal2], isDone : false },
          { subtitle : 'Shifathul Huruf', video_link : 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4', video_duration : 7, posterLink : 'https://i.ibb.co/LJTsYGS/Screenshot-4.jpg', taskImages: [Images.ImgDummySoal, Images.ImgDummySoal2], isDone : false }],
        ayats: [ 'وَالْعَصْرِۙ', 'اِنَّ الْاِنْسَانَ لَفِيْ خُسْرٍۙ', 'اِلَّا الَّذِيْنَ اٰمَنُوْا وَعَمِلُوا الصّٰلِحٰتِ وَتَوَاصَوْا بِالْحَقِّ ەۙ وَتَوَاصَوْا بِالصَّبْرِ ࣖ' ],
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

  const handleModalChecklist = () => {
    setModalChecklistVisible(true)
  }

  const handleVideoEnd = (index, subIndex) => {
    detail.Is_Expired ? (
      (index == detail.Progress_Index && subIndex == detail.Progress_Subindex) && (
        Alert.alert('Jika ingin membuka kelas selanjutnya, harap lakukan perpanjangan kelas ya')
      )
    ) : (
      states[index].SubTitles[subIndex].Is_Done || (
        setShowTask(true),
        handleModalChecklist()
      ))
  }

  const handleModalRecord = () => {
    setModalRecordVisible(true)
  }

  const calculatePercentage = (count, totalMaterial) => {
    return Number(count / totalMaterial * 100).toFixed(1)
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
      )}

    return (
      <View style={styles.containerMenuDesc}>
        <View style={styles.containerTextTitle} >
          <Text style={[styles.textTitle]}>{item.Class_Name}</Text>
          {showTask && (
            <TouchableOpacity onPress={handleModalChecklist} style={styles.containerIconChecklist}>
              <Images.IconChecklistLearning.default />
            </TouchableOpacity>
          )}
        </View>
        <Text style={styles.containerTextCategory}>#Populer Class</Text>
        <View style={styles.containerParentReview}>
          <View style={styles.containerReviewUser}>
            <Images.IconUserReview.default/>
            <Text style={styles.textRating}>{item.Total_User/1000} K</Text>
          </View>
          <View style={styles.containerReviewUser}>
            <View style={styles.customRatingBarStyle}>
              {handleRating(item.Class_Rating)}
            </View>
            <Text style={styles.textStyle}>{item.Class_Rating}</Text>
          </View>
        </View>
        <TextView
          component={
            <Text style={styles.containerTextDesc}>
              {handleSplitString(item.Class_Description)}
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
            onPress={() => navigation.navigate('Consultation', item)}
            colors={['#7d369a', '#9a42bd', '#9a42bd', '#7d369a']}
          />
        </View>
      </View>
    )
  }

  const ContentClass = () => {
    const playVideo = (index, subIndex, code) => {
      if(detail.Pre_Test_Total > 0) {
        setProgress(s => ({ ...s, subtitleCode : code }))
        if(index > detail.Progress_Index) {
          Alert.alert('Materi belum dibuka, silahkan tonton materi pada topik sebelumnya dulu ya')
        } else if(index < detail.Progress_Index) {
          setProgress(s => ({ ...s, playIndex : index }))
          setProgress(s => ({ ...s, playSubIndex : subIndex }))
        } else {
          if(subIndex > detail.Progress_Subindex) {
            Alert.alert('Materi belum dibuka, silahkan tonton materi sebelumnya dulu ya')
          } else {
            setProgress(s => ({ ...s, playIndex : index }))
            setProgress(s => ({ ...s, playSubIndex : subIndex }))
          }
        }
      } else {
        Alert.alert('Silahkan kerjakan pre-exam terlebih dahulu')
      }
    }

    const getLockStatus = (index, subIndex) => {
      if(detail.Pre_Test_Total > 0) {
        if(index < detail.Progress_Index) {
          return false
        } else if(index > detail.Progress_Index) {
          return true
        } else {
          if(subIndex < detail.Progress_Subindex) {
            return false
          } else if(subIndex > detail.Progress_Subindex) {
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
            activeOpacity={0.5}
            onPress={()=> {
              if(detail.Pre_Test_Total >= 2) {
                Alert.alert('Pre-exam hanya dapat dilakukan maksimal 2 kali')
              } else {
                navigation.navigate('ClassExam',  { item : item, type : 'Pre-Test' })
              }
            }}
          >
            <List.Item
              title='Pre Exam'
              style={styles.containerExam}
              titleStyle={styles.textRegular}
              right={() => <Text style={styles.textExam}>Mulai</Text>}
            />
          </TouchableOpacity>
          {states.map((topic, index) => {
            return (
              <List.Accordion
                key={index}
                title={topic.Title}
                titleStyle={styles.textRegular}
                style={styles.containerAccordion}
                onPress={() => toggleExpand(index)}
                expanded={expand[index]}
              >
                {topic.SubTitles.map((subtopic, subIndex) => {
                  const isLocked = getLockStatus(index, subIndex)

                  return  (
                    <TouchableOpacity
                      key={subIndex}
                      activeOpacity={0.5}
                      onPress={() => {
                        playVideo(index, subIndex, topic.Code)
                      }}>
                      <List.Item
                        key={subIndex}
                        title={subtopic.Sub_Title}
                        style={isLocked ? [styles.containerItem, { backgroundColor: Color.disableGrey }] : styles.containerItem}
                        titleStyle={styles.textRegular}
                        left={() =>
                          isLocked ?
                            (<Images.IconLockedMaterial.default style={styles.iconPlay} />)
                            :
                            (<Images.IconPlay.default style={styles.iconPlay}/>)
                        }
                        right={() => <Text style={styles.textDuration}>{subtopic.Video_Duration} Menit</Text>}
                      />
                    </TouchableOpacity>
                  )
                })}

                {topic.Document &&(
                  <TouchableOpacity activeOpacity={0.5}>
                    <List.Item
                      title={topic.Document_Name}
                      style={styles.containerItem}
                      titleStyle={styles.textRegular}
                      onPress={() => {
                        const obj = {
                          path : topic.Document_Path,
                          filename : topic.Document_Name,
                        }
                        setViewPdf(!viewPdf)
                        setSourcePdf(obj)
                      }}
                      left={() => <Images.IconDocumentVideo.default style={styles.iconPlay}/>}
                      right={() => <Text style={styles.textDuration}>Document</Text>}
                    />
                  </TouchableOpacity>
                )}

                {topic.Exercises.ID !== 0 && (
                  <TouchableOpacity activeOpacity={0.5}>
                    <List.Item
                      title='Dummy - Masuk ke page rekam'
                      style={styles.containerItem}
                      titleStyle={styles.textRegular}
                      onPress={() => handleModalRecord(topic.Exercises)}
                      left={() => <Images.IconRecordVoice.default style={styles.iconPlay}/>}
                      right={() => <Text style={styles.textDuration}>Rekam Bacaan</Text>}
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
              onPress={()=> {
                detail.Progress == 100 ? (
                  detail.Pre_Test_Total < 2 ? (
                    navigation.navigate('ClassExam', { item : item, type : 'Post-Test' })
                  ) : (
                    Alert.alert('Post exam hanya dapat diselesaikan maksimal 2 kali')
                  )
                ) : (
                  Alert.alert('Silahkan selesaikan seluruh materi terlebih dahulu')
                )
              }}
              style={detail.Progress == 100 ?
                { ...styles.containerExam, borderTopWidth : 0 } :
                { ...styles.containerExam, borderTopWidth : 0,
                  backgroundColor : Color.disableGrey }}
              right={() => <Text style={styles.textExam}>Mulai</Text>}
            />
          </TouchableOpacity>
        </List.Section>
      </View>
    )
  }

  const ChecklistClass = () => {
    const [checkCount, setCheckCount] = useState(0)

    const unlockNext = (index, subIndex) => {
      if(detail.Pre_Test_Total > 0) {
        if(index == detail.Progress_Index && subIndex == detail.Progress_Subindex) {
          let nextIndex = states[detail.Progress_Index + 1]
          let nextSubIndex = states[detail.Progress_Index].SubTitles[detail.Progress_Subindex + 1]

          if(nextSubIndex == undefined) {
            if(nextIndex == undefined) {
              //end of array
              if(detail.Progress < 100) {
                Alert.alert('Post exam unlocked!')

                const count = detail.Progress_Count + 1
                const percentage = calculatePercentage(count, counts)
                updateProgressClass(percentage, count, detail.Progress_Index, detail.Progress_Subindex)
                // setProgress(s => ({ ...s, count : count }))
                // setProgress(s => ({ ...s, percentage : percentage }))
              }
            } else {
              //next index
              const count = detail.Progress_Count  + 1
              const percentage = calculatePercentage(count, counts)
              updateProgressClass(percentage, count, detail.Progress_Index + 1, 0)

              // setProgress(s => ({ ...s, count : count }))
              // setProgress(s => ({ ...s, currentSubIndex : 0 }))
              // setProgress(s => ({ ...s, percentage : percentage }))
              // setProgress(s => ({ ...s, currentIndex : progress.currentIndex + 1 }))
            }
          } else {
            //next subindex
            const count = detail.Progress_Count  + 1
            const percentage = calculatePercentage(count, counts)
            updateProgressClass(percentage, count, detail.Progress_Index, detail.Progress_Subindex + 1)

            // setProgress(s => ({ ...s, count : count }))
            // setProgress(s => ({ ...s, percentage : percentage }))
            // setProgress(s => ({ ...s, currentSubIndex : progress.currentSubIndex + 1 }))
          }
        }
      }
    }

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

          {loadingExc ? <LoadingView/> :
            stateExc.map((item, index) => {
              const [checked, setChecked] = useState(false)
              return (
                <View key={index}>
                  <Image source={item.Exercise_Image == '' ?
                    Images.ImgDummySoal : { uri : item.Exercise_Image }}
                  style={styles.imgMaterial}
                  />
                  <Text style={styles.textRegular}>Sudahkah kamu melakukannya? <Text style={styles.textPurpleMedium}>Checklist</Text> jika sudah, dan Ayoo lakukan jika belum</Text>
                  <View style={styles.containerRadioButton}>
                    <RadioButton
                      status={checked ? 'checked' : 'unchecked'}
                      onPress={() => {
                        checked ? setCheckCount(checkCount - 1) : setCheckCount(checkCount + 1)
                        setChecked(!checked)
                      }}
                      color={Color.purpleMedium} />
                    <Text style={{ fontFamily: FontType.bold }}>Sudah</Text>
                  </View>
                </View>
              )
            })}

          <View style={styles.containerCancelSave}>
            <Buttons
              title='Batal'
              onPress={toggleModalChecklist}
              style={styles.buttonCancel}
              textStyle={{ color : 'purple' }}
            />
            <ButtonGradient
              title='Selesai'
              onPress={ () => {
                toggleModalChecklist(),
                checkCount == stateExc.length && (
                  setShowTask(false),
                  item.Is_Done = true,
                  unlockNext(detail.Progress_Index, detail.Progress_Subindex)
                )}}
              styles={styles.buttonSave}
            />
          </View>
        </ScrollView>
      </View>
    )
  }

  // useEffect(() => {
  // let { passPreExam } = route.params ?? {}
  // let { passPostExam } = route.params ?? {}
  // if(passPreExam != undefined) {
  //   setProgress(s => ({ ...s, passPreExam : progress.passPreExam + 1 }))
  // }
  // if(passPostExam != undefined) {
  //   setProgress(s => ({ ...s, passPostExam : progress.passPostExam + 1 }))
  // }
  // if(expand.length <= 0) {
  //   state.topics.map(() => {
  //     setExpand(expand => [...expand, false])
  //   })
  // }
  // }, [])

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
              backButtonPress={() => toggleModalRating()}
              title='Berikan rating untuk koreksi bacaanmu'
              renderItem={<Text style={styles.textModal}>
                Bagaimana penilaian terkait koreksi bacaan oleh ustadz atau ustdzah ini ?
              </Text>}
            />
            <View style={styles.container}>
              <VideoPlayer
                posterLink = {detail.Pre_Test_Total > 0 ? obj.posterLink : obj.posterTrailerLink}
                videoLink = {detail.Pre_Test_Total > 0 ? obj.videoTrailerLink : obj.posterTrailerLink}
                iconPlaySize = {48}
                iconSkipSize = {32}
                showSkipButton={true}
                showBackButton={true}
                videoStyle={styles.videoStyle}
                style={styles.videoContainerStyle}
                controllerStyle={styles.controllerStyle}
                videoFullscreenStyle={styles.videoFullscreenStyle}
                fullscreenStyle={styles.videoFullscreenContainerStyle}
                onFullScreenPress={() => setIsFullscreen(!isFullscreen)}
                controllerFullscreenStyle={styles.controllerFullscreenStyle}
                onVideoEnd = { () => handleVideoEnd(progress.playIndex, progress.playSubIndex)} />
            </View>
          </View>
          <View style={styles.containerView}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.containerParentKelas}>
                <DescriptionClass/>
                <ConsultationClass/>
                {loading ?
                  <LoadingView/> : <ContentClass/>
                }
              </View>
            </ScrollView>
          </View>
        </>
      )}
      <ModalInfo
        hideButtonClose={true}
        isVisible={modalChecklistVisible}
        renderItem={ <ChecklistClass /> }
        containerStyle={{ height : '92%' }}
      />
      <ModalRecord
        data={record}
        isVisible={modalRecordVisible}
        backdropPress={() => toggleModalRecord()}
        backButtonPress={() => toggleModalRecord()}
        ayats={state.topics[progress.currentIndex].ayats}
      />
    </>
  )
}

ClassLearning.propTypes = {
  route: PropTypes.object,
}

export default ClassLearning