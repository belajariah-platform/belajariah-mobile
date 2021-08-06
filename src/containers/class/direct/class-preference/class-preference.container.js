import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { List } from 'react-native-paper'
import { 
    Text, 
    Icon, 
    Radio,
    CheckBox,
    Datepicker, 
    RadioGroup, 
} from '@ui-kitten/components'
import { Card } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import {
    View,
    Image,
    FlatList,
    ScrollView,
    RefreshControl,
    TouchableOpacity,
    ImageBackground,
  } from 'react-native'

import {
    Buttons,
    Searchbox,
    ModalDate,
    LoadingView,
} from '../../../../components'
import { Images, Color } from '../../../../assets'

import styles from './class-preference.style'

const CalendarIcon = (props) => <Icon {...props} name='calendar' />

const ClassPreference = () => {
    const navigation = useNavigation()
    const [modalDateVisibleEnd, setModalDateVisibleEnd] = useState(false)
    const [modalDateVisibleStart, setModalDateVisibleStart] = useState(false)
    const toggleModalDateEnd = () => setModalDateVisibleEnd(!modalDateVisibleEnd)
    const toggleModalDateStart = () => setModalDateVisibleStart(!modalDateVisibleStart)

    const [toggleCheckBoxChild, setToggleCheckBoxChild] = useState(false)
    const [toggleCheckBoxAdult, setToggleCheckBoxAdult] = useState(false)
    const [toggleCheckBoxSystem, setToggleCheckBoxSystem] = useState(false)
    const [toggleCheckBoxTeenager, setToggleCheckBoxTeenager] = useState(false)
    
    const [selectedIndex, setSelectedIndex] = useState(0)
    const Header = () => {
        return (
          <View style={styles.containerHeaderProfile}>
            <View style={styles.flexHeaderInProfile}>
              <View style={styles.flexHeaderProfile}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Images.ButtonBack.default style={styles.iconBackProfile} />
                </TouchableOpacity>
                <Text style={styles.textTitleHeader}>Preferensi</Text>
              </View>
            </View>
            <View style={styles.semiBoxProfile} />
          </View>
        )
    }

    const PreferenceBody = () => {
        return (
            <View>
                <Card containerStyle={styles.cardStyleInstructor}>
                    <Image source={Images.IconPreference} style={styles.StyleIcon} />
                    <Text style={styles.TxtTitle}>Tentukan Jadwal</Text>
                    <Text style={styles.TxtChildTitle}>2x Pertemuan Perminggu</Text>
                    <Text style={styles.TxtMeet}>Pertemuan 1</Text>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        onPress={() => setModalDateVisibleStart(true)}>
                        <Datepicker
                            disabled
                            accessoryRight={CalendarIcon}
                            style={styles.datePickerInput}
                            controlStyle={styles.datePickerControl}
                            date={new Date}/>
                    </TouchableOpacity>
                    <Text style={styles.TxtMeet}>Pertemuan 2</Text>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        onPress={() => setModalDateVisibleEnd(true)}>
                        <Datepicker
                            disabled
                            accessoryRight={CalendarIcon}
                            style={styles.datePickerInput}
                            controlStyle={styles.datePickerControl}
                            date={new Date}/>
                    </TouchableOpacity>

                    <View style={styles.ViewTitle}>
                        <Text style={styles.TxtTitleList}>Belajar Ngaji untuk ?</Text>
                        <Text style={styles.TxtTitleDesc}>Anda bisa pilih lebih dari satu</Text>
                    </View>

                    <View style={styles.ContainerCheck}>
                        <View style={styles.ViewCheck}>
                            <CheckBox
                                status='success'
                                checked={toggleCheckBoxChild}
                                onChange={nexttoggleCheckBoxChild => setToggleCheckBoxChild(nexttoggleCheckBoxChild)}
                            />
                            <Text style={styles.TxtCheck}>Anak</Text>
                        </View>
                        <View style={styles.ViewCheck}>
                            <CheckBox
                                status='success'
                                checked={toggleCheckBoxTeenager}
                                onChange={nexttoggleCheckBoxTeenager => setToggleCheckBoxTeenager(nexttoggleCheckBoxTeenager)}
                            />
                            <Text style={styles.TxtCheck}>Remaja</Text>
                        </View>
                        <View style={styles.ViewCheck}>
                            <CheckBox
                                status='success'
                                checked={toggleCheckBoxAdult}
                                onChange={nexttoggleCheckBoxAdult => setToggleCheckBoxAdult(nexttoggleCheckBoxAdult)}
                            />
                            <Text style={styles.TxtCheck}>Dewasa</Text>
                        </View>
                    </View>

                    <View style={styles.ViewTitle}>
                        <Text style={styles.TxtTitleList}>Sistem Belajar</Text>
                        <Text style={styles.TxtTitleDesc}>Sistem yang anda pilih</Text>
                    </View>

                    <View style={styles.ViewCheck}>
                        <RadioGroup
                            selectedIndex={selectedIndex}
                            onChange={index => setSelectedIndex(index)}>
                            <Radio status='success'><Text style={styles.TxtInputRadio}>Online</Text></Radio>
                            <Radio status='success'><Text style={styles.TxtInputRadio}>Offline</Text></Radio>
                        </RadioGroup>
                    </View>

                    <Buttons 
                        title='Selanjutnya'
                        style={styles.BtnPengajar}
                        textStyle={styles.TxtButton}
                        // onPress={() => navigation.navigate('ClassPreference')}
                    />
                </Card>
            </View>
        )
    }

    return (
        <>
        <View style={styles.containerMainProfile}>
            <Header />
            <ScrollView>
                <PreferenceBody />
            </ScrollView>
        </View> 
        <ModalDate
            mode='date'
            isVisible={modalDateVisibleStart}
            date={new Date}
            backdropPress={() => toggleModalDateStart()}
        />
        <ModalDate
            mode='date'
            isVisible={modalDateVisibleEnd}
            date={new Date}
            backdropPress={() => toggleModalDateEnd()}
        />
        </>
    )
}

export default ClassPreference