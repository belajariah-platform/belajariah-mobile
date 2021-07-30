import PropTypes from 'prop-types'
import Modal from 'react-native-modal'
import React, { useState, useRef } from 'react'
import { Text, CheckBox } from '@ui-kitten/components'
import { View, TouchableOpacity, ScrollView, } from 'react-native'

import { Buttons} from '../../../components'
import { Images, Color } from '../../../assets'
import { styles } from './modal-preference.style'

const ModalPreference = (props) => {
    const [toggleCheckBoxChild, setToggleCheckBoxChild] = useState(false)
    const [toggleCheckBoxAdult, setToggleCheckBoxAdult] = useState(false)
    const [toggleCheckBoxSystem, setToggleCheckBoxSystem] = useState(false)
    const [toggleCheckBoxTeenager, setToggleCheckBoxTeenager] = useState(false)
    
    return (
        <>
            <Modal
                backdropOpacity={0.25}
                isVisible={props.isVisible}
                style={styles.backdropStyle}
                onBackdropPress={props.backdropPress}
                onBackButtonPress={props.backButtonPress}
            >
                <View style={[styles.modalStyle, props.containerStyle]}>
                    <View style={styles.containerHeader}>
                        <Text style={styles.TxtTitleFilter}>Preferensi</Text>
                    </View>

                    <View style={styles.modalContentSyle}>
                        <View style={styles.ViewTitle}>
                            <Text style={styles.TxtTitle}>Belajar Ngaji untuk</Text>
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
                            <Text style={styles.TxtTitle}>Sistem Belajar</Text>
                            <Text style={styles.TxtTitleDesc}>Sistem belajar yang anda pilih</Text>
                        </View>

                        <View style={styles.ContainerCheck}>
                            <View style={styles.ViewCheck}>
                                <CheckBox
                                    status='success'
                                    checked={toggleCheckBoxSystem}
                                    onChange={nexttoggleCheckBoxSystem => setToggleCheckBoxSystem(nexttoggleCheckBoxSystem)}
                                />
                                <Text style={styles.TxtCheck}>Offline</Text>
                            </View>
                            <View style={styles.ViewCheck}>
                                <CheckBox
                                    status='success'
                                    checked={toggleCheckBoxSystem}
                                    onChange={nexttoggleCheckBoxSystem => setToggleCheckBoxSystem(nexttoggleCheckBoxSystem)}
                                />
                                <Text style={styles.TxtCheck}>Online</Text>
                            </View>
                        </View>

                        <View>
                            <Buttons title='Selanjutnya' 
                                onPress={props.setFilter}
                                style={styles.BtnPengajar}
                                textStyle={styles.TxtButton} 
                            />
                        </View>
                    </View>
                </View>
            </Modal>
        </>
    )
}

ModalPreference.propTypes = {
    setSort : PropTypes.func,
    isVisible : PropTypes.bool,
    setFilter : PropTypes.func,
    renderItem : PropTypes.object,
    backdropPress : PropTypes.func,
    backButtonPress : PropTypes.func,
    containerStyle : PropTypes.object,
}

export default ModalPreference