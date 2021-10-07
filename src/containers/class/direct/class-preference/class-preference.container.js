import * as Yup from 'yup'
import moment from 'moment'
import { useFormik } from 'formik'
import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react'
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
    ScrollView,
    RefreshControl,
    TouchableOpacity,
} from 'react-native'

import {
    Alerts,
    TextBox,
    Buttons,
    ModalDate,
    ModalInfo,
    LoadingView,
} from '../../../../components'
import { EnumAPI} from '../../../../api'
import { Response } from '../../../../utils'
import { Images, Color } from '../../../../assets'

import styles from './class-preference.style'

const CalendarIcon = (props) => <Icon {...props} name='calendar' />

const ClassPreference = (props) => {
    const navigation = useNavigation()
    const { classes, packages, instructor, item } = props.route.params
    const [modalDateVisibleStart, setModalDateVisibleStart] = useState(false)
    const toggleModalDateStart = () => setModalDateVisibleStart(!modalDateVisibleStart)

    const [selectedIndex, setSelectedIndex] = useState(0)
    const [selectedSchedule, setSelectedSchedule] = useState('')
    const [stateCategory, setStateCategory] = useState([])
    const [dataStateCategory] = useState({ skip: 0, take: 10, filter: [], filterString: '[]' })

    const fetchDataClassCategory = async ({ skip, take, filterString }) => {
        try {
          filterString='[{"type": "text", "field" : "type", "value": "age_category"}]'
          const response = await EnumAPI.GetAllEnum(skip, take, filterString)
          if (response.status === Response.SUCCESS) {
            setStateCategory(response.data.data)
            FormSubmit.setFieldValue('System', response.data.data.filter((e) => e.Value == 'Anak').Code)
          } 
        } catch (err) {
          return err
        }
    }

    useEffect(() => {
        fetchDataClassCategory(dataStateCategory)
      }, [])

    const FormSubmit = useFormik({
        initialValues: { Meet1: '', Meet2: '', Umur: '', System: 'Online' },
        validationSchema: Yup.object({
          Meet1: Yup.number()
            .required('Jadwal Pertemuan 1 harus diisi'),
          Meet2: Yup.number()
            .required('Jadwal Pertemuan 2 harus diisi'),
          Umur: Yup.string()
            .required('Untuk Siapa'),
          System: Yup.string()
            .required('Sistem belajar harus diisi'),
        }),
        onSubmit: async () => {
            try {
                navigation.navigate('TransactionMethod', { classes : classes, packages : packages, instructor : instructor, FormSchedule : FormSubmit.values })
            } catch (err) {
                return err
            }
        },
    })

    const RadioFull = () => {
        return (
            <RadioGroup     
                selectedIndex={selectedIndex}
                onChange={index => {
                    setSelectedIndex(index)
                    FormSubmit.setFieldValue('System', 
                    index == 0 ? 'Online' : 'Offline')
            }}>
                <Radio status='success'><Text style={styles.TxtInputRadio}>Online</Text></Radio>
                <Radio status='success'><Text style={styles.TxtInputRadio}>Offline</Text></Radio>
            </RadioGroup>
        )
    }

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

    const FormattingSchedule = (code) => {
        // console.log(code)
        if (code > 0) {
            const formatObj = instructor.Schedule.filter((e) => e.ID == code)
            // console.log(formatObj[0].Shift_Name)
            return formatObj[0].Shift_Name + ' ' + moment(formatObj[0].Start_At).format('LT') + ' - ' +   moment(formatObj[0].End_At).format('LT')
        } else { 
            return ''
        }
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
                        onPress={() => {
                            setSelectedSchedule('Meet1')
                            setModalDateVisibleStart(true)
                        }}>
                        {/* <Datepicker
                            disabled
                            placeholder='Pilih Jadwal'
                            accessoryRight={CalendarIcon}
                            style={styles.datePickerInput}
                            controlStyle={styles.datePickerControl}
                            // date={new Date}
                        /> */}
                        <TextBox
                            disabled
                            value={FormattingSchedule(FormSubmit.values['Meet1'])}
                            placeholder='Pilih Jadwal'
                            accessoryRight={CalendarIcon}
                            style={styles.datePickerInput}
                            customStyle={styles.NewStyleInputSch}
                        />
                    </TouchableOpacity>
                    <Text style={styles.TxtMeet}>Pertemuan 2</Text>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        onPress={() => {
                            setSelectedSchedule('Meet2')
                            setModalDateVisibleStart(true)
                        }}>
                        {/* <Datepicker
                            disabled
                            placeholder='Pilih Jadwal'
                            accessoryRight={CalendarIcon}
                            style={styles.datePickerInput}
                            controlStyle={styles.datePickerControl}
                            // date={new Date}
                        /> */}
                        <TextBox
                            disabled
                            value={FormattingSchedule(FormSubmit.values['Meet2'])}
                            placeholder='Pilih Jadwal'
                            accessoryRight={CalendarIcon}
                            style={styles.datePickerInput}
                            customStyle={styles.NewStyleInputSch}
                        />
                    </TouchableOpacity>

                    <View style={styles.ViewTitle}>
                        <Text style={styles.TxtTitleList}>Belajar Ngaji untuk ?</Text>
                        <Text style={styles.TxtTitleDesc}>Anda bisa pilih lebih dari satu</Text>
                    </View>

                    <View style={styles.ContainerCheck}>
                        {stateCategory.map((item, index) => {
                            return (
                                <View style={styles.ViewCheck} key={index}>
                                    <CheckBox
                                        status='success'
                                        checked={FormSubmit.values['Umur'] == item.Code}
                                        onChange={() => {
                                            FormSubmit.setFieldValue('Umur', item.Code)
                                        }}
                                    />
                                    <Text style={styles.TxtCheck}>{item.Value}</Text>
                                </View>
                            )
                        })}
                    </View>

                    <View style={styles.ViewTitle}>
                        <Text style={styles.TxtTitleList}>Sistem Belajar</Text>
                        <Text style={styles.TxtTitleDesc}>Sistem yang anda pilih</Text>
                    </View>

                    <View style={styles.ViewCheck}>
                        <RadioGroup 
                            selectedIndex={selectedIndex}
                            onChange={index => {
                                setSelectedIndex(index)
                                FormSubmit.setFieldValue('System', 
                                index == 0 ? 'Online' : 'Offline')
                            }}>
                            {instructor.Learning_Method_Text == 'Online dan Offline' ? 
                                <RadioFull />
                                    : instructor.Learning_Method_Text == 'Online' ? 
                                        <Radio status='success'><Text style={styles.TxtInputRadio}>Online</Text></Radio>
                                            : <Radio status='success'><Text style={styles.TxtInputRadio}>Offline</Text></Radio>
                            }
                        </RadioGroup>
                    </View>

                    <Buttons 
                        title='Selanjutnya'
                        style={styles.BtnPengajar}
                        textStyle={styles.TxtButton}
                        onPress={FormSubmit.handleSubmit}
                    />
                </Card>
            </View>
        )
    }
    console.log('HELLO 1', FormSubmit.values)
    // console.log('HELLO 2', instructor.Schedule)
    return (
        <>
        <View style={styles.containerMainProfile}>
            <Header />
            <ScrollView>
                <PreferenceBody />
            </ScrollView>
        </View> 
        <ModalInfo
            // titleBtn='Pilih Jadwal'
            hideButtonClose={true}
            styleBtn={styles.StyleB}
            isVisible={modalDateVisibleStart}
            backdropPress={() => toggleModalDateStart()}
            renderItem={
                <View>
                    {instructor.Schedule && instructor.Schedule.map((item, subindex) => {
                        return (
                            <TouchableOpacity key={subindex} onPress={() => {
                                if (
                                    FormSubmit.values['Meet1'] !== item.ID && 
                                    FormSubmit.values['Meet2'] !== item.ID
                                    )
                               if (selectedSchedule === 'Meet1') {
                                   FormSubmit.setFieldValue('Meet1', item.ID)
                               } else {
                                   FormSubmit.setFieldValue('Meet2', item.ID)
                               }
                            }}>
                                <View style={{
                                    ...styles.ViewSchedules, 
                                    backgroundColor : selectedSchedule === 'Meet1' 
                                    && item.ID == FormSubmit.values['Meet1'] 
                                    || selectedSchedule === 'Meet2' 
                                    && item.ID == FormSubmit.values['Meet2'] 
                                    ? '#13A98B' : '#fff'
                                    }}>
                                    <Text>{item.Shift_Name} </Text>
                                    <View style={styles.ViewSchedule}>
                                        <Text>({moment(item.Start_At).format('LT')} - {moment(item.End_At).format('LT')})</Text>
                                    </View>
                                </View>    
                            </TouchableOpacity>                        
                        )
                    })}
                    <Buttons 
                        title='Pilih'
                        onPress={toggleModalDateStart} />
                </View>}
        />
        </>
    )
}

ClassPreference.propTypes = {
    route: PropTypes.object,
    navigation : PropTypes.object
}

export default ClassPreference