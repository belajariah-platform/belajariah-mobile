import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { Card } from 'react-native-elements'
import { Text, Datepicker,  Icon,  } from '@ui-kitten/components'
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
    ModalRatingDirect,
} from '../../../../components'
import { Images, Color } from '../../../../assets'

import styles from './class-meeting.style'

const CalendarIcon = (props) => <Icon {...props} name='calendar' />

const ClassMeeting = () => {
    const navigation = useNavigation()
    const [dataObj, setDataObj] = useState({})
    const [isComplete, setIsComplete] = useState(false)
    const [modalVisible, setModalVisible] = useState(false)
    const [modalDateVisibleEnd, setModalDateVisibleEnd] = useState(false)
    const [modalDateVisibleStart, setModalDateVisibleStart] = useState(false)
    const toggleModalDateEnd = () => setModalDateVisibleEnd(!modalDateVisibleEnd)
    const toggleModalDateStart = () => setModalDateVisibleStart(!modalDateVisibleStart)

    const toggleModal = (item) => {
      setDataObj(item)
      setModalVisible(!modalVisible)
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

    const ListMeet = () => {
      return (
        <View>
          <Card containerStyle={styles.cardStyleInstructor}>
            <View>
              <Text style={styles.TxtMeet}>Pertemuan 1</Text>
              <View style={styles.ViewInput}>
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => setModalDateVisibleStart(true)}>
                      <Datepicker
                          // disabled
                          placeholder='Pilih Jadwal'
                          accessoryRight={CalendarIcon}
                          style={styles.datePickerInput}
                          controlStyle={styles.datePickerControl}
                          date={new Date}
                      />
                </TouchableOpacity>
                { isComplete ? (<Images.IconCompleteDirect.default style={styles.StyleImgComplete} />) 
                  : (
                    <Buttons title='Selesai' 
                      style={styles.StyleBtn} 
                      textStyle={styles.StyleTxt} 
                      onPress = {() => toggleModal() & setIsComplete(true)}
                    />
                )}
              </View>
            </View>
          </Card>
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
            titleBtn='Pilih Jadwal'
            styleBtn={styles.StyleB}
            isVisible={modalDateVisibleStart}
            date={new Date}
            backdropPress={() => toggleModalDateStart()}
        />
        <ModalRatingDirect
          isVisible={modalVisible}
          backdropPress={() => toggleModal()}
          backButtonPress={() => toggleModal()}
          // title='Beri Penilaian, Hasil belajarmu'
          renderItem={  <TextInput
            multiline={true}
            numberOfLines={8}
            // onChangeText={(e) => setComment(e)}
            style={styles.textArea}
            />}
        />
      </>
    )
}

ClassMeeting.propTypes = {
    navigation: PropTypes.object,
}

export default ClassMeeting