import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { List, RadioButton } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import {
  Text,
  Alert,
  View,
  Image,
  ScrollView,
  ToastAndroid,
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
  const dispatch = useDispatch()
  const item = props.route.params
  const navigation = useNavigation()
  // const isExam = props.route.isExam
  const { detail } = useSelector((state) => state.UserClassDetailReducer)

  const [counts, setCount] = useState(0)
  const [record, setRecord] = useState({})
  const [states, setStates] = useState([])
  const [expand, setExpand] = useState([])
  const [stateExc, setStateExc] = useState([])
  const [loading, setLoading] = useState(true)
  const [viewPdf, setViewPdf] = useState(false)
  const [showMore, setShowMore] = useState(true)
  const [sourcePdf, setSourcePdf] = useState({})
  const [showTask, setShowTask] = useState(false)
  const [sourceVideo, setSourceVideo] = useState({})
  const [loadingExc, setLoadingExc] = useState(true)
  const [numberOfLines, setNumberOfLines] = useState(3)
  const [loadingVideo, setLoadingVideo] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [modalRatingVisible, setModalRatingVisible] = useState(false)
  const [modalRecordVisible, setModalRecordVisible] = useState(false)
  const [modalChecklistVisible, setModalChecklistVisible] = useState(false)
  const [dataState] = useState({ skip: 0, take: 1000, filter: [], filterString: '[]' })

  const [progress, setProgress] = useState({
    playIndex  : 0,
    playSubIndex : 0,
    subtitleCode : '',
    isExercise : false,
  })

  const obj = {
    videoTrailerLink : 'https://belajariah-dev.sgp1.digitaloceanspaces.com/Belajar%20Al-Qur%27an%20dari%20dasar%20dengan%20MUDAH%20dan%20MENYENANGKAN%20%21%20Di%20Belajariah%20%21.mp4',
    posterTrailerLink : 'https://belajariah-dev.sgp1.digitaloceanspaces.com/Master-Image/cover%20thriller%20apps.png',
  }

  const toggleExpand = (index) => {
    let tempExpand = [...expand]
    tempExpand[index] = !tempExpand[index]
    setExpand(tempExpand)
  }
  const toggleModalChecklist = () => {
    setModalChecklistVisible(!modalChecklistVisible)
    fetchDataExercise(dataState, progress.subtitleCode)
  }
  const toggleModalRating = () => setModalRatingVisible(!modalRatingVisible)
  const toggleModalRecord = () => setModalRecordVisible(!modalRecordVisible)

  const fetchDataLearning = async (state, code) => {
    try {
      setLoadingExc(true)
      let { skip, take, filterString } = state
      filterString=`[{"type": "text", "field" : "class_code", "value": "${code}"}]`
      const response = await LearningAPI.GetAllLearning(skip, take, filterString)
      if (response.status === Response.SUCCESS) {
        setStates(response.data.data)
        setCount(response.data.count)
        if(expand.length <= 0) {
          response.data.data.map(() => {
            setExpand(expand => [...expand, false])
          })
        }
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

  const calculatePercentage = (count, totalMaterial) => {
    return Number(count / totalMaterial * 100).toFixed(1)
  }

  const handleModalChecklist = (code) => {
    setModalChecklistVisible(true)
    fetchDataExercise(dataState, code)
  }

  const handleModalRecord = (item) => {
    setRecord(item)
    setModalRecordVisible(true)
  }

  const handleSplitString = (value) => {
    const stringSplit = value.split('|')
    return (
      <>
        {stringSplit.map((val, index) => {
          return <Text key={index}>{val}.{'\n'}{'\n'}</Text>
        })}
      </>
    )}

  const handleSplitUser = (value) => {
    return value.toString().length >= 4 ?
      value/1000 + ' K' : value
  }

  const handleShowMore = () => {
    setShowMore(!showMore)
    showMore ? setNumberOfLines(0) : setNumberOfLines(3)
  }

  const handleRating = (num) => {
    let rating = []
    for (let index = 1; index <= 5; index++) {
      num - index >= 0
        ? rating.push(<Images.StarFullClass.default
          style={styles.star}/>)
        : num - index < 0 && num - index > -1
          ? rating.push(<Images.StarHalfClass.default/>)
          : rating.push(<Images.StarEmptyClass.default/>)
    }
    return (
      <View style={{ flexDirection: 'row' }}>
        {rating.map((val, index) => {
          return <View key={index}>{val}</View>
        })}
      </View>
    )
  }

  const handleClassProgress = async (percentages, count, index, subIndex) => {
    const values = {
      ID : detail.ID,
      Status : 'In Progress',
      Progress : parseInt(percentages),
      Progress_Count : count,
      Progress_Index: index,
      Progress_Subindex : subIndex,
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

  const handlePlayVideo = (index, subIndex, topic, subtopic) => {
    setLoadingVideo(true)
    if(detail.Pre_Test_Total > 0) {
      setProgress(s => ({
        ...s,
        subtitleCode : subtopic.Code,
        isExercise : subtopic.Is_Exercise,
      }))
      if(index > detail.Progress_Index) {
        Alert.alert('Materi belum dibuka, silahkan tonton materi sebelumnya dulu ya')
      } else if(index < detail.Progress_Index) {
        setSourceVideo(subtopic)
        setProgress(s => ({ ...s, playIndex : index }))
        setProgress(s => ({ ...s, playSubIndex : subIndex }))
      } else {
        if(subIndex > detail.Progress_Subindex) {
          Alert.alert('Materi belum dibuka, silahkan tonton materi sebelumnya dulu ya')
        } else {
          setSourceVideo(subtopic)
          setProgress(s => ({ ...s, playIndex : index }))
          setProgress(s => ({ ...s, playSubIndex : subIndex }))
        }
      }
    } else {
      Alert.alert('Silahkan kerjakan Ujian Awal terlebih dahulu')
    }
    setTimeout(() => {
      setLoadingVideo(false)
    }, 1500)
  }

  const handleUnlockVideo = (index, subIndex) => {
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
              const percentages = calculatePercentage(count, counts)
              handleClassProgress(percentages, count, detail.Progress_Index, detail.Progress_Subindex)
            }
          } else {
            //next index
            const count = detail.Progress_Count  + 1
            const percentages = calculatePercentage(count, counts)
            handleClassProgress(percentages, count, detail.Progress_Index + 1, 0)
          }
        } else {
          //next subindex
          const count = detail.Progress_Count  + 1
          const percentages = calculatePercentage(count, counts)
          handleClassProgress(percentages, count, detail.Progress_Index, detail.Progress_Subindex + 1)
        }
      }
    }
  }

  const handleVideoEnd = () => {
    progress.isExercise ?   (
      setShowTask(true),
      handleModalChecklist(sourceVideo.Code)
    ) : (
      handleUnlockVideo(detail.Progress_Index, detail.Progress_Subindex)
    )
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

  const DescriptionClass = () => {
    return (
      <View style={styles.containerMenuDesc}>
        <View style={styles.containerTextTitle} >
          <Text style={[styles.textTitle]}>{item.Class_Name}</Text>
          {showTask && (
            <TouchableOpacity
              onPress={() => handleModalChecklist(sourceVideo.Code)}
              style={styles.containerIconChecklist}>
              <Images.IconChecklistLearning.default />
            </TouchableOpacity>
          )}
        </View>
        <Text style={styles.containerTextCategory}>#Populer Class</Text>
        <View style={styles.containerParentReview}>
          {item.Total_User >= 100 &&(
            <View style={styles.containerReviewUser}>
              <Images.IconUserReview.default/>
              <Text style={styles.textRating}>
                {handleSplitUser(item.Total_User)}
              </Text>
            </View>
          )}
          <View style={styles.containerReviewUser}>
            <View style={styles.customRatingBarStyle}>
              {handleRating(item.Class_Rating)}
            </View>
            <Text style={styles.textStyle}>{item.Class_Rating.toFixed(1)}</Text>
          </View>
        </View>
        <TextView
          showMore={showMore}
          onPress={handleShowMore}
          numberOfLines={numberOfLines}
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
            start={{ x : 0, y : 1 }}
            title='Konsultasi Bacaan'
            styles={styles.viewConsultation}
            textStyle={styles.textConsultation}
            icon={<Images.IconConsultations.default/>}
            containerStyle={styles.buttonConsultation}
            onPress={() => navigation.navigate('Consultation', { classes : item })}
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
            activeOpacity={0.5}
            onPress={()=> {
              if(detail.Pre_Test_Total >= 2) {
                Alert.alert('Ujian Awal hanya dapat dilakukan maksimal 2 kali')
              } else {
                navigation.navigate('ClassExam',  { item : item, type : 'Pre-Test' })
              }
            }}
          >
            <List.Item
              title='Ujian Awal'
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
                    <View  key={subIndex}>
                      <TouchableOpacity
                        activeOpacity={0.5}
                        onPress={() => {
                          handlePlayVideo(index, subIndex, topic, subtopic)
                        }}>
                        <List.Item
                          key={subIndex}
                          title={subtopic.Sub_Title}
                          style={isLocked ? [styles.containerItem, { backgroundColor: Color.greyExam }] : styles.containerItem}
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
                      <TouchableOpacity activeOpacity={0.5}>
                        {subtopic.Document &&(
                          <List.Item
                            title='Rangkuman Materi'
                            style={isLocked ? [styles.containerItem, { backgroundColor: Color.greyExam }] : styles.containerItem}
                            titleStyle={styles.textRegular}
                            onPress={() => {
                              const obj = {
                                path : subtopic.Document,
                                filename : subtopic.Document,
                              }
                              setViewPdf(isLocked ? false : true)
                              setSourcePdf(obj)
                            }}
                            left={() => <Images.IconDocumentVideo.default style={styles.iconPlaySub}/>}
                            right={() => <Text style={styles.textDuration}>Document</Text>}
                          />
                        )}
                      </TouchableOpacity>
                    </View>
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
                      title='Masuk ke page rekam'
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
              title='Ujian Akhir'
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
                  backgroundColor : Color.greyExam }}
              right={() => <Text style={styles.textExam}>Mulai</Text>}
            />
          </TouchableOpacity>
        </List.Section>
      </View>
    )
  }

  const ChecklistClass = () => {
    const [checkCount, setCheckCount] = useState(0)

    const checkChecklist = () => {
      if (checkCount == stateExc.length) {
        toggleModalChecklist()
        checkCount == stateExc.length && (
          setShowTask(false),
          handleUnlockVideo(detail.Progress_Index, detail.Progress_Subindex)
        )
      } else {
        ToastAndroid.show('Silahkan kerjakan dulu latihannya', ToastAndroid.SHORT)
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
              onPress={() => {
                checkChecklist()
              }}
              styles={styles.buttonSave}
            />
          </View>
        </ScrollView>
      </View>
    )
  }

  useEffect(() => {
    dispatch(UserClassAPI.GetUserClass(item.Class_Code))
    fetchDataLearning(dataState, item.Class_Code)
  }, [])

  // useEffect(() => {
  //   fetchDataLearning(dataState, item.Class_Code)
  // }, [isExam])

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
              {loadingVideo ? (
                <LoadingView />
              ) : (
                <VideoPlayer
                  iconPlaySize = {48}
                  iconSkipSize = {32}
                  showSkipButton={true}
                  showBackButton={true}
                  videoStyle={styles.videoStyle}
                  style={styles.videoContainerStyle}
                  controllerStyle={styles.controllerStyle}
                  videoFullscreenStyle={styles.videoFullscreenStyle}
                  fullscreenStyle={styles.videoFullscreenContainerStyle}
                  videoLink = {sourceVideo.Video || obj.videoTrailerLink}
                  onFullScreenPress={() => setIsFullscreen(!isFullscreen)}
                  controllerFullscreenStyle={styles.controllerFullscreenStyle}
                  onVideoEnd = {handleVideoEnd}
                  posterLink = {sourceVideo.Poster || obj.posterTrailerLink}
                />
              )}
              {/* <Text style={{ position : 'absolute', color : Color.white, alignSelf : 'center',  }}>hello</Text> */}
            </View>
          </View>
          <View style={styles.containerView}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.containerParentKelas}>
                <DescriptionClass/>
                {item.Class_Initial == 'Tahsinn' && (
                  <ConsultationClass/>
                )}
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
      {modalRecordVisible && (
        <ModalRecord
          data={record}
          user={detail}
          isVisible={modalRecordVisible}
          backdropPress={() => toggleModalRecord()}
          backButtonPress={() => toggleModalRecord()}
        />
      )}
    </>
  )
}

ClassLearning.propTypes = {
  route: PropTypes.object,
}

export default ClassLearning