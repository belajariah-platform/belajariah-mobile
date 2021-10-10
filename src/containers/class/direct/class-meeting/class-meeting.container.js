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
    const [modalVisible, setModalVisible] = useState(false)
    const [modalDateVisibleEnd, setModalDateVisibleEnd] = useState(false)
    const [modalDateVisibleStart, setModalDateVisibleStart] = useState(false)
    const toggleModalDateEnd = () => setModalDateVisibleEnd(!modalDateVisibleEnd)
    const toggleModalDateStart = () => setModalDateVisibleStart(!modalDateVisibleStart)

    const toggleModal = () => {
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
        )
      } 
      return (
        <View>
          {Modal.map((item, index) => {
            return <View key={index}>{item}</View>
          })}
        </View>
      )
    }

    const ListMeet = () => {
      return (
        <View>
          <Card containerStyle={styles.cardStyleInstructor}>
            <DataModal />
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
            date={new Date}
            titleBtn='Pilih Jadwal'
            styleBtn={styles.StyleB}
            isVisible={modalDateVisibleStart}
            backdropPress={() => toggleModalDateStart()}
        />
        <ModalEmoticon
          isVisible={modalVisible}
          backdropPress={() => toggleModal()}
          backButtonPress={() => toggleModal()}
          // title='Beri Penilaian, Hasil belajarmu'
          renderItem={  
          <TextInput
            multiline={true}
            numberOfLines={5}
            // onChangeText={(e) => setComment(e)}
            style={styles.textArea}
            placeholder='Catatan untuk Ustadz/Ustadzah'
          />}
        />
      </>
    )
}

ClassMeeting.propTypes = {
    navigation: PropTypes.object,
}

export default ClassMeeting