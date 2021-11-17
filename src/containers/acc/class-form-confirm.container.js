import * as Yup from 'yup'
import PropTypes from 'prop-types'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { Text} from '@ui-kitten/components'
import { Card } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import { View, TouchableOpacity, Linking} from 'react-native'

import { Images } from '../../assets'
import { CoachingProgramAPI } from '../../api'
import { Buttons, ModalInfo } from '../../components'

import styles from './class-form-confirm.style'

const ClassFormConfirmACC = (props) => {
    const navigation = useNavigation()
    const { FormPerson, FormPersonalOther, modified } = props.route.params
    const [loading, setLoading] = useState(false)
    const [modalVisibleEnd, setModalVisibleEnd] = useState(true)
    const toggleModalEnd = () => setModalVisibleEnd(!modalVisibleEnd)
    const url = 'https://api.whatsapp.com/send?phone=6285266643607&text=Assalamu%27alaikum%20Admin%20Belajariah.%0ASaya%20telah%20mendaftar%20pada%20program%20Al-Fatihah%20Coaching%20Clinic%20(ACC)'

    const FormWA = useFormik({
        initialValues: {
            user_code : FormPerson.user_code,
            email : FormPerson.email,
            modified_date : modified
        },
        onSubmit: async  (values, form) => {
            try {
                setLoading(true)
                const data = {
                    "user_code" : FormWA.values['user_code'],
                    "email" : FormWA.values['email'],
                    "modified_date" : modified
                }
                // console.log(data)
                const response = await CoachingProgramAPI.ConfirmFormACC(data)
                if (response && response.data && response.data.message.result) {
                    setLoading(false)
                    DirectWA(values)
                    navigation.navigate('UserMain')
                } else {
                    form.resetForm()
                    setLoading(false)
                }
            }
            catch (err) {
                setLoading(false)
                return err
            }
        },
    })
    
    const DirectWA = async (values) => {
        try {
            const supported = await Linking.canOpenURL(url)
            if(supported) {
              await Linking.openURL(url)
            } else {
              alert('')
            }
        } catch (error) {
          return error
        }
    }
    
    return (
        <>
        <View style={styles.flexFull}>
            <View style={styles.ViewIcon}>
                <Images.IconChecklist.default width={116} height={98} />
                <Text style={styles.TxtIcon}>Berhasil</Text>
            </View>
        </View>
        <ModalInfo
            hideButtonClose={true}
            styleBtn={styles.StyleB}
            ModalContent={styles.Content}
            containerStyle={styles.ModalContainer}
            isVisible={modalVisibleEnd}
            backdropPress={() => toggleModalEnd()} 
            renderItem={
                <View>
                    <View style={{marginBottom: '1%'}}>
                        <Text style={styles.TxtMod}>
                            Terima kasih telah bergabung di Program
                        </Text>
                        <View style={styles.ViewTxtTouch}>
                            <Text style={styles.TxtMod}>
                                ACC. Data anda berhasil dikirim, klik 
                            </Text>
                            <TouchableOpacity activeOpacity={0.5} style={styles.ViewTouch}
                                onPress={FormWA.handleSubmit}
                            >
                                <Text style={styles.TxtModBld}> disini</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.TxtMod}>untuk melakukan konfirmasi segera</Text>
                    </View>
                    <Buttons 
                        title='Konfirmasi' 
                        style={styles.StyleBtn} 
                        textStyle={styles.StyleTxtBtn}
                        onPress={FormWA.handleSubmit}
                    />
                </View>
            }
        />
        </>
    )
}

ClassFormConfirmACC.propTypes = {
    route: PropTypes.object,
    instructor: PropTypes.object,
}

export default ClassFormConfirmACC