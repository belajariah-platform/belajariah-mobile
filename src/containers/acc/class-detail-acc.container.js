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
        { value: 'Setelah peserta mengisi formulir pendaftaran maka peserta menunggu sampai dihubungi oleh admin Belajariah dan di invite ke dalam grup chat.'},
        { value: 'Peserta akan dihubungi melalui Whatsapp atau Email.'},
        { value: 'Program Alfatihah Coacing Clinic diadakan setiap 1 bulan sekali .'},
    ]

    const DataBenefit = [
        { val: 'Bacaan Alfatihahnya menjadi lebih baik'},
        { val: 'Berkesempatan mendapatkan pembinaan keislaman'},
        { val: 'Terjalin silaturahmi dengan peserta dan ustadz/ustadzah yang berasal dari berbagai wilayah di Indonesia'},
        { val: 'Berkesempatan mendapatkan Diskon pendaftaran belajar Al-Qur’an di Belajariah.'},
    ]

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
                    <Text style={styles.TxtDesc}>Membaca surah Alfatihah merupakan rukun dalam shalat dan tidaklah sah shalatnya jika tidak membaca surah Al-Fatihah. Sebagai rukun shalat membaca alfatihah dengan benar tentu sangat penting karena akan mempengaruhi nilai dari shalat tersebut. Program Alfatihah Coaching Clinic (ACC) merupakan pelatihan memperbaiki dan menyempurnakan bacaan Al-Fatihah baik dari segi pengucapan (makhroj) dan hukum bacaan (Tajwid) yang di bimbing oleh seorang ustadz yang berkompeten dan berpengalaman. Program ini sangat direkomendasikan untuk diikuti karena proses memperbaiki bacaan Al-Fatihahnya langsung dibimbing oleh ustadz mentor secara online melalui video call. Program Alfatihah Coaching Clinic (ACC) dapat diikuti oleh setiap orang dengan gratis tanpa biaya.</Text>
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