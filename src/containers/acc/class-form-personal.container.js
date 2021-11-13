import * as Yup from 'yup'
import { useFormik } from 'formik'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Card } from 'react-native-elements'
import { View, ScrollView} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Text, Radio, RadioGroup,} from '@ui-kitten/components'

import { Images } from '../../assets'
import { Buttons, Alerts, TextBox } from '../../components'

import styles from './class-form-personal.style'

const ClassFormPersonalACC = (props) => {
    const navigation = useNavigation()
    const { detailACC } = props.route.params
    const { userInfo } = useSelector((state) => state.UserReducer)

    const [selectedIndex, setSelectedIndex] = useState(0)
    const FormPersonal = useFormik({
        initialValues: { 
            user_code: userInfo.Code,
            cp_code: detailACC.code,
            fullname: '', gender: '', email: '', 
            wa_no: '', age: '', address: '', profession: ''},
        validationSchema: Yup.object({
            fullname: Yup.string()
            .required('Nama anda harus diisi'),
            gender: Yup.string()
            .required('Jenis kelamin harus diisi'),
            email: Yup.string()
            .required('Email harus diisi'),
            wa_no: Yup.number()
            .required('Nomor WA harus diisi'),
            age: Yup.number()
            .required('Umur harus diisi'),
            address: Yup.string()
            .required('Domisili harus diisi'),
            profession: Yup.string()
            .required('Pekerjaan harus diisi'), 
        }),
        onSubmit: async () => {
            try {
                const Age = Number(FormPersonal.values['age'])
                const Wa_Number = Number(FormPersonal.values['wa_no'])
                navigation.navigate('ClassFormOtherACC', { FormPerson : FormPersonal.values, detailACC : detailACC, Age, Wa_Number})
            } catch (err) {
                return err
            }
        },
    })

    // console.log(detailACC)
    
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
                        <Text style={styles.containerText}>Nama Anda</Text>
                        <TextBox
                            name='fullname'
                            form={FormPersonal}
                            placeholder='Nama lengkap'
                            customStyle={styles.StyleInputB}
                        />
                        <Text style={styles.containerText}>Jenis Kelamin</Text>
                        <RadioGroup
                            style={styles.containerRadio}
                            selectedIndex={FormPersonal
                            .values['gender'] != 'Laki-laki' ? 1 : 0}
                            onChange={(e) => FormPersonal
                            .setFieldValue('gender', e == 0 ?
                                'Laki-laki' : 'Perempuan'
                            )}
                            >
                            <Radio style={styles.containerInputRadio}>Laki-laki</Radio>
                            <Radio style={styles.containerInputRadio}>Perempuan</Radio>
                        </RadioGroup>
                        <Text style={styles.containerText}>Email</Text>
                        <TextBox
                            name='email'
                            form={FormPersonal}
                            placeholder='Email'
                            customStyle={styles.StyleInputB}
                        />
                        <Text style={styles.containerText}>Nomor WhatsApp</Text>
                        <View style={{ flexDirection : 'row' }}>
                            <TextBox
                                name='wa_no'
                                form={FormPersonal}
                                placeholder='Telepon'
                                keyboardType='phone-pad'
                                customStyle={styles.phoneTwo}
                            />
                        </View>
                        <Text style={styles.containerText}>Usia</Text>
                        <TextBox
                            name='age'
                        
                            placeholder='Usia'
                            form={FormPersonal}
                            customStyle={styles.StyleInputB}
                        />
                        <Text style={styles.containerText}>Domisili</Text>
                        <TextBox
                            name='address'
                            form={FormPersonal}
                            placeholder='Domisili'
                            customStyle={styles.StyleInputB}
                        />
                        <Text style={styles.containerText}>Pekerjaan</Text>
                        <TextBox
                            name='profession'
                            form={FormPersonal}
                            placeholder='Pekerjaan'
                            customStyle={styles.StyleInputB}
                        />
                    </View>
                    <View style={styles.ViewButton}>
                        <Buttons 
                            title='Selanjutnya' 
                            style={styles.StyleBtn} 
                            textStyle={styles.StyleTxtBtn}
                            onPress={FormPersonal.handleSubmit}
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

ClassFormPersonalACC.propTypes = {
    route: PropTypes.object,
    navigation: PropTypes.object,
}

export default ClassFormPersonalACC