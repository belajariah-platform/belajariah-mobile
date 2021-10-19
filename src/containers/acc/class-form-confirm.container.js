import * as Yup from 'yup'
import PropTypes from 'prop-types'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { Card } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import { ImageBackground, View, ScrollView, TouchableOpacity, Linking} from 'react-native'
import { Text, Radio, RadioGroup, CheckBox } from '@ui-kitten/components'

import { Color, Images } from '../../assets'
import { ButtonGradient, Buttons, Alerts, TextBox, ModalInfo } from '../../components'

import styles from './class-form-confirm.style'

const ClassFormConfirmACC = () => {
    const navigation = useNavigation()
    const [modalVisibleEnd, setModalVisibleEnd] = useState(true)
    const toggleModalEnd = () => setModalVisibleEnd(!modalVisibleEnd)
    const url = 'https://api.whatsapp.com/send?phone=6285266643607&text=Assalamu%27alaikum%20Admin%20Belajariah%2C%20Saya%20ingin%20bergabung%20di%20program%20Al-Fatihah%20Coaching%20Clinic%20(ACC)'

    const FormWA = useFormik({
        initialValues: {
        },
        onSubmit:   (values) => {
            DirectWA(values)
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
                        onPress={() => navigation.goBack()}
                    />
                </View>
            }
        />
        </>
    )
}

export default ClassFormConfirmACC