import * as Yup from 'yup'
import PropTypes from 'prop-types'
import { useFormik } from 'formik'
import React, { useState, useEffect } from 'react'
import { Card } from 'react-native-elements'
import Slider from '@react-native-community/slider'
import { Text, Datepicker,  Icon, Modal,  } from '@ui-kitten/components'
import { useNavigation, useRoute } from '@react-navigation/native'
import {
    View,
    Image,
    FlatList,
    TextInput,
    ScrollView,
    TouchableOpacity,
  } from 'react-native'

import {
    Buttons,
    ModalDate,
    ModalEmoticon,
    ModalRatingDirect,
} from '../../../../components'
import { Images, Color } from '../../../../assets'

import styles from './class-meeting.style'

const CalendarIcon = (props) => <Icon {...props} name='calendar' />

const ClassMeeting = () => {
    const navigation = useNavigation()
    const [dataObj, setDataObj] = useState({})
    const [isComplete, setIsComplete] = useState(false)
    const [selectedSchedule, setSelectedSchedule] = useState()

    const [modalVisibleEnd, setModalVisibleEnd] = useState(false)
    const [modalDateVisibleStart, setModalDateVisibleStart] = useState(false)
    const toggleModalEnd = () => setModalVisibleEnd(!modalVisibleEnd)
    const toggleModalDateStart = () => setModalDateVisibleStart(!modalDateVisibleStart)

    const maxRating = [1, 2, 3, 4, 5]
    const [defaultRating, setDefaultRating] = useState(0)

    const FormSubmit = useFormik({
      initialValues: { Emot: '', NoteMentor: '', Sched: '', SchedOth: ''},
      validationSchema: Yup.object({
        // Emot: Yup.number()
        //   .required('Penilaian Pengajar Harus Diisi'),
        // NoteMentor: Yup.string()
        //   .required('Catatan Pengajar Harus Diisi'),
      }),
      onSubmit: async () => {
          try {
            FuncSchedule() 
          } catch (err) {
              return err
          }
      },
    })

    // const FormEnd = useFormik({
    //   initialValues: { Sched: ''},
    //   validationSchema: Yup.object({
    //     Sched: Yup.string()
    //       .required('Catatan Pengajar Harus Diisi'),
    //   }),
    //   onSubmit: async () => {
    //       try {
    //         console.log(FormEnd.values['Sched'])
    //       } catch (err) {
    //           return err
    //       }
    //   },
    // })

    const getEmoji = () => {
      if (defaultRating >= 0 && defaultRating <= 2) {
        return <Images.IconEmotOne.default />
      }
      else if (defaultRating >= 2 && defaultRating <= 4) {
        return <Images.IconEmotTwo.default />
      }
      else if (defaultRating >= 5 && defaultRating <= 6) {
        return <Images.IconEmotThree.default />
      }
      else if (defaultRating >= 7 && defaultRating <= 8) {
        return <Images.IconEmotFour.default />
      }
      else if (defaultRating <= 10) {
        return <Images.IconEmotFive.default />
      }
    }

    const ReviewEmot = () => {
      return (
        <View style={styles.containerReview}>
          <View style={styles.TopHeader}>
              <Images.IconCheckLisDirect.default style={styles.IconHeader} />
              <Text style={styles.TxtHeader}>
                <Text style={styles.TxtHeaderBld}>Beri Penilaian, </Text>Hasil pertemuan anda hari ini
              </Text>
            </View>
          <View style={styles.ViewSlider}>
            <Text style={styles.TxtRatingVal}>{defaultRating}</Text>
            <Slider 
              step={1} 
              minimumValue={1} 
              maximumValue={10} 
              style={{height: 40}} 
              thumbTintColor='#6E248D' 
              onValueChange={setDefaultRating}  
              minimumTrackTintColor='#6E248D' 
              maximumTrackTintColor='#6E248D' 
            />
            <View style={{alignItems: 'center'}}>
              {getEmoji()}
            </View>
          </View>
          <View style={styles.containerTextArea}>
            <TextInput
              multiline={true}
              numberOfLines={5}
              // onChangeText={(e) => setComment(e)}
              style={styles.textArea}
              placeholder='Catatan untuk Ustadz/Ustadzah'
            />
          </View>
          <View style={styles.containerRating}>
            <Buttons title='Kirim'
              style={styles.StyleBtn2} 
              textStyle={styles.StyleTxt2}
              onPress={FormSubmit.handleSubmit}/>
          </View>
        </View>
      )
  }

    const DataModal = () => {
      let Modal = []
      for(let listModal = 1; listModal <= 20; listModal++) {
        Modal.push(
          <View>
            <Text style={styles.TxtMeet}>Pertemuan {listModal}</Text>
            <View style={styles.ViewInput}>
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => setModalDateVisibleStart(true)}>
                      <Datepicker
                          placeholder='Pilih Jadwal'
                          accessoryRight={CalendarIcon}
                          style={styles.datePickerInput}
                          controlStyle={styles.datePickerControl}
                          date={new Date}
                      />
                </TouchableOpacity>
            </View>
          </View>
        )
      } 
      
      return (
        <View>
          {Modal.map((item, index) => {
            return <View key={index} style={styles.ViewSch}>
              {item}
              {isComplete !== true ? 
              (
                <Buttons title='Selesai' 
                  style={styles.StyleBtn} 
                  textStyle={styles.StyleTxt} 
                  onPress = {() => {
                    // console.log(index)
                    if (
                      FormSubmit.values['Sched'] !== index &&
                      FormSubmit.values['SchedOth'] !== index
                    ) {
                      setModalVisibleEnd(true) & FormSubmit.setFieldValue('Sched', index) 
                      } else 
                      {
                        null
                      }
                  }}
                />
              ) : FormSubmit.values['Sched'] === index ? (<Images.IconCompleteDirect.default style={styles.StyleImgComplete} />)
              : (
                <Buttons title='Selesai' 
                  style={styles.StyleBtn} 
                  textStyle={styles.StyleTxt} 
                  onPress = {() => {
                    // console.log(index)
                    if (index == index) {
                      setModalVisibleEnd(true) & FormSubmit.setFieldValue('Sched', index) 
                    } else {
                      null
                    }
                  }}
                />
              )  }
            </View>
          })}
        </View>
      )
    }

    {console.log(FormSubmit.values['Sched'])}

    const ListMeet = () => {
      return (
        <View>
          <Card containerStyle={styles.cardStyleInstructor}>
            <DataModal />
          </Card>
        </View>
      )
    }

    const FuncSchedule = () => {
      return toggleModalEnd() & setIsComplete(true)
    }

    const Header = () => {
        return (
          <View style={styles.containerHeaderProfile}>
            <View style={styles.flexHeaderInProfile}>
              <View style={styles.flexHeaderProfile}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Images.ButtonBack.default style={styles.iconBackProfile} />
                </TouchableOpacity>
                {/* <Text style={styles.textTitleHeader}>Kemballi</Text> */}
              </View>
              <Images.IconChecklistMeet.default width={60} height={60} style={styles.StyleIcon} />
            </View>
            <View style={styles.ViewHeader}>
              <Image source={Images.IllustrationMeet} style={styles.StyleIllust} />
              <Text style={styles.TxtHeader}>
                <Text style={styles.TxtHeaderBold}>Yuk,</Text> Selesaikan Pertemuan Kelas 
                <Text style={styles.TxtHeaderBold}> Dirosa</Text> anda dengan Pengajar anda
              </Text>
            </View>
            <View style={styles.semiBoxProfile} />
          </View>
        )
    }

    return (
      <>
        <Header />
        <View style={styles.containerMainProfile}>
          <ScrollView>
            <ListMeet />
          </ScrollView>
        </View> 
        <ModalDate
            mode='date'
            date={new Date}
            titleBtn='Pilih Jadwal'
            styleBtn={styles.StyleB}
            isVisible={modalDateVisibleStart}
            backdropPress={() => toggleModalDateStart()}
        />
        <ModalEmoticon
          isVisible={modalVisibleEnd}
          backdropPress={() => toggleModalEnd()}
          // backButtonPress={() => toggleModalEnd()}
          // title='Beri Penilaian, Hasil belajarmu'
          renderItem={  
            ReviewEmot()
          }
        />
      </>
    )
}

ClassMeeting.propTypes = {
    navigation: PropTypes.object,
}

export default ClassMeeting