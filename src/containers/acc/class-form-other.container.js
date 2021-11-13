import * as Yup from 'yup'
import moment from 'moment'
import { useFormik } from 'formik'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { Card } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import { View, ScrollView, TextInput} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Text, Radio, RadioGroup, CheckBox } from '@ui-kitten/components'

import { Response} from '../../utils'
import { Images } from '../../assets'
import { CoachingProgramAPI } from '../../api'
import { Buttons, Alerts, TextBox } from '../../components'

import styles from './class-form-other.style'

const ClassFormOtherACC = (props) => {
    const navigation = useNavigation()
    const { FormPerson, detailACC, Age, Wa_Number } = props.route.params
    const [checked, setChecked] = useState(false)
    const [loading, setLoading] = useState(false)
    // const [question_6, setquestion_6] = useState('')
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [selectedIndexRadio, setSelectedIndexRadio] = useState(0)
    const [selectedIndexRadioTW, setSelectedIndexRadioTW] = useState(0)

    const DataNgaji = [
        { value: 'Iqra 1 - 3'}, { value: 'Iqra 4 - 6'}, { value: 'Al-Qur’an'}, { value: 'Lainnya'},
    ]

    const DataInfoMedia = [
        { value: 'Brosur'}, { value: 'Social Media'}, { value: 'Teman'}, { value: 'Lainnya'},
    ]

    const DataReasonOn = [
        { value: 'saya susah menemukan guru ngaji di tempat tinggal saya'},
        { value: 'Saya memiliki banyak kesibukan sehingga tidak sempat belajar ngaji secara langsung'},
        { value: 'Saya malu jika belajar ngaji secara langsung'},
        { value: 'Saya lebih memilih belajar secara online, supaya tidak banyak kontak dengan orang dimasa Pandemi Covid 19'},
        { value: 'Saya sudah banyak belajar tapi saya belum menemukan metode belajar ngaji yang cocok'},
        { value: 'Lainnya'},
    ]
    
    const FormPersonalOther = useFormik({
        initialValues: { 
            user_code: FormPerson.user_code,
            cp_code: detailACC.code,
            fullname: FormPerson.fullname, gender: FormPerson.gender, 
            email: FormPerson.email, wa_no: FormPerson.wa_no, age: FormPerson.age,
            address: FormPerson.address, profession: FormPerson.profession,
            question_1: '', question_2: '', question_3: '', 
            question_4: '', question_5: '', question_6: '', modified_date: new Date()},
        validationSchema: Yup.object({
            question_1: Yup.string()
            .required('Pertanyaan ini harus diisi'),
            question_2: Yup.string()
            .required('Pertanyaan ini harus diisi'),
            question_3: Yup.string()
            .required('Pertanyaan ini harus diisi'),
            question_4: Yup.string()
            .required('Pertanyaan ini harus diisi'),
            question_5: Yup.string()
            .required('Pertanyaan ini harus diisi'),
            question_6: Yup.string()
            .required('Pertanyaan ini harus diisi'),
        }),
        onSubmit: async (values, form) => {
            if (checked !== true) {
                Alerts(false, 'Centang pertanyaan dibawah')
            } else {
                try {
                    setLoading(true)
                    const modified = moment(FormPersonalOther.values['modified_date']).format('YYYY-MM-DD[T]HH:mm:[00].[000Z]')
                    console.log(modified)
                    const data = {
                        "user_code" : FormPersonalOther.values['user_code'],
                        "cp_code" : FormPersonalOther.values['cp_code'],
                        "fullname" : FormPersonalOther.values['fullname'],
                        "gender" : FormPersonalOther.values['gender'],
                        "email" : FormPersonalOther.values['email'],
                        "wa_no" : Wa_Number,
                        "age" : Age,
                        "address" : FormPersonalOther.values['address'],
                        "profession" : FormPersonalOther.values['profession'],
                        "question_1" : FormPersonalOther.values['question_1'],
                        "question_2" : FormPersonalOther.values['question_2'],
                        "question_3" : FormPersonalOther.values['question_3'],
                        "question_4" : FormPersonalOther.values['question_4'],
                        "question_5" : FormPersonalOther.values['question_5'],
                        "question_6" : FormPersonalOther.values['question_6'],
                        "modified_date" : modified
                    }
                    const response = await CoachingProgramAPI.InsertFormACC(data)
                    if (response && response.data && response.data.message.result) {
                        setLoading(false)
                        navigation.navigate('ClassFormConfirmACC', { FormPerson : FormPerson, FormPersonalOther : FormPersonalOther, modified})
                    } else {
                        form.resetForm()
                        setLoading(false)
                    }
                }
                catch (err) {
                    // console.log(err)
                    setLoading(false)
                    return err
                }
            }
        },
    })
    
    const Header = () => {
        return (
            <View style={styles.containerHeaderProfile}>
                <View style={styles.flexHeaderInProfile}>
                    <View style={styles.flexHeaderProfile}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Images.ButtonBack.default style={styles.iconBackProfile} />
                        </TouchableOpacity>
                        <Text style={styles.textTitleHeader}>Form Pendaftaran ACC</Text>
                    </View>
                </View>
                <View style={styles.semiBoxProfile} />
            </View>
        )
    }

    const FormBody = () => {
        return (
            <View>
                <Card containerStyle={styles.cardStyle}>
                    <View>
                        <Text style={styles.containerText}>Kapan terakhir belajar ngaji?</Text>
                        <TextBox
                            name='question_1'
                            form={FormPersonalOther}
                            customStyle={styles.StyleInputB}
                            placeholder='Kapan terakhir belajar ngaji?'
                        />
                        <Text style={styles.containerText}>Belajar ngaji anda sudah sampai mana?</Text>
                        <RadioGroup
                            style={styles.containerRadio}
                            selectedIndex={selectedIndexRadio}
                            onChange={index => {
                                setSelectedIndexRadio(index)
                                FormPersonalOther.setFieldValue('question_2', 
                                    index == 0 ? 'Iqra 1 - 3' : 
                                        index == 1 ? 'Iqra 4 - 6' :
                                            index == 2 ? 'Al-Qur’an' : 'Lainnya')
                            }}
                            >
                            {DataNgaji.map((item, index) => {
                                return (
                                    <Radio key={index} style={styles.containerInputRadio}>{item.value}</Radio>
                                )
                            })}
                        </RadioGroup>
                        <Text style={styles.containerText}>Kapan terakhir membaca Al-Qur’an?</Text>
                        <TextBox
                            name='question_3'
                            form={FormPersonalOther}
                            customStyle={styles.StyleInputB}
                            placeholder='Kapan terakhir membaca Al-Qur’an?'
                        />
                        <Text style={styles.containerText}>Tahu info Program ACC dari mana?</Text>
                        <RadioGroup
                            style={styles.containerRadio}
                            selectedIndex={selectedIndexRadioTW}
                            onChange={index => {
                                setSelectedIndexRadioTW(index)
                                FormPersonalOther.setFieldValue('question_4', 
                                    index == 0 ? 'Brosur' : 
                                        index == 1 ? 'Social Media' :
                                            index == 2 ? 'Teman' : 'Lainnya')
                            }}
                            >
                            {DataInfoMedia.map((item, index) => {
                                return (
                                    <Radio key={index} style={styles.containerInputRadio}>{item.value}</Radio>
                                )
                            })}
                        </RadioGroup>
                        <Text style={styles.containerText}>Apa alasan anda memilih belajar ngaji secara online?</Text>
                        <View style={styles.ViewCheck}>
                            {DataReasonOn.map((item, index) => {
                                return (
                                    <View key={index} style={{flexDirection: 'row', marginBottom: 10}}>
                                        <CheckBox
                                            status='primary'
                                            checked={FormPersonalOther.values['question_5'] == item.value}
                                            onChange={() => {
                                                FormPersonalOther.setFieldValue('question_5', item.value)
                                            }}
                                            style={styles.checkboxOther}
                                        />
                                        <Text style={styles.TxtChild}>{item.value}</Text>
                                    </View>
                                )
                            })}
                        </View>
                        <Text style={styles.containerText}>Apa harapan anda setelah ikut program <Text style={styles.containerTextBld}>Al-Fatihah Coaching Clinic (ACC)</Text></Text>
                        <TextBox
                            name='question_6'
                            form={FormPersonalOther}
                            customStyle={styles.StyleInputB}
                            placeholder='Apa harapan anda setelah ikut program Al-Fatihah Coaching Clinic (ACC)'
                        />
                        <CheckBox
                            status='primary'
                            checked={checked}
                            style={styles.checkbox}
                            onChange={nextChecked => setChecked(nextChecked)}
                            >
                            {
                                <Text style={styles.textCheckbox}>
                                Saya menyatakan bahwa saya akan mengikuti kegiatan Alfatihah Coaching Clinic (ACC) hingga tuntas
                                </Text>
                            }
                        </CheckBox>
                    </View>
                    <View style={styles.ViewButton}>
                        <Buttons 
                            title='Kirim' 
                            style={styles.StyleBtn} 
                            textStyle={styles.StyleTxtBtn}
                            onPress={FormPersonalOther.handleSubmit}
                        />
                    </View>
                </Card>
            </View>
        )
    }

    return (
        <View style={styles.flexFull}>
            <Header />
            <ScrollView>
                <FormBody />
            </ScrollView>
        </View>
    )
}

ClassFormOtherACC.propTypes = {
    route: PropTypes.object,
    instructor: PropTypes.object,
}

export default ClassFormOtherACC