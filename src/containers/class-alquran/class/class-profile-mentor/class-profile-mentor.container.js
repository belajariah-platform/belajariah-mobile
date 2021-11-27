import PropTypes from 'prop-types'
import { useSelector} from 'react-redux'
import { Text } from '@ui-kitten/components'
import { Card } from 'react-native-elements'
import React, { useState, useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import {
    View,
    Image,
    Linking,
    ScrollView,
    ImageBackground,
    TouchableOpacity,
} from 'react-native'

import {
    Alerts,
    SVGIcon,
    Buttons,
} from '../../../../components'
import { Images } from '../../../../assets'

import styles from './class-profile-mentor.style'

const ClassProfileMentorQuran = (props) => {
    const navigation = useNavigation()
    const { userInfo } = useSelector((state) => state.UserReducer)
    const { DetailClass, instructor, UserClass } = props.route.params
    const [state, setState] = useState([])
    const url = `https://api.whatsapp.com/send?phone=62${instructor.Phone}&text=Assalamu%27alaikum%20admin%2C%20saya%20tidak%20menemukan%20guru%20ngaji%20yang%20cocok%20dengan%20jadwal%20saya%2C%20bisa%20dibantu%3F`

    const DirectWA = async () => {
        try {
            const supported = await Linking.canOpenURL(url)
            // console.log(supported)
            if(supported) {
              await Linking.openURL(url)
            } else {
              alert('')
            }
        } catch (error) {
          return error
        }
    }

    const Header = () => {
        return (
          <View style={{...styles.containerHeaderProfile, backgroundColor: DetailClass.color_path}}>
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
                    <Image source={instructor.Gender == 'Perempuan' ? 
                        Images.IllustrasiProfileUstadzah : instructor.ImageProfile == '' ?
                        Images.IllustrasiProfileUstadz : { uri : instructor.ImageProfile } } 
                        style={styles.imageStyleInstructor}
                    />
                </ImageBackground>
                <Text style={{...styles.TxtTitleInstructor, color: DetailClass.color_path}}>{instructor.Full_Name}</Text>
                <Text style={styles.TxtFromInstructor}>Asal {instructor.City}</Text>
                <View style={styles.ViewRating}>
                    {/* <Text style={styles.TxtRating}>{instructor.Rating}</Text>
                    <Images.Star.default />
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('ClassReviewMentor')
                    }}>
                        <Text style={styles.TxtAllReview}>(2 Ulasan)</Text>
                    </TouchableOpacity> */}
                </View>
            </View>
        )
    }

    const DescInstructor = () => {
        return (
            <View>
                <Card containerStyle={styles.cardStyleInstructor}>
                    <View style={styles.ViewCard}>
                        <View style={{marginRight: 6}}><SVGIcon.IconDescMentor ColorBg={DetailClass.color_path} /></View>
                        <View style={styles.ViewTxt}>
                            <Text style={{...styles.TxttitleCard, color: DetailClass.color_path}}>
                                Deskripsi dan Pengalaman Mengajar Dirosa
                            </Text>
                            <Text style={styles.TxtDescCard}>{instructor.Description}</Text>
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
                        <View style={{marginRight: 16}}><SVGIcon.IconStudyMentor ColorBg={DetailClass.color_path} ColorStroke={DetailClass.color_path} /></View>
                        <View style={styles.ViewTxt}>
                            <Text style={{...styles.TxttitleCard, color: DetailClass.color_path}}>Pendidikan</Text>
                            {instructor.Mentor_Experience && instructor.Mentor_Experience.map((item, index) => {
                                return (
                                    <View key={index} style={{flexDirection: 'row'}}>
                                        <Text>❐ </Text>
                                        <Text style={styles.TxtDescStudy}>{item.Experience}</Text>
                                    </View>
                                )
                            })}
                        </View>
                    </View>
                </Card>
            </View>
        )
    }

    const SystemInstructor = () => {
        return (
            <View style={{marginBottom: 10,}}>
                <Card containerStyle={styles.cardStyleInstructor}>
                    <View style={styles.ViewCard}>
                    <View style={{marginRight: 10}}><SVGIcon.IconSystemMentor ColorBg={DetailClass.color_path} ColorStroke={DetailClass.color_path} /></View>
                        <View style={styles.ViewTxt}>
                            <Text style={{...styles.TxttitleCardOther, color: DetailClass.color_path}}>Sistem Belajar</Text>
                            <Text style={styles.TxtDescSystem}>{instructor.Learning_Method_Text}</Text>
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
                        style={{...styles.BtnPengajar, backgroundColor: DetailClass.color_path}}
                        icon={<Images.IconConsultations.default/>}
                        title={'Chat Pengajar'}
                        textStyle={[styles.TxtButton, { marginLeft: 10, marginTop: 5 }]}
                        onPress={() => {
                            userInfo.Gender == '' ? navigation.navigate('ProfileEdit', Alerts(false, 'Silahkan Ubah Jenis Kelaminmu dahulu')) 
                            : userInfo.Gender == 'Laki-laki' && instructor.Gender == 'Perempuan' ? Alerts(false, 'Anda tidak bisa memilih pengajar ini')
                                : userInfo.Gender == 'Perempuan' && instructor.Gender == 'Laki-laki' ? Alerts(false, 'Anda tidak bisa memilih pengajar ini')
                                    : DirectWA()
                        }}
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
                <SystemInstructor />
            </ScrollView>
          {UserClass && UserClass.length > 0 && <BtnInstructor />}
        </View> 
        </>
    )
}

ClassProfileMentorQuran.propTypes = {
    route: PropTypes.object,
    navigation: PropTypes.object,
}

export default ClassProfileMentorQuran