import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { Text } from '@ui-kitten/components'
import { Card } from 'react-native-elements'
import { useNavigation, useRoute } from '@react-navigation/native'
import {
    View,
    Image,
    FlatList,
    ScrollView,
    RefreshControl,
    ImageBackground,
    TouchableOpacity,
  } from 'react-native'

import {
    Buttons,
    Searchbox,
    LoadingView,
    ModalPreference,
} from '../../../../components'
import { Images, Color } from '../../../../assets'

import styles from './class-profile-mentor.style'
import images from '../../../../assets/images'

const ClassInstructorProfile = (props) => {
    const navigation = useNavigation()
    const [modalPreferenceVisible, setmodalPreferenceVisible] = useState(false)
    const toggleModalPreference = () => setmodalPreferenceVisible(!modalPreferenceVisible)
    
    const Header = () => {
        return (
          <View style={styles.containerHeaderProfile}>
            <View style={styles.flexHeaderInProfile}>
              <View style={styles.flexHeaderProfile}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Images.ButtonBack.default style={styles.iconBackProfile} />
                </TouchableOpacity>
                <Text style={styles.textTitleHeader}>Profile Pengajar</Text>
              </View>
            </View>
            <View style={styles.semiBoxProfile} />
          </View>
        )
    }

    const TitleInstructor = () => {
        return (
            <View style={styles.ViewTitle}>
                <ImageBackground source={Images.BackgroundMentor} style={styles.BackgroundImg}>
                    <Image source={Images.ImgProfileMentor} style={styles.imageStyleInstructor}/>
                </ImageBackground>
                <Text style={styles.TxtTitleInstructor}>Ust. Hamdan Ngaja</Text>
                <Text style={styles.TxtFromInstructor}>Asal Sulawesi Selatan</Text>
            </View>
        )
    }

    const DescInstructor = () => {
        return (
            <View>
                <Card containerStyle={styles.cardStyleInstructor}>
                    <View style={styles.ViewCard}>
                        <Images.IconDescGreen.default  
                            width={24}
                            height={22}
                        />
                        <View style={styles.ViewTxt}>
                            <Text style={styles.TxttitleCard}>Deskripsi & Pengalaman
Mengajar Dirosa</Text>
                            <Text style={styles.TxtDescCard}>Seorang Ustadz yang menempuh pendidikan di Sekolah tinggi Ilmu islam dan Bahasa Arab Makasar, telah berpengalaman mengajar menggunakan metode Dirosa untuk mengajar dari tingkat pelajar sampai orang tua. Alhamdulillah setelah santri belajar Al-Qur’an menggunakan metode Dirosa hasilnya mereka mulai mengingat kembali huruf-huruf hijaiyah yang sempat lupa karena tidak pernah belajar dan membaca Al-Qur’an lagi dan setelah mengikuti program 20x pertemuan dikelas Dirosa, bacaan Al-Qur’an mereka jauh lebih baik dan lancar.</Text>
                        </View>
                    </View>
                </Card>
            </View>
        )
    }

    const StudyInstructor = () => {
        return (
            <View>
                <Card containerStyle={styles.cardStyleInstructor}>
                    <View style={styles.ViewCard}>
                        <Images.IconStudyGreen.default  
                            width={24}
                            height={22}
                        />
                        <View style={styles.ViewTxt}>
                            <Text style={styles.TxttitleCard}>Pendidikan</Text>
                            <Text style={styles.TxtDescCard}>Sekolah Tinggi Ilmu Islam dan Bahasa Arab Makasar.</Text>
                            <Text style={styles.TxtDescCard}>PUSDIKLAT Da’i wahdah islamiyah Makasar.</Text>
                        </View>
                    </View>
                </Card>
            </View>
        )
    }

    const ScheduleInstructor = () => {
        return (
            <View>
                <Card containerStyle={styles.cardStyleInstructor}>
                    <View style={styles.ViewCard}>
                        <Images.IconTimeGreen.default  
                            width={24}
                            height={22}
                        />
                        <View style={styles.ViewTxt}>
                            <Text style={styles.TxttitleCard}>Jadwal Pengajar</Text>
                            <View style={styles.ViewSchedule}>
                                <Text style={styles.TxtSchedule}>Sabtu (08.00 - 09.30)</Text>
                                <Text style={styles.TxtSchedule}>Ahad (08.00 - 09.30)</Text>
                            </View>
                        </View>
                    </View>
                </Card>
            </View>
        )
    }

    const SystemInstructor = () => {
        return (
            <View>
                <Card containerStyle={styles.cardStyleInstructor}>
                    <View style={styles.ViewCard}>
                        <Images.IconSystemGreen.default  
                            width={24}
                            height={22}
                        />
                        <View style={styles.ViewTxt}>
                            <Text style={styles.TxttitleCard}>Sistem Belajar</Text>
                            <Text style={styles.TxtDescCard}>Bisa Online dan Offline</Text>
                        </View>
                    </View>
                </Card>
            </View>
        )
    }

    const BtnInstructor = () => {
        return (
            <View style={styles.ViewBtn}>
                    <Buttons 
                        title='Pilih Pengajar'
                        style={styles.BtnPengajar}
                        textStyle={styles.TxtButton}
                        onPress = {toggleModalPreference}
                    />
            </View>
        )
    }

    return (
        <>
        <View style={styles.containerMainProfile}>
            <Header />
            <ScrollView>
                <TitleInstructor />
                <DescInstructor />
                <StudyInstructor />
                <ScheduleInstructor />
                <SystemInstructor />
            </ScrollView>
            <BtnInstructor />
        </View> 
        <ModalPreference
            isVisible={modalPreferenceVisible}
            backdropPress={() => toggleModalPreference()}
            backButtonPress={() => togglemodalPreference()}
        />
        </>
    )
}

ClassInstructorProfile.propTypes = {
    navigation: PropTypes.object,
  }

export default ClassInstructorProfile