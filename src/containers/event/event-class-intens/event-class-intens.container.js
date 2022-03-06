import * as Yup from 'yup'
import moment from 'moment'
import { useFormik } from 'formik'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { Card } from 'react-native-elements'
import { View, ScrollView} from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Text, Radio, RadioGroup,} from '@ui-kitten/components'

import { EventAPI } from '../../../api'
import { Images } from '../../../assets'
import { Buttons, TextBox } from '../../../components'

import styles from './event-class-intens.style'

const EventClassIntens = (props) => {
    const navigation = useNavigation()
    const { detailClassIntens } = props.route.params
    const { userInfo } = useSelector((state) => state.UserReducer)

    const [loading, setLoading] = useState(true)
    const [dataForm, setDataForm] = useState({})
    const [dataValidation, setDataValidation] = useState({})

    const FormSubmit = useFormik({
        enableReinitialize: true,
        initialValues: dataForm,
        validationSchema: Yup.object(dataValidation),
        onSubmit: async (values) => {
            let answer = []
            detailClassIntens?.event_form_detail?.map((e) => {
                Object.keys(e)
                    .filter((i) => i == 'question_field')
                    .forEach((v) => {
                        Object.keys(values).forEach((val) => {
                            if (e[v] === val) {
                                answer.push({
                                    question : e.question,
                                    event_code : e.event_code,
                                    event_form_code : e.event_form_code,
                                    answer : e.question_type == 'phone' ? '62' + values[val] : values[val],
                                })
                            }
                        })
                    })
            })
            
            try {
                const data = {
                    user_code : userInfo.Code,
                    modified_date : moment(new Date()).format('YYYY-MM-DD[T]HH:mm:[00].[000Z]'),
                    event_form_detail : answer
                }
                const response = await EventAPI.InsertFormClassIntens(data)
                if (response && response.data && response.data.message.result) {
                    navigation.navigate('EventClassIntensConfirm', { FormData : values})
                } 
            }
            catch (err) {
                return err
            }
        },
    })

    useEffect(() => {
        let dataobj = {}
        let dataObjValidation = {}
        setLoading(true)
        detailClassIntens?.event_form_detail?.map((e) => {
            Object.keys(e)
                .filter((i) => i == 'question_field')
                .forEach((v) => {
                    dataobj[e[v]] = ''
                })
            Object.keys(e)
                .filter((i) => i == 'question_field')
                .forEach((v) => {
                if (e.is_required && (e.question_type == 'text' || e.question_type == 'checklist')) {
                    dataObjValidation[e[v]] = Yup.string().required('*data harus diisi')
                } else if (e.is_required && (e.question_type == 'phone' || e.question_type == 'number')) {
                    dataObjValidation[e[v]] = Yup.number().required('*data harus diisi')
                } 
            })
        })

        setDataForm(dataobj)
        setDataValidation(dataObjValidation)
        setLoading(false)
      }, [])

    const Header = () => {
        return (
            <View style={styles.containerHeaderProfile}>
                <View style={styles.flexHeaderInProfile}>
                    <View style={styles.flexHeaderProfile}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Images.ButtonBack.default style={styles.iconBackProfile} />
                        </TouchableOpacity>
                        <Text style={styles.textTitleHeader}>Form Pendaftaran TKMA</Text>
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
                        {!loading && detailClassIntens?.event_form_detail?.map((e, i) => {
                            if (e.question_type == 'text') {
                                return (
                                    <View key={i}>
                                        <Text style={styles.containerText}>{e.question}
                                            {e.is_required && <Text style={styles.textRequired}> *</Text>}
                                        </Text>
                                        <TextBox
                                            name={e.question_field}
                                            form={FormSubmit}
                                            placeholder={e.question}
                                            customStyle={styles.StyleInputB}
                                        />
                                    </View>
                                )
                            } else if (e.question_type == 'phone') {
                                return (
                                    <View key={i}>
                                        <Text style={styles.containerText}>{e.question}
                                            {e.is_required && <Text style={styles.textRequired}> *</Text>}
                                        </Text>
                                        <View style={{ flexDirection : 'row' }}>
                                            <TextBox
                                                disabled
                                                placeholder='+62'
                                                customStyle={styles.phoneOne}
                                                keyboardType={'numeric'}
                                            />
                                            <TextBox
                                                name={e.question_field}
                                                form={FormSubmit}
                                                placeholder='8xxxxxx'
                                                keyboardType='phone-pad'
                                                customStyle={styles.phoneTwo}
                                            />
                                        </View>
                                    </View>
                                )
                            } else if (e.question_type == 'checklist') {
                                const choice = e.choice.split('|')
                                return (
                                    <View key={i}>
                                        <Text style={styles.containerText}>{e.question}
                                            {e.is_required && <Text style={styles.textRequired}> *</Text>}
                                        </Text>
                                        <RadioGroup
                                            style={styles.containerRadio}
                                            selectedIndex={choice.indexOf(FormSubmit.values[e.question_field])}
                                            onChange={index => {
                                                FormSubmit.setFieldValue(e.question_field, choice[index])
                                            }}
                                        >
                                            {choice.map((item, index) => {
                                                return (
                                                    <Radio key={index} style={styles.containerInputRadio}>{item}</Radio>
                                                )
                                            })}
                                        </RadioGroup>
                                    </View>
                                )
                            }
                        })}
                    </View>
                    {!loading &&<View style={styles.ViewButton}>
                        <Buttons 
                            title='Kirim' 
                            style={styles.StyleBtn} 
                            textStyle={styles.StyleTxtBtn}
                            onPress={FormSubmit.handleSubmit}
                        />
                    </View>
                    }
                </Card>
            </View>
        )
    }

    return (
        <View style={styles.flexFull}>
            <Header />
            <ScrollView>
                {FormBody()}
            </ScrollView>
        </View>
    )
}

EventClassIntens.propTypes = {
    route: PropTypes.object,
    navigation: PropTypes.object,
}

export default EventClassIntens