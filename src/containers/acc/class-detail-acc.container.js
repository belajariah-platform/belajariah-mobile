import PropTypes from 'prop-types'
import { Card } from 'react-native-elements'
import { Text } from '@ui-kitten/components'
import React, { useState, useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { ImageBackground, View, ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import { Images } from '../../assets'
import { Buttons } from '../../components'

import styles from './class-detail-acc.style'

const ClassDetailACC = (props) => {
    const navigation = useNavigation()
    const { detailACC } = props.route.params
    const DataReg = [
        { value: 'Peserta mendaftar di halaman Al-Fatihah Coaching Clinic melalui Aplikasi Belajariah.'},
        { value: 'Peserta diwajibkan mengisi formulir pendaftaran.'},
        { value: 'Setelah peserta mengisi formulir pendaftaran maka peserta menunggu sampai dihubungi oleh admin Belajariah dan dihubungkan dengan ustadz/ustadzah mentor.'},
        { value: 'Peserta akan dihubungi melalui Whatsapp atau Email.'},
        { value: 'Setelah peserta terhubung dengan ustadz/ustadzah mentor maka peserta menyepakati waktu dimulanya program.'},
        { value: 'Program dilaksanakan dengan satu kali pertemuan yang diikuti 4 peserta dalam 1 kelompok dan dibimbing oleh 1 orang ustadz/ustadzah.'},
    ]

    const DataBenefit = [
        { val: 'Bacaan Alfatihahnya menjadi lebih baik'},
        { val: 'Berkesempatan mendapatkan pembinaan keislaman'},
        { val: 'Terjalin silaturahmi dengan peserta dan ustadz/ustadzah yang berasal dari berbagai wilayah di Indonesia'},
        { val: 'Pada saat peserta sudah mendapatkan kelompok, maka kelompok tersebut mendapatkan voucer 50.000 yang dapat di gunakan untuk mengakses kelas Dirosa paket Famili (4 Peserta).'},
    ]

    // console.log(detailACC)

    const Header = () => {
        return (
            <View style={styles.containerHeaderProfile}>
                <ImageBackground source={Images.HeaderClassACC} style={styles.HeaderClass}>
                    <View style={styles.flexHeader}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Images.ButtonBack.default style={styles.iconBack} />
                    </TouchableOpacity>
                    <Text style={styles.textTitleWhite}>Program ACC</Text>
                    </View>
                </ImageBackground>
                <View style={styles.semiBox}/>   
            </View>
        )
    }

    const Desc = () => {
        return (
            <View>
                <Card containerStyle={styles.cardStyle}>
                    <Text style={styles.TxtTitleDesc}>Deskripsi Progaram (ACC)</Text>
                    <Text style={styles.TxtDesc}>Al-Fatihah Coaching Clinic (ACC) Merupakan Program Coaching bacaan Al-Fatihah secara privat yang langsung dibimbing oleh ustadz/ustadzah yang berkompeten secara Online | Merupakan Program Coaching  bacaan Al-Fatihah secara privat yang langsung dibimbing oleh ustadz/ustadzah yang berkompeten secara Online. Merupakan Program Coaching bacaan Al-Fatihah secara privat yang langsung dibimbing oleh  ustadz/ustadzah yang berkompeten secara Online. </Text>
                </Card>
            </View>
        )
    }

    const DescRegister = () => {
        return (
            <View>
                <Card containerStyle={styles.cardStyle}>
                    <Text style={styles.TxtTitleDesc}>Bagaimana tahapan mengikuti Program ACC?</Text>
                    {DataReg.map((item, index) => {
                        const no = 1
                        const name = no + index + '. '
                        return (
                            <View key={index} style={{flexDirection: 'row'}}>
                                <Text style={styles.TxtDesc}>{name}</Text>
                                <Text style={styles.TxtDesc}>{item.value}</Text>
                            </View>
                        )
                    })}
                </Card>
            </View>
        )
    }

    const DescBenefit = () => {
        return (
            <View>
                <Card containerStyle={styles.cardStyle}>
                    <Text style={styles.TxtTitleDesc}>Apa benefit mengikuti program ACC?</Text>
                    {DataBenefit.map((item, index) => {
                        const no = 1
                        const name = no + index + '. '
                        return (
                            <View key={index} style={{flexDirection: 'row'}}>
                                <Text style={styles.TxtDesc}>{name}</Text>
                                <Text style={styles.TxtDesc}>{item.val}</Text>
                            </View>
                        )
                    })}
                </Card>
            </View>
        )
    }

    return (
        <View style={styles.flexFull}>
            <Header />
            <ScrollView>
                <Desc />
                <DescRegister />
                <DescBenefit />
            </ScrollView>
            <View style={styles.ViewButton}>
                <Buttons 
                    title='Daftar Sekarang' 
                    style={styles.StyleBtn} 
                    textStyle={styles.StyleTxtBtn}
                    onPress={() => {
                        navigation.navigate('ClassFormPersonalACC', {detailACC : detailACC})}}
                />
            </View>
        </View>
    )
}

ClassDetailACC.propTypes = {
    route: PropTypes.object,
    navigation: PropTypes.object,
}

export default ClassDetailACC