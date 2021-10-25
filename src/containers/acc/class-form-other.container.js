import * as Yup from 'yup'
import { useFormik } from 'formik'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { Card } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import { View, ScrollView, TextInput} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Text, Radio, RadioGroup, CheckBox } from '@ui-kitten/components'

import { Images } from '../../assets'
import { Buttons, Alerts, TextBox } from '../../components'

import styles from './class-form-other.style'

const ClassFormOtherACC = (props) => {
    const navigation = useNavigation()
    const { FormPerson } = props.route.params
    const [checked, setChecked] = useState(false)
    const [comment, setComment] = useState('')
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
        initialValues: { Last_Ngaji: '', Until_Ngaji: '', Last_Quran: '', Know_ACC: '', Reason_ACC: ''},
        validationSchema: Yup.object({
            Last_Ngaji: Yup.string()
            .required('Pertanyaan ini harus diisi'),
            Until_Ngaji: Yup.string()
            .required('Pertanyaan ini harus diisi'),
            Last_Quran: Yup.string()
            .required('Pertanyaan ini harus diisi'),
            Know_ACC: Yup.string()
            .required('Pertanyaan ini harus diisi'),
            Reason_ACC: Yup.string()
            .required('Pertanyaan ini harus diisi'),
        }),
        onSubmit: async () => {
            try {
                navigation.navigate('ClassFormConfirmACC', { FormPerson : FormPerson, HopeACC : comment})
            } catch (err) {
                return err
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
                            name='Last_Ngaji'
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
                                FormPersonalOther.setFieldValue('Until_Ngaji', 
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
                            name='Last_Quran'
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
                                FormPersonalOther.setFieldValue('Know_ACC', 
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
                                            checked={FormPersonalOther.values['Reason_ACC'] == item.value}
                                            onChange={() => {
                                                FormPersonalOther.setFieldValue('Reason_ACC', item.value)
                                            }}
                                            style={styles.checkboxOther}
                                        />
                                        <Text style={styles.TxtChild}>{item.value}</Text>
                                    </View>
                                )
                            })}
                        </View>
                        <Text style={styles.containerText}>Apa harapan anda setelah ikut program <Text style={styles.containerTextBld}>Al-Fatihah Coaching Clinic (ACC)</Text></Text>
                        <TextInput
                            multiline={true}
                            value={comment}
                            numberOfLines={5}
                            onChangeText={(e) => setComment(e)}
                            style={styles.textArea}
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

    // console.log(FormPersonalOther.values)
    // console.log(comment)

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