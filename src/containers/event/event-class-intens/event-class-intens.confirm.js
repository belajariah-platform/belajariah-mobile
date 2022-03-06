import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { Text} from '@ui-kitten/components'
import { useNavigation } from '@react-navigation/native'
import { View, TouchableOpacity, Linking} from 'react-native'

import { Config } from '../../../api'
import { Images } from '../../../assets'
import { Buttons, ModalInfo } from '../../../components'

import styles from './event-class-intens.style'

const EventClassIntensConfirm = (props) => {
    const navigation = useNavigation()
    const [modalVisibleEnd, setModalVisibleEnd] = useState(true)
    const toggleModalEnd = () => setModalVisibleEnd(!modalVisibleEnd)
    const url = `https://api.whatsapp.com/send?phone=62${parseInt(Config.ADMIN_CONTACT)}&text=Assalamu%27alaikum%20Admin%20Belajariah.%0ASaya%20telah%20mendaftar%20pada%20program%20Tes%20Kemampuan%20Membaca%20Al-Quran`
    
    const DirectWA = async () => {
        try {
            const supported = await Linking.canOpenURL(url)
            if(supported) {
              await Linking.openURL(url)
              await navigation.navigate('UserMain')
            } else {
              alert('')
            }
        } catch (error) {
          return error
        }
    }
    
    return (
        <>
        <View style={styles.flexFullBg}>
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
                                TKMA. Data anda berhasil dikirim, klik 
                            </Text>
                            <TouchableOpacity activeOpacity={0.5} style={styles.ViewTouch}
                                onPress={DirectWA}
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
                        onPress={DirectWA}
                    />
                </View>
            }
        />
        </>
    )
}

EventClassIntensConfirm.propTypes = {
    route: PropTypes.object,
    instructor: PropTypes.object,
}

export default EventClassIntensConfirm