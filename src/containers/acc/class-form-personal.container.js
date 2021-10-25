import * as Yup from 'yup'
import { useFormik } from 'formik'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { Card } from 'react-native-elements'
import { View, ScrollView} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Text, Radio, RadioGroup,} from '@ui-kitten/components'

import { Images } from '../../assets'
import { Buttons, Alerts, TextBox } from '../../components'

import styles from './class-form-personal.style'

const ClassFormPersonalACC = () => {
    const navigation = useNavigation()
    const [selectedIndex, setSelectedIndex] = useState(0)
    const FormPersonal = useFormik({
        initialValues: { Full_Name: '', Gender: '', Email: '', Phone: '', Age: '', Place: '', Profession: '' },
        validationSchema: Yup.object({
            Full_Name: Yup.string()
            .required('Nama anda harus diisi'),
            Gender: Yup.string()
            .required('Jenis kelamin harus diisi'),
            Email: Yup.string()
            .required('Email harus diisi'),
            Phone: Yup.number()
            .required('Nomor WA harus diisi'),
            Age: Yup.number()
            .required('Umur harus diisi'),
            Place: Yup.string()
            .required('Domisili harus diisi'),
            Profession: Yup.string()
            .required('Pekerjaan harus diisi'), 
        }),
        onSubmit: async () => {
            try {
                navigation.navigate('ClassFormOtherACC', { FormPerson : FormPersonal.values })
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
                        <Text style={styles.containerText}>Nama Anda</Text>
                        <TextBox
                            name='Full_Name'
                            form={FormPersonal}
                            placeholder='Nama lengkap'
                            customStyle={styles.StyleInputB}
                        />
                        <Text style={styles.containerText}>Jenis Kelamin</Text>
                        <RadioGroup
                            style={styles.containerRadio}
                            selectedIndex={FormPersonal
                            .values['Gender'] != 'Laki-laki' ? 1 : 0}
                            onChange={(e) => FormPersonal
                            .setFieldValue('Gender', e == 0 ?
                                'Laki-laki' : 'Perempuan'
                            )}
                            >
                            <Radio style={styles.containerInputRadio}>Laki-laki</Radio>
                            <Radio style={styles.containerInputRadio}>Perempuan</Radio>
                        </RadioGroup>
                        <Text style={styles.containerText}>Email</Text>
                        <TextBox
                            name='Email'
                            form={FormPersonal}
                            placeholder='Email'
                            customStyle={styles.StyleInputB}
                        />
                        <Text style={styles.containerText}>Nomor WhatsApp</Text>
                        <View style={{ flexDirection : 'row' }}>
                            <TextBox
                                name='Phone'
                                form={FormPersonal}
                                placeholder='Telepon'
                                keyboardType='phone-pad'
                                customStyle={styles.phoneTwo}
                            />
                        </View>
                        <Text style={styles.containerText}>Usia</Text>
                        <TextBox
                            name='Age'
                            placeholder='Usia'
                            form={FormPersonal}
                            customStyle={styles.StyleInputB}
                        />
                        <Text style={styles.containerText}>Domisili</Text>
                        <TextBox
                            name='Place'
                            form={FormPersonal}
                            placeholder='Domisili'
                            customStyle={styles.StyleInputB}
                        />
                        <Text style={styles.containerText}>Pekerjaan</Text>
                        <TextBox
                            name='Profession'
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
    instructor: PropTypes.object,
}

export default ClassFormPersonalACC