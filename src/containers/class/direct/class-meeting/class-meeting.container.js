import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { Text, Datepicker,  Icon,  } from '@ui-kitten/components'
import { Card } from 'react-native-elements'
import { useNavigation, useRoute } from '@react-navigation/native'
import {
    View,
    Image,
    FlatList,
    ScrollView,
    TouchableOpacity,
  } from 'react-native'

import {
    Buttons,
    ModalDate,
    LoadingView,
} from '../../../../components'
import { Images, Color } from '../../../../assets'

import styles from './class-meeting.style'

const CalendarIcon = (props) => <Icon {...props} name='calendar' />

const ClassMeeting = () => {
    const navigation = useNavigation()
    const [modalDateVisibleEnd, setModalDateVisibleEnd] = useState(false)
    const [modalDateVisibleStart, setModalDateVisibleStart] = useState(false)
    const toggleModalDateEnd = () => setModalDateVisibleEnd(!modalDateVisibleEnd)
    const toggleModalDateStart = () => setModalDateVisibleStart(!modalDateVisibleStart)
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
                <Text style={styles.TxtHeaderBold}>Dirosa</Text> anda dengan Pengajar anda
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
      </>
    )
}

ClassMeeting.propTypes = {
    navigation: PropTypes.object,
}

export default ClassMeeting